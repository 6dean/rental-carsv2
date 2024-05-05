"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Listing from "@/app/objects/listing";

const carsListing = Listing();

export default function Booking({ params }) {
  const router = useRouter();

  let carId;
  let foundCarName;

  for (let i = 0; i < carsListing.length; i++) {
    if (carsListing[i].car.denomination === params.carname) {
      const foundcarId = carsListing[i].car;
      foundCarName = true;
      carId = foundcarId;
    }
  }

  if (foundCarName) {
    return (
      <main>
        <div>
          <Link href="/">ici tu reserves</Link>
          <div>Vous souhaitez louer la voiture suivante : {carId.name}</div>
        </div>
      </main>
    );
  } else {
    return router.push("/404");
  }
}
