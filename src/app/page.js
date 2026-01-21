import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-{50vh}">
        <div className="flex flex-col gap-4 items-centre justify-center">
          <p className=" text-2xl font-bold">The best URL Shortener in the market</p>
          <p>We are the most straightforward URL Shortener in the world</p>
        </div>
        <div className="flex justify-start relative">
          <Image className='mix-blend-darken' alt="Image of a vector" src={"/vector.jpg"} fill={true}/>
        </div>
      </section>
    </main>
  );
}
