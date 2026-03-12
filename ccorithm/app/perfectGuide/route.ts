import { NextRequest, NextResponse } from "next/server";
import { getTransferGuide, getGenericGuide } from "@/app/data/transferdata";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const major = searchParams.get("major");
  const cc = searchParams.get("cc");
  const transfer = searchParams.get("transfer");

  // ── Validate required params ──
  if (!major || !cc || !transfer) {
    return NextResponse.json(
      {
        error: "Missing required query parameters: major, cc, transfer",
      },
      { status: 400 }
    );
  }

  // ── Look up specific guide, fall back to generic ──
  const guide = getTransferGuide(cc, transfer, major) 
    ?? getGenericGuide(cc, transfer, major);

  return NextResponse.json(guide, { status: 200 });
}