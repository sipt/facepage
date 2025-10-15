import PortfolioCard, { type PortfolioItem } from "./portfolio/PortfolioCard";
import "./App.css";
import avatar from "./assets/avatar.webp";
import imprintIcon from "./assets/imprint-icon.webp";
import imprintBg from "./assets/imprint-bg.webp";

function App() {
  // 示例数据
  const portfolioItems: PortfolioItem[] = [
    {
      id: "1",
      title: "企途 - 行程规划",
      description: "适合 J 人的旅行行程规划助手",
      backgroundImage: imprintBg,
      logoImage: imprintIcon,
      buttonText: "View",
      bgColor: "#e1e1e1cc",
      onButtonClick: () => console.log("Clicked on Cool Player"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 个人信息部分 */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-300/50 to-green-300/50">
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="flex flex-col items-center text-center text-white  font-[Pacifico]">
            {/* 头像 */}
            <div className="w-32 h-32 rounded-full bg-white shadow-2xl mb-6 overflow-hidden border-4 border-white/20">
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 姓名和职位 */}
            <h1 className="text-3xl text-black/90 font-bold mb-3 tracking-tight">
              @Sipt Wu
            </h1>

            {/* 简介 */}
            <p className="text-lg text-black/80 max-w-2xl mb-8 leading-relaxed">
              If you want something, go get it.
            </p>

            {/* 社交链接 */}
            <div className="flex gap-4">
              <a
                href="https://github.com/sipt"
                className="w-12 h-12 rounded-full bg-neutral-400/30 hover:bg-neutral-400/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-neutral-400/30 hover:bg-neutral-400/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-neutral-400/30 hover:bg-neutral-400/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-neutral-400/30 hover:bg-neutral-400/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 装饰性渐变 */}
        <div className="left-0 right-0 h-30 bg-gradient-to-b from-transparent to-gray-50/90"></div>
      </div>

      {/* 作品集部分 */}
      <div className="max-w-6xl mx-auto px-8 py-16 -mt-50 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Apps</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} className="mb-4" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
