export const verifyRole = (roles: string[], roleName: string | undefined) => {
  if (roleName && roles.includes(roleName)) {
    return true;
  } else {
    return false;
  }
}