import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/reservation">JE VEUX RESERVER</Link>
      </div>
      <div>
        <Link href="/conditions">JE VEUX VOIR LES CONDITIONS</Link>
      </div>
    </main>
  );
}
