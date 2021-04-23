import { CreditCard } from '@material-ui/icons';
import React from 'react';
import styled, { keyframes } from 'styled-components';

// styled.div
// keyframes
const pop = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

const popIn = keyframes`
0% { opacity: 0; transform: scale(0.5); }
100% { opacity: 1; transform: scale(1); }
}
`;

// animation-delay: ${pop} ${({ index }) => index * 0.2}s;
// 새로 불러온 5개의 노트에만 애니메이션 효과가 적용되어야 한다.
// if (index > length - 5) {
//     return (index % 5) * 0.2;
// } else {
//     return 0;
// }
const PopNote = styled.div`
    animation: ${popIn}
        ${({ index, length }) =>
            index > length - 6 ? (index % 5) * 0.2 + 0.2 : 0}s;
`;

function AnimationNote({ children, index, noteLength }) {
    return (
        <PopNote index={index} length={noteLength}>
            {children}
        </PopNote>
    );
}

export default AnimationNote;
