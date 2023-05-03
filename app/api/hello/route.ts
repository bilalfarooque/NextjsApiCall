import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  if(url.searchParams.has("name")){
    const name = url.searchParams.get("name");
    return new NextResponse('Hello, from: ' + name);
  }
  else {
    return new NextResponse('Please send your name in search parameter "name"');
  }


}

//sample input
//http://localhost:3000/api/hello?name=Bilal