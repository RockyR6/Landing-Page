import { heroImg } from "../assets"
const Hero = () => {
  return (
    <div >
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0">
        <div className="flex flex-col justify-start gap-4">
            <p className="py-2 text-2xl uppercase text-[#208486] font-medium">start to success</p>
            <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">Access <span className="text-[#208486]">5000+</span>Courses from <span className="text-[#208486]">300</span> Instructors & Institutions</h1>
            <p className="py-2 text-lg text-gray-600">Various Versions have evolved over the years, sometimes by accident</p>
        </div>
        <img src={heroImg} className="md:order-last order-first"/>
      </div>
    </div>
  )
}

export default Hero
