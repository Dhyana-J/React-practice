import { CreditCard } from '@material-ui/icons';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const LdsCircle = keyframes`
    0%, 100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      opacity: 1;
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
      opacity: 0;
    }
    `;

const CircleWrapper = styled.div`
    display: inline-block;
    position: fixed;
    bottom: 50%;
    left: 50%;
    -moz-transform: translateZ(1px);
    -webkit-transform: translateZ(1px);
    -o-transform: translateZ(1px);
`;

const Inner = styled.div`
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    background: #fed330;
    -o-animation: ${LdsCircle} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    -webkit-animation: ${LdsCircle} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    -moz-animation: ${LdsCircle} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

function AnimationCircle() {
    return (
        <CircleWrapper>
            <Inner />
        </CircleWrapper>
    );
}

export default AnimationCircle;
