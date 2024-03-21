import Hero from "../Components/Hero";
import wave from "../assets/images/wave.svg";
const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-116px)] bg-base-200">
      <Hero></Hero>
      <img src={wave} alt="" className="absolute bottom-0 w-full" />
    </div>
  );
};

export default Home;
