import PORTFOLIO from "../models/portfolio";
import PortfolioItem from "../components/portfolio-item";

export const Portfolio = () => {
  return (
    <>
      <h1 className="text-3xl font-mono py-10 h-38">Portfolio</h1>
      <section>
        {PORTFOLIO.map((item: any) => {
          return (
            <PortfolioItem
              image={item.image}
              title={item.title}
              url={item.url}
              description={item.description}
              key={item.title}
            />
          );
        })}
      </section>
    </>
  );
};
