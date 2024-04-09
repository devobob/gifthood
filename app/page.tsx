import Image from "next/image";

export default function Home() {
  return (
    <main className="max-h-fit py-10">
      <div className="launching">
        launching soon
      </div>
      <div className="catalog">
        <p>until then...</p>
        <p>discover our spring/summer stories</p>
      </div>
      <Image
        className="banner"
        src="/aggelikh-flowers.png"
        alt="Vercel Logo"
        width={1000}
        height={2400}
        priority
      />
      <div className="catalog-button">
        <a href="/catalog.pdf" className="catalog-button-text">
        <button className="catalog-button-text" >
          HERE
          </button>
          </a>
      </div>
      <div className="instagram"
      >
        <a href="https://www.instagram.com/gifthood.curatedgifts/">
          <Image
            src="/insta.png"
            alt="instagram"
            width={50}
            height={50}
            priority
          />
        </a>

      </div>
      <div
        className="logo"
      >
        <div>
          <p className="text-2xl font-bold text-center">GIFTHOOD</p>
          <p className=" font-light text-center">CURATED GIFTS</p>

        </div>
 
        
      </div>
    </main>
  );
}
