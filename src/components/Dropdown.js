import React from "react";
import "./Dropdown.css";
function Dropdown() {
  return (
    <div class="dropdown" data-dropdown>
      <button class="link" data-dropdown-button>
        Information
      </button>
      <div class="dropdown-menu information-grid">
        <div>
          <div class="dropdown-heading">Free Tutorials</div>
          <div class="dropdown-links">
            <a href="www" className="link">
              All
            </a>
            <a href="www" className="link">
              Latest
            </a>
            <a href="defe" className="link">
              Popular
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
