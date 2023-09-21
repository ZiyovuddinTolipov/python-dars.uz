
const Info = () => {
  const style = {
    button: `px-5 py-2 bg-[#799A0D] hover:bg-[#8BAF13] duration-300 ease-in-out uppercase`,
    content: `h-[100vh] text-white gap-4 w-full flex flex-col items-start justify-center max-w-[1300px] mx-auto pl-0 md:pl-4  lg:pl-40`,
  }
  return (
    <div className="h-[100vh] w-full  relative  ">
      <div className="top h-[150px] bg-white w-full" />
      <div className="info-bg w-full h-[100vh] absolute flex gap-0 z-[-1]">
        <div className="left w-[50%] h-[100vh]"  ></div>
        <div className="right h-[100vh] w-[50%] " ></div>
      </div>
      <div className={style.content}>
        <img src="./img/infoSvg.svg" alt="info" />
        <h2 className="text-5xl font-bold w-[90%]">
          Quam adipisci velit, sed quia numquam eius modi tempora incidunt!
        </h2>
        <p className="w-[80%] font-[300]">
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia est.
        </p>
        <button className={style.button}>подробнее</button>
      </div>
    </div>
  )
}

export default Info