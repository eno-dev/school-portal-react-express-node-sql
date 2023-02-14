import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  // change based on production/development
  // baseUrl: 'https://school-portal-sern.herokuapp.com/api',
  baseUrl: 'http://localhost:3001/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.accessToken;
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // if backend error is 403 (if accesstoken is no longer valid)
  // it will run the refreshtoken function
  if (result?.error?.originalStatus === 403) {
    // Received refresh token from state
    const refreshToken = api.getState().auth.refreshToken;
    const refreshWtoken = { token: `${refreshToken}` };
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      {
        url: '/auth/refresh/',
        method: 'GET',
        // body: refreshWtoken
      },
      api,
      extraOptions,
    );

    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({}),
});
