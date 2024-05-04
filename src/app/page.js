"use client";

import Link from "next/link";
import Image from "next/image";
import Listing from "./objects/listing";
import { useParams } from "next/navigation";

const carsListing = Listing();

export default function Booking() {
  const params = useParams();

  console.log(params);

  return (
    <main>
      PAGE HOME
      <div>
        {carsListing.map((item, index) => (
          <div className="card p-2" key={index}>
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <div>{item.car.name}</div>
                </div>
                <div className="flex flex-col">
                  <div>{item.car.price}</div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 mb-2">
                <div>
                  <div>Chevaux : {item.car.hp}</div>
                  <div>Année : {item.car.year}</div>
                </div>
                <div>
                  <Link href={`/reservation/${item.car.denomination}`}>
                    RENT ME
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-3 grid-rows-1">
              {item.car.images.map((image, imageIndex) => (
                <div key={imageIndex}>
                  <img
                    src={image.img}
                    alt={`Image ${index}-${imageIndex}`}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
