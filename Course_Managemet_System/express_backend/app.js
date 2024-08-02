const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser=require("body-parser")
const authRoutes = require('./routes/auth')
const courseRoutes = require('./routes/courses')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors());

//send control to routers
app.use('/api/auth', authRoutes);
app.use('/api', courseRoutes);

app.listen(3002, () => console.log("Server started on port 3002"));