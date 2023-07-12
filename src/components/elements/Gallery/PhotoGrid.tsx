import Image from "next/image";
import React from "react";
import { Image1, Image2, Image3 } from "@/assets/data/baseImage";

const PhotoGrid = () => {
  return (
    <section className="primary-grid primary-transition pt-[150px] pb-[25px] scale-[1.6] sm:scale-100 sm:pt-[40px] sm:pb-[40px] md:pt-[50px] md:pb-[50px] lg:pb-[70px] lg:pt-0">
      <div className="col-span-4 lg:col-span-11 lg:col-start-2">
        {/* ROW ONE */}
        <section className="grid grid-cols-11 items-end gap-[10px] lg:gap-[42px]">
          <div className="relative col-span-2">
            <Image
              sizes="(min-width: 1024px) 320px, 33vw"
              src="https://cdn.sanity.io/images/aftdl3p2/production/012f964b8ba3c21a3197e53c1a2b5fac3ba72f60-600x913.webp"
              className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
              width={384}
              height={585}
              placeholder="blur"
              blurDataURL={Image1}
              priority
              alt="Gallery-Image-One"
            />
            {/* 384 X 585 */}
          </div>
          <div className="col-span-3">
            <Image
              sizes="(min-width: 1024px) 320px, 33vw"
              src="https://cdn.sanity.io/images/aftdl3p2/production/e50e67dd2dad1dd0f4568d4686d7df6632e1d061-1600x1000.webp"
              className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
              width={384}
              height={239}
              placeholder="blur"
              blurDataURL={Image2}
              alt="Gallery-Image-Two"
              priority
            />
            {/* 384 X 239 */}
          </div>
          <div className="col-span-2">
            <Image
              sizes="(min-width: 1024px) 320px, 33vw"
              src="https://cdn.sanity.io/images/aftdl3p2/production/0f0cd27a0e66f29360a56d37f07ba221f12b0263-1230x768.webp"
              className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
              width={630}
              height={392}
              placeholder="blur"
              blurDataURL={Image3}
              alt="Gallery-Image-Three"
              priority
            />
            {/* 1200 X 800 */}
          </div>
        </section>
        {/* ROW TWO*/}
        <section className="mt-[10px] grid grid-cols-11 items-end gap-[10px] lg:mt-[40px] lg:gap-[42px]">
          <div className="relative col-span-4 col-start-2">
            <section className="flex flex-col">
              <div className="felx-row flex space-x-[10px] lg:space-x-[40px]">
                <div className="basis-1/2">
                  <Image
                    sizes="(min-width: 1024px) 320px, 33vw"
                    src="https://cdn.sanity.io/images/aftdl3p2/production/e0d4c9752fa1c7bcbc8a2ff5277dd871af5408f7-1200x686.webp"
                    className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
                    width={640}
                    height={364}
                    alt="Gallery-Image-Four"
                    priority
                  />
                  {/* 640 X 364 */}
                </div>
                <div className="basis-1/2">
                  <Image
                    sizes="(min-width: 1024px) 320px, 33vw"
                    src="https://cdn.sanity.io/images/aftdl3p2/production/a7bdef8ad751c1eb747e91be230e4f922738fd5e-1397x800.webp"
                    className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
                    width={640}
                    height={364}
                    alt="Gallery-Image-Five"
                    priority
                  />
                  {/* 640 X 364 */}
                </div>
              </div>
              <div className="mt-[10px] flex flex-row justify-end lg:mt-[40px]">
                <div className="w-[83.33%]">
                  <Image
                    sizes="(min-width: 1024px) 320px, 33vw"
                    src="https://cdn.sanity.io/images/aftdl3p2/production/96342b96fd3650b56d244d7ad135f3ab9498ff1c-1775x932.webp"
                    className="ml-auto h-auto w-full rounded-[12px]  lg:rounded-[20px]"
                    width={800}
                    height={800}
                    alt="Gallery-Image-Six"
                    priority
                  />
                  {/* 640 X 329 */}
                </div>
              </div>
            </section>
          </div>
          <div className="col-span-2 h-full">
            <Image
              sizes="(min-width: 1024px) 320px, 33vw"
              src="https://cdn.sanity.io/images/aftdl3p2/production/9cb57577e1ba608d7df5f02703d06a504067fbf4-551x840.webp"
              className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
              width={585}
              height={384}
              alt="Gallery-Image-Seven"
              priority
            />
            {/* 384 X 585 */}
          </div>
          <div className="col-span-4  h-full">
            <div>
              <Image
                sizes="(min-width: 1024px) 320px, 33vw"
                src="https://cdn.sanity.io/images/aftdl3p2/production/8f6b160cfa520ebb8b20bef66193cbd414f53b71-1736x969.webp"
                className="h-auto w-full rounded-[12px] lg:rounded-[20px] translate-y-[-30px] lg:translate-y-[-100px]"
                width={800}
                height={600}
                alt="Gallery-Image-Eight"
                priority
              />
              {/* 384 X 237 */}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PhotoGrid;
