import {NextResponse} from "next/server";
import connectDB from "@/app/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/app/models/User";


export async function POST(req){
  await connectDB();

  try{

    const {email,password} = await req.json();
    
    const user = await User.findOne({email});
    if(!user){
      return NextResponse.json({error:"User not found"},{status:404});
    }
    const isMatch = await bcrypt.compare(password,user.password);
    
    if(!isMatch){
      return NextResponse.json({error:"Invalid Credentials"},{status:401});
    }

    const token = jwt.sign({
      userId:user._id,
      email:user.email,
      role:user.role
    },process.env.JWT_SECRET,{expiresIn:"1d"});

    return NextResponse.json({message:"Login User Successfully",token,role:user.role,email:user.email,name:user.name},{status:200});
  }catch(err){
    return NextResponse.json({error:err.message},{status:500});
  }

}