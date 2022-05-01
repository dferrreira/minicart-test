import styled from 'styled-components';

import { rem } from 'polished';

export const FooterWrapper = styled.div`
    width: 100%;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${rem(28)} ${rem(18)};
    border-top: 2px solid #d8d8d8;
    border-bottom: 2px solid #d8d8d8;
`;

export const FooterSummary = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const FooterSummaryInfo = styled.span`
    font-size: ${rem(18)};
    font-weight: bold;
`;

export const FooterSummaryMonetary = styled.span`
    font-size: ${rem(18)};
    font-weight: bold;
`;

export const FooterFreeShipping = styled.div`
    display: flex;
    justify-content: center;
    background-color: #c7ffa6;
    border-radius: ${rem(16)};
    padding: ${rem(5)} ${rem(16)};
    margin: ${rem(16)} auto 0;
`;

export const FooterFreeShippingMessage = styled.span`
    color: #217c21;
    font-size: ${rem(16)};
    font-weight: 600;
    text-align: center;
`;

export const FooterButtonContainer = styled.div`
    padding: 0 ${rem(18)};
`;