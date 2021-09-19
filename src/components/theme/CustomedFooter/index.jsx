import React from "react"

import uuid from 'react-uuid'

import { GatsbyImage } from "gatsby-plugin-image"

import { DefaultIcon, PaddingWrapper } from "components/common"

/* import { footerIcons, footerInfo, contactItems } from "constans" */

import { FooterHeader, FooterIconsBox, FooterLogoLink, FooterBrandLogo, FooterIcon, FooterWrapper, FooterSection, FooterLink, FooterInfo, FooterInfoBox, GridBox } from './styles'


export const CustomedFooter = ({ footerLinkContent, footerSocialIcons, footerContentData }) => {

  const { siteTitle, siteSlogan } = footerContentData
    return (
        <FooterWrapper>
          <PaddingWrapper>
            <FooterHeader>

            </FooterHeader>
            <FooterSection>
                <GridBox>
{/*                     {contactItems.map((item, index) => (
                        <FooterLink
                            href={item.href}
                            key={index}
                            title={item.alt} >
                            {item.icon}{item.content}
                        </FooterLink>
                    ))} */}
                </GridBox>

                <GridBox>
                    <FooterLogoLink to="/">
                        <FooterBrandLogo />
                        <h3>{siteTitle}</h3>
                    </FooterLogoLink>
                    <p>{siteSlogan}</p>
                </GridBox>
            </FooterSection>

            <FooterInfoBox>
                <FooterIconsBox>

{Object.keys(footerSocialIcons).map(((keyName, i) => {

const objects = footerSocialIcons[keyName].multiBox;

const objectIcons = objects.map((item, i) => {
  if (item['type'] == "icon") {
    return item
  }
})//check for icon option just to be safe

const objectNames = objects.map((item, i) => {
  if (item['type'] == "content") {
    return item
  }
})
//check for content option just to be safe

const objectHrefs = objects.map((item, i) => {
  if (item['type'] == "href") {
    return item
  }
})
//check for content option just to be safe

const objectIcon = objectIcons
  .filter(item => item !== undefined)[0]
  
const objectName = objectNames
  .filter(item => item !== undefined)[0]['content']

const objectHref = objectHrefs
  .filter(item => item !== undefined)[0]['content']
  
  const icon = objectIcon.img?.localFile.childSvg

  const img = objectIcon.img?.localFile.childImageSharp

  const alt = objectIcon.img?.altText


return (
  <>
    {img
      ?
      <FooterIcon
        key={uuid()}
        href={objectHref}
      >
        <GatsbyImage
          alt={alt ? alt : objectName}
          image={img.gatsbyImageData}
        />
      </FooterIcon>

      :

      icon

        ?

        <FooterIcon
          key={uuid()}
          href={objectHref}
          dangerouslySetInnerHTML={{ __html: icon.content.data }}
        >
        </FooterIcon>

        :

        <FooterIcon
          key={uuid()}
          href={objectHref}
        >
          <DefaultIcon
            className={"svg-icon"}
            label={keyName}
            aria-hidden="true"
            role="img"
            focusable="false"

          />
        </FooterIcon>
    }
  </>
)

}))
}

                </FooterIconsBox>
                <div>
                {footerLinkContent.footerInfo.multiBox.map((item, index) => (
                        <FooterInfo
                            to={item.content || '/'}
                            key={index} >
                            {item.title}
                        </FooterInfo>
                    ))}
                </div>
            </FooterInfoBox>


</PaddingWrapper>
        </FooterWrapper>
    )
}

