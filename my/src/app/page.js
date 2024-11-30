import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700'],
});

function Page() {
  return (
    <div className={`${roboto.className} container mx-auto`}>
 <div
  style={{
    backgroundImage: "url('/bg1.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center', // Ekranning o'rtasiga moslashadi
    backgroundRepeat: 'no-repeat', // Tasvir qaytarilmasligi uchun
  }}
  className="w-full min-h-screen"
>
  <div className="flex items-center justify-between text-white px-14 py-6">
    <h1 className="logo text-3xl font-bold">MNTN</h1>
    <div className="flex gap-6">
      <p className="cursor-pointer hover:underline">Equipment</p>
      <p className="cursor-pointer hover:underline">About us</p>
      <p className="cursor-pointer hover:underline">About</p>
    </div>
    <h2 className="account text-xl font-medium">Account</h2>
  </div>
  <div className="ml-[350px] mt-40">
    <h2 className="hiking text-[#FBD784] text-lg">--A Hiking guide</h2>
    <h1 className="mountain text-white text-5xl font-bold leading-tight">
      Be prepared for the <br /> Mountains and beyond!
    </h1>
    <p className="mt-10 text-white text-lg">scroll down</p>
  </div>
</div>

<div
  style={{
    backgroundImage: "url('/bg2.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  }}
  className="w-full h-[80vh] flex items-center justify-center"
>
  <Image
    className="mx-auto pt-20"
    src="/bg3.png"
    alt="Background"
    width={1920}
    height={926}
  />
</div>

<div
  style={{
    backgroundImage: "url('/bg4.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  }}
  className="w-full h-[50vh]"
></div>


      <div className="bg-[#0b1d26] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div>
            <Image src="/Equipment.svg" alt="01" width={276} height={240} />
            <h1 className="text-[#FBD784] text-2xl mt-4">-Get started</h1>
            <h1 className="hiker text-3xl font-bold mt-4">
              What level of hiker <br /> are you?
            </h1>
            <p className="mt-4 text-lg leading-relaxed">
              Determining what level of hiker you are can be an important tool when
              planning future hikes. This hiking level guide will help you plan hikes
              according to different hike ratings set by various websites like All Trails and
              Modern Hiker. What type of hiker are you – novice, moderate, advanced
              moderate, expert, or expert backpacker?
            </p>
            <h2 className="text-2xl text-[#fbd784] mt-4 cursor-pointer hover:underline">
              read mode
            </h2>
          </div>
          <Image src="/image1.png" alt="Hiking" width={566} height={720} />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-24">
          <Image src="/image2.png" alt="Hiking Gear" width={566} height={720} />
          <div>
            <Image src="/Equipment(1).svg" alt="02" width={276} height={240} />
            <h1 className="text-[#FBD784] text-2xl mt-4">-Hiking Essentials</h1>
            <h1 className="hiker text-3xl font-bold mt-4">
              Picking the right <br /> Hiking Gear!
            </h1>
            <p className="mt-4 text-lg leading-relaxed">
              The nice thing about beginning hiking is that you don’t really need any
              special gear, you can probably get away with things you already have.
              Let’s start with clothing. A typical mistake hiking beginners make is wearing
              jeans and regular clothes, which will get heavy and chafe if they get
              sweaty or wet.
            </p>
            <h2 className="text-2xl text-[#fbd784] mt-4 cursor-pointer hover:underline">
              read mode
            </h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-24">
          <div>
            <Image src="/Equipment(2).svg" alt="03" width={276} height={240} />
            <h1 className="text-[#FBD784] text-2xl mt-4">-where you go is the key</h1>
            <h1 className="hiker text-3xl font-bold mt-4">
              Understand Your <br /> Map & Timing
            </h1>
            <p className="mt-4 text-lg leading-relaxed">
              To start, print out the hiking guide and map. If it’s raining, throw them in a
              Zip-Lock bag. Read over the guide, study the map, and have a good idea
              of what to expect. I like to know what my next landmark is as I hike. For
              example, I’ll read the guide and know that say, in a mile, I make a right turn
              at the junction.
            </p>
            <h2 className="text-2xl text-[#fbd784] mt-4 cursor-pointer hover:underline">
              read mode
            </h2>
          </div>
          <Image src="/image3.png" alt="Map & Timing" width={566} height={720} />
        </div>
      </div>
    </div>
  );
}

export default Page;
