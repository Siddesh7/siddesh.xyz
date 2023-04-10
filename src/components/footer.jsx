import { SocialIcon } from "react-social-icons";
import { FiExternalLink } from "react-icons/fi";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-row justify-center md:hidden my-[30px]">
        <SocialIcon
          url="https://twitter.com/0xsiddesh"
          bgColor="#5ff3d1"
          fgColor="#000000"
        />
        <SocialIcon
          url="https://linkedin.com/in/siddesh-eth"
          bgColor="#5ff3d1"
          fgColor="#000000"
          className="mx-[10px]"
        />
        <SocialIcon
          url="https://github.com/siddesh7"
          bgColor="#5ff3d1"
          fgColor="#000000"
        />
      </div>
      <div className="flex flex-row w-[90%] m-auto justify-between items-center mt-[0] md:mt-[70px] mb-[30px]">
        <a
          href="https://websidyn.com/"
          className="text-white text-[14px] md:text-[18px] font-normal flex flex-row items-center hover:text-[#5ff3d1] transition duration-300 ease-in-out"
          target={"_blank"}
          rel={"noreferrer"}
        >
          Check my web dev agency!
          <FiExternalLink className="mx-[2px] w-[20px]" />
        </a>
        <div className="w-[70%] hidden md:flex flex-row justify-center translate-x-[-9%]">
          <SocialIcon
            url="https://twitter.com/websidyn"
            bgColor="#5ff3d1"
            fgColor="#000000"
          />
          <SocialIcon
            url="https://linkedin.com/in/siddesh-eth"
            bgColor="#5ff3d1"
            fgColor="#000000"
            className="mx-[10px]"
          />
          <SocialIcon
            url="https://github.com/siddesh7"
            bgColor="#5ff3d1"
            fgColor="#000000"
          />
        </div>
        <p className="text-white text-[14px] md:text-[18px] font-normal">
          #BUIDL
        </p>
      </div>
    </div>
  );
}
