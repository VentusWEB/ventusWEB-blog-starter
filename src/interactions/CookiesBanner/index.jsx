import React, { useState, useEffect } from "react"
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import styled from "styled-components"
import { Link } from "gatsby"



export const CookiesBanner = ({ children, offerLinks, showBelow }) => {

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll, { passive: true })
            return () => window.removeEventListener(`scroll`, handleScroll, { passive: true })
        }
    }, [])


    return (
        <>
            {show &&

                <CookieConsent
                    location="top"
                    buttonText="Wszystko jasne!"
                    cookieName="myAwesomeCookieName2"
                    style={{
                        transition: "0.8s",
                        animation: `coockieBoxAnimation .5s ease-in-out normal forwards`,
                        animationIterationCount: "1",
                        transition: "all .2s ease-in-out",
                        zIndex: "1000"
                    }}
                    buttonStyle={{ background: `${({ theme }) => theme.colors.secondary}`, fontSize: "12px" }}
                    expires={150}
                    onAccept={() => {
                        console.log(getCookieConsentValue())
                    }}
                >
                    <span style={{ fontSize: "10px" }}>Odwiedzana strona wykorzystuje Ciasteczka. Korzystając z niej bezpośrednio zostaje na to wyrażona zgoda. Więcej na ten temat w <PoliceLink to="/polityka-prywatnosci">Polityce Prywatności</PoliceLink></span>

                </CookieConsent>

            }


        </>
    )
}


const PoliceLink = styled(Link)`
color: ${({ theme }) => theme.colors.secondary};
text-decoration: none;
transition: 1s;

 &:hover{
   color: green;
 }
`
