import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
   <header className="max-w-6xl mx-auto flex items-center justify-between p-4 top-0 left-0 right-0 fixed">
    <Link to={"/"}>
      <img src="/netflix-logo.png" alt="logo" className="w-52"/>
    </Link>
   </header>
  );
}
