import Image from 'next/image';

export default function QrSection() {
  return (
    <section className="bg-white h-[468px]">
      <div className="flex justify-center py-[60px]">
        <div className="w-[1320px] flex flex-col items-center gap-12">
          {/* QR 图片 */}
          <div className="relative w-[200px] h-[200px]">
            <Image
              src="/qr.png"
              alt="AllChinaBuy QR Code"
              fill
              className="object-contain"
            />
          </div>

          {/* 描述文字 */}
          <p className="text-[24px] font-bold text-black text-center">
            Use the QR code above to sign up to AllChinaBuy, or click the link here!<br/>
            If you use my link you will receive coupons worth ¥1,000!
          </p>
        </div>
      </div>
    </section>
  );
} 