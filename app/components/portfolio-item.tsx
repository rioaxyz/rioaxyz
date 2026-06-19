import React from "react";
import type { NextPage } from "next";

export interface PortfolioItem {
  image: string;
  title: string;
  url: string;
  description: string;
}

const PortfolioItem: NextPage<PortfolioItem> = ({
  image,
  title,
  url,
  description,
}) => {
  const comingSoon = !url || url === "#";

  const card = (
    <div className="group rounded-xl overflow-hidden border border-accent/10 hover:border-primary/60 transition-colors">
      <div
        style={{ backgroundImage: `url("${image}")` }}
        className={`h-32 bg-center bg-accent/[0.04] ${comingSoon ? "bg-contain bg-no-repeat p-6" : "bg-cover"}`}
      />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-base text-accent">{title}</span>
          {comingSoon ? (
            <span className="text-xs text-accent/40">soon</span>
          ) : (
            <span className="text-primary transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          )}
        </div>
        <p className="text-xs text-accent/50 mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  if (comingSoon) {
    return <div className="cursor-default">{card}</div>;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      {card}
    </a>
  );
};

export default PortfolioItem;
