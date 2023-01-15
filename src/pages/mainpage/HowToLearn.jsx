import styled from 'styled-components';
import './../../fonts/fonts.css';

const HowToLeran = () => {
  return (
    <HowToLearnWrap>
      <Triangle1 />
      <Triangle2 />
      <Triangle3 />
      <Title>
        <TitleSpan>Learn</TitleSpan> how to{' '}
        <TitleSpan>write Orchestral Music</TitleSpan> as a <br />
        <TitleSpan color='#fe5d26'>Composer</TitleSpan>
      </Title>
      <TitleMiniText>
        ... and <TitleSpan color='#fe5d26'>stop wishing</TitleSpan> that you
        could. You can. From home.
      </TitleMiniText>

      {/* Content1 */}
      <ContentWrap grid='45% 40%'>
        <Content1Wrap>
          <Content1FotosBlock columns='55% 40%' bottom='20px'>
            <Content1Foto src='image/composer1.jpg' alt='composer-img' />
            <Content1Foto
              src='image/composer2.jpg'
              alt='composer-img'
              align='end'
              margin='0 15px 0 0'
            />
          </Content1FotosBlock>
          <Content1FotosBlock columns='43% 57%'>
            <Content1Foto src='image/composer3.jpg' alt='composer-img' />
            <Content1Foto src='image/composer4.jpg' alt='composer-img' />
          </Content1FotosBlock>
        </Content1Wrap>
        <ContentTextBlock>
          <ContentIcon top='19%'>
            <ContentIconImg
              marginBottom='4px'
              url='image/how-icon1.png'
              marginLeft='4px'
            />
          </ContentIcon>
          <ContentText1>LEARN: HIGH-QUALITY CONTENT</ContentText1>
          <ContentText2>
            Powerful skills for composition & production
          </ContentText2>
          <ContentText3>
            Free beginner guides and high-quality video tutorials on the most
            common music writing scenarios help you learn how to compose faster,
            better and smarter. Are you ready to write your first orchestral
            masterpiece?
          </ContentText3>
          <ContentText4Block>
            <ContentText4>Start learning now</ContentText4>
            <ContentText4Img />
          </ContentText4Block>
        </ContentTextBlock>
      </ContentWrap>

      {/* Banner */}
      <LearnBanner>
        <BannerTitle>
          Learn faster and better with <span>Active Recall</span>*.
        </BannerTitle>
        <BannerContentWrap>
          <BannerContentBlock>
            <BannerCheckMark />
            <BanerText>
              <span>Learn</span> music composition & production.
            </BanerText>
          </BannerContentBlock>
          <BannerContentBlock>
            <BannerCheckMark />
            <BanerText>
              <span>Practise</span> your skills.
            </BanerText>
          </BannerContentBlock>
          <BannerContentBlock>
            <BannerCheckMark />
            <BanerText>
              <span>Share</span> your results.
            </BanerText>
          </BannerContentBlock>
        </BannerContentWrap>
        <BannerImg />
      </LearnBanner>
      <BannerMiniText>
        <span>*</span>Evidence-based learning for improved long-term knowledge
        retention
      </BannerMiniText>

      {/* Content2 */}
      <ContentWrap grid='40% 40%'>
        <ContentTextBlock>
          <ContentIcon top='10%'>
            <ContentIconImg marginBottom='4px' url='image/how-icon2.png' />
          </ContentIcon>
          <ContentText1>PRACTISE: MAKING IS STICK</ContentText1>
          <ContentText2>
            Writing tasks put your knowledge into practice
          </ContentText2>
          <ContentText3>
            Learn exactly how to write modern orchestral music step-by-step with
            tasks and assignments. Our writing exercise and composing challenges
            make your knowledge stick through Active Recall.
          </ContentText3>
          <ContentText4Block>
            <ContentText4>See all music writing tasks</ContentText4>
            <ContentText4Img />
          </ContentText4Block>
        </ContentTextBlock>
        <Content2ImgBlock>
          <Content2Img src='image/how-content2-img.jpg' alt='img' />
          <XpImgBlock>
            <img src='image/how-xp-icon.png' alt='icon' />
          </XpImgBlock>
          <TaskTextWrap>
            <TaskButton>TASK</TaskButton>
            <TaskText>
              Write a 4-bar ostinato using only 8th note triplets
            </TaskText>
          </TaskTextWrap>
        </Content2ImgBlock>
      </ContentWrap>

      {/* Content3 */}
      <ContentWrap grid='45% 40%' marginTop='70px'>
        <Content1Wrap>
          <Content3ImgBlock>
            <Content3Img />
          </Content3ImgBlock>
        </Content1Wrap>
        <ContentTextBlock order='-1'>
          <ContentIcon top='10%'>
            <ContentIconImg
              marginBottom='4px'
              url='image/how-icon1.png'
              marginLeft='4px'
            />
          </ContentIcon>
          <ContentText1>SHARE: GET IN TOUCH!</ContentText1>
          <ContentText2>
            Your own
            <br /> personal feedback
          </ContentText2>
          <ContentText3>
            Post your results and receive feedback from the Become A Pro
            Composer community. Connect with composers of all levels and grow
            together. We are ready when you are.
          </ContentText3>
          <ContentText4Block>
            <ContentText4>Take me to the Community</ContentText4>
            <ContentText4Img />
          </ContentText4Block>
        </ContentTextBlock>
      </ContentWrap>
    </HowToLearnWrap>
  );
};

