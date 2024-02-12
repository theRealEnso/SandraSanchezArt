import { FooterContainer, InformationContainer, SocialMediaContainer, NavigationLink, LogoContainer, InstagramLogo, FacebookLogo, DiscordIcon, YoutubeIcon} from "./footer-styles";

const Footer = () => {
    return (
        <FooterContainer>

            <InformationContainer>
                <h1>Information</h1>
                <NavigationLink to='/about'>About</NavigationLink>
                <NavigationLink to='/conventions'>Conventions</NavigationLink>
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