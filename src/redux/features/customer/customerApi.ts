import { baseApi } from "@/redux/api/baseApi";

const customerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createCustomerAccount: builder.mutation({
            query: (userCredential) => ({
                url: '/auth/login',
                method: 'POST',
                body: userCredential
            })
        }),
    })
});

export const {useCreateCustomerAccountMutation} = customerApi;