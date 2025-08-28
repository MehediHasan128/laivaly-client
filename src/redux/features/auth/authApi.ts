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
                body: userEmail
            })
        })
    })
});

export const {useUserLoginMutation, useForgetUserPasswordMutation} = authApi;