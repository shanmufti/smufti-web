import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchPersonalInfo = async () => {
  try {
    const response = await apiClient.get('/personal-info')
    return response.data
  } catch (error) {
    console.error('Error fetching personal info:', error)
    throw error
  }
}