const HowToLearnWrap = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const Triangle1 = styled.div`
  width: 400px;
  height: 350px;
  background-image: url(image/triangle-orange.png);
  background-size: 400px;
  position: absolute;
  top: 4%;
  left: 3%;
  z-index: -10;

  @media (max-width: 1024px) {
    width: 300px;
    height: 250px;
    background-size: 300px;
    top: 4%;
    left: -9%;
  }
`;

const Triangle2 = styled.div`
  width: 150px;
  height: 130px;
  background-image: url(image/triangle-grey.png);
  background-size: 150px;
  position: absolute;
  top: 13%;
  left: 62%;
  z-index: -10;

  @media (max-width: 1024px) {
    top: 10%;
    left: 62%;
  }
`;

const Triangle3 = styled.div`
  width: 500px;
  height: 40px;
  background-image: url(image/triangle-orange.png);
  background-size: 500px;
  position: absolute;
  top: 62%;
  left: 79%;
  z-index: -10;

  @media (max-width: 1024px) {
    width: 300px;
    height: 260px;
    background-size: 300px;
    top: 65%;
    left: 79%;
  }

  @media (max-width: 760px) {
    left: 75%;
  }
`;

const Background = styled.div`
  position: absolute;
`;

const Title = styled.div`
  font-size: 40px;
  font-family: 'Exo2-Light';
  color: #0d1f2d;
  text-align: center;
  line-height: 60px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 34px;
    line-height: 50px;
  }

  @media (max-width: 760px) {
    font-size: 30px;
    line-height: 37px;
  }
`;

const TitleSpan = styled.span`
  font-family: 'Exo2-Bold';
  color: ${props => props.color};
`;

const TitleMiniText = styled.div`
  font-size: 17px;
  font-family: 'Exo2-Regular';
  letter-spacing: 0.5px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    margin-bottom: 70px;
  }

  @media (max-width: 760px) {
    font-size: 12px;
    letter-spacing: 0;
  }
`;

const ContentWrap = styled.div`
  width: 1000px;
  height: auto;
  display: grid;
  grid-template-columns: ${props => props.grid};
  justify-content: space-between;
  margin-top: ${props => props.marginTop};

  @media (max-width: 1024px) {
    grid-template-columns: 45% 45%;
    width: 90%;
  }

  @media (max-width: 760px) {
    width: 80%;
    grid-template-columns: 100%;
  }
`;

const Content1Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  /* @media (max-width: 760px) {
    order: -1;
  } */
`;

const Content1FotosBlock = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-gap: 20px;
  margin-bottom: ${props => props.bottom};

  @media (max-width: 760px) {
    width: 95%;
  }
`;

const Content1Foto = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  align-self: ${props => props.align};
  margin: ${props => props.margin};
`;

const ContentTextBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 760px) {
    padding-left: 0;
    order: ${props => props.order};
  }
`;

const ContentIcon = styled.div`
  width: 70px;
  height: 70px;
  border: 2px solid #fe5d26;
  border-radius: 50px;
  background-color: none;
  justify-content: center;
  display: flex;
  align-items: center;
  position: absolute;
  top: ${props => props.top};
  left: 80%;

  @media (max-width: 1024px) {
    top: 5%;
  }

  @media (max-width: 760px) {
    top: -11%;
    left: 83%;
    width: 50px;
    height: 50px;
  }
`;

const ContentIconImg = styled.div`
  width: 43px;
  height: 43px;
  background-image: url(${props => props.url});
  margin-bottom: ${props => props.marginBottom};
  position: relative;
  background-repeat: no-repeat;
  margin-left: ${props => props.marginLeft};

  @media (max-width: 760px) {
    transform: scale(0.7);
  }
`;

const ContentText1 = styled.div`
  font-size: 13px;
  color: #fe5d26;
  font-family: 'Roboto-Bold';
  margin-bottom: 25px;

  @media (max-width: 760px) {
    font-size: 11px;
  }
`;

const ContentText2 = styled.div`
  font-size: 30px;
  color: #0d1f2d;
  font-family: 'Exo2-Bold';
  margin-bottom: 25px;

  @media (max-width: 760px) {
    font-size: 23px;
  }
`;

