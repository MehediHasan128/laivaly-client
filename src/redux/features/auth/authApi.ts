import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (userCredential) => ({
                url: '/auth/login',
                method: 'POST',
                body: userCredential
            })
        }),
        forgetUserPassword: builder.mutation({
            query: (userEmail) => ({
                url: '/auth/forget-password',
                method: 'POST',
                body: userEmail,
            })
        }),
        resetUserPassword: builder.mutation({
            query: ([payload, token]) => ({
                url: '/auth/reset-password',
                method: 'POST',
                body: payload,
                headers: {
                    'authorization': `${token}`
                }
            })
        }),
    })
});

export const {useUserLoginMutation, useForgetUserPasswordMutation, useResetUserPasswordMutation} = authApi;