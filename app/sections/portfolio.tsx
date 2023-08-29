"use client";

import PORTFOLIO from "../models/portfolio";
import PortfolioItem from "../components/portfolio-item";
import React from "react";

export const Portfolio = () => {
  const dd = PORTFOLIO[0];
  const vaypor = PORTFOLIO[1];

  return (
    <>
      <h1 className="text-3xl font-mono py-10 h-38">Portfolio</h1>
      <section className="w-screen">
        <div className="flex marquee">
          <div className="flex-initial md:w-1/6 h-20 outline outline-1 outline-slate-200/20"></div>
          <PortfolioItem
            image={dd.image}
            title={dd.title}
            url={dd.url}
            description={dd.description}
            key={dd.title}
            styles={`flex-initial w-4/6 md:w-3/6 outline outline-1 outline-primary/80 hover:outline-primary cursor-pointer`}
          />
          <div className="flex-initial w-1/6 md:w-2/6 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial w-1/6 md:w-1/6 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-1/6 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-2/6 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-2/6 outline outline-1 outline-slate-200/20"></div>
        </div>
        <div className="flex">
          <div className="flex-initial w-2/6 md:w-2/6 h-20 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-3/6 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-1/6 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-2/6 outline outline-1 outline-slate-200/20"></div>
          <PortfolioItem
            image={vaypor.image}
            title={vaypor.title}
            url={vaypor.url}
            description={vaypor.description}
            key={vaypor.title}
            styles={`flex-initial w-3/6 md:w-2/6 outline outline-1 outline-primary/80 hover:outline-primary cursor-pointer`}
          />
          <div className="flex-initial w-1/6 md:w-2/6 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-1/6 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-1/6 outline outline-1 outline-slate-200/20"></div>
        </div>
        <div className="flex">
          <div className="flex-initial md:w-1/6 h-20 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-3/6 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-1/6 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-1/6 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-3/6 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-1/6 outline outline-1 outline-slate-200/20"></div>
          <div className="flex-initial md:w-2/6 outline outline-1 outline-slate-200/20"></div>
        </div>
      </section>
    </>
  );
};
