import React from "react";
import masterImage from '../assets/masterImage.jpeg'

function Ielts() {
  return (
    <>
      <div className="md:pt-[76px] pt-[72px]">
        <section>
          <div className="md:px-32 px-4  pb-28 from-gray-300">
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-center gap-y-6 text-center md:text-left">
                <h1 className="font-bold text-[32px] md:text-[42px] leading-tight my-2">
                  Crack IELTS with 7+ Bands in 4 Weeks
                </h1>
                <div className="text-[16px] md:text-[20px] text-[#3A3A3A] leading-8">
                  <ul>
                    <li class="pb-4">
                      Over 2,50,000+ IELTS aspirants got their{" "}
                      <h2 class="inline-block">
                        dream IELTS Band with LeapScholar
                      </h2>
                    </li>
                  </ul>
                </div>
                <div className="md:row-span-2 relative mt-6 md:my-6">
                <img alt="hero_image" fetchpriority="high" loading="eager" width="328" height="251" decoding="async" data-nimg="1" src={masterImage} className="text-transparent object-contain w-[100%] h-auto size-[100vw]"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Ielts;
