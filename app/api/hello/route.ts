// import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//   const url = request.nextUrl;
//   if(url.searchParams.has("name")){
//     const name = url.searchParams.get("name");
//     return new NextResponse('Hello, from: ' + name);
//   }
//   else {
//     return new NextResponse('Please send your name in search parameter "name"');
//   }


// }

//sample input
//http://localhost:3000/api/hello?name=Bilal

import { NextRequest, NextResponse } from "next/server";
//read
export async function GET(request: NextRequest) {
    return NextResponse.json({
      From: "Zia",
      Message: "Greetings from Pakistan",
      RequestType: "GET"
    });
}

//create
export async function POST(request: NextRequest) {
  const req = await request.json();
  if(req.name){
    return NextResponse.json({
      To: "Bilal",
      Message: "All well here",
      RequestType: "POST"
    });
  }
  else {
    return new NextResponse('Please include your name in the POST request');
  }
}

//update
export async function PUT(request: NextRequest) {
  const req = await request.json();
  if(req.name){
    return NextResponse.json({
      To: "Zia",
      Message: "This is a updated greeting",
      RequestType: "PUT"
    });
  }
  else {
    return new NextResponse('Please include your name in the PUT request');
  }
}

//delete
export async function DELETE(request: NextRequest) {
  const req = await request.json();
  if(req.name){
    return NextResponse.json({
      To: "Zia",
      Message: "I have deleted the greetings",
      RequestType: "DELETE"
    });
  }
  else {
    return new NextResponse('Please include your name in the DELETE request');
  }
}
