import React from "react";

export default function NavItem({ content, href }) {
  return (
    <li className="text-lg font-semibold">
      <a href={href}>{content}</a>
    </li>
  );
}
