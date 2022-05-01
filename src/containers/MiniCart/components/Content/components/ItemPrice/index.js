import React from 'react';

import { formatPrice } from 'vtex-api';

import * as S from './styled';

const ItemPrice = (props) => {
    const { sellingPrice, listPrice } = props;

    return (
        <S.ItemPriceContainer>
            {listPrice && (<S.ItemPriceList>{formatPrice(listPrice)}</S.ItemPriceList>)}
            <S.ItemPriceBest>{formatPrice(sellingPrice)}</S.ItemPriceBest>
        </S.ItemPriceContainer>
    );
};

export default ItemPrice;