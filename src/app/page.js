import Link from "next/link";
import Image from "next/image";
import Listing from "./objects/listing";

const carsListing = Listing();

export default function Booking() {
  return (
    <main>
      PAGE HOME
      <div>
        <Link href="/reservation">ici tu reserves</Link>
      </div>
      <div>
        {carsListing.map((item, index) => (
          <div key={index}>
            <div>{item.car.name}</div>
            <div>{item.car.price}</div>

            <div class="grid gap-2 grid-cols-3 grid-rows-1">
              {item.car.images.map((image, imageIndex) => (
                <div key={imageIndex}>
                  <img src={image.img} alt={`Image ${index}-${imageIndex}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
