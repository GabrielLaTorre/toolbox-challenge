import { getClient } from "../utils/axiosClient.js";

const client = getClient();

export async function getExternalFiles() {
  try {
    const externalFiles = await client.get("/v1/secret/files");
    return externalFiles.data || {};
  } catch (error) {
    console.log(`[Error getting external files]: ${error.message}`)
  }
}

export async function getExternalFile(fileName) {
  try {
    const externalFile = await client.get(`/v1/secret/file/${fileName}`);
    return externalFile.data || {};
  } catch (error) {
    console.log(`[Error getting external file]: ${error.message}`)
  }
}