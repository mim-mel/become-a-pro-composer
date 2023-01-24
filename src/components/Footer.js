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
        <Button>
          START MY COMPOSER JOURNEY
          <img src='image/blue-arrow.png' alt='arrow' />
        </Button>
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

const Button = styled.button`
  font-size: 16px;
  font-family: 'Roboto-Bold';
  letter-spacing: 0.5px;
  margin: 40px 0 0 0;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 10px;
  color: #000;
  border: none;
  cursor: pointer;
  padding: 20px 45px;
  box-shadow: #0d1f2d -6px 6px 0 0, -6px 6px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: -5px;
  }

  @media (max-width: 1024px) {
    margin: 35px 0 0 10px;
    padding: 21px 33px;
    font-size: 15px;
  }

  @media (max-width: 760px) {
    display: block;
    margin: 30px auto 0 auto;
    padding: 18px 28px;
    font-size: 13px;
  }

  img {
    margin-left: 10px;
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
