const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const authUser = async(req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Unauthorized access'});
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user=user;
        return next();
    }catch(err){
        res.status(401).json({message:'not found Unauthorized'});
    }
}

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json('Access Denied');
  next();
};

module.exports = { authUser, isAdmin };



