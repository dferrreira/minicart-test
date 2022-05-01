import React from 'react';
import { resizeImage } from 'vtex-api';

import * as S from './styled';

const ItemImage = (props) => {
    const { url } = props;
    const resizedImage = resizeImage(url, 80, 80);

    return (
        <S.ItemImageContainer>
            <S.ItemImage src={resizedImage} alt="Imagem do Produto" title="Imagem do Produto" />
        </S.ItemImageContainer>
    );
};

export default ItemImage;