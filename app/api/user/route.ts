// // app/api/contact/route.ts

// // export const dynamic = 'force-dynamic';

// export async function POST(request: Request) {
//   const body = await request.json();
//   const { name, email } = body;

//   console.log(`name: ${name}`);
//   console.log(`email: ${email}`);

//   return Response.json({ message: 'Data received successfully!' });
// }



import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/app/dbConfig/dbConfig";
import User from "@/app/models/User";

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();

    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists", user: existingUser },
        { status: 409 }
      );
    }

    const newUser = new User({ name, email });
    await newUser.save();

    return NextResponse.json(
      { message: "User saved successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error in POST /api/user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
  } catch (error) {
    console.error("❌ Error in GET /api/user:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
