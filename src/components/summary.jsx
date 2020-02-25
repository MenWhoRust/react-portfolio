import React from "react";
import summaryContent from "../resources/json/summary-content.json"

function Summary() {

    return(
      <div className={"summary__container theme-dark"}>
          {summaryContent.content}
      </div>
    );

}

export default Summary;