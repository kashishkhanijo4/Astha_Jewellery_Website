
const TOKEN_KEY = 'jwtToken';

export const authService = {
  login: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  },
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  isAuthenticated: () => {
    return !!localStorage.getItem(TOKEN_KEY);
  }
};
