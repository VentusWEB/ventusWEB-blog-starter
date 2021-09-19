import React, { useState, useEffect } from "react"
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

import { PoliceLink } from "./styles" 


export const CookiesBanner = ({ 
  showBelow,
  cookieBackground,
  cookieButtonBackground,
  cookieButtonColor,
  cookieButtonText,
  cookieColor,
  cookieContent,
  cookieName,
  cookieLink,
  cookieExpires,
  cookieLinkColor,
  cookieLinkHref,
  cookieLinkName,
  cookieLinkStyle,
  styles,
  content
  }) => {

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
         window.addEventListener(`scroll`, handleScroll)
         return () => window.removeEventListener(`scroll`, handleScroll)
     }
 })


      styles = {
        background: cookieButtonBackground ? cookieButtonBackground : "red",
        color: cookieButtonColor ? cookieButtonColor : "black",
        linkColor: cookieLinkColor ? cookieLinkColor : "brown",
        hoverColor: "blue",
        mediaWidth: "900px"
      }

      content = {
        buttonText: cookieButtonText ? cookieButtonText : "Wszystko jasne!",
        content: cookieContent ? cookieContent : "Aktualnie odwiedzana strona korzysta z plików cookies, więcej na ich temat w polityce prywatności witryny.",
        linkPath: cookieLinkHref ? cookieLinkHref : "/polityka-prywatnosci",
        linkContent: cookieLinkName ? cookieLinkName : "Polityka Prywatności",
        cookieTimeExpires: cookieExpires ? cookieExpires : 150,
        nameCookie: cookieName ? cookieName : "VentusWEBcookies"
      }


  return (
    <>
           {show &&

            <CookieConsent
            debug={true}
            location="top"
            buttonText={content.buttonText}
            cookieName={content.nameCookie}
            style={{
             animation: `coockieBoxAnimation .5s ease-in-out normal forwards`, 
             animationIterationCount: "1", 
             transition: "all .5s ease-in-out",
             display: "flex",
             justifyContent: "space-evenly",
             alignItems: "center",
             zIndex: "10000",
             background: cookieBackground ? cookieBackground : "#2B373B",
            }}
            
            buttonStyle={{ 
             background: styles.background, 
             color: styles.color,
             fontSize: "13px", }}
            expires={content.cookieTimeExpires}
            onAccept={() => {
             console.log(getCookieConsentValue())
           }}
           
          >
            <span style={{ 
              fontSize: "10px",
              display: "flex",
              flexDirection: "column",
              lineHeight: "1.5",
              gap: "10px" }}>
              {content.content}
              <PoliceLink 
              style={{
                color: styles.linkColor
              }}
              to={content.linkPath}>{content.linkContent}</PoliceLink></span>

        </CookieConsent>

           }


    </>
  )
}


