export function ProductCardSkeleton() {
  return (
    <div className="block border border-[#DADEE6] h-[382px] -ml-[1px] -mt-[1px] animate-pulse">
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
      {/* Banner 骨架屏 */}
      <div className="bg-[#D6FFF1] h-[320px]">
        <div className="h-full flex justify-center items-center">
          <div className="w-[1212px] h-[225px] bg-gray-200 rounded-[20px]" />
        </div>
      </div>

      {/* 图片区域骨架屏 */}
      <div className="flex justify-center py-[60px]">
        <div className="w-[1320px]">
          <div className="flex justify-center gap-[40px]">
            <div className="w-[440px] h-[456px] border border-[#DADEE6] bg-gray-100" />
            <div className="w-[440px] h-[456px] border border-[#DADEE6] bg-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
} 