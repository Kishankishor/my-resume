import React, { useState } from 'react'
import { FaReact, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import './navbar.scss'

export const Navbar = () => {
    const data = [
        {
            label: "Home",
            to: "/"
        },
        {
            label: "About me",
            to: "/about"
        },
        {
            label: "Skills",
            to: "/skill"
        },
        {
            label: "Career",
            to: "/Career"
        },
        {
            label: "Portfolio",
            to: "/portfolio"
        },
        


    ]

    const [iconToggle, setIconToggle] = useState(false)

    const handleToggleIcon = () => {

        setIconToggle(!iconToggle)

    }


    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to={'/'} className='navbar__container__Logo'>
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__Menu ${iconToggle? 'active' : ''}`}>
                    {
                        data.map((item, key) => {
                            return (<li className='navbar__container__Menu__Item'>
                                <Link to={item.to} key={key} className='navbar__container__Menu__Item__Links' onClick={handleToggleIcon}>
                                    {item.label}
                                </Link>

                            </li>

                            )
                        })
                    }

                </ul>
                <div className="navIcon" onClick={handleToggleIcon}>
                    {
                        iconToggle ? <HiX size={30} /> : <FaBars size={30} />
                    }

                </div>



            </nav>


        </div>
    )
}
