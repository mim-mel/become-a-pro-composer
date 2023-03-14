import styled from 'styled-components';
import './../fonts/fonts.css';

const Footer = () => {
  return (
    <>
      <Footer1Wrap>
        <Title>
          Start your composer journey today with{' '}
          <span>becomeaprocomposer.com</span>
        </Title>
        <ButtonWrap>
          <ButtonBack />
          <Button>
            START MY COMPOSER JOURNEY
            <img src='image/blue-arrow.png' alt='arrow' />
          </Button>
        </ButtonWrap>
        <MiniText>Instant access. No sign-up needed.</MiniText>
      </Footer1Wrap>
      <Footer2Wrap>
        <Line />
        <TextWrap>
          <TextBlock>
            <Footer2Title>ABOUT</Footer2Title>
            <Footer2Text>Company</Footer2Text>
            <Footer2Text>Terms</Footer2Text>
            <Footer2Text>Privacy Policy</Footer2Text>
            <Footer2Text>Contact</Footer2Text>
            <Footer2Text>Help</Footer2Text>
          </TextBlock>
          <TextBlock>
            <Footer2Title>LEARN</Footer2Title>
            <Footer2Text>Beginner’s Guide</Footer2Text>
            <Footer2Text>Designers</Footer2Text>
            <Footer2Text>Classrooms</Footer2Text>
            <Footer2Text>Newcomers</Footer2Text>
          </TextBlock>
          <TextBlock>
            <Footer2Title marginTop='30px'>PRACTISE</Footer2Title>
            <Footer2Text>Composer Exercises</Footer2Text>
            <Footer2Text>Manuals</Footer2Text>
            <Footer2Text>Tutorials</Footer2Text>
            <Footer2Text>Communities</Footer2Text>
          </TextBlock>
          <TextBlock>
            <Footer2Title marginTop='30px'>SHARE</Footer2Title>
            <Footer2Text>BAPC Discord</Footer2Text>
            <Footer2Text>Editorials</Footer2Text>
            <Footer2Text>Product</Footer2Text>
            <Footer2Text>Newsroom</Footer2Text>
          </TextBlock>
        </TextWrap>
        <Logo src='image/logo.png' />
        <RightText>
          © 2023 Become A Pro Composer. All rights reserved.
        </RightText>
        <IconWrap>
          <SocialIcon src='image/youtube-w.png' />
          <SocialIcon src='image/discord-w.png' />
          <SocialIcon src='image/insta-w.png' />
          <SocialIcon src='image/facebook-w.png' />
        </IconWrap>
      </Footer2Wrap>
    </>
  );
};

const Footer1Wrap = styled.div`
  width: 100%;
  height: 300px;
  background-color: #fe5d26;
  margin-top: 180px;
  margin-bottom: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 760px) {
    margin-top: 140px;
  }
`;

const Title = styled.div`
  font-family: 'Exo2-Regular';
  font-size: 26px;
  color: #f4f4f4;
  letter-spacing: 0.5px;

  span {
    font-family: 'Exo2-Bold';
  }

  @media (max-width: 1024px) {
    text-align: center;
    line-height: 37px;
    font-size: 22px;
  }

  @media (max-width: 760px) {
    font-size: 17px;
    line-height: 27px;
  }
`;

const ButtonWrap = styled.div`
  position: relative;
  width: 330px;
  height: 57px;
  margin: 40px 0 0 0;

  @media (max-width: 760px) {
    width: 290px;
    height: 50px;
  }
`;

const ButtonBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0d1f2d;
  border-radius: 10px;
`;

const Button = styled.button`
  position: absolute;
  top: -8px;
  left: 8px;
  font-size: 16px;
  width: 100%;
  height: 100%;
  font-family: 'Roboto-Bold';
  letter-spacing: 0.5px;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 10px;
  color: #0d1f2d;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    top: 0;
    left: 0;
  }

  img {
    margin-left: 7px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const MiniText = styled.div`
  font-family: 'Exo2-Light';
  color: #f4f4f4;
  font-size: 16px;
  margin-top: 20px;

  @media (max-width: 760px) {
    font-size: 14px;
  }
`;

const Footer2Wrap = styled.div`
  width: 100%;
  height: auto;
  background-color: #0d1f2d;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
  width: 858px;
  height: 0.12px;
  background-color: #f5f5f5;
  margin-top: 60px;
  opacity: 0.2;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const TextWrap = styled.div`
  display: flex;
  width: 858px;
  justify-content: space-between;
  margin-top: 54px;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 760px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

const TextBlock = styled.div``;

const Footer2Title = styled.div`
  font-family: 'Exo2-Bold';
  color: #fe5d26;
  font-size: 18px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 760px) {
    margin-bottom: 14px;
    margin-top: ${props => props.marginTop};
    text-align: center;
  }
`;

const Footer2Text = styled.div`
  font-family: 'Latto-Light';
  color: #f4f4f4;
  font-size: 16px;
  margin-bottom: 13px;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 13px;
    margin-bottom: 8px;
  }

  @media (max-width: 760px) {
    font-size: 14px;
    margin-bottom: 4px;
    text-align: center;
  }
`;

const Logo = styled.img`
  margin: 17px 0;

  @media (max-width: 760px) {
    margin: 23px 0;
  }
`;

const RightText = styled.div`
  font-family: 'Exo2-Light';
  font-size: 16px;
  color: #f4f4f4;
  margin-bottom: 25px;

  @media (max-width: 1024px) {
    font-size: 13px;
  }
`;

const IconWrap = styled.div`
  width: 140px;
  height: 30px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 55px;
`;

const SocialIcon = styled.img`
  /* margin-top: ${props => props.marginTop}; */
`;

export default Footer;
