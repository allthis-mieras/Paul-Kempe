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
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";

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
      // previewUrl: import.meta.env.SANITY_PREVIEW_URL,
    }),
    visionTool({}),
    codeInput(),
    schemaMarkup(),
    dashboardTool({
      widgets: [projectInfoWidget(), projectUsersWidget()],
    }),
  ],
  schema,
});
