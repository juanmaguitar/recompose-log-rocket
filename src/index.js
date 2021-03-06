import React from "react";
import { render } from "react-dom";

import "./styles.css";

import "./hof-example";

// import Button from "./scenario1/Button";
// import ButtonWithTrack from "./scenario1/ButtonWithTrack";

// import { Button, ButtonWithTrack } from "./scenario2/Button";
// import { Link, LinkWithTrack } from "./scenario2/Link";

// import { Button, ButtonWithTrack } from "./scenario3/Button";
// import { Link, LinkWithTrack } from "./scenario3/Link";

import {
  Button,
  ButtonWithTrack,
  ButtonWithTrackCountdown,
  ButtonWithMessages
} from "./scenario4/Button";
import { Link, LinkWithTrack, LinkWithMessages } from "./scenario4/Link";

const App = () => (
  <div className="App container">
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
      <li>
        <ButtonWithTrackCountdown
          onClick={() => console.log("ButtonWithTrack clicked!")}
        >
          Click Me
        </ButtonWithTrackCountdown>
      </li>
      <li>
        <ButtonWithMessages
          onClick={() => console.log("ButtonWithMessages clicked!")}
        >
          Messages
        </ButtonWithMessages>
      </li>
      <li>
        <Link
          href="https://logrocket.com/"
          onClick={e =>
            !window.confirm("Redirect to LogRocket?") && e.preventDefault()
          }
        >
          LogRocket
        </Link>
      </li>
      <li>
        <LinkWithTrack
          href="https://logrocket.com/"
          onClick={() => console.log("LinkWithTrack clicked!")}
        >
          Click Me
        </LinkWithTrack>
      </li>
      <li>
        <LinkWithMessages
          onClick={() => console.log("LinkWithMessages clicked!")}
        >
          Messages
        </LinkWithMessages>
      </li>
    </ul>
  </div>
);

render(<App />, document.getElementById("root"));
