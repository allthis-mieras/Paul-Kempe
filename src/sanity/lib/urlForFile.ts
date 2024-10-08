import { getFileAsset } from "@sanity/asset-utils";
import { sanityClient } from "sanity:client";

// Function to get the URL of a file asset
export function urlForFile(source: any) {
  return getFileAsset(source, {
    projectId: sanityClient.config().projectId, // Automatically uses the projectId from your Sanity config
    dataset: sanityClient.config().dataset, // Automatically uses the dataset from your Sanity config
  }).url;
}
