import { liveData } from "../_types/app";
import { getLive } from "../_utils/api";
import LiveCard from "./LiveCard";
import MainHeading from "./MainHeading";

const Live = async () => {
  const liveData: liveData = await getLive();

  return (
    <section className="p-16">
      <div className="container ">
        <MainHeading title="Live Anywhere" />
        <div className="flex space-x-3 overflow-scroll p-3 no-scrollbar">
          {liveData.map((item) => (
            <LiveCard key={item.title} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Live;
