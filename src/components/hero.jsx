import styled from "styled-components";
import { keyframes } from "styled-components";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/man.json";
import animationData2 from "../lotties/laptop.json";
import { SocialIcon } from "react-social-icons";
export default function Hero() {
  return (
    <>
      <div className="flex flex-col relative md:flex-row justify-around  w-[80%] pt-[0px] md:pt-[180px] m-auto h-[90vh]">
        <div className="mr-[40px]">
          <span className="text-[#5ff3d1] text-[20px] font-normal">Hi,</span>
          <div className="leading-[70px]">
            <div className="flex flex-row font-semibold text-white text-[50px] md:text-[78px]">
              <p>I'm&nbsp;</p>
              <AnimatedGradientText className="text-[50px] md:text-[78px]">
                Siddesh.
              </AnimatedGradientText>
            </div>
            <h3 className="font-medium text-white text-[30px] md:text-[44px] leading-8 md:leading-[70px]">
              I love building for/around web3 tech.
            </h3>
            <p className="font-medium text-white text-[13px] md:text-[13px] leading-8 md:leading-[70px]">
              I accidentally ran&nbsp;&nbsp;&nbsp;
              <code className="text-sm font-mono text-[#ff3c00]">
                git rm -f *
              </code>
              &nbsp;&nbsp;&nbsp;So follow me on my socials until i get this shit
              fixed.
            </p>

            <span className="text-[#5ff3d1] text-[20px] font-normal leading-5">
              Full Stack Engineer
            </span>
          </div>
          <div className="mt-[20px]">
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
        </div>
        <div className="absolute hidden sm:block lg:static right-[-90px] bottom-[5%] h-[260px] lg:h-[300px]">
          <Lottie options={defaultOptions} />
        </div>
        <div className="absolute right-[-40px] bottom-[90px] flex sm:hidden">
          <Lottie options={defaultOptions2} height={200} width={200} />
        </div>
      </div>
    </>
  );
}
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationData2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
export const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(192deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 4s infinite linear;
  font-feature-settings: "kern";
  overflow-wrap: break-word;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;
