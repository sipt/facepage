import "./Imprint.css";
import icon from "../assets/imprint-icon-white.png";
import colorIcon from "../assets/imprint-icon-color.png";
import apple from "../assets/appstore.svg";

function Imprint() {
  return (
    <div className="flex flex-col text-white min-h-screen bg-neutral-900 bd-masthead">
      <div className="flex h-[64px] py-[12px] px-[16px] md:px-[64px] w-full items-center justify-between">
        <div className="flex flex-row">
          <img className="h-[32px]" src={icon} alt="screen short" />
          <div className="font-bold text-white text-2xl ml-4">企途</div>
        </div>
      </div>
      <div className="w-full flex-grow flex flex-col mb-10 items-center justify-center">
        {/* <div className=" max-w-[1250px] flex md:flex-row flex-col justify-start md:justify-between md:mx-[100px]"> */}

        <div className="flex flex-col justify-center items-center md:items-start  my-[64px] md:my-0 gap-[16px]">
          <div className="mx-5 max-w-[500px] flex flex-col gap-[16px] items-center md:items-start">
            <img src={colorIcon} className="h-[128px] w-[128px]" />
            <p className="md:text-5xl text-xl font-bold">企途 - 行程规划</p>
            <p className="md:text-xl">
              还在为旅行前的繁琐准备而烦恼？让企途来帮你！企途是一款专注于旅行行程规划的智能工具，助你轻松规划每一次精彩旅程。
            </p>
            <a
              className="max-w-[700px] mt-10 "
              href="https://apps.apple.com/cn/app/%E4%BC%81%E9%80%94-%E8%A1%8C%E7%A8%8B%E8%A7%84%E5%88%92/id6739816753"
            >
              <img src={apple} alt="screen short" />
            </a>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="min-h-[64px] w-full flex flex-row items-center justify-between px-[16px] md:px-[64px]">
        <span>©2025 企途</span>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
}

export default Imprint;
