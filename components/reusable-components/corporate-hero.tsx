// components/TalentDiagram.tsx
'use client';

import React from 'react';
// import { ArcherContainer, ArcherElement } from 'react-archer';
import { Gochi_Hand, Just_Another_Hand } from 'next/font/google';

const justAnotherHand = Gochi_Hand({
  subsets: ['latin'],
  weight: '400',
});

export default function CorporateHeroSection() {
  return (
   <div className="grid grid-cols-6 grid-rows-6 max-w-7xl m-auto min-h-fit ">
    <div className={`w-full h-full m-auto text-2xl text-center flex items-end justify-end ${justAnotherHand.className}`}>Access Pre-Vetted, High-Potential Talent</div>
    <div className="w-full h-full col-span-2 row-span-2 col-start-3 row-start-3 text-center max-w-lg m-auto p-auto">
        <h1 className="text-5xl font-bold text-gray-900 ">Revolutionize Recruitment Through Gamified Excellence
                    </h1>
    </div>
    <div className={`w-full h-full col-start-1 row-start-5 text-2xl text-center ${justAnotherHand.className}`}>Faster & Smarter Hiring Pipeline</div>
    <div className=" col-start-2 row-start-2 m-auto p-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="72" viewBox="0 0 80 62" fill="none">
        <path d="M1.51465 4.8916L78.9813 60.3414" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17.008 2.44528C16.4698 2.44528 10.2725 1.3689 1.84082 1.0835C5.28197 13.5271 14.2763 27.4385 16.7185 29.7462C17.8153 30.7084 18.6226 31.2466 21.0852 33.432" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    </div>
    <div className=" col-start-4 row-start-2 m-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="77" viewBox="0 0 90 77" fill="none">
            <path d="M81.6972 4.38525L1.78418 75.3284" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <path d="M67.0195 1.93896C74.016 2.74625 81.0125 3.55353 84.6167 5.04579C88.2209 6.53804 88.2209 8.6908 87.9518 10.6071C85.5137 17.416 78.4846 24.4614 73.8244 29.513C73.2739 30.4712 73.0049 31.2785 74.3585 32.1102" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
    </div>
    <div className={`w-full h-full col-start-5 row-start-1 m-auto text-2xl text-center flex items-end justify-start ${justAnotherHand.className}`}>Brand Visibility Among Young Talent</div>
    <div className=" col-start-2 row-start-4 m-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="136" height="120" viewBox="0 0 136 120" fill="none">
            <path d="M134.531 72.3654C134.262 72.3654 133.993 72.3654 116.632 69.1362C99.2718 65.9071 64.8276 59.4488 44.5273 53.8345C24.2269 48.2202 19.1141 43.6456 15.5384 40.2126C9.90422 34.8033 7.33103 30.7943 5.83878 26.4643C3.68927 20.2272 4.33022 15.0237 5.27613 12.7201C8.4092 5.08998 19.7991 2.24577 24.549 1.69535C32.1247 0.817485 34.2161 16.3121 36.4014 28.8291C37.3829 34.4507 34.5259 45.3743 27.6314 65.006C23.4916 76.7939 15.624 91.3651 11.7466 99.6622C7.60013 109.305 6.78469 111.498 5.8347 113.125C5.42291 113.945 5.15381 114.752 4.87656 117.215" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <path d="M1.61475 97.644C1.61475 104.371 1.61475 111.099 2.42203 114.699C3.22932 118.299 4.84388 118.568 8.09749 117.63C11.3511 116.693 16.1948 114.54 22.8162 111.507" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
    </div>
    <div className=" col-start-4 row-start-5 m-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="89" viewBox="0 0 62 89" fill="none">
            <path d="M1.63965 1.40283C16.709 28.8505 27.432 45.143 32.5896 48.6738C38.2394 52.5416 44.018 51.96 48.2257 51.4219C51.4853 51.0049 53.2732 46.2764 54.9041 41.396C56.4609 36.7375 54.9204 33.2131 53.7013 31.5863C52.3792 29.8219 50.5741 28.5896 48.9473 27.6396C47.4244 26.7503 44.6051 26.9505 41.3474 27.8964C38.6599 28.6768 38.3344 35.0641 38.4689 42.7986C38.571 48.6624 42.379 60.832 47.6753 76.0481C49.7424 81.5768 50.5497 82.6532 51.2346 83.6113C51.9196 84.5694 52.4578 85.3767 53.0123 86.2085" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <path d="M35.0728 78.0538C35.0728 77.5156 42.3383 81.2748 53.6158 86.7179C57.4446 88.5658 58.166 86.779 58.7123 85.0095C59.2587 83.24 59.7969 81.0873 60.0741 78.4982C60.3514 75.9092 60.3514 72.9492 59.5359 68.2686" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
    </div>
    <div className={`w-full h-full col-start-4 row-start-6 m-auto text-2xl text-center ${justAnotherHand.className}`}>Early Engagement with Future Innovators</div>
    <div className={`w-full h-full col-start-5 row-start-4 m-auto`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="217" height="94" viewBox="0 0 217 94" fill="none">
            <path d="M1.93555 1.42578C56.2927 15.6878 110.65 29.9498 142.15 40.3915C173.651 50.8332 180.647 57.0224 186.673 63.1708C192.699 69.3192 197.543 75.2393 204.164 82.1542" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <path d="M199.272 55.2451C206.268 66.5471 213.265 77.8491 214.985 83.9404C216.706 90.0317 212.939 90.5699 206.02 90.8472C199.101 91.1244 189.144 91.1244 182.939 91.259C176.733 91.3935 174.58 91.6626 170.731 92.7553" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
    </div>
    <div className={`col-start-6 row-start-5 m-auto text-2xl text-center ${justAnotherHand.className}`}>Support for CSR and Skill Development Initiatives</div>
</div>
  );
}
