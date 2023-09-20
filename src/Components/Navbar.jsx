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
        navbar: `text-[#fff] flex justify-around items-center py-4 px-2 rounded-md max-w-[1000px]  z-1 relative `,
        navList: `hidden md:flex h-[40px] items-center container-lan`,
        li: `p-2 item  cursor-pointer transform duration-300 duration-400 transition whitespace-nowrap`,
        liMobile: `p-2 item font-semibold cursor-pointer flex items-center text-white transform hover:scale-110 duration-400 ease-in-out border-b border-b-white`,
        navLinkText: `ml-2`,
        searchInput: `bg-slate-700  max-w-[400px] w-[100px] rounded-md  outline-none  text-black  `
    }
    return (
        <nav className={style.navbar}>
            <ul className={style.navList}>
                <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1 20C1 30.4934 9.50659 39 20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1C9.50659 1 1 9.50659 1 20ZM20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.6902 21.487H25.0017L28.4535 26.9112H21.5769V29.7H17.423V26.9114H10.5465L13.9983 21.4872H12.3098L15.7616 16.063H14.088L19.5 7.55877L24.912 16.0628H23.2384L26.6902 21.487ZM23.0631 15.0295L19.5 9.43051L15.9368 15.0295H17.6105L14.1586 20.4536H15.8471L12.3953 25.8777H18.4162V28.6665H20.5837V25.8777H26.6046L23.1528 20.4536H24.8413L21.3895 15.0295H23.0631Z" fill="white" />
                    </svg>
                </Link>
                <li className={style.li}>О Компании</li>
                <li className={style.li}>Доставка и Оплата</li>
                <li className={style.li}>Контакты</li>
            </ul>

            <ul className={style.navList}>
                <li className={`flex items-center gap-2 ${style.li}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM10 2.22222C5.58172 2.22222 2.22222 5.58172 2.22222 10C2.22222 14.4183 5.58172 17.7778 10 17.7778C14.4183 17.7778 17.7778 14.4183 17.7778 10C17.7728 5.58378 14.4162 2.22718 10 2.22222ZM15.5556 11.1111H8.88889V5.55556H11.1111V8.88889H15.5556V11.1111Z" fill="white" />
                    </svg>
                    <p>Пн-Вс 9:00 - 19:00</p>
                </li>

                <Link className={`flex items-center gap-2 ${style.li}`} to='tel:+998947363615'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M15.364 20H15.3345C11.2919 19.9005 7.43405 18.2863 4.52518 15.4772C1.715 12.5709 0.0998854 8.71455 0.000116569 4.67309C-0.00583661 4.10694 0.21645 3.56223 0.616892 3.16197L3.47286 0.308102C3.88379 -0.102701 4.54991 -0.102701 4.96083 0.308102L9.17008 4.51735C9.58088 4.92827 9.58088 5.59439 9.17008 6.00531L7.49059 7.68165C7.80208 8.84542 8.37587 9.92243 9.16797 10.8302C10.0741 11.6225 11.1497 12.1967 12.3123 12.5086L13.996 10.8312C14.4069 10.4204 15.073 10.4204 15.4839 10.8312L19.6932 15.0405C20.104 15.4514 20.104 16.1175 19.6932 16.5284L16.8372 19.3833C16.4478 19.7768 15.9176 19.9988 15.364 20ZM4.21474 2.54111H4.20948L2.10486 4.64994C2.19067 8.1422 3.58475 11.4749 6.01104 13.9881C8.52441 16.4136 11.8565 17.8075 15.3482 17.8943L17.4602 15.7844L14.7326 13.0642L13.372 14.4238C13.1773 14.6206 12.9122 14.7316 12.6353 14.7321C12.5614 14.7322 12.4877 14.7244 12.4154 14.709C10.6619 14.3211 9.03368 13.4994 7.68 12.3192C6.49979 10.9655 5.6781 9.33732 5.29021 7.58378C5.21703 7.23522 5.32513 6.8733 5.57749 6.62197L6.93707 5.26133L4.21474 2.54111Z" fill="white" />
                    </svg>
                    <p>+998 (94) 736 3615</p>
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