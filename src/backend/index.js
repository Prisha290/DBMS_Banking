const mysql= require("mysql2")
const express=require("express")

const cors = require('cors');
const app = express();
app.use(express.json());
// Enable All CORS Requests
app.use(cors());

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
  app.use(cors(corsOptions));
  


const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database:"banking" 
})
// const cors = require('cors')

const  PORT = 4000;
// app.use(cors());
app.use(express.json());

// Route to get all posts
app.post("/",(req,res)=>{
    res.send("HERE>>");
})
app.get("/next",(req,res)=>{
    res.send("IN NEXT PAGE");
})
app.post("/logged_in", (req,res)=>{
    // console.log(req);
    console.log("YAYY!");
    console.log(req.body);
    username=req.body.username;
    pass=req.body.password;

    console.log(username,pass)
    const q="select * from login where username=? and password=?";
    //  const q='select * from login';
    // db.query(
    //     q,(err,result)=>{
    //         if (err)
    //         {   console.error('Error executing MySQL query:', err);
    //             res.status(409).json({error:"Invalid credentials."})
    //         }
    //         console.log(result)
    //         res.send(result)
    //     }
    // )

out=[];
    // const q = 'SELECT * FROM login';

db.query(q,[username,pass], (err, result) => {
  if (err) {
    console.error('Error executing MySQL query:', err);
    res.status(500).json({ error: 'Invalid credentials.' });
  }
  console.log(result); // Logging the query result to the console
  if (result.length==0){
    console.log("Not existing")
    res.send({accountno:-1});
  }
  else
  res.send(result[0]); // Sending the query result as a JSON response
});

    // res.send({ message: 'Got' });
});
app.get("/",(req,res)=>{
    res.send("HERE>>GET");
})
app.get("/logged_in", (req,res)=>{
    console.log(req);
    res.send("SUCCESS  GET");
});


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})


module.exports = db;