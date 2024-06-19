import React, { useState } from "react";
import cl from "./Header.module.scss";
import About from "../UI/about/About";
import menuImg from "../../img/menu.svg";
import icon from "../../img/weather.png";

interface IPropsHeader {
    setActive: (state: boolean) => void;
}

export function Header({ setActive }: IPropsHeader) {
    const [modal, setModal] = useState<boolean>(false);
    return (
        <header className={cl.header}>
            <img src={icon} alt="icon" width={50} height={50} />
            <nav className={cl.nav}>
                <li onClick={(e) => setActive(true)}>Погода по городу</li>
            </nav>
            <div className={cl.aboutImg}>
                {!modal && (
                    <img
                        onClick={(e) => setModal((prev) => !prev)}
                        src={menuImg}
                        alt="menu"
                        width={50}
                        height={50}
                    />
                )}
                {modal && (
                    <>
                        <img
                            onClick={(e) => setModal((prev) => !prev)}
                            src={menuImg}
                            alt="menu"
                            width={50}
                            height={50}
                        />
                        <div className={cl.aboutPosition}>
                            <About />
                        </div>
                    </>
                )}
            </div>
            <div className={cl.about}>
                <About />
            </div>
        </header>
    );
}
