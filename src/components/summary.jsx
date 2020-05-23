import React from 'react';
import contentJson from '../resources/json/summary-content.json';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' };
  }

  parseContentJson(elements) {
    if (elements === undefined || elements === null || elements.length <= 0) return;

    return elements.map(elem => {
      if (elem.tag === undefined || elem.tag === '') return elem.content;

      return React.createElement(
        elem.tag,
        { className: elem.class },
        elem.content,
        this.parseContentJson(elem.children)
      );
    });
  }

  render() {
    return <div className={'summary__container theme-dark'}>{this.parseContentJson(contentJson.data)}</div>;
  }
}

export default Summary;
