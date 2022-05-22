import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ContactsAPI } from "../global/ContactsAPI";

export const Home = (): JSX.Element => {
    const { data } = ContactsAPI.useFetchAllQuery();

    return (
        <React.Fragment>
            {data?.map((contact) => (
                <main key={contact.id}>
                    <h3>{contact.name}</h3>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                </main>
            ))}
        </React.Fragment>
    );
};


