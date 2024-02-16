import styled from 'styled-components';

export const DefaultButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: rgb(255, 51, 153);
    background: white;
    border: 1px solid black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    transition: 0.1s ease-out;

    &:hover {
    background: black;
    }

    &:active {
        background-color: black;
        color: #fff;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
    }
`;

export const GoogleButton = styled(DefaultButton)`
    background: black;

    &:hover {
        color: white;
    }

    &:active {
        background-color: black;
        color: rgb(255, 51, 153);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
    }
`;
