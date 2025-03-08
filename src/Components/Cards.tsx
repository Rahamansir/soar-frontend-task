// import React from 'react'
interface Cardprops {
  balance: number
  name: string
  expire: string
  cardno: string
  variant?: string
}

interface Repeat {
  l: string
  value: React.ReactNode
}

function Labels(props: Repeat) {
  return (
    <div>
      <div className="text-xs font-light">{props.l}</div>
      <div className="text-xl semi-bold">{props.value}</div>
    </div>
  )
}
export default function Cards(props: Cardprops) {
  const { balance, variant = 'dark' } = props

  const isDark = variant === 'dark'
  const darkStyles = {
    container: 'bg-gradient-to-r from-gray-600 to-gray-900 text-white',
    footer: 'bg-gradient-to-r from-white/10 to-white/0'
  }
  const whiteStyles = {
    container: 'bg-white text-black rounded border border-gray-200',
    footer: 'bg-gradient-to-r from-white/10 to-white/0'
  }
  return (
    <div
      className={`main w-72 h-50 rounded-lg ${isDark ? darkStyles.container : whiteStyles.container}`}
    >
      <section>
        <div className="header flex gap-36 p-2 ">
          <div className="leading-6 text-left p-2">
            {/* <div className="text-xs font-light">Balance</div>
          <div className="text-xl semi-bold">{props.balance}</div> */}
            <Labels l="Balance" value={balance} />
          </div>

          <div>
            <img className="w-8 pt-4" src="image.png" alt="icon" />
          </div>
        </div>
        <div className="Holder flex gap-14 leading-5 p-2 text-left pb-3 pl-4">
          <div>
            {/* <div className="text-xs font-light">CARD HOLDER</div>
          <div className="bold·font-medium">{props.name}</div> */}
            <Labels l="Card Holder" value={props.name} />
          </div>

          <div className="pr-7">
            {/* <h3 className="font-light text-xs">VALID THRU</h3>
          <h2 className="bold·font-medium">{props.expire}</h2> */}
            <Labels l="Valid Thru" value={props.expire} />
          </div>
        </div>
      </section>
      <div className="footer flex gap-14 text-left pl-6 pb-4 tracking-wide bg-gradient-to-r from-gray-50/10 to-transparent rounded rounded-b-lg pt-3 ">
        <div>{props.cardno}</div>
        <div className="flex ">
          <div className="rounded-full bg-white h-6 w-6 opacity-10"></div>
          <div className="rounded-full bg-white h-6 w-6 -ml-3 opacity-10"></div>
        </div>
      </div>
    </div>
  )
}
