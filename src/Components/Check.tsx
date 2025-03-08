// import React from 'react';

interface CardProps {
  className?: string
  bgColor?: string
  gradientFrom?: string
  gradientTo?: string
  footerBg?: string
  textColor?: string
}

export default function Cards({
  bgColor = 'bg-gray-800', // Default background color
  gradientFrom = 'from-gray-500', // Default gradient start
  gradientTo = 'to-black', // Default gradient end
  footerBg = 'bg-gray-700',
  textColor = 'text-white' // Default footer background
}: CardProps) {
  return (
    <>
      <div
        className={`main w-72 h-50 rounded-lg ${textColor} ${bgColor} ${gradientFrom} ${gradientTo} bg-gradient-to-r`}
      >
        <div className="header flex gap-36 p-2 ">
          <div className="leading-6 text-left p-2">
            <div className="text-xs font-light">Balance</div>
            <div className="text-xl semi-bold tracking-wide">$5,756</div>
          </div>

          <div>
            <img className="w-8 pt-4" src="image.png" alt="icon" />
          </div>
        </div>
        <div className="Holder flex gap-14 leading-5 p-2 text-left pb-3 pl-4">
          <div>
            <div className="text-xs font-light">CARD HOLDER</div>
            <div className="bold font-medium">Eddy Cusama</div>
          </div>

          <div className="pr-7">
            <h3 className="font-light text-xs">VALID THRU</h3>
            <h2 className="bold font-medium">12/22</h2>
          </div>
        </div>

        <div
          className={`footer flex gap-14 text-left pl-6 pb-4 tracking-wide rounded rounded-b-lg pt-3 ${footerBg}`}
        >
          <div>3778 **** **** 1234</div>
          <div className="flex">
            <div className="rounded-full bg-white h-6 w-6 opacity-10"></div>
            <div className="rounded-full bg-white h-6 w-6 -ml-3 opacity-10"></div>
          </div>
        </div>
      </div>
    </>
  )
}
