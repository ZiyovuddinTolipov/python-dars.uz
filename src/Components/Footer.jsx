/* eslint-disable react/no-unescaped-entities */
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import {
    List,
    ListIcon,
} from '@chakra-ui/react'
import { Fragment } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go"
import { BsArrowUpRight, BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs"
import { Link } from "react-router-dom";
const Footer = () => {
    const style = {
        container: `max-w-[1400px] mx-auto my-5 text-white`,
        contentBox: `min-h-[200px] text-left max-w-[300px]`,
        listContainer: `flex flex-col space-x-3 space-y-1`,
        listHead: `font-semibold `,
        listLink: `duration-300 hover:pl-2 text-[#94A3B8] hover:text-[#FBD144] font-[500]`,
        linkSocial:`duration-300 font-[500] `,
        arrowIcon: ` `,
        contentText: `text-white sm:text-pink-800 md:text-blue lg:text-green `
    }
    return (
        <Fragment>
            <SimpleGrid columns={4} spacing={5} minChildWidth={250} className={style.container}>
                <Box className={style.contentBox}>
                    <List className={style.listContainer}>
                        <Link className={style.listHead}>
                            Ma`lumot
                        </Link>
                        <Link className={style.listLink}>
                            <ListIcon as={BsArrowUpRight} color={"#FBD144"} className={style.arrowIcon} />
                            Ko'p so'raladigan savollar
                        </Link>
                        <Link className={style.listLink}>
                            <ListIcon as={BsArrowUpRight} color='#FBD144' />
                            Bizning brendlarimiz
                        </Link>
                        <Link className={style.listLink}>
                            <ListIcon as={BsArrowUpRight} color='#FBD144' />
                            Ommaviy taklif (foydalanuvchi shartnomasi)
                        </Link>
                        {/* You can also use custom icons from react-icons */}
                        <Link className={style.listLink}>
                            <ListIcon as={BsArrowUpRight} color='#FBD144' />
                            To'lov taklifi
                        </Link>
                        <Link className={style.listLink}>
                            <ListIcon as={BsArrowUpRight} color='#FBD144' />
                            Biz haqimizda
                        </Link>
                    </List>
                </Box>
                <Box className={style.contentBox}>
                    <List className={style.listContainer}>
                        <Link className={style.listHead}>
                            Aloqa
                        </Link>
                        <Link className={style.listLink} to="tel:+998947363615">
                            <ListIcon as={AiOutlinePhone} color={"#FBD144"} />
                            +998 947363615
                        </Link>
                        <Link to="mailto:ziyovuddinweb@gmail.com" className={style.listLink}>
                            <ListIcon as={AiOutlineMail} color='#FBD144' />
                            ziyovuddinweb@gmail.com
                        </Link>
                        <Link className={style.listLink}>
                            <ListIcon as={GoLocation} color='#FBD144' />
                            Samarqand Firdavsiy 1
                        </Link>
                    </List>
                    <List className={style.listContainer}>
                        <Link className={style.listHead}>
                        Kitob do'konlari
                        </Link>
                        <Link className={style.listLink}>
                            <ListIcon as={GoLocation} color='#FBD144' />
                            Farg'ona  Rishton 
                        </Link>
                        <Link className={style.listLink}>
                            <ListIcon as={GoLocation} color='#FBD144' />
                            Qo'qon 
                        </Link>
                        <Link className={style.listLink}>
                            <ListIcon as={GoLocation} color='#FBD144' />
                            Toshkent chilonzor 
                        </Link>
                    </List>
                </Box>
                <Box className={style.contentBox}>
                <List className={style.listContainer}>
                        <Link className={style.listHead}>
                        Socials
                        </Link>
                        <Link className={`${style.linkSocial} hover:text-blue-400`}>
                            <ListIcon as={BsTelegram} color='blue.300' />
                            Telegram
                        </Link>
                        <Link className={`${style.linkSocial} hover:text-red-400`}>
                            <ListIcon as={BsInstagram} color='red.300' />
                            Instagram 
                        </Link>
                        <Link className={`${style.linkSocial} hover:text-blue-500`} >
                            <ListIcon as={BsFacebook} color='blue.500' />
                            Facebook
                        </Link>
                    </List>
                </Box>
                <Box className={style.contentBox}>
                    <Text className={style.contentText} >Hello</Text>
                </Box>
            </SimpleGrid>
            <footer className="text-center my-10 border-t-2 max-w-[1300px] mx-auto py-4 text-gray-800 font-[400] ">
                <h3 className="text-slate-200">2010-2023 bookshop.uz internet do'koni: Maishiy texnika va h.k. Tovarlarni yetkazib berish barcha viloyatlarga amalga oshiriladi. Barcha huquqlar himoyalangan.</h3>
            </footer>
        </Fragment>
    )
}

export default Footer