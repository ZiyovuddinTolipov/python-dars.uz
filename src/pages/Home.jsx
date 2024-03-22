import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="h-[100vh] p-6 relative home-page">
            <div className="circle rounded-full absolute " />
            <div className="circle2 rounded-full absolute " />
            <div className="max-w-[1400px] h-full max-h-[800px] bg-black/20 backdrop-blur-md  mx-auto flex flex-col md:flex-row-reverse rounded-3xl p-10 relative">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <svg width="100%" height="100%" className="w-[60%] h-2/3" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" id="python-logo">
                        <path d="m116 296c0-30.328125 24.671875-55 55-55h170c13.785156 0 25-11.214844 25-25v-141c0-41.355469-33.644531-75-75-75h-70c-41.355469 0-75 33.644531-75 75v41h110c8.285156 0 15 6.714844 15 15s-6.714844 15-15 15h-181c-41.355469 0-75 33.644531-75 75v70c0 41.355469 33.644531 75 75 75h41zm105-220c-8.285156 0-15-6.714844-15-15s6.714844-15 15-15 15 6.714844 15 15-6.714844 15-15 15zm0 0" />
                        <path d="m437 146h-41v70c0 30.328125-24.671875 55-55 55h-170c-13.785156 0-25 11.214844-25 25v141c0 41.355469 33.644531 75 75 75h70c41.355469 0 75-33.644531 75-75v-41h-110c-8.285156 0-15-6.714844-15-15s6.714844-15 15-15h181c41.355469 0 75-33.644531 75-75v-70c0-41.355469-33.644531-75-75-75zm-146 290c8.285156 0 15 6.714844 15 15s-6.714844 15-15 15-15-6.714844-15-15 6.714844-15 15-15zm0 0" />
                    </svg>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start relative gap-3">
                    <h3 className="text-base md:text-2xl font text-yellow-200"><span className="text-blue-400">Python</span> - bu sizga tez ishlash imkonini beruvchi dasturlash tili
                        va tizimlarni yanada samarali integratsiyalash.
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-Kanit font-[700] text-slate-50">
                        Kelajak <span className="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                            hayotingiz uchun investitsiya </span>qiling.</h2>
                    <div className="flex gap-3">
                        <Link to='/register'>
                            <button className="my-3 rounded-md bg-blue-500 text-white px-2 py-1 md:px-4 md:py-3 btn hover:bg-blue-600 shadow-2xl">Ro’yxatdan o’tish</button>
                        </Link>
                        <Link to='/login'>
                            <button className="my-3 rounded-md bg-emerald-500 text-white px-2 py-1 md:px-4 md:py-3 btn hover:bg-emerald-600 shadow-2xl">Hisobga kirish</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
