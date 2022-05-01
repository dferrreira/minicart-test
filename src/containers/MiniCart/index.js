import React from "react";

import Header from "./components/Header";
import Content from "./components/Content"
import Footer from "./components/Footer";

import OrderForm from '../../resources/abaixo10';

import * as S from "./styled";

const Minicart = () => {
    const { items, value } = OrderForm;

    return (
        <S.MinicartWrapper>
            <S.MinicartContainer>
                <Header />
                <Content items={items} />
                <Footer totalValue={value} />
            </S.MinicartContainer>
        </S.MinicartWrapper>
    );
};

export default Minicart;