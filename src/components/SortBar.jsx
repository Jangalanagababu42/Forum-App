import React from "react";
import { useForum } from "./Context";

function SortBar() {
  const { sortedMethod } = useForum();
  return (
    <div className="grid place-items-start mt-5">
      <div>Sort By</div>
      <div className=" place-items-start mt-2 p-2 ">
        <select
          className="appearance-none outline-none"
          name="sort"
          id="sort"
          onChange={(e) => sortedMethod(e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="MostVotes">MostVotes</option>
        </select>
      </div>
    </div>
  );
}

export default SortBar;
