import styled from "styled-components"

import { rem } from "polished"

export const ItemPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rem(3)};
`;

export const ItemPriceList =  styled.span`
    font-size: ${rem(11)};
    color: #c8cdcd;
`;

export const ItemPriceBest = styled.span`
    font-size: ${rem(12)};
    font-weight: bold;
    color: #000;
`;