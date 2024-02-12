import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FooterContainer, InformationContainer, SocialMediaContainer, NavigationLink, LogoContainer, InstagramLogo, FacebookLogo, DiscordIcon, YoutubeIcon } from "./footer-styles";
const Footer = () => {
    return (_jsxs(FooterContainer, { children: [_jsxs(InformationContainer, { children: [_jsx("h1", { children: "Information" }), _jsx(NavigationLink, { to: '/about', children: "About" }), _jsx(NavigationLink, { to: '/conventions', children: "Conventions" }), _jsx(NavigationLink, { to: '/mentoring', children: "Mentoring" }), _jsx(NavigationLink, { to: '/contact', children: "Contact Me" })] }), _jsxs(SocialMediaContainer, { children: [_jsx("h1", { children: "Follow me on Social Media!" }), _jsxs(LogoContainer, { children: [_jsx(NavigationLink, { children: _jsx(InstagramLogo, { fontSize: 'large' }) }), _jsx(NavigationLink, { children: _jsx(FacebookLogo, { fontSize: 'large' }) }), _jsx(NavigationLink, { children: _jsx(DiscordIcon, {}) }), _jsx(NavigationLink, { children: _jsx(YoutubeIcon, {}) })] })] })] }));
};
export default Footer;
