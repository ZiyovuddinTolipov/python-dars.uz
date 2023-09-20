import { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineHeart, AiOutlineLogin, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        console.log('hello');
        setNav(!nav)
    }
    const style = {
        navbar: `text-[#fff] flex justify-between items-center py-4 px-2 rounded-md max-w-[1300px] mx-auto`,
        navList: `hidden md:flex h-[40px] items-center container-lan`,
        li: `p-2 item font-semibold cursor-pointer transform duration-300 duration-400 transition `,
        liMobile: `p-2 item font-semibold cursor-pointer flex items-center text-white transform hover:scale-110 duration-400 ease-in-out border-b border-b-white`,
        navLinkText: `ml-2`,
        searchInput: `bg-slate-700  max-w-[400px] w-[400px] rounded-md  outline-none  text-black font-[600] py-2 px-3 pr-8`
    }
    return (
        <nav className={style.navbar}>
            <Link to='/'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 20C1 30.4934 9.50659 39 20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1C9.50659 1 1 9.50659 1 20ZM20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.6902 21.487H25.0017L28.4535 26.9112H21.5769V29.7H17.423V26.9114H10.5465L13.9983 21.4872H12.3098L15.7616 16.063H14.088L19.5 7.55877L24.912 16.0628H23.2384L26.6902 21.487ZM23.0631 15.0295L19.5 9.43051L15.9368 15.0295H17.6105L14.1586 20.4536H15.8471L12.3953 25.8777H18.4162V28.6665H20.5837V25.8777H26.6046L23.1528 20.4536H24.8413L21.3895 15.0295H23.0631Z" fill="white" />
                </svg>
            </Link>

            <ul className={style.navList}>
                <li className='w-[400px] flex'>
                    <input type="text" className={style.searchInput} placeholder='Kitoblar ichidan qidirish...' />
                    <p className='relative left-[-80px] top-2 z-10  h-[20px] text-center flex whitespace-nowrap text-slate-400'> Ctrl K</p>
                </li>

                <Link className={`${style.li} hover:text-red-600 `} to='/heart'>
                    <AiOutlineHeart size={20} />
                </Link>
                <Link className={`${style.li}hover:text-blue-400`} to='/shop'>
                    <AiOutlineShoppingCart size={20} />
                </Link>
                <Link className={`${style.li}hover:text-green-400`} to='/signin'>
                    <AiOutlineLogin size={20} />
                </Link>
            </ul>

            <div onClick={handleNav} className='block md:hidden ease-in-out duration-300 mr-5'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'text-white text-xl fixed left-0 top-0 w-[80%] bg-[#FBD144] h-full border-r border-r-[#FBD144] ease-in-out duration-500 z-10' : "fixed left-[-100%]"}>
                <div className='w-full mt-4 ml-3'>LOGO</div>
                <ul className='p-4 uppercase container-lan'>
                    <li className='w-[200px] flex'>
                        <input type="text" className={style.searchInput} placeholder='Kitoblar ichidan qidirish...' />
                        <button className='relative left-[-30px] text-[#FBD144]'><AiOutlineSearch size={20} /></button>
                    </li>

                    <li className={style.liMobile}>
                        <AiOutlineHeart size={20} />
                        <span className={style.navLinkText}>Sevimlilar</span>
                    </li>
                    <li className={style.liMobile}>
                        <AiOutlineShoppingCart size={20} />
                        <span className={style.navLinkText}>Savatcha</span>
                    </li>
                    <li className={style.liMobile}>
                        <AiOutlineLogin size={20} />
                        <Link to='/signin'><span className={style.navLinkText}>Kirish</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar