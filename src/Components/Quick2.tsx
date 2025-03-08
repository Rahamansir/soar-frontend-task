// import { use } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel'
import Quick from './Quick'

const Data = [
  { title: 'Founder', name: 'Salman' },
  { title: 'Gm', name: 'Arif' },
  { title: 'Dgm', name: 'Akif' },
  { title: 'Bm', name: 'Feroz' },
  { title: 'Manager', name: 'Harish' },
  { title: 'Assistant', name: 'Gnesh' },
  { title: 'Employee', name: 'Modi' }
]

function Quick2() {
  return (
    <>
      <div className="flex flex-col justify-center h-screen items-center">
        <div className="w-[600px bg-slate-100 rounded-lg">
          <Carousel
            opts={{
              align: 'start'
            }}
            className=" p-6 rounded-md w-[500px] mx-12"
          >
            <CarouselContent>
              {Data.map((user, index) => (
                <CarouselItem key={index} className="basis-1/3 relative">
                  <Quick name={user.name} title={user.title} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className=" h-12 w-12 hover:bg-slate-300 disabled:hidden -left-4" />
            <CarouselNext className="h-12 w-12  hover:bg-slate-300 -right-4 disabled:hidden" />
          </Carousel>

          <div className="flex gap-7 text-black ml-4 p-4">
            <p className="pt-3">Write Amount</p>
            <div className="flex bg-white gap-8 rounded-full">
              <input
                type="number"
                placeholder="2000000"
                className="p-4 rounded-full outline-none appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
              />
              <button type="button" className="bg-blue-500 gap-3 flex p-3 rounded-full px-10">
                Send <img src="sender.png" alt="" className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quick2
