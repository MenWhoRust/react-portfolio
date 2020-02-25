import React, {Component} from "react";
import "./styles/index.scss"
import MainMenu from "./components/main-menu";
import NavButton from "./components/nav-button";
import HeroModal from "./components/hero-modal";
import Summary from "./components/summary";

class App extends Component {

    modalMapping = {
        Summary: Summary,
        Skills: null,
        Projects: null,
        Aspirations: null
    };

    constructor(props) {
        super(props);

        this.state = {
            heroModalOpen: false,
            heroModalContent: ''
        };
    }


    render() {
        return (
            <div className="app-container theme-dark">
                <HeroModal isOpen={this.state.heroModalOpen} content={this.modalMapping[this.state.heroModalContent]} closeOnClick={() => this.setState({heroModalOpen: false})}/>
                <MainMenu>
                    {
                        Object.keys(this.modalMapping).map((c, i) => <NavButton key={i} text={c} onClick={() => this.setState({
                            heroModalOpen: true,
                            heroModalContent: c
                        })}/>)
                    }
                </MainMenu>
            </div>
        );
    }
}

export default App;
