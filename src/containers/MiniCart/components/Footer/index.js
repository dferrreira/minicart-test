import React from 'react';

import { formatPrice } from 'vtex-api';
import Button from '../../../../components/Button/Button';

import * as S from './styled';

const Footer = (props) => {
    const { totalValue } = props;

    const hasFreeShipping = ((totalValue/100) >= 10);

    return (
        <S.FooterWrapper>
        <S.FooterContainer>
            <S.FooterSummary>
                <S.FooterSummaryInfo>
                    Total
                </S.FooterSummaryInfo>
                <S.FooterSummaryMonetary>
                    {formatPrice(totalValue)}
                </S.FooterSummaryMonetary>
            </S.FooterSummary>
            {hasFreeShipping && (
                <S.FooterFreeShipping>
                    <S.FooterFreeShippingMessage>
                        Parabéns, sua compra tem frete grátis !
                    </S.FooterFreeShippingMessage>
                </S.FooterFreeShipping>
            )}
        </S.FooterContainer>
        <S.FooterButtonContainer>
            <Button type="primary" blue center isDisabled={false} title="Finalizar compra">Finalizar compra</Button>
        </S.FooterButtonContainer>
        </S.FooterWrapper>
    );
};

export default Footer;