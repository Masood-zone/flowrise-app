import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer>
      <p>{settings.data.site_title}</p>
      <p>&copy; 2024 - All Rights Reserved.</p>
      <ul>
        {settings.data.navigation.map(({ link, label }) => (
          <li key={label}>
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </footer>
  );
}
