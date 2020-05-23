import React from 'react';
import contentJson from '../resources/json/summary-content.json';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' };
  }

  parseContentJson(content) {
    if (content === undefined || content === null || content.length <= 0) return;

    return content.map(o => {
      if (o.tag === undefined || o.tag === '') return o.content;

      return React.createElement(o.tag, { className: o.class }, o.content, this.parseContentJson(o.children));
    });
  }

  render() {
    return <div className={'summary__container theme-dark'}>{this.parseContentJson(contentJson.data)}</div>;
  }
}

export default Summary;
