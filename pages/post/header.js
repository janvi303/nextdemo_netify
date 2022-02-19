import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
        <Link href="/contact">
          <a>contact</a>
        </Link>
        <Link href="/page">
          <a>Page</a>
        </Link>
      </header>
    </>
  );
}
