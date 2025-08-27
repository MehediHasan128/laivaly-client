import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (userCredential) => ({
                url: '/auth/login',
                method: 'POST',
                body: userCredential
            })
        })
    })
});

export const {useUserLoginMutation} = authApi;