import { ExploreData } from "../_types/app";
import { getExplore } from "../_utils/api";
import ExploreCard from "./ExploreCard";
import MainHeading from "./MainHeading";

const Explore = async () => {
  const exploreData: ExploreData = await getExplore();

  return (
    <section className="pt-6 ">
      <div className="container">
        <MainHeading title="Explore Nearby" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {exploreData.map((explore) => (
            <ExploreCard
              key={explore.img}
              img={explore?.img}
              location={explore.location}
              distance={explore.distance}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
