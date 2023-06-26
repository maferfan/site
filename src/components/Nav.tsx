import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll'

export const Nav = () => {

    return (
        <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className="container mx-auto">
                <div className='w-full btn2 bg-gray-200 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-black'>
                    <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-gray-400 rounded-full transition-all duration-300'>
                        <BiHomeAlt />
                    </Link>
                    <Link to='about'  activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-gray-400 rounded-full transition-all duration-300'>
                        <BiUser />
                    </Link>
                    <Link to='services' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-gray-400 rounded-full transition-all duration-300'>
                        <BsClipboardData />
                    </Link>
                    <Link to='work' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-gray-400 rounded-full transition-all duration-300'>
                        <BsBriefcase />
                    </Link>
                    <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-gray-400 rounded-full transition-all duration-300'>
                        <BsChatSquare/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}