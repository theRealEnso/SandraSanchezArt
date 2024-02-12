import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';
const StyledDiscordIcon = styled(FontAwesomeIcon) `
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: rgb(114, 137, 218);
    }
`;
const StyledYoutubeIcon = styled(FontAwesomeIcon) `
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: rgb(205, 32, 31);
    }
`;
export const DiscordIcon = () => _jsx(StyledDiscordIcon, { icon: faDiscord, size: "2x" });
export const YoutubeIcon = () => _jsx(StyledYoutubeIcon, { icon: faYoutube, size: "2x" });
export const FooterContainer = styled.footer `
    margin-top: 50px;
    width: 100%;
    display: flex;
    // justify-content: space-between;
    background-color: rgb(21, 23, 23);
`;
export const InformationContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-right: 100px;
    padding: 20px;

    h1 {
        color: #fff;
    }
`;
export const SocialMediaContainer = styled.div `
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    h1 {
        color: #fff;
    }
`;
export const NavigationLink = styled(Link) `
    text-decoration: none;
    font-weight: bold;
    color: rgb(115, 115, 115);
    padding: 10px 0 10px 0;
    transition: 0.6s ease;

    &:hover {
        color: #fff;
    }

`;
export const LogoContainer = styled.div `
    display: flex;
`;
export const InstagramLogo = styled(InstagramIcon) `
    color: rgb(115, 115, 115);
    border-radius: 10px;
    margin-right: 15px;

    &:hover {
        background: #d6249f;
        background: radial-gradient(circle at 0% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
        box-shadow: 0px 3px 10px rgba(0,0,0,.25);
        transition: 1s ease-out;
    }
`;
export const FacebookLogo = styled(FacebookIcon) `
    color: rgb(115, 115, 115);
    margin-right: 15px;

    &:hover {
        color: #3b5998;
    }
`;
