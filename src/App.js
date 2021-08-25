import React, { useState } from "react";
import Hookarray from "./Hookarray";

const App = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <Hookarray />
      <div>
        <input
          type="text"
          id="first"
          name="first"
          value={name.firstName}
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
        />
        <h3>FirstName is {name.firstName}</h3>
      </div>
      <div>
        <input
          type="text"
          id="second"
          name="second"
          value={name.lastName}
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
        />
        <h3>LastName is {name.lastName}</h3>
      </div>
    </div>
  );
};

export default App;
