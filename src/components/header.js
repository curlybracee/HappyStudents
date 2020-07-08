import React from "react";
export const Header = () => {
  return (
    <div className="header">
      <h1>HappyStudents</h1>
      <div className="searchBar">
        <form>
          <input
            type="text"
            className="searchInput"
            placeholder="Search Course"
          />
        </form>
      </div>
    </div>
  );
};
