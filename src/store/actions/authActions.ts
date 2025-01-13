const signUpAction = (credentials: any) => {
  return async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        },
      )
      const data = await response.json()
      if (response.ok) {
        return data
      } else {
        return data
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const authActions = {
  signUpAction,
}
