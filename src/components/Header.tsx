import { FaWhatsapp } from 'react-icons/fa'
import imageLogo from '../assets/imageLogo.png'
export const Header = () => {

    return (
        <header className="py-8 btn">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <a href="/">
                        <img src={imageLogo} alt="Matheus Ferrazza logo" width={110} />
                    </a>
                    <div className='flex items-center gap-x-4 text-[15px]'>
                        <a href="https://wa.me/47989025148" target='_blank' rel="noreferrer" className='hover:text-gray-500 transition-all duration-300'>
                            Contact me
                        </a>
                        <FaWhatsapp className='text-[15px] mt-1' />
                    </div>
                </div>
            </div>
        </header>
    )
}