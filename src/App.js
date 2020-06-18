import React, {Component} from 'react';
import "antd/dist/antd.css";
import './App.css';
import Particles from "./Particles";
import SearchBar from './SearchBar'

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    background: "#222",
    display: "flex",
    zIndex: "0",
    position: "absolute",
    width: "100vw",
    height: "100vh"
  }
};

class App extends Component {

  renderWelcomeMsg = (currentTime = new Date()) => {
    const currentHour = currentTime.getHours()
    const splitAfternoon = 12; // 24hr time to split the afternoon
    const splitEvening = 17; // 24hr time to split the evening

    if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
      // Between 12 PM and 5PM
      return 'afternoon';
    } else if (currentHour >= splitEvening) {
      // Between 5PM and Midnight
      return 'evening';
    }
    // Between dawn and noon
    return 'morning';
  };

  // state contains current date
  state = {
    date: new Date(),
    dayPortion: this.renderWelcomeMsg()
  };

  clockUpdate() { // function to update the clock time.
    setInterval(() => {
      this.setState({ date: new Date(), dayPortion: this.renderWelcomeMsg() }) //updates async without updating entire DOM
      // this command will run indefinitely, on a 1000ms (1s) frequency.
    }, 1000);
  };

  render() {
    let date = this.state.date;
    return (
      <div className="App" >
        <div style={styles.root}>
          <Particles />
        </div>
        <div className="welcomeHeader">
          <div className="welcomeTime">Good {this.state.dayPortion}, Matthias.</div>
          <div className="dateLabel">{date.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit'
          })} - {date.toDateString()}</div>
        </div>
        <div className="linksParentContainer">
          <div className="work linkContainer">
            <div className="groupHeader workHeader">
              <div className="headerText orangeHeader">
                Work.
                        </div>
              <hr className="orangeLine"></hr>
            </div>
            <ul className="links">
              <li><a href="https://keep.google.com/u/0/" target="_blank" rel="noopener noreferrer">Google Keep</a></li>
              <li><a href="https://calendar.google.com/calendar/r" target="_blank" rel="noopener noreferrer">Calendar</a></li>
              <li><a href="https://my.ucf.edu/psp/IHPROD/EMPLOYEE/EMPL/h/?tab=DEFAULT&cmd=login" target="_blank" rel="noopener noreferrer">UCF Portal</a></li>
              <li><a href="http://www.outlook.com/knights.ucf.edu" target="_blank" rel="noopener noreferrer">UCF Email</a></li>
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              
            </ul>
          </div>
          <div className="collegeApps linkContainer">
            <div className="groupHeader collegeAppsHeader">
              <div className="headerText blueHeader">
                Games.
                        </div>
              <hr className="blueLine"></hr>
            </div>
            <ul className="links">
            <li><a href="steam://rungameid/359550" target="_blank" rel="noopener noreferrer">Rainbow Six</a></li>
              <li><a href="steam://rungameid/252950" target="_blank" rel="noopener noreferrer">Rocket League</a></li>
              <li><a href="uplay://launch/4932/0" target="_blank" rel="noopener noreferrer">Division 2</a></li>
              <li><a href="steam://rungameid/1085660" target="_blank" rel="noopener noreferrer">Destiny 2</a></li>
              <li><a href="steam://rungameid/582010" target="_blank" rel="noopener noreferrer">Monster Hunter: World</a></li>
            </ul>
          </div>
          <div className="messaging linkContainer">
            <div className="groupHeader messagingHeader">
              <div className="headerText greenHeader">
                Messaging.
                        </div>
              <hr className="greenLine"></hr>
            </div>
            <ul className="links">
              <li><a href="discord://" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="slack://" target="_blank" rel="noopener noreferrer">ForensX Slack</a></li>
              <li><a href="https://gmail.com/" target="_blank" rel="noopener noreferrer">Gmail</a></li>
            </ul>
          </div>
          <div className="socialMedia linkContainer">
            <div className="groupHeader socialMediaHeader">
              <div className="headerText redHeader">
                Social Media.
                        </div>
              <hr className="redLine"></hr>
            </div>
            <ul className="links">
              <li><a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">Reddit</a></li>
              <li><a href="https://www.reddit.com/r/news/" target="_blank" rel="noopener noreferrer">r/News</a></li>
              <li><a href="https://medium.com/" target="_blank" rel="noopener noreferrer">Medium</a></li>
              <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">Youtube</a></li>

            </ul>
          </div>
          <SearchBar></SearchBar>
        </div>
        {
          this.clockUpdate()
        }
        
      </div >
    )
  }
}

export default App;
