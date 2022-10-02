import styled from 'styled-components';
import './../../fonts/fonts.css';

const Profile = () => {
  return (
    <Wrap>
      <ProfileText>
        Creating Orchestral Music has <br />
        <ProfileSpanText>never been easier</ProfileSpanText>
      </ProfileText>
      <SmallText>
        If we can do it, <SmallSpanText>so can you</SmallSpanText>. Seriously.
      </SmallText>
      <FotoTextWrap>
        <ProfilFoto src='/image/profile.jpg' />
        <BubbleTextBox>
          <BubbleText>
            Hey! My name is Kevin 👋 and I'm the creator of Become A Pro
            Composer.
          </BubbleText>
          <BubbleText>
            Orchestral music production can feel overwhelming - I know, I've
            been there. There's so mush to learn, so many skills to master.
          </BubbleText>
          <BubbleText>
            That's why I made Become A Pro Composer. A learning hub where you
            grow as a composer and write better music.
          </BubbleText>
        </BubbleTextBox>
      </FotoTextWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 1100px;
  margin: 0 auto;
  height: 450px;
  padding: 20px 0;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const ProfileText = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Exo2-Bold';
  font-weight: 900;
  font-size: 70px;
  letter-spacing: -0.5px;

  @media (max-width: 1024px) {
    font-size: 50px;
  }

  @media (max-width: 768px) {
    font-size: 37px;
    margin-bottom: 20px;
  }
`;

const ProfileSpanText = styled.span`
  color: #fe5d26;
`;

const SmallText = styled.div`
  text-align: center;
  margin: 0;
  font-family: 'Exo2-Light';
  font-size: 23px;

  @media (max-width: 1024px) {
    font-size: 23px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const SmallSpanText = styled.span`
  font-family: 'Exo2-SemiBold';
`;

const FotoTextWrap = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;

  @media (max-width: 1024px) {
    width: 90%;
    align-items: flex-start;
    margin: 60px auto;
    height: 500px;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 640px;
  }
`;

const ProfilFoto = styled.img`
  display: inline-flex;
  height: 350px;

  @media (max-width: 1024px) {
    height: 250px;
  }

  @media (max-width: 768px) {
    height: 230px;
  }
`;

const BubbleTextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: space-between;
  margin-left: 30px;

  @media (max-width: 1024px) {
    height: 450px;
  }

  @media (max-width: 768px) {
    height: 345px;
    margin: 30px 25px 30px 25px;
  }
`;

const BubbleText = styled.div`
  background-color: #fe5d26;
  color: white;
  font-family: 'Exo2-SemiBold';
  font-size: 23px;
  line-height: 30px;
  padding: 18px 35px;
  border-radius: 30px;
  border-top-left-radius: 0;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 25px;
    padding: 15px 20px;
    border-radius: 25px;
    border-top-left-radius: 0;
  }
`;

export default Profile;
