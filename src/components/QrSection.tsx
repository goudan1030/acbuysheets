import Image from 'next/image';

export default function QrSection() {
  return (
    <section className="bg-white">
      <div className="flex justify-center py-[60px]">
        <div className="w-full px-4 sm:px-0 sm:w-[1320px] flex flex-col items-center gap-12">
          {/* QR 图片 */}
          <div className="relative w-[200px] h-[200px]">
            <Image
              src="/qr.png"
              alt="acbuy QR Code"
              fill
              className="object-contain"
            />
          </div>

          {/* 描述文字 */}
          <p className="text-[24px] font-bold text-black text-center">
            Use the QR code above to sign up to acbuy, or click the link here!<br/>
            If you use my link you will receive coupons worth ¥1,000!
          </p>
        </div>
      </div>
    </section>
  );
} 