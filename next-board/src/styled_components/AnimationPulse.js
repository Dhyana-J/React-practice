import React from 'react';
import styled, { keyframes } from 'styled-components';

const Pulse = keyframes`
from {
    opacity: 1;
    transform: scale(1);
}
to {
    opacity: 0.25;
    transform: scale(0.75);
}
`;

const SpinnerBox = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    position: absolute;
    bottom: 5%;
    left: 40%;
`;

const PulseContainer = styled.div`
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PulseBubble = `
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #a5b1c2;
`;
const PulseBubble1 = styled.div`
    ${PulseBubble}
    animation: ${Pulse} 0.4s ease 0s infinite alternate;
`;
const PulseBubble2 = styled.div`
    ${PulseBubble}
    animation: ${Pulse} 0.4s ease 0.2s infinite alternate;
`;
const PulseBubble3 = styled.div`
    ${PulseBubble}
    animation: ${Pulse} 0.4s ease 0.4s infinite alternate;
`;

function AnimationPulse() {
    return (
        <SpinnerBox>
            <PulseContainer>
                <PulseBubble1 />
                <PulseBubble2 />
                <PulseBubble3 />
            </PulseContainer>
        </SpinnerBox>
    );
}

export default AnimationPulse;
