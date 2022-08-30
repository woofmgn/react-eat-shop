import { useState } from "react";

function Search({ callback }) {
  const [value, setValue] = useState("");

  const handleKey = (evt) => {
    if (evt.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    callback(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="search"
          onKeyDown={handleKey}
          onChange={(evt) => setValue(evt.target.value)}
          value={value}
        />
        <button
          className="btn"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export { Search };
