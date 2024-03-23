import Link from "next/link";
import { currentURL, vercelURL } from "../utils";
import { createDebugUrl } from "../debug";
import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
import { FRAME_PATH } from "./frames";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "New api example",
    description: "This is a new api example",
    other: {
      ...(await fetchMetadata(
        new URL(
          FRAME_PATH + "/frames",
          vercelURL() || "http://localhost:3001"
        )
      )),
    },
  };
}

export default async function Home() {
  const url = currentURL(FRAME_PATH);

  return (
    <div>
      Multi-protocol example
      <Link href={createDebugUrl(url)} className="underline">
        Debug
      </Link>
    </div>
  );
}
