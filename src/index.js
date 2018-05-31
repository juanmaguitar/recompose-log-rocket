import React from "react";
import { render } from "react-dom";

import "./styles.css";

import "./hof-example";

// import Button from "./scenario1/Button";
// import ButtonWithTrack from "./scenario1/ButtonWithTrack";

import { Button, ButtonWithTrack } from "./scenario2/Button";

const App = () => (
  <div class="App container">
    <h2>Using Recompose to write clean HOCs {"\u2728"}</h2>

    <ul>
      <li>
        <Button onClick={() => console.log("Button clicked!")}>Click Me</Button>
      </li>
      <li>
        <ButtonWithTrack
          onClick={() => console.log("ButtonWithTrack clicked!")}
        >
          Click Me
        </ButtonWithTrack>
      </li>
    </ul>
  </div>
);

render(<App />, document.getElementById("root"));
