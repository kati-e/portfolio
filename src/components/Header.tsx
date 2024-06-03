import { useState } from "react";
import { NAV_MENU, SOCIAL_LINKS } from "../data/consts";
import IconsGroup from "./child-components/IconsGroup";

/**
 * Site Header Component
 *
 * This component renders the header used site-wide.
 */
export default function Header() {
    const [open, setOpen] = useState(false)

    //checking if user clicks outside of the main menu bar, if so, close the menu
    function handleOutsideClick(click: any) {
        if (click.classList.contains('mobile-menu')) {
            setOpen(false)
        }
    }

    return (
        <header className="site-header wrapper">
            <div className="container">
                <div className="inner">
                    <a className="logo" href="/">
                        <img src="/logo.svg" alt="logo" height={500} width={500} />
                    </a>
                    <nav className="navbar desktop">
                        <ul className="navlinks">
                            {NAV_MENU.length > 0 && NAV_MENU.map(link => {
                                return <li key={link.key} className="navlink"><a href={link.link ?? "#"}>{link.text ?? ""}</a></li>
                            })}
                        </ul>
                    </nav>
                    <div className="hamburger-menu" onClick={() => setOpen(true)}>
                        <img src="/hamburg.svg" alt="menu-toggle" />
                    </div>
               </div>
               <div className="icons-tabs desktop">
               <AvailableForWorkTab available={false} />
                <div className="tab">
                    <img src="/pin.svg" alt="map location pin icon" height={60} width={60} />
                    <span>Based in <a className="inline-link" href="https://maps.app.goo.gl/rfLyhYSitrb1jcxS7" target="_blank">Brisbane</a></span>
                </div>
               </div>
            </div>
            {open && 
            <div className="mobile-menu" onClick={(e) => handleOutsideClick(e.target)}>
            <nav className="navbar mobile">
                <div className="cross-icon" onClick={() => setOpen(false)}>
                    <img src="/cross.svg" alt="menu-toggle" />
                </div>
                <ul className="navlinks">
                    {NAV_MENU.length > 0 && NAV_MENU.map(link => {
                        return <li key={link.key} className="navlink"><a href={link.link ?? "#"}>{link.text ?? ""}</a></li>
                    })}
                </ul>
                <div className="icons-tabs mobile">
                <AvailableForWorkTab available={false} />
                <div className="tab">
                    <img src="/pin.svg" alt="map location pin icon" height={60} width={60} />
                    <span>Based in <a className="inline-link" href="#" target="_blank">Brisbane</a></span>
                </div>
               </div>
               <IconsGroup icons={SOCIAL_LINKS} />
            </nav>
            </div>}
        </header>
    )
}

function AvailableForWorkTab({ available } : { available: boolean }) {
    return (
        //only show this tab if I am available for work
        <>
        {available && (
            <div className="tab">
                <img src="/tick.svg" alt="checkmark icon" height={60} width={60} />
                <span>Open for work</span>
            </div>
        )}
        </>
    )
}