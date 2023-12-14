
import Obfuscate from 'react-obfuscate';
import { Link, Element } from 'react-scroll';

import css from './index.module.scss';
import Nav from '../components/Nav/Nav';

const Home = () => {
  return (
    <>
      <Nav />
      <section>
        <div className={css.hero}>
          <h1>Fernanda</h1>
          <p>front end dev/graphic designer</p>
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
      <Element name='contact'>
        <section>
          <h2>Contact me</h2>
          <div className={css.contactInfo}>
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
          <Obfuscate href='https://github.com/ferwicker' target='_blank'>
            <button>
              Github
            </button>
          </Obfuscate>
          <Obfuscate href='https://www.linkedin.com/in/ferwicker/' target='_blank'>
            <button>
              Linkedin
            </button>
          </Obfuscate>
        </section>
      </Element>
    </>
  );
}

export default Home
