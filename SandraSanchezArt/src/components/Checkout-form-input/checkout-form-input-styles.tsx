import styled, {css} from 'styled-components';

const shrinkLabelStyles = css`
  top: 2px;
  font-size: 10px;
`;

type LabelProps = {
  shrink?: boolean;
};

export const Group = styled.div`
  position: relative;
`;

export const Label = styled.label<LabelProps>`
    color: rgb(115, 115, 115);
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 15px;
    transition: 200ms ease all;

    //if shrink is truthy, then apply the shrinkLabelStyles
    //destructuring shrink directly off of props
    ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  font-size: 16px;
  width: 100%;
  border-radius: 2.5px;
  border: 1px solid black;

  //adjacent sibling selector => when the input is focused, target adjacent sibling (which is Label) and apply the shrinkLabelStyles styling
  
  &:focus ~ ${Label} {
    ${shrinkLabelStyles};
  }
`;

