import React, {Component} from "react";
import "./styles/index.scss"
import MainMenu from "./components/main-menu";
import NavButton from "./components/nav-button";
import HeroModal from "./components/hero-modal";

class App extends Component {

    navButtons = [
        'Summary',
        'Skills',
        'Projects',
        'Aspirations'
    ];

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
                <HeroModal isOpen={this.state.heroModalOpen} content={this.state.heroModalContent} closeOnClick={() => this.setState({heroModalOpen: false})}/>
                <MainMenu>
                    {
                        this.navButtons.map((c, i) => <NavButton key={i} text={c} onClick={() => this.setState({
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
