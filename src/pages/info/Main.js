import { h, Component } from 'preact';
import StandardLayout from 'pages/layout/StandardLayout';
import StandardContentCard from 'pages/layout/StandardContentCard';
import releaseNotesHTML from '../../../book/release_notes.md';
import './style.css';

const Item = ({ title, href, description }) => (
  <li class='mdc-list-item'>
    <span class='mdc-list-item__text'>
      <span class='mdc-list-item__text__primary'>
        <a
          className='mdc-button mdc-button--primary'
          href={href}
          target='_blank'
        >
          { title }
        </a>
      </span>
      <span class='mdc-list-item__text__secondary'>{ description }</span>
    </span>
  </li>
);

const MainView = () => (
  <section className='content-section'>
    <ul class='mdc-list mdc-list--two-line'>
      <Item
        title='Tutorial'
        href='http://saka-key.lusakasa.com/tutorial'
        description='Learn how to use Saka Key'
      />
      <Item
        title='Customize'
        href='http://saka-key.lusakasa.com/tutorial/settings.html'
        description="Modify keybindings and adjust Saka Key's appearance"
      />
      <Item
        title='Feedback'
        href='http://saka-key.lusakasa.com/getting_started/feedback.html'
        description='Report bugs, request features, and give 5-star ratings'
      />
      <Item
        title='Contribute'
        href='https://github.com/lusakasa/saka-key'
        description='Developer? Help Make Saka Key better'
      />
    </ul>
  </section>
);

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const Header = () => (
  <div class='header-section'>
    <img
      alt='Saka Key'
      className='mdc-card__media main-logo-background'
      src='logo.png'
    />
    <section className='info-section'>
      <h1 className='mdc-card__title mdc-card__title--large'>Saka Key</h1>
      <h2 class='mdc-card__subtitle'>A keyboard interface to the web</h2>
      <h2 class='mdc-card__subtitle'>Version { SAKA_VERSION } for { capitalize(SAKA_PLATFORM) }</h2>
      <h2 class='mdc-card__subtitle'>By <a href='http://dawoodjee.com'>Sufyan</a></h2>
      {/*<a
        className='mdc-button mdc-button--primary'
        href='http://saka-key.lusakasa.com'>
        Handbook
      </a>
      <a
        className='mdc-button mdc-button--primary'
        href='https://github.com/lusakasa/saka-key'>
        Github
      </a>*/}
      {/*<a
        className='mdc-button mdc-button--primary'
        style='display:block'
        href='mailto:lusakasa.dev@gmail.com'>
        lusakasa.dev@gmail.com
      </a>*/}
    </section>
  </div>
);

class ReleaseNotes extends Component {
  render () {
    return (
      <section
        id='release-notes-section'
        style='margin-top: 40px; text-align: left; max-width: 600px'
        class='mdc-typography--body1'
        ref={(e) => {
          e.innerHTML = releaseNotesHTML;
        }}
      />
    );
  }
}

export default () => (
  <StandardLayout view='Info'>
    <StandardContentCard >
      <div
        style='width: 100%; height: 100%; display: flex; flex-flow: row wrap; justify-content: space-around;'
      >
        <div>
          <Header />
          <MainView />
        </div>
        <ReleaseNotes />
      </div>
    </StandardContentCard>
  </StandardLayout>
);