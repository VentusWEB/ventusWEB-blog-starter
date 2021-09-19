import styled, { keyframes } from 'styled-components'
import { IoIosArrowDropupCircle } from "@react-icons/all-files/io/IoIosArrowDropupCircle";

const ShowScroll = keyframes`
from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`
export const ScrollButtonIcon = styled(IoIosArrowDropupCircle)`
`

export const ScrollButton = styled.button`
            z-index: 2;
            position: fixed;
            bottom: 50px;
            right: 0px;
            background-color: transparent;
            border: none;
            font-size: 50px;
            color: ${({ theme, buttonScrollColor}) => buttonScrollColor ? buttonScrollColor : theme.colors.scrollBtn ? theme.colors.scrollBtn : 'black'};
            cursor: pointer;
            transition: 0.8s;
            animation: ${ShowScroll} .5s ease-in-out normal forwards;
            animation-iteration-count: 1;
            transition: ${({ theme }) => theme.transitions.primary};

        &:hover {
            transition: 0.5s;
            color: ${({ theme, buttonScrollColorHover }) => buttonScrollColorHover ? buttonScrollColorHover : theme.colors.scrollBtnHover ? theme.colors.scrollBtn : 'black'};
        }

        svg, img {
          max-width: 30px;
          max-height: 30px;
        }

        @media (min-width: ${({ theme }) => theme.device.m}){
          svg, img {
            max-width: 50px;
            max-height: 50px;
          }
        }


`