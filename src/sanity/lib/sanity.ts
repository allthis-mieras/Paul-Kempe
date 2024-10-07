import { sanityClient } from "sanity:client";

export async function getSiteSettings() {
  const query = `*[_type == "siteSettings"][1]`;
  const siteSettings = await sanityClient.fetch(query);
  return siteSettings;
}
