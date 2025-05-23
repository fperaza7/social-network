import { createContext, useContext, useState } from 'react';
import authApi from '../api/authApi';
import usersApi from '../api/usersApi';
import postsApi from '../api/postsApi';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = async (email, password) => {
    const { data } = await authApi.post('/auth/login', { email, password });
    setToken(data.access_token);
    [authApi, usersApi, postsApi].forEach((api) => {
      api.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
    });
    // const res = await usersApi.get(`/users/${data.userId}/profile`);
    // setProfile(res.data);
  };

  const logout = () => {
    setToken(null);
    setProfile(null);
    [authApi, usersApi, postsApi].forEach((api) => {
      delete api.defaults.headers.common.Authorization;
    });
  };

  return (
    <AuthContext.Provider value={{ token, profile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
