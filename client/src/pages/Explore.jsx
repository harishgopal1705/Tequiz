import React from "react";
import html from "./../assets/images/html.jpg";
import java from "./../assets/images/java.jpg";
import { explore } from "./../constants/constants";

export default function Explore() {
  return (
    <div id="explore" className="w-full flex flex-col container">
      <div className="flex py-10">
        <h3 className="text-3xl font-bold">Tequiz Explore</h3>
      </div>
      <div className="flex flex-wrap gap-12 justify-center ">
        {explore.map((el) => (
          <div key={el.name} className="w-[300px] h-[200px] relative">
            <picture
              style={{
                backgroundImage: `url(${el.imgurl})`,
              }}
              className={`relative rounded-md bg-no-repeat bg-cover w-full h-full flex items-center`}
            >
              <span className="absolute top-2 right-2 px-3 py-1 bg-orange-600 rounded-full">
                frontend
              </span>
              <div>
                <p>Basic Html questions</p>
                <p className="font-roboto font-semibold text-3xl">HTML</p>
              </div>
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
}
