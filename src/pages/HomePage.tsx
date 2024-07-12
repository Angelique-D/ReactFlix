import React from "react";
import Card from "../components/common/Card";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto mb-2">
      <h4 className="text-center">Les tendance</h4>
      <div className="flex flex-wrap gap-4 md:gab-8 justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>

      <h4 className="text-center mt-5 mb-2">Les dernières sorties 80 56</h4>
      <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
