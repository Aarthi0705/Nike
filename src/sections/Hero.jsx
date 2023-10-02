import { useState } from "react"

import { bigShoe1 } from "../../public/assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes , statistics} from "../constants/index.js"
import { arrowRight } from "../../public/assets/icons"


const Hero = () => {

  
const [ bigShoeImg, setBigShoeImg ] = useState(bigShoe1)
  return (
    <section
    id="home"
    className="w-full flex xl:flex flex-col md:flex-row justify-center min-h-screen gap-10 max-container  ">
    <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-2xl:padding-x pt-28 ">
      <p className="text-xl font-montserrat text-coral-red">Our Summer collection</p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[80px] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
        <br/>
        <span className="text-coral-red inline-block mt-3 ">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"> Discover stylish Nike arrivals, quality comfort, and innovation for your active life. </p>
        <Button label="Shop Now" iconURL={arrowRight} alt="shop" />
      <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"> 
      {statistics.map((stat) => (
        <div key={stat.label}>
        <p className=" font-4xl font-palenquin font-bold ">{stat.value}</p>
        <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
        </div>
      ))}
      </div>
    </div>
        <div className="relative flex-1 flex justify-center items-center 
        xl:min-h-screen  max-xl:py-40 bg-primary bg-hero bg-cover bg-center hidden md:block ">
          <img 
            src= {bigShoeImg} 
            alt= "shoe" 
            width={500} 
            height={500}
            className="object-contain relative z-10" 
          />
           <div  className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left=[10%] max-sm:px-6">
        {shoes.map((shoe)=> (
          <div key={shoe}>
          <ShoeCard
            imgURL = {shoe}
           changeBigShoe = 
           {(shoe) => {setBigShoeImg(shoe)}}
           bigShoeImg = {bigShoeImg} 

           />

          </div>
        ))}
        </div>
        </div>
       
    

    </section>
  )
}

export default Hero