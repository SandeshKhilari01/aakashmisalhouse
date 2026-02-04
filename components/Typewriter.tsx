import React, { useEffect, useRef, useState } from 'react';
import { useSwiperSlide } from 'swiper/react';
import styled from 'styled-components';

interface TypewriterProps {
    text: string;
    speed?: number;
}

export default function Typewriter({ text, speed = 10 }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const { isActive } = useSwiperSlide();
    const indexRef = useRef(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isActive) {
            setDisplayedText('');
            indexRef.current = 0;

            const type = () => {
                if (indexRef.current < text.length) {
                    setDisplayedText((prev) => prev + text.charAt(indexRef.current));
                    indexRef.current++;
                    timeoutRef.current = setTimeout(type, speed);
                }
            };

            type();
        } else {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isActive, text, speed]);

    return (
        <Wrapper>
            <InvisibleText>{text}</InvisibleText>
            <VisibleText>{displayedText}</VisibleText>
        </Wrapper>
    );
}

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: top;
`;

const InvisibleText = styled.span`
  opacity: 0;
  pointer-events: none;
`;

const VisibleText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
