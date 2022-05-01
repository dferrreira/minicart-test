import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Content from "./components/Content"
import Footer from "./components/Footer";
import OrderForm from "../../services/OrderForm";

import * as S from "./styled";

const Minicart = () => {
    const [cartData, setCartData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
            const { data } = await OrderForm.getLess();
            // const { data } = await OrderForm.getGreater();
            setCartData(data);
            } catch(e) {
                throw new Error(`Failed to fetch cart data: ${e}`)
            }
        })();
    }, []);

    return (
        <S.MinicartWrapper>
            <S.MinicartContainer>
                <Header />
                {cartData && (
                    <>
                        <Content items={cartData.items} />
                        <Footer totalValue={cartData.value} />
                    </>
                )}
            </S.MinicartContainer>
        </S.MinicartWrapper>
    );
};

export default Minicart;