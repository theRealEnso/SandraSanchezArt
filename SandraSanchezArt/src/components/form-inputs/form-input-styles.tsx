import styled, { css } from 'styled-components';

const subColor = 'rgb(255, 51, 153)';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

type LabelProps = {
  shrink?: boolean;
}

export const Label = styled.label<LabelProps>`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  //if shrink is truthy, then apply the shrinkLabelStyles
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  //adjacent sibling selector => when the input is focused, target adjacent sibling (which is Label) and apply the shrinkLabelStyles styling
  &:focus ~ ${Label} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 50px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;