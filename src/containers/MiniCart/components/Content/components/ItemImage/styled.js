import styled from 'styled-components';

import { rem } from 'polished';

export const ItemImageContainer = styled.div`
    padding: 0 ${rem(10)};
    border: 2px solid #d8d8d8;
    display: flex;
    align-items: center;
`;

export const ItemImage = styled.img`
    max-width: 100%;
    object-fit: cover;
`;