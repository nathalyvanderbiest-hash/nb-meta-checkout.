import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const products = searchParams.get("products");
  const coupon = searchParams.get("coupon");

  if (!products) {
    return NextResponse.redirect("https://nathalybotanicals.com");
  }

  return NextResponse.redirect("https://nathalybotanicals.com");
}
