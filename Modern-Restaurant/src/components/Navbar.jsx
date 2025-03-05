import { useEffect, useState } from "react"
import gericht from '../assets/gericht.png'
import { GiHamburgerMenu, GiKnifeFork } from "react-icons/gi"

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [navBack, setNavBack] = useState(false)

    useEffect(() => {
        const bgChange = () => {

            window.scrollY > 0 ? setNavBack(true) : setNavBack(false)
        }

        window.addEventListener('scroll', bgChange)

        return () => window.removeEventListener('scroll', bgChange)
    }, [navBack])


    return (
        <section className="navbar fixed top-0 left-0 right-0 z-50">
            <nav className={`relative ${navBack ? 'bg-black' : ''} transition-all duration-300 ease-in`}>
                <ul className="flex items-center justify-between px-[1.5rem] py-[1rem] text-[1rem]">
                    <div className="logo cursor-pointer" onClick={() => window.location.href = '#home'}>
                        <img className="w-[100px] lg:w-[150px]" src={gericht} alt="logo" />
                    </div>
                    <div className="gap-[2rem] hidden lg:flex flex-1 items-center justify-center lg:text-[1.2rem] hover:text-[blue]">
                        <li><a className="hover:text-[var(--color-golden)] transition-all duration-300" href="#home">Home</a></li>
                        <li><a className="hover:text-[var(--color-golden)] transition-all duration-300" href="#about">About</a></li>
                        <li><a className="hover:text-[var(--color-golden)] transition-all duration-300" href="#menu">Menu</a></li>
                        <li><a className="hover:text-[var(--color-golden)] transition-all duration-300" href="#awards">Awards</a></li>
                        <li><a className="hover:text-[var(--color-golden)] transition-all duration-300" href="#contact">Contact</a></li>
                    </div>
                    <div className=" hidden gap-5 lg:flex lg:text-[1.2rem] ">
                        <a className="hover:text-[var(--color-golden)] transition-all duration-300]" href="Login">Login / Registration</a>
                        <span>|</span>
                        <a className="hover:text-[var(--color-golden)] transition-all duration-300]" href="Booking">Book Table</a>
                    </div>


                    <div className="flex gap-[2rem] items-center">
                        <div className=" hidden gap-5 ss:flex lg:hidden ">
                            <a className="hover:text-golden transition-all duration-300" href="Login">Login / Registration</a>
                            <span>|</span>
                            <a className="hover:text-golden transition-all duration-300" href="Booking">Book Table</a>
                        </div>
                        <GiHamburgerMenu onClick={() => setToggle(true)} className=" lg:hidden cursor-pointer" size={30} />
                        <div className={`${toggle ? 'slide-bottom' : 'hidden'} absolute z-[99] bg-[#0C0C0C] w-[100vw] h-[100vh] top-0 left-0 text-[2.1rem] font-cormorant`}>
                            <div className="w-[100%] h-[100%] flex flex-col justify-center items-center gap-[20px] relative cursor-pointer">
                                <GiKnifeFork onClick={() => setToggle(false)} className="absolute top-5 right-5 cursor-pointer" fill="#DCCA87" size={30} />
                                <li className="text-golden hover:text-[white] transition-all duration-300"><a href="#home" onClick={() => setToggle(false)}>Home</a></li>
                                <li className="text-golden hover:text-[white] transition-all duration-300"><a href="#about" onClick={() => setToggle(false)}>About</a></li>
                                <li className="text-golden hover:text-[white] transition-all duration-300"><a href="#menu" onClick={() => setToggle(false)}>Menu</a></li>
                                <li className="text-golden hover:text-[white] transition-all duration-300"><a href="#awards" onClick={() => setToggle(false)}>Awards</a></li>
                                <li className="text-golden hover:text-[white] transition-all duration-300"><a href="#contact" onClick={() => setToggle(false)}>Contact</a></li>
                            </div>
                        </div>
                    </div>

                </ul>
            </nav>
        </section>
    )
}

export default Navbar
