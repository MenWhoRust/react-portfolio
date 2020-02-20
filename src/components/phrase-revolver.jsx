import React from "react";


class PhraseRevolver extends React.Component {
    phrases;
    isFirstLoad = true;
    baseTimeout = 1500;
    baseInterval = 3000;
    timeModifier = 250;

    constructor(props) {
        super(props);

        this.state = {currentIndex: 0, phraseAnimClass: "revolver__phrase revolver__phrase--enter"}
        this.phrases = [
            'coding',
            'learning',
            'designing',
            'growing',
            'thinking'

        ]
    }

    componentDidMount() {
    }

    getPhrase(text){
        if(this.isFirstLoad){
            this.startInterval()

            setTimeout(() =>{
                this.setState({
                    phraseAnimClass: "revolver__phrase revolver__phrase--leave"
                })
            }, this.baseTimeout + this.timeModifier);
            clearTimeout()
            this.isFirstLoad = false;
        }
        return (
            <div className={this.state.phraseAnimClass}>{text}</div>
        )
    }


    increaseIndex(){
        let index = (this.state.currentIndex + 1) % this.phrases.length;
        this.setState({
            currentIndex: index
        });
    }

    startInterval(){
        setInterval(()=> {
            setTimeout(() =>{
                this.setState({
                    phraseAnimClass: "revolver__phrase revolver__phrase--leave"
                })
            }, this.baseTimeout + this.timeModifier);

            clearTimeout();

            this.setState({
                phraseAnimClass: "revolver__phrase revolver__phrase--enter"
            })

            this.increaseIndex()

        }, this.baseInterval + this.timeModifier)
    }



    render() {
        return (
            <div className="revolver__container">
                <div className="revolver__words">I love</div>
                <div className="revolver__words revolver__words--highlight">{this.getPhrase(this.phrases[this.state.currentIndex])}</div>
                <div className="revolver__words">!</div>
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval();
    }

}

export default PhraseRevolver;