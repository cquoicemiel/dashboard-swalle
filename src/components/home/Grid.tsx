"use client";

import React from "react";

type GridProps = {
  r: number; //rows
  c: number; //columns
  children: React.ReactNode; //les enfants <Plot/>
};

export default function Grid({ r, c, children }: GridProps) {
  return (
    <div
      className={`grid gap-4 p-4 h-full`}
      style={{
        gridTemplateColumns: `repeat(${c}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${r}, minmax(0, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}
