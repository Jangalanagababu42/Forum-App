import React from "react";

function SortBar() {
  return (
    <div className="grid place-items-start mt-5">
      <select name="sort" id="sort">
        <option value="recent">recent</option>
        <option value="MostVotes">MostVotes</option>
      </select>
    </div>
  );
}

export default SortBar;
