//  user in local Storage //
export const setUserInLocalStorage = (user) => {
  localStorage.setItem('user', user)
}

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}
