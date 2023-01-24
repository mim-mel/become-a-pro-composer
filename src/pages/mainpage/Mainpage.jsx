import Footer from '../../components/Footer';
import Banner from './Banner';
import ConnectBanner from './ConnectBanner';
import HowToLeran from './HowToLearn';
import LoveUs from './LoveUs';
import Profile from './Profile';

const MainPage = () => {
  return (
    <>
      <Banner />
      <Profile />
      <HowToLeran />
      <ConnectBanner />
      <LoveUs />
      <Footer />
    </>
  );
};

export default MainPage;
