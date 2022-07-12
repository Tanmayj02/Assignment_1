import { useState } from "react";

const SearchUsers = (setUserInput: any) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Users"
        onChange={(e) => setUserInput(e.target.value)}
      />
    </div>
  );
};

export default SearchUsers;
