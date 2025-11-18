import Link from "next/link";
import React from "react";
// import Image from 'next/image'

const Header: React.FC = ()=>{
    return(
        <header className="bg-green-800 text-white font-bold shadow-md p-4">
            {/* <Image src={'/'} alt=""/> */}
            <nav>
                <ul className="flex items-center justify-end gap-5">
                    <li>
                        <Link href='/home'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;