const ContentText3 = styled.div`
  font-size: 15px;
  color: #686868;
  font-family: 'Exo2-Light';
  line-height: 25px;
  margin-bottom: 25px;

  @media (max-width: 760px) {
    font-size: 13px;
    line-height: 19px;
  }
`;

const ContentText4Block = styled.div`
  display: flex;
`;

const ContentText4 = styled.div`
  font-size: 13px;
  color: #fe5d26;
  font-family: 'Exo2-Bold';

  @media (max-width: 760px) {
    font-size: 12px;
  }
`;

const ContentText4Img = styled.div`
  width: 11px;
  height: 11px;
  margin-left: 5px;
  margin-top: 3px;
  background-image: url(image/orange-arrow.png);
`;

const LearnBanner = styled.div`
  width: 1000px;
  height: 90px;
  background-color: #0d1f2d;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5px;
  margin-bottom: 7px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100px;
  }

  @media (max-width: 760px) {
    margin-top: 50px;
    height: 150px;
  }
`;

const BannerTitle = styled.div`
  font-size: 25px;
  font-family: 'Exo2-Bold';
  color: #f4f4f4;
  margin-bottom: 15px;

  span {
    color: #fe5d26;
  }

  @media (max-width: 1024px) {
    font-size: 23px;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    margin-right: 30px;
  }
`;

const BannerContentWrap = styled.div`
  display: grid;
  width: 85%;
  grid-template-columns: 33% 33% 33%;
  justify-content: space-between;

  @media (max-width: 1024px) {
    grid-template-columns: 40% 30% 30%;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 30% 30% 30%;
  }
`;

const BannerContentBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerCheckMark = styled.div`
  width: 15px;
  height: 15px;
  background-size: 15px;
  background-image: url(image/orange-checkmark.png);
  margin-right: 5px;

  @media (max-width: 1024px) {
    width: 20%;
    background-repeat: no-repeat;
  }
`;

const BanerText = styled.div`
  font-size: 13px;
  font-family: 'Exo2-Light';
  color: #f4f4f4;
  text-align: center;

  span {
    font-family: 'Exo2-Bold';
  }

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 760px) {
    font-size: 11px;
    width: 80%;
  }
`;

const BannerImg = styled.div`
  background-image: url(image/how-banner-icon.png);
  background-size: 60px;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 17%;
  left: 91%;

  @media (max-width: 1024px) {
    left: 91%;
    top: 16%;
  }

  @media (max-width: 760px) {
    left: 87%;
    top: 18%;
    background-size: 34px;
    width: 34px;
    height: 34px;
  }
`;

const BannerMiniText = styled.div`
  font-size: 11px;
  color: #3a5265;
  font-family: 'Exo2-Regular';
  width: 1000px;
  text-align: left;
  margin-bottom: 30px;

  span {
    color: #f25d26;
  }

  @media (max-width: 1024px) {
    width: 90%;
    margin-top: 5px;
  }

  @media (max-width: 760px) {
    width: 80%;
    margin-bottom: 70px;
  }
`;

const Content2ImgBlock = styled.div`
  width: 100%;
  height: 500px;
  margin-left: auto;
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 440px;
  }

  @media (max-width: 760px) {
    margin-top: 40px;
  }
`;

const Content2Img = styled.img`
  @media (max-width: 1024px) {
    height: 440px;
    width: auto;
  }
`;

const Content3ImgBlock = styled.div`
  width: 100%;
  margin-top: 40px;
  height: 310px;
  margin-left: auto;
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
  }

  @media (max-width: 760px) {
  }
`;

const Content3Img = styled.img`
  background-color: aqua;
  width: 100%;
  height: 310px;
  background-image: url(image/how-content3-img.jpg);

  @media (max-width: 1024px) {
  }
`;

const XpImgBlock = styled.div`
  height: 80px;
  width: 65px;
  background-color: #f4f4f4;
  position: absolute;
  top: 17%;
  left: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskTextWrap = styled.div`
  width: 94%;
  height: 45px;
  background-color: #f4f4f4;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 86%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 35px;
  }
`;

const TaskButton = styled.div`
  background-color: #f25d26;
  width: 50px;
  height: 25px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Roboto-Bold';
  font-size: 10px;
  margin-right: 10px;

  @media (max-width: 1024px) {
    width: 40px;
    font-size: 9px;
    height: 20px;
    margin-right: 5px;
    font-family: 'Roboto-Regular';
  }
`;

const TaskText = styled.div`
  font-family: 'Exo2-Bold';
  color: #0d1f2d;
  font-size: 13px;
  letter-spacing: -0.2px;

  @media (max-width: 1024px) {
    font-size: 11px;
    letter-spacing: -0.5px;
  }
`;

export default HowToLeran;
