import styled from "styled-components";

import { rem } from "polished";

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 ${rem(16)};
    margin-top: ${rem(20)};
`;

export const ContentItem = styled.div`
    width: 100%;
    display: flex;
    height: ${rem(100)};
    margin: ${rem(5)} 0;
    padding: ${rem(10)} 0;
`; 

export const ContentItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${rem(20)};
    width: 50%;
`;