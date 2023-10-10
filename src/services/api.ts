import axios from 'axios'

const apiKey = 'eyZDh3mCEkU59we8JJor'

export const api = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
