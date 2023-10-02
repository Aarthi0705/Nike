import { shoe8 } from "../../public/assets/images"
import Button from "../components/Button"

const SupremeQuality = () => {
  return (
    <section id="about-us" 
    className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
    <div className='flex flex- flex-col'>
      <h2 className='text-4xl font-palanquin font-bold lg:max-w-lg'>We Provide You <span className='text-coral-red'>Super </span> 
      <span className='text-coral-red'>Quality </span>Shoes</h2>
      <p className='lg:max-w-lg mt-4 text-slate-gray info-text'>Ensuring premium confort and style, our meticulously crafted footwear is designed to elevate your experience, providing
      you with unmatched quality, innovation, and a touch of elegance.
    </p>
    <p className="mt-6 lg:max-w-lg info-text">
      Our dedication to detail and excellence ensures your satisfaction
      </p>
      <div className="mt-11 ">
      <Button label="View Details" iconURL=" " />
      </div>
    </div>
    <div className="flex flex- justify-center items-center">
    <img src={shoe8}
    alt="quality"
    width={550}
    height={520}
    />
    </div>
    </section>
  )
}

export default SupremeQuality