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
      <Footer2Wrap></Footer2Wrap>
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

const Footer2Wrap = styled.div`
  width: 100%;
  height: 350px;
  background-color: #0d1f2d;
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
    margin-left: 10px;
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
export default Footer;
