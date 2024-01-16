import styled from 'styled-components';

type ImageProps = {
    imageURL: string;
};

export const BackgroundImage = styled.div<ImageProps>`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({imageURL}) => `url(${imageURL})`};
    border-radius: 10px;
`
export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    position: absolute;
    top: 500px;
    

    h2 {
        text-transform: uppercase;
        font-weight: bold;
        color: #fff;
        // text-decoration: underline;
    }

    p {
        font-weight: lighter;
        color: #fff;
    }
`;

export const DirectoryItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    // padding: 20px;
    border-radius: 10px;
    border: 1px solid black;
    margin: 5px 10px 10px 5px;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        ${BackgroundImage} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        ${BodyContainer} {
            opacity: 1;
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    }
`

