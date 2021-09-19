import styled from 'styled-components';

import { DefaultWrapper, MainWrapper } from 'components/common'
import { GatsbyImage } from 'gatsby-plugin-image';


/* blog card */

export const BlogPostCard = styled.article`

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`
export const BlogPostHeader = styled.section`

`

export const BlogPostBody = styled.section`

`

export const BlogPostExcerpt = styled.em`

`

export const BlogPostImage = styled(GatsbyImage)`

`

export const BlogPostFooter = styled.section`

`

export const OfferContentBox = styled.div`
  padding: 2rem;
  line-height: 2rem;

`

export const OffersWrapper = styled(DefaultWrapper)`
  height: 100%;
  background: ${({ theme }) => theme.colors.third};
  @media (min-width: ${({ theme }) => theme.device.xl}) {
    height: unset;
    height: 85vh;
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  ::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  ::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
}

  `


export const Wrapper = styled(MainWrapper)`
    display: grid;
    grid-gap: 1rem;

    @media (min-width: ${({ theme }) => theme.device.xl}) {
      grid-template-columns: .4fr 1fr;
      grid-gap: 0;

    }

`;

export const BlogPostCardsContainer = styled(DefaultWrapper)`
    border-color: ${({ theme }) => theme.colors.secondary};
    max-width: 1280px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-flow: wrap;

    &:hover .card {
      opacity: .7;
      cursor: pointer;
      filter: grayscale(1);

    }
    .card {
      margin: 10px;
      width: 280px;
/*       width: calc(100% / 3 - 20px); */
      float: left;
      box-shadow: 0 0 2px 2px rgba(0,0,0,.05);
      background: yellow;
      -webkit-transition: .3s all ease;
      transition: .15s all ease;
    }
      .card:hover {
        box-shadow: 0 0 8px 3px rgba(0,0,0,.15);
        transform: scale(1.025);
        opacity: 1;
        filter: grayscale(0);
        transition: .35s all ease;
      }

      .card img {
        width: 100%;
        padding: 0;
        margin: 0;
      }

      .card .content {
        padding: 15px 20px;
      }

      .card h3 {
        font: 2.8rem/3.4rem 'Bree Serif', serif;
        padding: 0;
        margin: 0 0 10px;
        letter-spacing: -.075rem
      }

      .card p {
        color: #888;
        padding: 0;
        margin: 0;
        font: 400 1.6rem/2.2rem 'Open Sans script=all', sans-serif;
      }
`

export const ProductsWrapper = styled.div`

    display: grid;
    background: ${({ theme }) => theme.colors.third};
    justify-content: center;
    grid-gap: 50px;
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #e1e1e1;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #ffffff;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #000000;
    }
    ::-webkit-scrollbar-track {
      background: #666666;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
      background: #666666;
    }
    ::-webkit-scrollbar-track:active {
      background: #333333;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }



    @media (min-width: ${({ theme }) => theme.device.m}) {
      padding: 0;
      display: flex;
      flex-direction: row;
      flex-flow: wrap;
      height: 60vh;
      overflow-y: scroll;
      
    }

    @media (min-width: ${({ theme }) => theme.device.xl}) {
      display: flex;
    }
`

