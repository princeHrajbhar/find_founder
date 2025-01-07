import { NextResponse } from "next/server";
import {connectToDB} from "@/lib/mongoDB";
import Founder from "@/models/Founder";

// **GET**: Fetch all founders
export async function GET() {
  try {
    await connectToDB();

    const founders = await Founder.find();
    return NextResponse.json(founders, { status: 200 });
  } catch (error) {
    console.error("Error fetching founders:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

// **POST**: Create a new founder
export async function POST(request: Request) {
  try {
    await connectToDB();

    const body = await request.json();

    const newFounder = await Founder.create(body);
    return NextResponse.json(newFounder, { status: 201 });
  } catch (error) {
    console.error("Error creating founder:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
