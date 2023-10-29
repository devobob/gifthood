import Image from "next/image";

export default function Home() {
  return (
    <main className="max-h-fit">
      <Image
        className="launching"
        src="/launchingsoon.png"
        alt="Vercel Logo"
        width={400}
        height={24}
        priority
      />
      <Image
        className="banner"
        src="/aggelikh-flowers.png"
        alt="Vercel Logo"
        width={1000}
        height={2400}
        priority
      />
      <a className="instagram" href="https://www.instagram.com/gifthood.gr/">
        <Image
          src="/insta.png"
          alt="instagram"
          width={50}
          height={50}
          priority
        />
      </a>
      <Image
        className="logo"
        src="/logo.png"
        alt="Vercel Logo"
        width={300}
        height={24}
        priority
      />
    </main>
  );
}
