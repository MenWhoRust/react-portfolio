import React from "react";


const phrasesReg = /(\$phrases)+/gi;
class PhraseRevolver extends React.Component {
    phrases;
    segmentArr;
    isFirstLoad = true;
    baseTimeout = 1500;
    baseInterval = 3000;
    timeModifier = 250;

    constructor(props) {
        super(props);

        this.state = {currentIndex: 0, phraseAnimClass: "revolver__phrase--enter"};
        this.segmentArr = props.text.split(phrasesReg);
        this.phrases = props.phrases;
    }

    componentDidMount() {
    }

    getPhrase(text) {
        if (this.isFirstLoad) {
            this.startInterval();

            setTimeout(() => {
                this.setState({
                    phraseAnimClass: "revolver__phrase--leave"
                })
            }, this.baseTimeout + this.timeModifier);
            clearTimeout();
            this.isFirstLoad = false;
        }
        return (
            <div className={`revolver__phrase theme-dark ${this.state.phraseAnimClass}`}>{text}</div>
        )
    }


    increaseIndex() {
        let index = (this.state.currentIndex + 1) % this.phrases.length;
        this.setState({
            currentIndex: index
        });
    }

    startInterval() {
        setInterval(() => {
            setTimeout(() => {
                this.setState({
                    phraseAnimClass: "revolver__phrase--leave"
                })
            }, this.baseTimeout + this.timeModifier);

            clearTimeout();

            this.setState({
                phraseAnimClass: "revolver__phrase--enter"
            });

            this.increaseIndex()

        }, this.baseInterval + this.timeModifier)
    }

    getRevolverContent() {
        return this.segmentArr.map((s, i) => {
            if (!(phrasesReg).test(s)) {
                return <div key={i} className="revolver__words theme-dark">{s}</div>;
            }
            return (
                <div key={i}
                    className="revolver__words theme-dark revolver__words--highlight">{this.getPhrase(this.phrases[this.state.currentIndex])}</div>
            )
        }).reduce((a, b) => [a, ' ', b]);
    }


    render() {
        return (
            <div className="revolver__container theme-dark">
                {this.getRevolverContent()}
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval();
    }

}

export default PhraseRevolver;
