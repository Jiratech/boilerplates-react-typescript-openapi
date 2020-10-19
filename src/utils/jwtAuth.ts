export const getRefreshToken = () => {
  const state: any = localStorage.getItem('state')
  const parsedState = JSON.parse(state)
  if (parsedState.session.refreshToken) {
    return parsedState.session.refreshToken;
  } else {
    return null;
  }
}

export const getAccessToken = () => {
  const state: any = localStorage.getItem('state')
  const parsedState = JSON.parse(state)
  if (parsedState.session.accessToken) {
    return parsedState.session.accessToken;
  } else {
    return null;
  }
}

export const getRole = () => {
  const roleName: string | null = localStorage.getItem('state')
  if (roleName) {
    return roleName;
  } else {
    return null;
  }
}

export const decodeJwtPayload = (token: string) => {
  return JSON.parse(atob(token.split('.')[1]));
};

export const setRole = (roleName: string) => {
  localStorage.setItem('roleName', roleName);
}