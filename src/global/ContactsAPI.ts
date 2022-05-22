import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContact } from "../models/Interfaces";

const URL = "http://localhost:5000";
export const ContactsAPI = createApi({
    reducerPath: "ContactsAPI",
    tagTypes: ["Contact"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        fetchAll: builder.query<IContact[], void>({
            query: () => "/contacts",
            providesTags: ["Contact"],
        }),
        getOne: builder.query<IContact, string>({
            query: (id) => `/contacts/${id}`,
            providesTags: ["Contact"],
        }),
        add: builder.mutation<{}, IContact>({
            query: (contact) => ({
                url: "/contacts",
                method: "POST",
                body: contact,
            }),
            invalidatesTags: ["Contact"],
        }),
        update: builder.mutation<void, IContact>({
            query: ({id, ...payload}) => ({
                url: `/contacts/${id}`,
                method: "PUT",
                body: payload,
            }),
            invalidatesTags: ["Contact"],
        }),
        delete: builder.mutation<void, string>({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Contact"],
        }),
    })
});



