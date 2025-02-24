import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative z-[-10] flex flex-col-reverse md:flex-row items-center bg-foreground p-6 rounded-lg shadow-lg px-[10%] w-full lg:max-w-[97%] mx-auto dark:text-black">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold dark:text-black">
          Discover our Curated Collection
        </h2>
        <p className="mt-2 text-gray-600">
          Explore our carefully selected products for your home and lifestyle.
        </p>
        <Link href="/">
          <button className="mt-4 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-black transition">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/cup.jpg"
          alt="Shopping"
          width={400}
          height={300}
          className="rounded-lg transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default HeroSection;
