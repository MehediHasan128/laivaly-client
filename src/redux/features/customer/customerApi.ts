import { baseApi } from "@/redux/api/baseApi";

const customerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createCustomerAccount: builder.mutation({
            query: (userData) => ({
                url: '/users/create-customer',
                method: 'POST',
                body: userData
            })
        }),
    })
});

export const {useCreateCustomerAccountMutation} = customerApi;