const axiosClient = require("../utils/axiosClient");
const sanitizer = require("../utils/sanitizer");

const client = axiosClient.getClient();

async function getFiles() {
  try {
    const externalFiles = await client.get("/v1/secret/files");
    return externalFiles.data || {};
  } catch (error) {
    console.log(error)
  }
}

async function getFile(fileName) {
  try {
    const externalFile = await client.get(`/v1/secret/file/${fileName}`);
    return externalFile.data || {};
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getFiles,
  getFile
};
