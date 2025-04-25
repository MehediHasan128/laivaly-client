import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: (userCredential) => ({
                url: '/auth/user-signIn',
                method: 'POST',
                body: userCredential
            })
        })
    })
});

export const {useSignInMutation} = authApi;