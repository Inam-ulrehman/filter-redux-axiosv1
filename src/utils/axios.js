import axios from 'axios'

// === UserData Root Url ===//

export const customFetchUser = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
})
