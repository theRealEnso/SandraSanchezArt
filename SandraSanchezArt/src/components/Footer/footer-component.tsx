import { FooterContainer, InformationContainer, SocialMediaContainer, NavigationLink, LogoContainer, InstagramLogo, FacebookLogo, DiscordIcon, YoutubeIcon} from "./footer-styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';

// const DiscordIcon = <FontAwesomeIcon icon={faDiscord} />
// const YoutubeIcon = <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>

const Footer = () => {
    return (
        <FooterContainer>

            <InformationContainer>
                <h1>Information</h1>
                <NavigationLink to='/about-me'>About Me</NavigationLink>
                <NavigationLink to='/mentoring'>Mentoring</NavigationLink>
                <NavigationLink to='/contact'>Contact Me</NavigationLink>
            </InformationContainer>

            <SocialMediaContainer>
                <h1>Follow me on Social Media!</h1>

                <LogoContainer>
                    <NavigationLink><InstagramLogo fontSize='large'></InstagramLogo></NavigationLink>
                    <NavigationLink><FacebookLogo fontSize='large'></FacebookLogo></NavigationLink>
                    <NavigationLink><DiscordIcon></DiscordIcon></NavigationLink>
                    <NavigationLink><YoutubeIcon></YoutubeIcon></NavigationLink>
                </LogoContainer>

            </SocialMediaContainer>
            
        </FooterContainer>
    );
}

export default Footer;