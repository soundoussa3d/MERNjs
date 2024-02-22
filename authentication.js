const express= require('express');
const app = express();
//jwt = require('jsonwebtoken');
const users = [
    {
        username: 2,
        password: "hi",
    }

]

function isAuthenticated(req,res,next) {
    const authHeader= req.headers['authorization'];
    if (!authHeader) {
        return res.status(404).json({message:"Unauthenticated"})
    }

    //Barrer token
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(404).json({message:"Unauthenticated"}) 
    }
    const user = jwt.verify(token , "token");
    if (!user) {
        return res.status(403).json({message:Unauthenticated})
    }
    req.user = user
    next();
}

app.use(express.json());
app.get('/',isAuthenticated,(req,res)=>{
    res.json('$(req.user.username You are Authenticated');
})
app.post('/login',(req,res)=>{
    const {username,password} = req.body
    const user= users.find((p)=>p.username==username);
    //verify errors and check

    //authentication
    const token = jwt.sign({username:username},"secret",{expiresIn: '1000s'});
//attach user to request 
    req.user = user;
    res.json({
        message:"login Successfully",
        token:token
    });
    
})
app.listen(3000,()=>{})