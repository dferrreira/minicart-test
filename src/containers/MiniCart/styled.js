import styled from 'styled-components'

import { rem } from 'polished'

export const MinicartWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: #d1d8e5;
    font-family: 'Poppins', sans-serif;
    padding: ${rem(20)} 0;
`;

export const MinicartContainer = styled.div`
    max-width: ${rem(460)};
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: ${rem(8)};
    box-shadow: 0px 1px 10px 2px rgba(0,0,0,0.6);
`;