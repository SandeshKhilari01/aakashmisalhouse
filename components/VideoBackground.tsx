import React from 'react';
import styled from 'styled-components';

interface VideoBackgroundProps {
    videoSrc: string;
    posterSrc?: string;
    overlayOpacity?: number;
}

export default function VideoBackground({
    videoSrc,
    posterSrc,
    overlayOpacity = 0.4
}: VideoBackgroundProps) {
    return (
        <VideoBackgroundWrapper>
            <VideoElement
                autoPlay
                loop
                muted
                playsInline
                poster={posterSrc}
                src={videoSrc}
            />
            <Overlay opacity={overlayOpacity} />
        </VideoBackgroundWrapper>
    );
}

const VideoBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const VideoElement = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div<{ opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, ${props => props.opacity}) 0%,
    rgba(0, 0, 0, ${props => props.opacity * 0.7}) 100%
  );
  z-index: 1;
`;
