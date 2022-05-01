import styled, { css } from 'styled-components';
import { rem } from 'polished';

const btnReset = css`
  overflow: visible;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  font: inherit;
  line-height: normal;
  -moz-user-select: text;
  margin-right: ${rem(10)};
`;

const btnCentered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const btnShape = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  font-size: ${rem(20)};
  font-weight: 700;
  letter-spacing: ${rem(1.5)};
  position: relative;
  padding-left: ${rem(32)};
  padding-right: ${rem(32)};
  height: ${rem(60)};
  cursor: pointer;
`;

const btnPrimary = css`
  background: #353535;
  border-color: #353535;
  color: #fff;
  transition: opacity 220ms;

  &:hover {
    opacity: 0.85;
    color: #fff;
  }
`;

const btnBlack = css`
  background: #171717;
  border-color: #171717;
  min-width: ${rem(219)};
  color: #fff;
  transition: opacity 220ms;

  &:hover {
    opacity: 0.85;
    color: #fff;
  }
`;

const btnBlue = css`
  background: #3b74f2;
  width: 100%;
  color: #fff;
  font-family: Poppins, 'sans-serif';
  transition: opacity 220ms;

  &:hover {
    opacity: 0.85;
    color: #fff;
  }
`;

const btnColored = css`
  background: #00ada8;
  border: 0;
  min-width: ${rem(219)};
  color: white;
  -webkit-appearance: none !important;
`;

const btnWhite = css`
  background-color: #fff;
  color: #c4bdb5;
  font-weight: 400;
`;

const btnFull = css`
  width: 100%;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-weight: 400;
  letter-spacing: 0.5px;
`;

const btnLink = css`
  text-transform: uppercase;
  color: #00ada8;
  text-decoration: underline;
  width: 77%;
  text-align: left;
  ${({ theme }) => theme.mq.lessThan('sm')`
    width: 100%;
    text-align: center;
    padding: 0;
  `}
`;

export const ButtonWrapper = styled.button`
  -webkit-appearance: none !important;
  margin: ${rem(20)} 0; 
  border-radius: ${rem(6)};
  display: flex;


  /** */
  ${(props) => (props.reset ? btnReset : btnShape)}
  ${(props) => props.center && btnCentered}
  ${(props) => props.primary && btnPrimary}
  ${(props) => props.white && btnWhite}
  ${(props) => props.colored && btnColored}
  ${(props) => props.full && btnFull}
  ${(props) => props.link && btnLink}
  ${(props) => props.black && btnBlack}
  ${(props) => props.blue && btnBlue}
`;
