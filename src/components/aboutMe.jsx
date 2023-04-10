import Image from "../assets/image.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="w-[80%] xl:h-[100vh] m-auto text-white text-[24px]"
    >
      <h2 className="text-[#5ff3d1] text-[30px] sm:text-[44px] mb-[0] md:mb-[10px]">
        \\ &nbsp;About Me
      </h2>
      <div className="flex flex-col md:flex-row pt-[20px]">
        <div className="w-full md:w-[30%] pt-[20px] hover:scale-105 transition duration-300 ease-in-out flex md:block justify-center">
          <img
            src={Image}
            className="w-[300px] border-4 border-[#5ff3d1] rounded-xl"
            alt="hero"
          />
        </div>
        <div className="w-full md:w-[70%] pt-[30px] md:pt-[15px] md:pl-[20px]">
          <p className="text-[18px] md:text-[22px] lg:text-[24px] font-['Arial']">
            Hey there, I'm Siddesh! I'm passionate about exploring new
            technology and using it to create cool things. When I discovered
            programming, I quickly realized its potential to automate my tasks,
            so I began writing scripts and monetizing them. My journey into web
            development led me to discover the fascinating world of Crypto and
            web3 technology, which I find truly amazing. I've since contributed
            to various web3 projects, write long tech stories, and even lead the
            CoinDCX Local Chapter in my city. And of course, who doesn't love
            some extra cash? That's why I occasionally participate in bounties
            too.
          </p>
        </div>
      </div>
    </div>
  );
}
