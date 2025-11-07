import { useEffect, useMemo, useState } from 'react';
import 'antd/dist/reset.css';
import './App.css';
import Particles from './Particles';
import SearchBar from './SearchBar';

const styles = {
  root: {
    fontFamily: 'Open Sans, sans-serif',
    textAlign: 'center',
    background: '#222',
    display: 'flex',
    zIndex: 0,
    position: 'absolute',
    width: '100vw',
    height: '100vh',
  },
};

const getDayPortion = (currentTime = new Date()) => {
  const currentHour = currentTime.getHours();
  const splitAfternoon = 12;
  const splitEvening = 17;

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    return 'afternoon';
  }

  if (currentHour >= splitEvening) {
    return 'evening';
  }

  return 'morning';
};

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const dayPortion = useMemo(() => getDayPortion(date), [date]);

  return (
    <div className="App">
      <div style={styles.root}>
        <Particles />
      </div>
      <div className="content">
        <div className="welcomeHeader">
          <div className="welcomeTime">Good {dayPortion}, Matthias.</div>
          <div className="dateLabel">
            {date.toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit',
            })}{' '}
            - {date.toDateString()}
          </div>
        </div>
        <div className="linksParentContainer">
          <div className="work linkContainer">
            <div className="groupHeader workHeader">
              <div className="headerText orangeHeader">Work.</div>
              <hr className="orangeLine"></hr>
            </div>
            <ul className="links">
              <li>
                <a href="https://www.linkedin.com/in/matthias-rathbun/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://calendar.google.com/calendar/r" target="_blank" rel="noopener noreferrer">
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="https://my.ucf.edu/psp/IHPROD/EMPLOYEE/EMPL/h/?tab=DEFAULT&cmd=login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCF Portal
                </a>
              </li>
            </ul>
          </div>
          <div className="collegeApps linkContainer">
            <div className="groupHeader collegeAppsHeader">
              <div className="headerText blueHeader">Games.</div>
              <hr className="blueLine"></hr>
            </div>
            <ul className="links">
              <li>
                <a href="lol://" target="_blank" rel="noopener noreferrer">
                  League of Legends
                </a>
              </li>
              <li>
                <a href="steam://rungameid/1085660" target="_blank" rel="noopener noreferrer">
                  Destiny 2
                </a>
              </li>
              <li>
                <a href="steam://rungameid/2681080" target="_blank" rel="noopener noreferrer">
                  Anno 1800
                </a>
              </li>
              <li>
                <a href="steam://rungameid/1174180" target="_blank" rel="noopener noreferrer">
                  RDR2
                </a>
              </li>
            </ul>
          </div>
          <div className="messaging linkContainer">
            <div className="groupHeader messagingHeader">
              <div className="headerText greenHeader">Messaging.</div>
              <hr className="greenLine"></hr>
            </div>
            <ul className="links">
              <li>
                <a href="discord://" target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://gmail.com/" target="_blank" rel="noopener noreferrer">
                  Gmail
                </a>
              </li>
            </ul>
          </div>
          <div className="socialMedia linkContainer">
            <div className="groupHeader socialMediaHeader">
              <div className="headerText redHeader">Social Media.</div>
              <hr className="redLine"></hr>
            </div>
            <ul className="links">
              <li>
                <a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">
                  Reddit
                </a>
              </li>
              <li>
                <a href="https://www.dni.gov/" target="_blank" rel="noopener noreferrer">
                  DNI.gov
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
