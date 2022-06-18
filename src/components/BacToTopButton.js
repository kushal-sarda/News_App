import React from 'react'
import './BacToTop.css'
import { useEffect, useState } from 'react'
function BacToTopButton() {
    const [backToTopButton, setbackToTopButton] = useState(false);

    useState(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setbackToTopButton(true);
            }
            else setbackToTopButton(false);
        }
        )
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return <div className="">
        {backToTopButton && (<div className=" to-top " onClick={scrollUp} style={{  position: "fixed", bottom: "50px", right: "50px",  }}>  </div>)}
    </div>
}
export default BacToTopButton;
