import Link from "next/link";
import Image from "next/image";
import Listing from "./objects/listing";

const carsListing = Listing();

export default function Booking() {
  return (
    <main>
      PAGE HOME
      <div>
        {carsListing.map((item, index) => (
          <div class="card p-2" key={index}>
            <div>
              <div class="flex justify-between items-center">
                <div>
                  <div>{item.car.name}</div>
                </div>
                <div class="flex flex-col">
                  <div>{item.car.price}</div>
                </div>
              </div>
              <div class="flex justify-between items-center mt-2 mb-2">
                <div>
                  <div>Chevaux : {item.car.hp}</div>
                  <div>Année : {item.car.year}</div>
                </div>
                <div>
                  <Link href="/reservation">RENT ME</Link>
                </div>
              </div>
            </div>
            <div class="grid gap-2 grid-cols-3 grid-rows-1">
              {item.car.images.map((image, imageIndex) => (
                <div key={imageIndex}>
                  <img
                    src={image.img}
                    alt={`Image ${index}-${imageIndex}`}
                    class="rounded-lg"
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
