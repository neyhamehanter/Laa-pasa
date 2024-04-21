const User = require('../models/User')
const Token = require('../models/token')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const sendEmail = require('../utils/SendEmail')
const router = require("express").Router()
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

const signToken = id => {
    return jwt.sign({id}, "secret", {expiresIn: "1h"})
}

const tokenResponse = (user, statuscode, res) => {
    const token = signToken(user._id)
    res.status(statuscode).json({
        Status: "success",
        token,
        data: {
            user: user
        }
    })
}

router.post("/register", async(req,res)=>{
    const registerResponse = req.body
    const existingUser = await User.findOne({email: registerResponse.email})
    const mailOptions={
        from :"LAA-PASA",
        to : "Verify Email first",
        subject: "To verify email to create account"
      }
    if(!existingUser){
        try{
            if(registerResponse.password === registerResponse.confirmPassword){
                registerResponse.password = bcrypt.hashSync(registerResponse.password, 12)
                registerResponse.confirmPassword = bcrypt.hashSync(registerResponse.confirmPassword, 12)
                const registration = await new User(registerResponse).save()

                //code for email not verified

                if(registration.verified === false){  //checking if the use is verified
                    let tokens = await Token.findOne({userId: registration._id});  //finding the user based on its ID from Token
                    if(!tokens){ //Checking if token is available
                        tokens = await new Token({  //creating the new token for the user
                            userId: registration._id,  //giving user the ID
                            token: crypto.randomBytes(32).toString('hex')  //creating random token using the crypto package
                        }).save()

                        
                        const url = `${process.env.BASE_URL}api/users/${registration._id}/verify/${tokens.token}`
                        // const url = `/${registration._id}/verify/${tokens.token}`
                        console.log(url)
                        const accesstoken = createAccessToken({id:registration._id});
                        const refreshtoken = createRefreshToken({id: registration._id});
                        res.cookie('refreshtoken', refreshtoken,{
                            httpOnly: true,
                            path: '/refresh_token',
                            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
                        })
                        await sendEmail(registration.email, "verify Email", url)
                        console.log("Email has been sent for verification")
                        return res.json({accesstoken,msg:"Email has been send for verification"})
                    }
                }

                tokenResponse(registration, 200, res)
            }
        }catch(err){
          return res.status(500).json({msg:err})
        }
    }else{
        return res.json({msg:"User Already exist"})
    }
   
})

router.post("/login", async(req,res)=>{
    const loginObject = {
        email: req.body.email,
        password: req.body.password
    }
    if(!loginObject.email || !loginObject.password){
        return res.status(500).json({msg:"Input all fields"})
    }
    const existingUser = await User.findOne({email: loginObject.email})
    if(!existingUser){
        return res.status(500).json({msg:"Register First"})
    }
    else{
        try{
            if (existingUser.password, bcrypt.compareSync(loginObject.password, existingUser.password)){
                if(existingUser.verified === false){
                    return res.status(400).json({msg:"Verify user First"})
                } else {
                 const accesstoken = createAccessToken({ id: existingUser.id });
                const refreshtoken = createRefreshToken({ id: existingUser.id });
          
                res.cookie('refreshtoken', refreshtoken, {
                  httpOnly: true,
                  path: '/refresh_token',
                  maxAge: 7 * 24 * 60 * 60 * 1000,
                });

                return res.json({refreshtoken, accesstoken, msg:"Logged in successfully"}); 
                }
            }
        }catch(err){
            res.json(err.message)
        }
       // return res.status(200).json({msg:"Logged in"})
    }
})

router.get('/users/:id/verify/:token', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        if(!user){
            return res.status(400).json({ msg: "Invalid user link" })
        } 

        const token = await Token.findOne({userId: req.params.id, token: req.params.token})

        if(!token){
            return res.status(400).json({ msg: "Invalid token link" })
        }

        await Token.deleteOne({ _id: token._id }) // Remove the token from the database

        // Alternatively, you can use token.remove() if token object has a remove method available
        // await token.remove()

        await User.findByIdAndUpdate(req.params.id, {verified: true})
        res.status(200).json("Email verified successfully")
    } catch(err) {
        console.error("Error verifying email:", err.message)
        console.error("Error stack trace:", err.stack)
        res.status(500).json({ msg: "Internal Server Error", error: err.message })
    }
})

const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}
const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

router.post('/refresh_token', async(req,res)=>{
    try {
        const rf_token = req.body.refreshToken;
        console.log("refresh token",rf_token)
        if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})

        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
            if(err) return res.status(400).json({msg: err})
            const {id} = user

            const accesstoken = createAccessToken({id})
            console.log({id})

            return res.json({accesstoken, refreshtoken: rf_token})
        })

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

router.get('/logout', async(req,res)=>{
    try{
        res.clearCookie('refreshtoken', {path:'/refresh_token'})
        return res.json({msg: "Logged out"})
      }catch(err){
        return res.status(500).json({msg:err.message})
      }
})

router.get('/getUser', auth, async(req,res)=>{
    try {
        const user = await User.findById(req.user.id).select('-password -confirmPassword')
        if(!user) return res.status(400).json({msg: "User does not exist."})

        res.json(user)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

router.get('/allUsers', auth, authAdmin, async(req,res)=>{
    try{
        const user = await User.find().select('-password -confirmPassword')
        console.log(user)
        if(user){
            
        res.json(user);
    }
        
        else{
            res.status(400).json({message:"no users"})
        }
    }catch(err){
        res.status(404).json({message:err.message})
    }


})

router.put("/updateUser/:id", auth, async(req,res)=>{
    try{
        const {username, password,confirmPassword} = req.body;
        if(password === confirmPassword){
            const hashedPassword = bcrypt.hashSync(password,12);
            const hasedConfirmedPassword = bcrypt.hashSync(confirmPassword, 12);
            await User.findByIdAndUpdate({_id: req.params.id},{
            username, hashedPassword, hasedConfirmedPassword
        })


        res.status(200).json({msg: "User updated"});

        }else{
            res.status(400).json({msg: "Password does not match"});
        }
        
    
    }catch(err){
        return res.status(500).json({msg: err.message})
    }
})




module.exports = router;
