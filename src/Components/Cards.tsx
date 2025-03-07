// import React from 'react'

export default function Cards() {
  return (
    <div className="main w-72 h-50 bg-red-500 rounded-lg text-white bg-gradient-to-r from-gray-500 to-black">
      <div className="header flex gap-36 p-2 ">
        <div className="leading-6 text-left p-2">
          <div className="text-xs font-light">Balance</div>
          <div className="text-xl semi-bold tracking-wide">$5,756</div>
        </div>

        <div>
          <img className="w-8 pt-4" src="/src/assets/image.png" alt="icon" />
        </div>
      </div>
      <div className="Holder flex gap-14 leading-5 p-2 text-left pb-3 pl-4">
        <div>
          <div className="text-xs font-light">CARD HOLDER</div>
          <div className="bold·font-medium">Eddy Cusama</div>
        </div>

        <div className="pr-7">
          <h3 className="font-light text-xs">VALID THRU</h3>
          <h2 className="bold·font-medium">12/22</h2>
        </div>
      </div>

      <div className="footer flex gap-14 text-left pl-6 pb-4 tracking-wide bg-gradient-to-r from-gray-50/10 to-transparent rounded rounded-b-lg pt-3">
        <div>3778 **** **** 1234</div>
        <div className="flex">
          <div className="rounded-full bg-white h-6 w-6 opacity-10"></div>
          <div className="rounded-full bg-white h-6 w-6 -ml-3 opacity-10"></div>
        </div>
      </div>
    </div>
  )
}
