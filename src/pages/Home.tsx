import React from 'react';
import HomeIntroduction from '../components/Home-Introduction'
import HomeArticle from '../components/Home-Article';
import HomeGame from '../components/Home-Game';
import MovingText from '../components/MovingText';
import Spacer from '../components/Spacer';

const Home: React.FC = () => {
  return (
    <div>
      <HomeIntroduction />
      <HomeArticle />
      <Spacer height={20}  width='100%'/>
      <MovingText
      text="As I continue my studies,
      I will publish articles covering
      topics that I find interesting
      and/or challenging, which I believe
      are worth articulating for my
      future self or others!" />
      <Spacer height={20} width='100%'/>
      <HomeGame />
    </div>
  );
};

export default Home;
