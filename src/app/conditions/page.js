import Link from "next/link";

export default function Conditions() {
  return (
    <main>
      <div>condition de location</div>
      <div>
        <Link href="/">retour Home</Link>
      </div>
      <div>
        <Link href="/reservation">retour booking</Link>
      </div>
    </main>
  );
}
