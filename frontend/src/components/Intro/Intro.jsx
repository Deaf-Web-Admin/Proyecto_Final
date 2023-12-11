import './Intro.css';

import IntroImageContainer from '../IntroImageContainer/IntroImageContainer';
import Sections from '../Sections/Sections';

const Intro = () => {
  return (
    <main>
      <div className="SectionContainer">
        <Sections />
      </div>
      <IntroImageContainer />
    </main>
  );
};

export default Intro;
