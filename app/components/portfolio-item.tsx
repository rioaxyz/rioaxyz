import React from "react";
import Image from "next/image";
import type { NextPage } from "next";

export interface PortfolioItem {
  image: string;
  title: string;
  url: string;
  description: string;
}

const PortfolioItem: NextPage<PortfolioItem>  = ({ image, title, url, description }) => {
  function goTo() {
    window.open(url, '_blank');
  };
  
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <Image
          width={500}
          height={500}
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
