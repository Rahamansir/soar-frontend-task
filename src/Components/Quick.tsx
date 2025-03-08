// import { useState } from "react"

interface TransferProps {
  name: string
  title: string
  img?: string
}

function Quick(props: TransferProps) {
  const { img = 'https://avatar.iran.liara.run/public?1' } = props
  return (
    <div
      id="Transfer-parent"
      className="flex flex-col items-center w-full pt-3 pb-3 hover:bg-slate-300 hover:rounded-lg"
    >
      <div id="Transfer-avatar" className="w-20 h-20 rounded-full">
        <img src={img} alt="" />
      </div>
      <p id="name" className="font-light">
        {props.name}
      </p>
      <p id="title" className="font-light text-blue-800">
        {props.title}
      </p>
    </div>
  )
}

export default Quick

// interface Customers {
//     name:string;
//     position:string
//     imgs?:string
// }

// function Quick(props:Customers) {
//   const {imgs = "https://avatar.iran.liara.run/public?"} = props
//   return (
//     <div>
//         <div className='p-6 m-6 border w-[100px] '>
//             <img className="rounded-full" src={imgs} alt="" />
//             <h2 className="p-1 font-bold">{props.name}</h2>
//             <h4>{props.position}</h4>
//         </div>

//     </div>
//   )
// }

// export default Quick
// const customerData = [
//   { name: 'John Doe', position: 'Developer', imgUrl: "https://avatar.iran.liara.run/public?1" },
//   { name: 'Jane Smith', position: 'Designer', imgUrl: "https://avatar.iran.liara.run/public?2" },
//   { name: 'Alex Johnson', position: 'Manager', imgUrl: "https://avatar.iran.liara.run/public?3" },
//   { name: 'Chris Lee', position: 'Product Owner', imgUrl: "https://avatar.iran.liara.run/public?4" },
//   { name: 'Sarah Brown', position: 'QA Engineer', imgUrl: "https://avatar.iran.liara.run/public?5" },
// ];

// const Quick = ({ customers }: { customers: typeof customerData }) => (
//   <div className='flex gap-20 p-8 border h-80 w-[500px]'>
//     {customers.map((customer, index) => (
//       <div key={index} className='justify-center items-center'>
//         <img src={customer.imgUrl} alt={customer.name} />
//         <h3>{customer.name}</h3>
//         <h4>{customer.position}</h4>
//       </div>
//     ))}
//   </div>
// );

// const App = () => <Quick customers={customerData} />;

// export default App;
