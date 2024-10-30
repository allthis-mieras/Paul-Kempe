import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { myStructure } from "./src/sanity/deskStructure";
import { presentationTool } from "sanity/presentation";
import { schema } from "./src/sanity/schemaTypes";
import { resolve } from "./src/sanity/lib/resolve";

// plugins
import { codeInput } from "@sanity/code-input";
import { schemaMarkup } from "@operationnation/sanity-plugin-schema-markup";

import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";

import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool({
      structure: myStructure,
    }),
    presentationTool({
      resolve,
      previewUrl: location.origin,
    }),
    visionTool({}),
    codeInput(),
    schemaMarkup(),
    dashboardTool({
      widgets: [
        sanityTutorialsWidget(),
        projectInfoWidget(),
        projectUsersWidget(),
        netlifyWidget({
          title: "Deploys",
          sites: [
            {
              title: "Paul Kempe Studio",
              apiId: import.meta.env.PUBLIC_NETLIFY_API_ID,
              buildHookId: import.meta.env.PUBLIC_SANITY_API_WRITE_TOKEN,

              name: "paulkempe",
            },
            {
              title: "Paul Kempe Studio Website",
              apiId: import.meta.env.PUBLIC_NETLIFY_API_ID,
              buildHookId: import.meta.env.PUBLIC_SANITY_API_WRITE_TOKEN,
              name: "sanity-paulkempe-studio",
              url: "https://paulkempe.netlify.app/",
            },
          ],
        }),
      ],
    }),
  ],
  schema,
});
