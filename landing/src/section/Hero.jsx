// importing packages and necessary files
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants/index";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full border-2 flex xl:flex-row flex-col justify-center min-h-screen max-contatiner"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] kax-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            the new arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
        </h1>
        <p className="font-montserrat text-slate-800 text-lg landing-8 mt-6 mb-14 sm:max-w-sm">
          Discover , stylish Nike arribal , qulaity comfort and innovation for
          your active life
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        {/* for stats */}
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="text-slate-gray leading-7 font-montserrat">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img src={bigShoe1} alt="shoe collection" width={610} height={500} />
        <div>
          {/* dynamic generatiom of img */}
          {shoes.map((shoe) => {
            <div key={shoe}>
              <ShoeCard />
            </div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
