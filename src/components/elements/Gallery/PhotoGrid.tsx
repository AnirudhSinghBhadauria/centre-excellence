import Image from "next/image";
import React from "react";

const PhotoGrid = () => {
  return (
    <section className="primary-grid primary-transition pt-[150px] pb-[25px] scale-[1.6] sm:scale-100 sm:pt-[40px] sm:pb-[40px] md:pt-[50px] md:pb-[50px] lg:pb-[70px] lg:pt-0">
      <div className="col-span-4 lg:col-span-11 lg:col-start-2">
        {/* ROW ONE */}
        <section className="grid grid-cols-11 items-end gap-[10px] lg:gap-[42px]">
          <div className="relative col-span-2">
            <Image
              sizes="(min-width: 1024px) 320px, 33vw"
              src="https://cdn.sanity.io/images/aftdl3p2/production/222eebcc97692b70581e887b7dd3e57306f89eb1-600x913.webp"
              className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
              width={384}
              height={585}
              priority
              alt="Gallery-Image-One"
            />
            {/* 384 X 585 */}
          </div>
          <div className="col-span-3">
            <Image
              sizes="(min-width: 1024px) 320px, 33vw"
              src="https://cdn.sanity.io/images/aftdl3p2/production/88c6cb8fbf91406a0bf6c7e8e6916e964c299497-1600x1000.webp"
              className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
              width={384}
              height={239}
              alt="Gallery-Image-Two"
              priority
            />
            {/* 384 X 239 */}
          </div>
          <div className="col-span-2">
            <Image
              sizes="(min-width: 1024px) 320px, 33vw"
              src="https://cdn.sanity.io/images/aftdl3p2/production/4a5e8282919826ef8a37bafd4b756965ce845f7c-1230x768.webp"
              className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
              width={630}
              height={392}
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
                    src="https://cdn.sanity.io/images/aftdl3p2/production/d42c8ae8adb4b6499bcbe60047362da97b7bb819-1200x686.webp"
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
                    src="https://cdn.sanity.io/images/aftdl3p2/production/59341d88a84e59cee0243e9f26c124ef3264b99f-1397x800.webp"
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
                    src="https://cdn.sanity.io/images/aftdl3p2/production/910424656389a361ce95001bc98bbe2199a264d5-1775x932.webp"
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
              src="https://cdn.sanity.io/images/aftdl3p2/production/4ecfbe97fb4650aed88ecf825616df2ad795cab9-551x840.webp"
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
                src="https://cdn.sanity.io/images/aftdl3p2/production/f641fbb53f668a5e1a8f054d7dc4b81167e64972-1736x969.webp"
                className="h-auto w-full rounded-[12px] lg:rounded-[20px] translate-y-[-30px] lg:translate-y-[-100px]"
                width={800}
                height={600}
                alt="IGallery-Image-Eight"
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
