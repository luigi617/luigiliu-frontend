import React, { useEffect } from 'react';
import HomeIntroduction from '../components/Home-Introduction'
import HomeArticle from '../components/Home-Article';
import HomeGame from '../components/Home-Game';
import MovingText from '../components/MovingText';
import Spacer from '../components/Spacer';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <HomeIntroduction />
      <Spacer height={45} background_color='var(--theme-background-lighter)'/>
      <HomeArticle />
      <Spacer height={20} />
      <MovingText
      text="As I continue my studies,
      I will publish articles covering
      topics that I find interesting
      and/or challenging, which I believe
      are worth articulating for my
      future self or others!" />
      <Spacer height={20} />
      <HomeGame />
      <Spacer height={20} />
      <Footer />
    </div>
  );
};

export default Home;
