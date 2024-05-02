import Link from "next/link";
import Image from "next/image";

const listPhotos = {
  car: {
    name: "ASTON MARTIN V12 SPEEDSTER",
    img1: "https://res.cloudinary.com/dlfp2xvis/image/upload/fl_preserve_transparency/v1714660882/rentals/ASTON%20MARTIN%20V12%20SPEEDSTER/1_bouqgh.jpg",
    img2: "https://res.cloudinary.com/dlfp2xvis/image/upload/fl_preserve_transparency/v1714660882/rentals/ASTON%20MARTIN%20V12%20SPEEDSTER/2_i0sq35.jpg",
    img3: "https://res.cloudinary.com/dlfp2xvis/image/upload/v1714660882/rentals/ASTON%20MARTIN%20V12%20SPEEDSTER/3_dbgcz4.jpg",
  },
};

export default function Booking() {
  return (
    <main>
      PAGE HOME
      <div>
        <Link href="/reservation">ici tu reserves</Link>
      </div>
      <Image src={listPhotos.car.img2} height={220} width={300} alt="" />
    </main>
  );
}
