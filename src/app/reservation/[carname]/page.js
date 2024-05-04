"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Listing from "@/app/objects/listing";

const carsListing = Listing();

export default function Booking({ params }) {
  const router = useRouter();

  let foundCarName;
  for (let i = 0; i < carsListing.length; i++) {
    if (carsListing[i].car.denomination === params.carname) {
      foundCarName = true;
    }
  }

  if (foundCarName) {
    return (
      <main>
        <div>
          <Link href="/">ici tu reserves</Link>
          <div></div>
        </div>
      </main>
    );
  } else {
    return router.push("/404");
  }
}
