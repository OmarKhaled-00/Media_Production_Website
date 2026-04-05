import TrainBranding from "../TrainBranding/TrainBranding";
import { useState, useEffect } from "react";
import { homeData } from "../../data/home_data/home_data";
function OurClients() {
  const target = 250; // target number
  const duration = 5000; // duration in milliseconds
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 1); // calculate interval

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center text-5xl text-white max-md:text-2xl">
        {homeData.ourClients_section.subtitle(count)}
        <br />
        {homeData.ourClients_section.subtitle2}
      </div>
      <TrainBranding />
    </div>
  );
}

export default OurClients;
