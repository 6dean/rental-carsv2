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
        <div className="res-style">
          <div>
            <div className="flex justify-center">
              <div className="res-title mb-6">Demande d'information</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Modèle : </div>
              <div className="font-semibold">{carId.name}</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Puissance CV : </div>
              <div className="font-semibold">{carId.hp}</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Prix : </div>
              <div className="font-semibold">{carId.price} €</div>
            </div>
            <img
              src={carId.images[0].img}
              alt="img-car"
              width={380}
              className="rounded-lg m-3"
            />
          </div>
          <div className="mt-4">
            <div>
              <div>NOM</div>
              <input type="text" placeholder="Nom de famille" />
            </div>
            <div>
              <div>EMAIL</div>
              <input type="text" placeholder="@mail" />
            </div>
            <div>
              <div>SUJET</div>
              <textarea
                className="input-sujet"
                placeholder="Bonjour, je souhaite avoir des informations..."
              ></textarea>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return router.push("/");
  }
}
