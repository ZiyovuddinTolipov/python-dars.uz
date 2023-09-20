import Navbar from "./Navbar"
const Hero = () => {
  return (
    <div className="hero min-h-screen my-0">
      <Navbar />
      <svg xmlns="http://www.w3.org/2000/svg" width="1139" height="650" viewBox="0 0 1139 650" fill="none" className="absolute top-0 z-[-1] min-h-screen">
  <g filter="url(#filter0_b_6_2520)">
    <path d="M0 0H1139L607.5 650H0V0Z" fill="#1C1C1C" />
  </g>
  <defs>
    <filter id="filter0_b_6_2520" x="-10" y="-10" width="1159" height="670" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_6_2520" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_6_2520" result="shape" />
    </filter>
  </defs>
      </svg>
      <div className="hero-right min-h-screen z-[-2] w-full absolute right-0 top-0">
        
      </div>
    </div>
  )
}

export default Hero