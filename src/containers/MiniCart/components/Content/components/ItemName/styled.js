import styled from 'styled-components';

import { rem } from 'polished';

export const ItemName = styled.p`
    font-size: ${rem(12)};
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
`;