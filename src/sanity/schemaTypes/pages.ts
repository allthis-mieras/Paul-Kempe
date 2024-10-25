// src/sanity/schemaTypes/pages.ts

import { defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "pages",
  type: "document",
  title: "Pages",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "pageType",
      type: "string",
      title: "Page Type",
      options: {
        list: [
          { title: "Homepage", value: "homepage" },
          { title: "About", value: "about" },
          { title: "Contact", value: "contact" },
        ],
      },
      validation: (Rule) =>
        Rule.custom(async (pageType, context) => {
          const { document } = context;
          if (!document) {
            return true; // Skip validation if document is undefined
          }

          const client = context.getClient({ apiVersion: "2021-06-07" });

          // Check if there is already a page of the same type
          const existingPages = await client.fetch(
            `*[_type == "pages" && pageType == $pageType && !(_id in path('drafts.**')) && _id != $id]`,
            { pageType, id: document._id.replace("drafts.", "") }, // Remove drafts prefix
          );

          return existingPages.length > 0
            ? `There can only be one ${pageType} page`
            : true;
        }),
    }),
    // Conditional fields based on pageType
    defineField({
      name: "showreelDesktop",
      type: "url",
      title: "Showreel Desktop URL",
      hidden: ({ parent }) => parent.pageType !== "homepage",
    }),
    defineField({
      name: "posterImageDesktop",
      type: "image",
      title: "Poster Image Desktop",
      hidden: ({ parent }) => parent.pageType !== "homepage",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "showreelMobile",
      type: "url",
      title: "Showreel Mobile URL",
      hidden: ({ parent }) => parent.pageType !== "homepage",
    }),
    defineField({
      name: "posterImageMobile",
      type: "image",
      title: "Poster Image Mobile",
      hidden: ({ parent }) => parent.pageType !== "homepage",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "body",
      type: "blockContent",
      title: "Content",
      hidden: ({ parent }) => parent.pageType !== "about",
    }),
    defineField({
      name: "clientsTitle",
      type: "string",
      title: "Title",
      hidden: ({ parent }) => parent.pageType !== "about",
    }),
    defineField({
      name: "clients",
      type: "blockContent",
      title: "Clients",
      hidden: ({ parent }) => parent.pageType !== "about",
    }),
    defineField({
      name: "contact",
      type: "blockContent",
      title: "Text",
      hidden: ({ parent }) => parent.pageType !== "contact",
    }),
    defineField({
      name: "featImage",
      type: "image",
      title: "Featured Image",
      hidden: ({ parent }) => parent.pageType === "homepage",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],
});
