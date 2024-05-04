"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Listing from "@/app/objects/listing";

const carsListing = Listing();

export default function Booking({ params }) {
  const router = useRouter();

  useEffect(() => {}, [router.query]);

  console.log(carsListing);

  return (
    <main>
      <div>
        <Link href="/">ici tu reserves</Link>
        <div></div>
      </div>
    </main>
  );
}
