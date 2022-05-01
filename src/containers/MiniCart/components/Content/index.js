import React from "react";

import ItemName from "./components/ItemName";
import ItemImage from "./components/ItemImage";
import ItemPrice from "./components/ItemPrice";

import * as S from './styled';

const Content = (props) => {
    const { items } = props;

    return (
        <S.ContentContainer>
            {items.map(({ uniqueId, imageUrl, name, listPrice, sellingPrice }) => (
                <S.ContentItem key={uniqueId}>
                    <ItemImage url={imageUrl} />
                    <S.ContentItemInfo>
                        <ItemName>{name}</ItemName>
                        <ItemPrice listPrice={listPrice} sellingPrice={sellingPrice} />
                    </S.ContentItemInfo>
                </S.ContentItem>
            ))}
        </S.ContentContainer>
    );
};

export default Content;