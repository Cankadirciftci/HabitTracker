import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {secret_key} from "../config/env/index.js";
import User from "../models/User.js";

async function register(req , res) {
    const {fullName , email , password} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message :"Bu mail adresi ile kullanıcı kayıtlı."});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        
        const newUser = await User.create({
            fullName,
            email,
            password : hashedPassword,
        });
         
        res.status(201).json({
            message : "Kullanıcı başarıyla oluşturuldu.",
            user : {
                id : newUser._id,
                fullName : newUser.fullName,
                email : newUser.email,
            }
        })

    }catch(error) {
        res.status(500).json({message : "Server error" , error : error.message});
    }
}
export {register};

async function login(req , res) {
    try {
        const {email , password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                error : "Geçersiz istek , giriş yapmak için e-posta ve şifre giriniz.",
            });
        }
        const user =await User.findOne({email});

        if(!user){
            return res.status(401).json({
                error: "Kullanıcı bulunamadı, lütfen doğru e-posta adresin girildiğinden emin olun.",
            });
        }
        
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res
            .status(401)
            .json({error: "Hatalı şifre, lütfen şifrenizi kontrol ediniz."});
        }

        const token = jwt.sign({userId : user._id}, secret_key,{
            expiresIn : "365d",
        });
        res.status(200).json({accessToken : token});
    }catch(error){
        res.status(500).json({error : "Giriş başarısız"});
    }
}

export{login};