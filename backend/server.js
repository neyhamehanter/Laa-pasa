const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
dotenv.config();
const productRoute = require('./routes/product');
const upload = require('./routes/upload');
const user = require("./routes/user");
const category = require("./routes/category");
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))


app.use("/api",productRoute);
app.use("/api",upload);
app.use("/api", user);
app.use("/api", category)


try {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.DBCONNECTION) 
    console.log('Mongo connected')
}
catch(error) {
    console.log(error)
    process.exit()
}

const port = process.env.PORT || 8000

app.listen(port, () =>{
    console.log('server is running on', port)
})
