import { expect } from 'chai'
import { getClient } from '../utils/axiosClient.js'

const baseUrl = 'http://localhost:4000'
const client = getClient(baseUrl)

describe('Files API Test', () => {
  it('should list files', async () => {
    const response = await client.get('/files/list')
    expect(response.status).to.equal(200)

    expect(response.data).to.have.property('files')
    expect(response.data.files).to.be.an('array')
  })

  it('should list formatted files', async () => {
    const response = await client.get('/files/data')
    expect(response.status).to.equal(200)

    expect(response.data).to.be.an('array')
  })

  it('file should has all properties', async () => {
    const response = await client.get('/files/data')
    const file = response.data[0]
    const lines = file.lines[0]

    expect(file).to.have.property('file')
    expect(file).to.have.property('lines')

    expect(lines).to.have.property('text')
    expect(lines).to.have.property('number')
    expect(lines).to.have.property('hex')
  })

  it('should get a specific file', async () => {
    const response = await client.get('/files/data?fileName=test2.csv')
    const file = response.data[0]

    expect(response.data).to.be.an('array')
    expect(response.data).to.have.lengthOf(1)

    expect(file).to.be.an('object')
  })
})
