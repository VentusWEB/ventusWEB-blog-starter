import React from 'react';

import uuid from 'react-uuid'

import { Link } from "gatsby"

import { Wrapper, ProductsWrapper, OffersWrapper, OfferContentBox, BlogPostCardsContainer, BlogPostExcerpt, BlogPostCard, BlogPostHeader, BlogPostBody, BlogPostImage, BlogPostFooter } from './styles';
import { SectionTitle, Button } from 'components/common'

import { getImage } from "gatsby-plugin-image"

import { ProductCard } from 'components/product'



export const Blog = ({ itemData, BlogData }) => {

    const {
        order,
        title,
        subTitle,
        blogContent,
        blogContentSecondary,
        textHeader,
        sectionTitle
    } = BlogData

    const id = sectionTitle.replace(" ", "-").toLowerCase()


    return (
        <Wrapper id={id} css={`{ order: ${order}; }`} >

            <OffersWrapper secondary>
                <SectionTitle black>
                    <h4>{title}</h4>
                </SectionTitle>
                <OfferContentBox>
                <section dangerouslySetInnerHTML={{ __html: blogContent }} />
                </OfferContentBox>

            </OffersWrapper>
            <BlogPostCardsContainer>


{itemData.map(post => {
    const {
        blogPostAuthor,
        slug,
        blogPostExcerpt,
        blogPostImage,
        blogPostImageAlt,
        blogPostImageGlow,
        blogPostImageGlowOpacity,
        blogPostImageHeight,
        blogPostTitle,
    } = post
    const img = getImage(blogPostImage.localFile);
    return(
        <Link to={`/wpis/${slug}`}><div className="card"
    key={uuid()}
    >


                <BlogPostImage
                    image={img}
                    alt={blogPostImageAlt}
                    />      

            <div class="content">
                <h3>{blogPostTitle}</h3>
                <p>{blogPostExcerpt}</p>
            </div>

            <Button>
                        więcej
            </Button>
            </div></Link>

)})}

           </BlogPostCardsContainer>
        </Wrapper>


    );
};
