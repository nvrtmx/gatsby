import React from "react";
import Link from "gatsby-link";

export default () =>
  <div style={{ color: `tomato` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <div>
      <Link to="/asp/">ASP</Link>
	  <Link to="/soman/">Soman</Link>
    </div>
  </div>
