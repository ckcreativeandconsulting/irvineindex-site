import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const submissionsPath = path.join(process.cwd(), "data", "submissions.json");

type SubmissionPayload = {
  name?: string;
  category?: string;
  phone?: string;
  website?: string;
  neighborhood?: string;
  pitch?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as SubmissionPayload;
  const requiredFields: Array<keyof SubmissionPayload> = ["name", "category", "phone", "website", "neighborhood", "pitch"];
  const missing = requiredFields.filter((field) => !body[field] || String(body[field]).trim().length === 0);

  if (missing.length > 0) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(", ")}` }, { status: 400 });
  }

  const submission = {
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    name: String(body.name).trim(),
    category: String(body.category).trim(),
    phone: String(body.phone).trim(),
    website: String(body.website).trim(),
    neighborhood: String(body.neighborhood).trim(),
    pitch: String(body.pitch).trim()
  };

  const existing = JSON.parse(await fs.readFile(submissionsPath, "utf8")) as unknown[];
  existing.push(submission);
  await fs.writeFile(submissionsPath, `${JSON.stringify(existing, null, 2)}\n`);

  return NextResponse.json({ ok: true, submission });
}
