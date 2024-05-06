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
      <main className="flex justify-center">
        <div>
          <div>
            <div>Vous souhaitez louer la voiture suivante : {carId.name}</div>
            <div>Puissance : {carId.hp} Chevaux</div>
            <div>Prix : {carId.price} €</div>
            <img src={carId.images[0].img} alt="img-car" width={500} />
          </div>
          <div className="mt-4">
            <div>
              <div>NOM</div>
              <input type="text" />
            </div>
            <div>
              <div>PRÉNOM</div>
              <input type="text" />
            </div>
            <div>
              <div>SUJET</div>
              <input type="text" />
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return router.push("/");
  }
}
