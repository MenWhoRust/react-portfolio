import React, { Component } from "react";
import "./styles/index.scss";
import MainMenu from "./components/main-menu";
import NavButton from "./components/nav-button";
import HeroModal from "./components/hero-modal";
import Summary from "./components/summary";

class App extends Component {
  modalMapping = {
    Summary: <Summary />,
    Skills: null,
    Projects: null,
    Aspirations: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      activateHero: false,
      heroModalOpen: false,
      heroModalContent: "",
    };
  }

  destroyHero() {
    this.setState({ heroModalOpen: false });

    setTimeout(() => this.setState({ activateHero: false }), 1000);
  }

  mapNavButtons() {
    return Object.keys(this.modalMapping).map((c, i) => (
      <NavButton
        key={i}
        text={c}
        onClick={() =>
          this.setState({
            activateHero: true,
            heroModalOpen: true,
            heroModalContent: c,
          })
        }
      />
    ));
  }

  handleActivateHero(activateHero) {
    if (activateHero) {
      return (
        <HeroModal
          isOpen={this.state.heroModalOpen}
          content={this.modalMapping[this.state.heroModalContent]}
          closeOnClick={() => this.destroyHero()}
        />
      );
    } else return "";
  }

  render() {
    return (
      <div className='app-container theme-dark'>
        {this.activateHero(this.state.activateHero)}
        <MainMenu>{this.mapNavButtons}</MainMenu>
      </div>
    );
  }
}

export default App;
