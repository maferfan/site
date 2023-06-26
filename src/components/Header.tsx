import { AiFillPhone } from 'react-icons/ai'
import imageLogo from '../assets/imageLogo.png'
export const Header = () => {

    return (
        <header className="py-8 btn ">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <a href="">
                        <img src={imageLogo} alt="Matheus Ferrazza logo" width={110} />
                    </a>
                    <div className='flex items-center gap-x-4 text-[15px]'>
                        <a href="https://www.linkedin.com/in/matheus-ferrazza-52138219b/" className='hover:text-gray-500 transition-all duration-300'>
                            Contact-me
                        </a>
                        <AiFillPhone className='text-[15px]' />
                    </div>
                </div>
            </div>
        </header>
    )
}