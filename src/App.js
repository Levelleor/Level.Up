import React, { Component } from 'react';
import './App.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="website-title">
          <WebsiteTitle />
        </div>
        <div className="website-profile">
          <WebsiteProfile />
        </div>
      </header>
    );
  }
}

class WebsiteTitle extends React.Component {
  render() {
    return (
      <div>
        Level.UP
      </div>
    );
  }
}

class WebsiteProfile extends React.Component { 
  //будет включать так же кнопку логина и опыт к следующему уровню игрока
  render() {
    return (
      <div>
        Telion <span>lvl. 15</span>
      </div>
    );
  }
}

class MainProgressBar extends React.Component {
  render() {
    return (
      <div>
        <progress value="22" max="100"></progress>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className="content-block">
        {this.props.children}
      </div>
    );
  }
}

class GetExperienceContentBlock extends React.Component {
  render() {
    return (
      <Content>
        <div>
          Get Experience
        </div>
      </Content>
    );
  }
}

class BestLvlersContentBlock extends React.Component {
  render() {
    return (
      <Content>
        <div>
          Best lvlers
        </div>
      </Content>
    );
  }
}

class WhatIsThisContentBlock extends React.Component {
  render() {
    return (
      <Content>
        <div>
          What is This?
        </div>
      </Content>
    );
  }
}

class AboutBlock extends React.Component {
  render() {
    return (
      <div>
        Links About, About Me, Policy
      </div>
    );
  }
}

class LvlUpApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainProgressBar />
        <GetExperienceContentBlock />
        <BestLvlersContentBlock />
        <WhatIsThisContentBlock />
        <AboutBlock />
      </div>
    );
  }
}

export default LvlUpApp;
