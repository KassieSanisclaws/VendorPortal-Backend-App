const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

//Generate Token when user signs in with authentication credentials.
exports.generateToken = (user) => {
     return jwt.sign({
        //TODO: user credentials to sign in here.

     },
//Process.env is called to sign the token with our secret passcode. 
      process.env.JWT_SECRET,{ expiresIn: '10d' });  
 };


 exports.isAuth = (req, res, next) => {
   const authorization = req.headers.authorization;
   //TODO: Handle when user is authorized. 
 if(authorization){
    const token = authorization.slice(10, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET, 
       (err, decode) => {
        if(err){
            res.status(401).send({ message: "Invalid Token" });
        }else{
            req.user = decode;
            next();
        }});
    }else{
      res.status(401).send({ message: "No Token" })};
 };