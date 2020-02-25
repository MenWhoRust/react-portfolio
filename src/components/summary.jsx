import React from "react";
import summaryContent from "../resources/json/summary-content.json"
import ReactMarkdown from "react-markdown";

function Summary() {

    return(
      <div className={"summary__container theme-dark"}>
          <ReactMarkdown className={"summary_content theme-dark"}>
          {summaryContent.content}
          </ReactMarkdown>
      </div>
    );

}

export default Summary;