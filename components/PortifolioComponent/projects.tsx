import { useEffect, useState } from "react";
import ImageRatio from "../AppComponents/ImageRatio";
import UseResize from "./hookResize";

export default function Projects() {
  const { Ratiolg, Ratiomd, Ratiosm, Ratioxlg } = UseResize();

  return (
    <div className="w-full self-center bg-transparent flex flex-col justify-center  items-center gap-4 p-6 border-t-4  ">
      <div className="flex gap-4 sm:flex-nowrap flex-wrap justify-center ">
        <a href="https://github.com/eramoss/tachiyomi-extensions">
          <ImageRatio
            title="Tachiyomi Extension"
            FisrtRatio={9}
            SecondRatio={Ratioxlg}
            src="/tachiyomi.png"
            alt="repositorie of project"
          />
        </a>
        <a href="https://password-generator-eramoss.vercel.app/">
          <ImageRatio
            title="Password-Generator"
            FisrtRatio={9}
            SecondRatio={Ratiomd}
            src="/passwordGenerator.png"
            alt="repositorie of project"
          />
        </a>
        <a href="https://github.com/eramoss/Andarilho">
          <ImageRatio
            title="Andarilho API - a simple web scrapping"
            FisrtRatio={9}
            SecondRatio={Ratiolg}
            src="/designSystem.jpeg"
            alt="repositorie of a project Design System"
          />
        </a>
      </div>

      <div className="flex gap-4 sm:flex-nowrap flex-wrap justify-center ">
        <a href="https://pomodoro-flax-two.vercel.app/">
          <ImageRatio
            title="Pomodore"
            FisrtRatio={9}
            SecondRatio={Ratiosm}
            src="/pomodoro.png"
            alt="repositorie of project pomodore study"
          />
        </a>
        <div className="sm:-mt-36  ">
          <a href="https://github.com/eramoss/stupid-ugly-diff">
            <ImageRatio
              title="Simple diff tool in Rust"
              FisrtRatio={9}
              SecondRatio={Ratiolg}
              src="https://image3.slideserve.com/6196810/2-lcs-and-sequence-alignment-l.jpg"
              alt="repositorie of project expenses chart component"
            />
          </a>
        </div>

        <div className="sm:-mt-10">
          <a href="https://github.com/eramoss/weather-app">
            <ImageRatio
              title="Weather App"
              FisrtRatio={9}
              SecondRatio={Ratiomd}
              src="/Weather-App.jpeg"
              alt=" repositorie of project weather app"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
