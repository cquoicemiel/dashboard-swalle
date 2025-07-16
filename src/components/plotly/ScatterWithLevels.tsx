"use client"

import { useState, useEffect } from "react";
import ScatterPlot from "./ScatterPlot";


type ScatterPlotData = {
  X: number[];
  Y: number[];
  Z: number[];
  DZ: number[];
};

type ScatterWithLevelsProps = {
  data: ScatterPlotData[];
};

export default function ScatterWithLevels({data}: ScatterWithLevelsProps){


    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
        document.body.style.overflow = "auto";
        };
    }, []);


    const [level, setLevel] = useState<number>(1);


    return(
        <div className="h-full w-full flex flex-col">
            <div className="flex-[7]">
                {/* {data? null : <div className="absolute top-1/2 left-1/2 translate-[-50%]">
                    Chargement des données...
                </div>  } */}
                <ScatterPlot data={data[level - 1]} title={`Swall-E - Holo 3 - Niveau ${level}`}/>
            </div>
            <div className="relative flex-[1] flex gap-2.5 justify-center items-center bg-background">
                <div>1</div>
                <input
                    type="range"
                    min="1"
                    max={data.length}
                    step="1"
                    value={level}
                    onChange={(e) => setLevel(parseInt(e.target.value))}
                    className="
                    w-[33%] h-4 appearance-none bg-gray-300 rounded-full cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white
                    "
                />
                <div>{data.length}</div>
              
            </div>
        </div>
    )
}

