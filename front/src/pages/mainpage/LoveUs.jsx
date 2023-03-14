import styled from 'styled-components';
import './../../fonts/fonts.css';
import { Fade } from 'react-awesome-reveal';
import {
  ContentTextBlock,
  ContentText1,
  ContentText2,
  ContentText3,
} from './HowToLearn';

const LoveUs = () => {
  return (
    <Wrap>
      <Block grid='38% 58%' marginBottom='70px'>
        <ContentTextBlock>
          <ContentText1>BECOME A PRO COMPOSER</ContentText1>
          <ContentText2>Composers love us!</ContentText2>
          <ContentText3>
            Whether you’re a musician, bedroom producer, or hobbyist that wants
            to dive into orchestral composing. We got you covered.
          </ContentText3>
          <StarImg src='image/star.png' />
        </ContentTextBlock>
        <Fade direction={'up'} duration={800} triggerOnce={true}>
          <ImgBlock>
            <OrangeBox>
              <BoxText>
                “I have never seen anyone create content at this level. You’ve
                inspired me to start a journey of my own.”
              </BoxText>
              <BoxText2>Ariel Yznardo // Film & Media Composer</BoxText2>
              <BoxLogo src='image/user-logo1.png' />
            </OrangeBox>
            <UserImg url='image/user-img1.png' />
          </ImgBlock>
        </Fade>
      </Block>
      <Block grid='58% 38%'>
        <Fade direction={'up'} duration={800} triggerOnce={true}>
          <ImgBlock>
            <OrangeBox>
              <BoxText>
                “If you want to learn more about music production, this platform
                is one of the most valuable ones that are out there. This
                information sticks unlike any other channel!
              </BoxText>
              <BoxText2>Ben Berkenbosch // Composer & Pianist</BoxText2>
              <BoxLogo src='image/user-logo2.png' />
            </OrangeBox>
            <UserImg url='image/user-img2.png' />
          </ImgBlock>
        </Fade>
      </Block>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 1000px;
  height: auto;
  margin: 100px auto;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 760px) {
    width: 80%;
    margin: 0 auto 50px auto;
  }
`;

const Block = styled.div`
  display: grid;
  grid-template-columns: ${props => props.grid};
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.marginBottom};

  @media (max-width: 760px) {
    grid-template-columns: 100%;
    margin-bottom: 100px;
  }
`;

const StarImg = styled.img`
  width: 180px;

  @media (max-width: 760px) {
    margin-bottom: 40px;
  }
`;

const ImgBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
`;

const OrangeBox = styled.div`
  width: 480px;
  height: 250px;
  background-color: #fe5d26;
  box-shadow: #0d1f2d 6px 6px 0 0, 6px 6px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  border-radius: 20px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 370px;
    height: 260px;
  }

  @media (max-width: 760px) {
    width: 90%;
    padding: 30px;
    height: 230px;
  }
`;

const BoxText = styled.div`
  color: #f4f4f4;
  font-size: 18px;
  font-family: 'Roboto-Regular';
  line-height: 23px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 17px;
    line-height: 21px;
  }

  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 19px;
  }
`;

const BoxText2 = styled.div`
  color: #f4f4f4;
  font-size: 14px;
  font-family: 'Roboto-Regular';
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 12px;
    margin-bottom: 15px;
  }

  @media (max-width: 760px) {
    font-size: 11px;
    margin-bottom: 7px;
  }
`;

const BoxLogo = styled.img`
  width: 230px;

  @media (max-width: 1024px) {
    width: 200px;
  }

  @media (max-width: 760px) {
    width: 150px;
  }
`;

const UserImg = styled.div`
  width: 160px;
  height: 160px;
  position: absolute;
  left: 100%;
  top: 70%;
  transform: translate(-100%, 0);
  border-radius: 20px;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});
  box-shadow: #888888 3px 3px 0px 0px inset,
    rgba(71, 71, 71, 0.8) -3px -3px 0px 0px inset;

  @media (max-width: 760px) {
    width: 120px;
    height: 120px;
    background-size: 120px;
    top: 80%;
  }
`;

export default LoveUs;
