import React from "react";
import type { NextPage } from "next";

export interface PortfolioItem {
  image: string;
  title: string;
  url: string;
  description: string;
  styles: string;
}

const PortfolioItem: NextPage<PortfolioItem> = ({
  image,
  title,
  url,
  description,
  styles,
}) => {
  return (
    <div
      style={{ backgroundImage: `url("${image}")` }}
      className={`bg-center bg-cover ${styles}`}
      onClick={() => {
        window.open(url, "blank");
      }}
    >
      <div className="tooltip w-full h-full" data-tip={description}>
        <a className="p-2 bg-base-100 absolute bottom-0 right-0">{title}</a>
      </div>
    </div>
  );
};

export default PortfolioItem;
