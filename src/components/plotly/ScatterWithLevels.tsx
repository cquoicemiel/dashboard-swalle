"use client"

import { useState } from "react";
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

      const [level, setLevel] = useState<number>(1);
    

    return(
        <div className="h-full w-full flex flex-col">
            <div className="flex-[5]">
                <div className="absolute top-1/2 left-1/2 translate-[-50%]">
                    Chargement des données...
                </div>
                <ScatterPlot data={data[level - 1]} title={`Scatter Plot 3D - Niveau ${level}`}/>
            </div>
            <div className="flex-[1] flex gap-2.5 justify-center items-center">
                <div>1</div>
                <input
                    type="range"
                    min="1"
                    max="18"
                    step="1"
                    value={level}
                    onChange={(e) => setLevel(parseInt(e.target.value))}
                    className="
                     bg-amber-300
                    w-[33%] h-4 appearance-none bg-gray-300 rounded-full cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:h-5
                    [&::-webkit-slider-thumb]:w-5
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-indigo-500
                    [&::-webkit-slider-thumb]:border-2
                    [&::-webkit-slider-thumb]:border-white
                    [&::-moz-range-thumb]:appearance-none
                    [&::-moz-range-thumb]:h-5
                    [&::-moz-range-thumb]:w-5
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-indigo-500
                    [&::-moz-range-thumb]:border-2
                    [&::-moz-range-thumb]:border-white
                    "
                />
                <div>18</div>
              
            </div>
        </div>
    )
}

