export function ProductCardSkeleton() {
  return (
    <div className="block border border-[#DADEE6] h-[382px] -ml-[1px] -mt-[1px] animate-pulse w-full sm:w-auto">
      <div className="h-[318px] bg-gray-100" />
      <div className="h-[64px] flex flex-col justify-center px-4 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/4" />
      </div>
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Banner 区域 - 保持原样，不使用骨架屏 */}
      <div className="bg-[#D6FFF1] h-[320px]">
        <div className="h-full flex justify-center items-center px-4 sm:px-0">
          <div className="w-full sm:w-[1212px] h-[225px] bg-black rounded-[20px] flex flex-col justify-center items-center px-4 sm:px-[60px]">
            {/* 标题和价格区域留空 */}
          </div>
        </div>
      </div>

      {/* 图片区域骨架屏 */}
      <div className="flex justify-center py-[60px] px-4 sm:px-0">
        <div className="w-full sm:w-[1320px]">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-[40px]">
            <div className="w-full sm:w-[440px] h-[456px] border border-[#DADEE6] bg-gray-100" />
            <div className="w-full sm:w-[440px] h-[456px] border border-[#DADEE6] bg-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
} 