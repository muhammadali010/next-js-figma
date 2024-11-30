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
          backgroundPosition: 'center',
          width: '1920px',
          height: '1200px',
        }}
      >
        <div className="flex items-center justify-between text-white p-14">
          <div>
            <h1 className="logo">MNTN</h1>
          </div>
          <div className="flex gap-10">
            <p>Equipment</p>
            <p>About us</p>
            <p>About</p>
          </div>
          <div>
            <h2 className="account">Account</h2>
          </div>
        </div>
        <div className="ml-[500px] mt-[287px]">
          <h2 className="hiking text-[#FBD784]">--A Hiking guide</h2>
          <h1 className="mountain">Be prepared for the <br /> Mountains and beyond! </h1>
          <p className="mt-10 text-white text-2xl">scroll down</p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/bg2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '1920px',
          height: '1400px',
        }}
      >
        <Image
          className="pt-[690px]"
          src="/bg3.png"
          alt="Img"
          width={1920}
          height={926}
        />
      </div>
      <div
        style={{
          backgroundImage: "url('/bg4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '1920px',
          height: '700px',
        }}
      ></div>
      <div className="bg-[#0b1d26] text-white">
        <div className="ml-[379px] flex items-center gap-24">
          <div>
            <Image
              src="/Equipment.svg"
              alt="01"
              width={276}
              height={240}
            />
            <h1 className="text-[#FBD784] text-2xl">-Get started</h1>
            <h1 className="hiker">
              What level of hiker <br /> are you?
            </h1>
            <p> Determining what level of hiker you are can be an important tool when <br />
              planning future hikes. This hiking level guide will help you plan hikes <br />
              according to different hike ratings set by various websites like All Trails and <br />
              Modern Hiker. What type of hiker are you – novice, moderate, advanced <br />
              moderate, expert, or expert backpacker?
            </p>
            <h2 className="text-2xl text-[#fbd784] mt-2">read mode</h2>
          </div>
          <Image
            src="/image1.png"
            alt="img1"
            width={566}
            height={720}
          />
        </div>
        <div className="ml-[379px] flex items-center gap-24 mt-[200px]">
          <Image
            src="/image2.png"
            alt="img1"
            width={566}
            height={720}
          />
          <div>
            <Image
              src="/Equipment(1).svg"
              alt="01"
              width={276}
              height={240}
            />
            <h1 className="text-[#FBD784] text-2xl">-Hiking Essentials</h1>
            <h1 className="hiker">
              Picking the right <br /> Hiking Gear!
            </h1>
            <p>The nice thing about beginning hiking is that you don’t really need any <br />
              special gear, you can probably get away with things you already have. <br />
              Let’s start with clothing. A typical mistake hiking beginners make is wearing <br />
              jeans and regular clothes, which will get heavy and chafe wif they get <br />
              sweaty or wet.
            </p>
            <h2 className="text-2xl text-[#fbd784] mt-2">read mode</h2>
          </div>
        </div>
        <div className="ml-[379px] flex items-center gap-24 mt-[200px]">
          <div>
            <Image
              src="/Equipment(2).svg"
              alt="01"
              width={276}
              height={240}
            />
            <h1 className="text-[#FBD784] text-2xl">-where you go is the key</h1>
            <h1 className="hiker">
              Understand Your <br /> Map & Timing
            </h1>
            <p> To start, print out the hiking guide and map. If it’s raining, throw them in a <br />
              Zip-Lock bag. Read over the guide, study the map, and have a good idea <br />
              of what to expect. I like to know what my next landmark is as I hike. For <br />
              example, I’ll read the guide and know that say, in a mile, I make a right turn <br />
              at the junction..
            </p>
            <h2 className="text-2xl text-[#fbd784] mt-2">read mode</h2>
          </div>
          <Image
            src="/image3.png"
            alt="img1"
            width={566}
            height={720}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
