import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import ArrowUpIcon from '../assets/images/up-arrow.svg';

export const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("down");
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isAtBottom = currentScrollY + window.innerHeight >= document.documentElement.scrollHeight;

            setIsVisible(window.scrollY >= 100);

            if (isAtBottom) {
                setScrollDirection("up");
            } else {
                setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
            }
            lastScrollY.current = currentScrollY > 0 ? currentScrollY : 0;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const scrollToToggle = () => {

        const isAtBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight;

        if (isAtBottom) {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            window.scroll({
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <ButtonWrapper onClick={scrollToToggle} scrollDirection={scrollDirection}>
            <img src={ArrowUpIcon} />
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.button<{ scrollDirection: string }>`
    position: fixed;
    bottom: 24px;
    right: 36px;
    z-index: 1;
    width: 50px;
    height: 50px;
    transform: ${({ scrollDirection }) => (scrollDirection === "up" ? "rotate(-90deg)" : "rotate(90deg)")};
`;
