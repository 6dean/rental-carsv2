import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-5">
      <div>
        <Link href="/">
          <img
            src="https://moteuretsens.boutique/cdn/shop/files/SHOPIFY.png"
            alt="logo"
            width={130}
          />
        </Link>
        <div></div>
      </div>
      <div>Condition de réservation</div>
    </div>
  );
}
