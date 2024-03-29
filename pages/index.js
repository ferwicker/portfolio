
import Obfuscate from 'react-obfuscate';
import { Link, Element } from 'react-scroll';

import css from './index.module.scss';
import Nav from '../components/Nav/Nav';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const darkTheme = useTheme();
  return (
    <>
      <Nav />
      <section className={css.heroSection}>
        <div className={css.hero}>
          <h1>Fernanda</h1>
          <p>front end dev/
            <span className={css.design}>
              graphic designer
            </span>
          </p>
        </div>
        <Link
          className={css.contactButton}
          to="contact" 
          smooth={true}
        >
          <button>
            Contact me
          </button>
        </Link>
      </section>
      <Element name='about'>
        <section>
          <div className={css.fadeIn_view}>
            <h2>About me</h2>
          </div>
          <div className={[css.bodyText, css.fadeIn_view].join(' ')}>
            <p>
              Hi! My name is Fernanda, but my friends call me Fer. 
              I am a Front End Developer from Sydney, Australia. I have a professional background
               in Graphic Design, which gives me pixel perfect attention to detail!
            </p>
            <p>
              My many hobbies include yoga, crochet, reading, chess, and creative coding.
              I love learning new things and always have a book or two with me.
            </p> 
            <p>
              I have a dog called Fish and he is, well... 
              <span className={css.theBest}>✨the best.✨</span>
            </p>
          </div>   
        </section>
      </Element>
      <Element name='work'>
        <section>
          <div className={css.fadeIn_view}>
            <h2>Experience</h2>
          </div>
          <div className={[css.bodyText, css.fadeIn_view].join(' ')}>
            <p>
              I have 2+ years' professional experience working in React, as part of the team of developers
              working mainly on the 
              {' '}
              <Obfuscate 
                className={css.wavyLink}
                href={'https://collection.sl.nsw.gov.au/'}
                target='_blank'
              >
                online catalogue
              </Obfuscate> 
              {' '}
              at the State Library of New South Wales.
            </p>
            {/* Add some about personal projects with new skills when they start being included. */}
            {/* <p>
              I love learning new skills, 
            </p> */}
          </div>
          <div className={css.fadeIn_view}>
            <h3 className={css.skillsHeading}>Skills</h3>
          </div>
          <div 
            className={[css.skillsContainer, darkTheme ? css.dark : css.light].join(' ')}
          >
            <div className={css.fadeIn_skill}>
              <span className={css.skillTag}>HTML</span>
            </div>
            <div className={css.fadeIn_skill}>
              <span className={css.skillTag}>CSS</span>
            </div>
            <div className={css.fadeIn_skill}>
              <span className={css.skillTag}>JS</span>
            </div>
            <div className={css.fadeIn_skill}>
              <span className={css.skillTag}>React</span>
            </div>
            <div className={css.fadeIn_skill}>
              <span className={css.skillTag}>Next JS</span>
            </div>
            <div className={css.fadeIn_skill}>
              <span className={css.skillTag}>Typescript</span>
            </div>
          </div>
        </section>
      </Element>
      <Element name='contact'>
        <section>
          <div className={css.fadeIn_view}>
            <h2>Contact me</h2>
          </div>
          <div className={[css.contactInfo, css.fadeIn_view].join(' ')}>
            <Obfuscate tel="+61 426 404 077" />
            <Obfuscate
              email="hello@fernandagilbert.dev"
              headers={{
                // cc: 'dade@zero-cool.af',
                // bcc: 'fer.wicker@gmail.com',
                subject: 'Hello, Fernanda!',
                // body: 'Down with the machines!',
              }}
            />
          </div>
          <Obfuscate 
            className={css.fadeIn_view} 
            href='https://github.com/ferwicker' 
            target='_blank'
          >
            <button>
              Github
            </button>
          </Obfuscate>
          <Obfuscate 
            className={css.fadeIn_view}
            href='https://www.linkedin.com/in/ferwicker/'
            target='_blank'
          >
            <button>
              Linkedin
            </button>
          </Obfuscate>
          <Obfuscate 
            className={css.fadeIn_view} 
            href='https://drive.google.com/file/d/1TDRrnPsQ-s3z6V6GieVFcF3UrWHUBf2Y/view?usp=sharing' target='_blank'
          >
            <button>
              Resume
            </button>
          </Obfuscate>
        </section>
      </Element>
    </>
  );
}

export default Home
