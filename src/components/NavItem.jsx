import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ content, href }) {
  return (
    <li className="text-lg font-semibold">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-gray-500"
        }
        to={href}
      >
        {content}
      </NavLink>
    </li>
  );
}
