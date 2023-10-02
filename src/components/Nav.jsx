import {headerLogo} from '../../public/assets/images';
import {hamburger } from '../../public/assets/icons';
import { navLinks } from '../constants/index.js';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'> 
        <a href="/" >
            <img 
            src={headerLogo}
            alt="nike"
            width={130}
            height={30}
             />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) =>(
                <li key={item.label}>
                <a
                href = {item.href} 
                className='font-montserrat leading-normal text-lg text-slate-500'
                >
                {item.label}
                </a>
                </li>
            ))}
        </ul>

        <div className='hidden max-lg:block '>
        <img 
            src={hamburger}
            alt="menu"
            width={25}
            height={30}
        />
        </div>
        </nav>
    </header>
  )
}

export default Nav

