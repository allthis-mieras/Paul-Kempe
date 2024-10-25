import type { SanityDocument } from "@sanity/client";
import { loadQuery } from "../lib/load-query";

// Function to load homepage content
export async function getHomepageContent() {
  const { data: homepage } = await loadQuery<{
    title: string;
    pageType: string;
    showreelDesktop?: string;
    posterImageDesktop?: string;
    showreelMobile?: string;
    posterImageMobile?: string;
  }>({
    query: `*[_type == "pages" && pageType == "homepage"][0]`,
  });
  return homepage;
}

// Function to load about content
export async function getAboutContent() {
  const { data: about } = await loadQuery<{
    title: string;
    pageType: string;
    body?: any;
  }>({
    query: `*[_type == "pages" && pageType == "about"][0]`,
  });
  return about;
}

// Function to load contact content
export async function getContactContent() {
  const { data: contact } = await loadQuery<{
    title: string;
    pageType: string;
    contact?: any;
  }>({
    query: `*[_type == "pages" && pageType == "contact"][0]`,
  });
  return contact;
}

// Function to load posts
export async function getPosts() {
  const { data: posts } = await loadQuery<SanityDocument[]>({
    query: `*[_type == "post"][0...3]`,
  });
  return posts;
}

// Usage
const homepage = await getHomepageContent();
const about = await getAboutContent();
const contact = await getContactContent();
const posts = await getPosts();
