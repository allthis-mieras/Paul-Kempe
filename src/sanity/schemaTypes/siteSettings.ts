// src/sanity/schemaTypes/siteSettings.ts
import { defineField, defineType } from "sanity";
// import { CustomStringInput } from "../componenents/CustomStringInput";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "website", title: "Website" },
    { name: "analytics", title: "Analytics" },
    { name: "seo", title: "SEO & HTML Schema Options" },
    { name: "social", title: "Social" },
    { name: "contact", title: "Contact" },
  ],
  fields: [
    // Website Group
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      group: "website",
    }),
    defineField({
      name: "tagline",
      type: "string",
      title: "Tagline",
      group: "website",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 3,
      description: "A short description of your website",
      group: "website",
    }),

    defineField({
      name: "logoVideo",
      type: "file",
      title: "Logo Video (Chrome)",
      description: "Please upload your .webm (VP9 with alpha) here.",
      group: "website",
      options: {
        accept: "video/webm",
      },
    }),
    defineField({
      name: "logoVideoSafari",
      type: "file",
      title: "Logo Video (Safari)",
      description: "Please upload a .mov (HEVC with alpha) here.",
      group: "website",
      options: {
        accept: "video/quicktime,video/mp4",
      },
    }),
    defineField({
      name: "logoFallback",
      type: "image",
      title: "Logo Image",
      description: "Add your logo fallback image here.",
      group: "website",
    }),
    defineField({
      name: "favicon",
      type: "image",
      title: "Favicon",
      group: "website",
    }),
    defineField({
      name: "language",
      type: "string",
      title: "Language",
      group: "website",
      options: {
        list: [
          { title: "English", value: "en-EN" },
          { title: "Dutch", value: "nl-NL" },
          // Add more languages as needed
        ],
      },
    }),

    defineField({
      name: "timezone",
      type: "string",
      title: "Timezone",
      group: "website",
      options: {
        list: [
          { title: "UTC", value: "UTC" },
          { title: "Europe/Amsterdam", value: "Europe/Amsterdam" },
          { title: "America/New York", value: "America/New_York" },
          { title: "America/Chicago", value: "America/Chicago" },
          { title: "America/Denver", value: "America/Denver" },
          { title: "America/Los Angeles", value: "America/Los_Angeles" },
          { title: "America/Sao Paulo", value: "America/Sao_Paulo" },
          {
            title: "America/Argentina/Buenos Aires",
            value: "America/Argentina/Buenos_Aires",
          },
          { title: "Europe/London", value: "Europe/London" },
          { title: "Europe/Berlin", value: "Europe/Berlin" },
          { title: "Europe/Paris", value: "Europe/Paris" },
          { title: "Europe/Moscow", value: "Europe/Moscow" },
          { title: "Asia/Tokyo", value: "Asia/Tokyo" },
          { title: "Asia/Shanghai", value: "Asia/Shanghai" },
          { title: "Asia/Dubai", value: "Asia/Dubai" },
          { title: "Asia/Singapore", value: "Asia/Singapore" },
          { title: "Asia/Kolkata", value: "Asia/Kolkata" },
          { title: "Australia/Sydney", value: "Australia/Sydney" },
          { title: "Australia/Melbourne", value: "Australia/Melbourne" },
          { title: "Pacific/Auckland", value: "Pacific/Auckland" },
          { title: "Pacific/Honolulu", value: "Pacific/Honolulu" },
          { title: "Africa/Johannesburg", value: "Africa/Johannesburg" },
          { title: "Africa/Lagos", value: "Africa/Lagos" },
        ],
      },
    }),

    // defineField({
    //   name: "metaTags",
    //   type: "array",
    //   title: "Meta Tags",
    //   group: "website",
    //   of: [
    //     {
    //       type: "object",
    //       fields: [
    //         { name: "name", type: "string", title: "Name" },
    //         { name: "content", type: "string", title: "Content" },
    //       ],
    //     },
    //   ],
    // }),

    // Analytics Group
    defineField({
      name: "googleAnalytics",
      type: "string",
      title: "Google Analytics",
      description: "Add your Google Analytics here (UA-12345678-1)",
      initialValue: "UA-12345678-1", // Example Google Analytics ID
      group: "analytics",
    }),
    defineField({
      name: "googleTagManager",
      type: "string",
      title: "Google Tag Manager",
      description: "Add your Google Tag Manager ID here (GTM-XXXXXXX)",
      initialValue: "GTM-XXXXXXX",
      group: "analytics",
      readOnly: true, // Disable editing
    }),
    defineField({
      name: "facebookPixel",
      type: "string",
      title: "Facebook Pixel",
      initialValue: "XXXXXXXX",
      group: "analytics",
      readOnly: true, // Disable editing
    }),

    // SEO & HTML Schema Options Group

    defineField({
      name: "shareImage",
      type: "image",
      title: "Share Image",
      group: "seo",
    }),

    defineField({
      name: "defaultPageTitle",
      type: "string",
      // components: {
      //   input: CustomStringInput, // Custom input component
      // },
      title: "Default Page Title",
      description: "The default title (max 60 characters) of your website",
      validation: (Rule) =>
        Rule.max(60).warning("SEO-best practice: around 60 characters max"),

      group: "seo",
    }),
    defineField({
      name: "defaultPageDescription",
      type: "text",
      // components: {
      //   input: CustomStringInput,
      // },
      title: "Default Page Description",
      description: "A short description (max 160 characters) of your website",
      validation: (Rule) =>
        Rule.max(160).warning("SEO-best practice: around 160 characters max"),

      rows: 2,
      group: "seo",
    }),
    defineField({
      name: "schemaMarkup",
      type: "schemaMarkup",
      title: "Schema Markup",
      group: "seo",
      description: "Add your schema markup here.",
    }),

    // Social Group
    defineField({
      name: "socialAccounts",
      type: "array",
      title: "Social Accounts",
      group: "social",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    }),

    // Contact Group
    defineField({
      name: "phone",
      type: "string",
      title: "Phone",
      group: "contact",
    }),
    defineField({
      name: "email",
      type: "email",
      title: "Email",
      group: "contact",
    }),
    defineField({
      name: "kvk",
      type: "string",
      title: "KVK",
      group: "contact",
    }),
    defineField({
      name: "btw",
      type: "string",
      title: "BTW",
      group: "contact",
    }),
    defineField({
      name: "address",
      type: "string",
      title: "Address",
      group: "contact",
    }),
    defineField({
      name: "termsAndConditions",
      type: "file",
      title: "Terms & Conditions",
      group: "contact",
    }),
    defineField({
      name: "privacyPolicy",
      type: "file",
      title: "Privacy Policy",
      group: "contact",
    }),
  ],
});
