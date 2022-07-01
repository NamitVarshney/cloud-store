// project name in mongo db : Flutter Cloud Store
// username in mongo db : namit
// password in mongo db : cld_str06

// 2ND DB 
// project name in mongo db : Cloud Store using Flutter
// username in mongo db : varshney
// password in mongo db : cld_str06



//Import from packages
const express = require("express")
const mongoose = require('mongoose')

// Import from other files
const adminRouter = require("./routes/admin");
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const userRouter = require("./routes/user");

//INIT
const PORT = process.env.PORT || 3000
const app = express()

//OLD DB const DB = "mongodb+srv://namit:cld_str06@cluster0.ejc6o.mongodb.net/?retryWrites=true&w=majority"
const DB = "mongodb+srv://varshney:cld_str06@cluster0.vt4qg.mongodb.net/?retryWrites=true&w=majority";


// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);


// connections
mongoose.connect(DB).then(() => { console.log("connection successful") }).catch((e) => { console.log(e) })

//app.get('/hello-namit', (req, res) => { res.json({ hi: "Hello NV" }); })

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`)
})

