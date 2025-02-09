import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Sneak Search</h1>
      <p>Tets</p>
      <Link href={"/dashboard"}>Dashboard</Link>
    </main>
  );
}