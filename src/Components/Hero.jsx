import { SimpleGrid } from "@chakra-ui/react"

import { heroCards } from "../utils/data"
const Hero = () => {
  const style = {
    button: `px-4 py-2 bg-[#799A0D] hover:bg-[#8BAF13] duration-300 ease-in-out uppercase`,
    heroContent: `hero__content z-1 text-white flex flex-col items-start gap-3 px-[80px] h-[600px] justify-center`,
    heroCard:`hero__cards_card shadow-lg mx-1 duration-300 ease-in-out flex flex-col justify-end items-center gap-2 py-4`,
    heroCards:`hero__cards bg-white max-w-[1200px] mx-auto text-center relative z-10 `
  }
  return (
    <div className="hero h-[800px] my-0 ">
      <div className="h-[50rem] absolute top-0 w-full z-[-1]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1139 650" fill="none" className=" top-0 z-[-1] h-[100%]">
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
        <div className="hero-right h-[100%] z-[-2] w-full absolute right-0 top-0">

        </div>
      </div>
      <div className={style.heroContent}>
        <h3 className="text-4xl">наша компания занимается</h3>
        <h1 className="text-8xl uppercase font-bold">лесозаготовкой</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh <br /> euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <button className={style.button}>
          Оставить заявку
        </button>
      </div>
      {/***********  Hero Cards  **********************/}
      <SimpleGrid p="10px" columns={5} minChildWidth={160} className={style.heroCards} >
        {heroCards.map((data, i) => {
          return (
            <div className={style.heroCard} key={i}>
              <img src={data.img} alt={data.name} className="w-[73px] md:w-[81px] lg:w-[91px] " />
              <h2 className="text-sm lg:text-lg font-semibold">{data.name}</h2>
              <p className="text-base"> {data.info}</p>
              <button className={`${style.button} cadrs_button text-white text-base`}>список продукции</button>
            </div>
          );
        })}
      </SimpleGrid>
    </div>
  )
}

export default Hero