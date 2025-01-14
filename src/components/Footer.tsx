import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 h-[400px]">
      <div className="px-20">
        <div className="flex flex-col items-start space-y-8">
          <Image 
            src="/logo.svg" 
            alt="ACBuySheets" 
            width={100}
            height={24}
            className="h-6 w-auto"
          />
          
          <div className="text-xs space-y-6 text-gray-300">
            <p>
              © 2024 ACBuySheets.com is an independent platform and is not affiliated with or endorsed by the AllChinaBuy.com website or brand. Our website's primary function is to facilitate the discovery of products available on the AllChinaBuy website. ACBuySheets.com is exclusively intended for private users and does not function as a marketplace.
            </p>
            
            <p>
              This website does not offer physical products for sale, nor is it involved in any trading activities. Our sole purpose is to provide information to visitors. We do not function as a middleman or any other part of the supply chain.
            </p>
            
            <p>
              Any information found on ACBuySheets.com should not be construed as advice of any kind. We do not endorse or recommend the purchase of any products. This platform does not engage in the sale of any items. All purchases are made at the user's discretion and risk. The mention of product names and their identification is solely presented for educational identification purposes, and ACBuySheets.com maintains no affiliations with any showcased products or brands.
            </p>
            
            <p>
              <strong className="text-white">Affiliate Disclaimer:</strong> Please be aware that this website contains affiliate links. This means that we may earn a small commission from our sign up links. We do not earn commissions from any individual products sold, only the parcel shipping cost for their function as a freight forwarder. Therefore it is not our responsibility for what you buy. These commissions contribute to the ongoing maintenance and development of our website, without imposing any additional cost to you. We sincerely appreciate your support.
            </p>
            
            <p>
              <strong className="text-white">Disclaimer:</strong> External website content is beyond our control, and we hold no responsibility for it. ACBuySheets.com has no association with Weidian.com, Taobao.com, 1688.com, tmall.com, or any other online shopping platforms.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 