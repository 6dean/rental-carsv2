import Link from "next/link";
import Image from "next/image";

export default function Booking() {
  return (
    <main>
      <div>
        <Link href="/">ici tu reserves</Link>
      </div>
      <Image src="/public/images/0002.jpg" width={100} height={100} alt="car" />
    </main>
  );
}
