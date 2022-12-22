const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

//Generate Token when user signs in with authentication credentials.
exports.generateTokenU = (user) => {
     return jwt.sign({
        //TODO: user credentials to sign in here.
           _id: user._id,
           name: user.name,
           email: user.email,
           isAdmin: user.isAdmin
     },
//Process.env is called to sign the token with our secret passcode & days before expiration. 
      process.env.JWT_SECRET,{ expiresIn: '10d' });  
 };

exports.generateTokenV = (vendor) => {
     return jwt.sign({
       _id: vendor._id,
       vendorName: vendor.vendorName,
       vendorEmail: vendor.vendorEmail,
       isAdmin: vendor.isAdmin 
    }, 
     process.env.JWT_SECRET, { expiresIn: '5d' });
}

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

exports.isAdmin = (req, res, next) => {
  //TODO: Admin login authentication.
}