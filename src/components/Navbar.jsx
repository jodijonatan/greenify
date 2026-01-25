import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Greenify</h1>
        <div className="space-x-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/campaigns">Campaign</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
      </div>
    </nav>
  );
}
