import { secret_key } from "../config/env/index.js";
import jwt from 'jsonwebtoken';

const verifyToken = (req , res ,next) => {
    const token = req.headers['authorization'];
    if(!token){
        return res.status(403).json({message : 'Token bulunamadı.'});
    }
    try{
        const decoded = jwt.verify(token, secret_key);
        req.userId = decoded.userId;
        next();
    }catch(error){
        return res.status(403).json({message : "Unauthorized"});
    }
}

export default verifyToken;


