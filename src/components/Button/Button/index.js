import React from 'react';

import * as S from './styled';

const Button = (props) => (
  <S.ButtonWrapper
    title={props.title}
    disabled={props.isDisabled}
    type={props.type}
    {...props}
  >
  </S.ButtonWrapper>
);

export default Button;
