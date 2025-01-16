export default function HomeBanner() {
  return (
    <div className="bg-[#D6FFF1] h-[320px]">
      <div className="px-4 sm:px-20 h-full">
        <div className="flex flex-col items-center h-full">
          {/* 顶部标题 */}
          <h2 className="text-[24px] sm:text-[36px] font-bold text-black pt-8">
            over 2000+
          </h2>

          {/* 黑色背景区域 */}
          <div className="w-[90%] sm:w-[820px] h-[432px] bg-black mt-4 rounded-[20px] flex flex-col items-center pt-12 pb-8">
            {/* 主标题 */}
            <h1 className="text-[48px] sm:text-[72px] font-bold text-white text-center">
              acbuy friends
            </h1>

            {/* 标签 */}
            <span className="text-[24px] sm:text-[36px] font-bold text-[#D6FFF1] mt-0.5 text-center">
              WITH QC PHOTOS
            </span>

            {/* 描述文字 */}
            <p className="text-[16px] sm:text-[20px] text-white mt-1 leading-relaxed text-center w-full px-[15px] sm:px-[30px]">
              For the last couple of months I have been collecting over 2000+ of the best acbuy friends! 
              Each item has QC photos and prices listed in USD! This site will regularly update to include 
              new finds and replace out-of-stock items! So please bookmark this site! I've categorized 
              the finds, making it incredibly easy to navigate and find precisely what you're looking for!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 