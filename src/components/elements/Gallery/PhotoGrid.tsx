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
              src="https://cdn.sanity.io/images/s695h8ei/production/bf17b875d2a869fca1048a6c50568b7f05c88b86-390x594.jpg?w=384&q=75&fit=clip&auto=format"
              className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
              width={500}
              height={500}
              alt="Image-one"
            />
            {/* 384 X 585 */}
          </div>
          <div className="col-span-3">
            <Image
              sizes="(min-width: 1024px) 320px, 33vw"
              src="https://cdn.sanity.io/images/s695h8ei/production/f1e1c63d9bb60b08bfa5df71754ce15029b68e39-630x392.jpg?w=384&q=75&fit=clip&auto=format"
              className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
              width={500}
              height={500}
              alt="Image-one"
            />
            {/* 384 X 239 */}
          </div>
          <div className="col-span-2">
            <Image
              sizes="(min-width: 1024px) 320px, 33vw"
              src="https://cdn.sanity.io/images/s695h8ei/production/f1e1c63d9bb60b08bfa5df71754ce15029b68e39-630x392.jpg?w=384&q=75&fit=clip&auto=format"
              className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
              width={500}
              height={500}
              alt="Image-one"
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
                    src="https://cdn.sanity.io/images/s695h8ei/production/a1e29d5d65eaa3dc822f43276c7478759f3bb0c8-404x230.jpg?w=640&q=75&fit=clip&auto=format"
                    className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
                    width={500}
                    height={500}
                    alt="Image-one"
                  />
                  {/* 640 X 364 */}
                </div>
                <div className="basis-1/2">
                  <Image
                    sizes="(min-width: 1024px) 320px, 33vw"
                    src="https://cdn.sanity.io/images/s695h8ei/production/a1e29d5d65eaa3dc822f43276c7478759f3bb0c8-404x230.jpg?w=640&q=75&fit=clip&auto=format"
                    className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
                    width={500}
                    height={500}
                    alt="Image-one"
                  />
                  {/* 640 X 364 */}
                </div>
              </div>
              <div className="mt-[10px] flex flex-row justify-end lg:mt-[40px]">
                <div className="w-[83.33%]">
                  <Image
                    sizes="(min-width: 1024px) 320px, 33vw"
                    src="https://cdn.sanity.io/images/s695h8ei/production/c8f4092e2f99754bc40f55fa039b70869535d26a-1812x932.jpg?w=640&q=75&fit=clip&auto=format"
                    className="ml-auto h-auto w-full rounded-[12px]  lg:rounded-[20px]"
                    width={800}
                    height={800}
                    alt="Image-one"
                  />
                  {/* 640 X 329 */}
                </div>
              </div>
            </section>
          </div>
          <div className="col-span-2 h-full">
            <Image
              sizes="(min-width: 1024px) 320px, 33vw"
              src="https://cdn.sanity.io/images/s695h8ei/production/8e4eb588d5d9d11477b88ec6bd1f2a2d3a220cd6-394x600.jpg?w=384&q=75&fit=clip&auto=format"
              className="h-auto w-full rounded-[12px] lg:rounded-[20px]"
              width={500}
              height={500}
              alt="Image-one"
            />
            {/* 384 X 585 */}
          </div>
          <div className="col-span-4  h-full">
            <div>
              <Image 
                sizes="(min-width: 1024px) 320px, 33vw"
                src="https://cdn.sanity.io/images/s695h8ei/production/c0c5040ca9d5e7274468bf3767be49bc58cf4dd2-866x534.jpg?w=384&q=75&fit=clip&auto=format"
                className="h-auto w-full rounded-[12px] lg:rounded-[20px] translate-y-[-30px] lg:translate-y-[-100px]"
                width={500}
                height={500}
                alt="Image-one"
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
