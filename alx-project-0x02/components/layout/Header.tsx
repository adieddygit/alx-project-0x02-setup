import { HeaderProps } from "@/interfaces";
import Link from "next/link";
import React from "react";
// import Image from 'next/image'

const Header: React.FC<HeaderProps> = ({title})=>{
    return(
        <header className="bg-green-800 text-white font-bold shadow-md p-5 flex items-center justify-between ">
            <h1 className="text-2xl font-semibold">{title}</h1>
            {/* <Image src={'/'} alt=""/> */}
            <nav>
                <ul className="flex items-center justify-end gap-5">
                    <li>
                        <Link title={title} href='/home'>Home</Link>
                    </li>
                    <li>
                        <Link title={title} href='/about'>About</Link>
                    </li>
                    <li>
                        <Link title={title} href='/posts'>Posts</Link>
                    </li>
                    <li>
                        <Link title={title} href='/users'>Users</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;