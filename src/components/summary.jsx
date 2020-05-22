import React from "react";
import ReactMarkdown from "react-markdown";
import md from "../resources/md/summary.md"

class Summary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {markdown: ''};

        fetch(md).then(res => res.text()).then(txt => this.setState({markdown: txt}));
    }


    render() {
        return (
            <div className={"summary__container theme-dark"}>
                <ReactMarkdown className={"summary__content theme-dark"} source={this.state.markdown}/>
            </div>
        );
    }
}

export default Summary;