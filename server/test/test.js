import { expect } from 'chai'
import { getClient } from '../utils/axiosClient.js'

const baseUrl = "http://localhost:4000"
const client = getClient(baseUrl)
  
describe("Files API Test", () => {
    it("should list files", async (done) => {
      const response = await client.get('/files/data')
      expect(response.status).to.equal(200)
      expect(response.data).to.be.an('array')
    })
})