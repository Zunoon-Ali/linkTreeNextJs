import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import bcrypt from "bcryptjs";
import User from "@/app/models/User";


export async function POST(req) {
  await connectDB();

  try {
    const { name, email, password } = await req.json();
    const existsUser = await User.findOne({ email });
    if (existsUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name, email, password: hashedPassword
    })
    return NextResponse.json(
      { success: true, message: "User registered successfully", redirect: "/Auth/login" }, { status: 201 }
    );

  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }


}



























// import { NextResponse } from "next/server";
// import { connectDB } from "@/app/lib/db";
// import User from "@/app/models/User";
// import bcrypt from "bcryptjs";

// export async function POST(req) {
//   try {
//     const { name, email, password } = await req.json();

//     await connectDB();

//     // check if user exists
//     const exists = await User.findOne({ email });
//     if (exists) {
//       return NextResponse.json(
//         { error: "User already exists" },
//         { status: 400 }
//       );
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     // 👉 THIS LINE SAVES DATA
//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     return NextResponse.json({
//       success: true,
//       message: "User registered",
//       userId: user._id,
//     });
//   } catch (err) {
//     return NextResponse.json(
//       { error: err.message },
//       { status: 500 }
//     );
//   }
// }
