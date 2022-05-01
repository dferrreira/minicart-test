import styled from "styled-components";

import { rem } from "polished";

export const HeaderContainer = styled.div`
    width: 100%;
    border-bottom: 2px solid #d8d8d8;
`;

export const HeaderTitle = styled.h1`
    font-size: ${rem(22)};
    font-weight: bold;
    text-align: center;
`;