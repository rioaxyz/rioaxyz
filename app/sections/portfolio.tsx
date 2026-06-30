import PORTFOLIO from "../models/portfolio";
import PortfolioItem from "../components/portfolio-item";
import React from "react";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="max-w-5xl mx-auto pb-32 scroll-mt-10">
      <h2 className="text-xs tracking-[0.16em] text-accent/40 text-center mb-8">
        SELECTED WORK
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PORTFOLIO.map((item) => (
          <PortfolioItem
            key={item.title}
            image={item.image}
            title={item.title}
            url={item.url}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};
