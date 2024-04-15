import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2d3748; /* Adjust to match navbar color, assumed gray-800 */
  color: #ffffff;
  padding: 2rem;
  font-size: 0.875rem; /* Base size, adjust as needed */
  text-align: center;
`;

const FooterHeading = styled.h3`
  font-size: 1.25rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: inherit;
`;

const FooterText = styled.p`
  margin-bottom: 0.5rem;
  color: inherit;
`;

const FooterLink = styled.a`
  color: #63b3ed; /* Tailwind blue-400 for links */
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeading>About Us</FooterHeading>
      <FooterText>
        A hidden gem in the heart of the Sayward Valley with self-catering accommodation in a rural farm setting with plenty of amenities for rest, relaxation, and adventure. Anvik Farms is open year-round and can also host weddings, private events, and field camping.
      </FooterText>

      <FooterHeading>Contact Info</FooterHeading>
      <FooterText>1739 Smit Rd, Sayward, BC V0P 1R0, Canada.</FooterText>
      <FooterText>Email: <FooterLink href="mailto:anvikfarms@gmail.com">anvikfarms@gmail.com</FooterLink></FooterText>
      <FooterText>Phone: <FooterLink href="tel:1-250-282-0050">1-250-282-0050</FooterLink></FooterText>

      <FooterText>
        Connect With Our Official Facebook: <FooterLink href="https://facebook.com/anvikfarms" target="_blank">Anvik Farms on Facebook</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
