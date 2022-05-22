import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ContactsAPI } from "../global/ContactsAPI";

export const Home = (): JSX.Element => {
    const { error, isLoading, data } = ContactsAPI.useFetchAllQuery();
    const [ deleteContact ] = ContactsAPI.useDeleteMutation();

    React.useEffect(() => {
        if (error) toast.error("Something is wrong!");
    }, [error]);

    if (isLoading) return <h1>Loading...</h1>;

    const handleDelete = async (id: string) => {
        if (window.confirm("Confirm item for deletion?")) {
            await deleteContact(id);
            toast.success("Contact was deleted!");
        }
    };

    return (
        <main className="main">
            <Link to="/add">
                <button 
                    className="btn btn-add"
                    >Add Contact
                </button>
            </Link>
            <br />
            <br />
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((contact, index: any) => (
                        <tr key={contact.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>
                                <Link to={`/edit/${contact.id}`}>
                                    <button 
                                        className="btn btn-edit"
                                        >Edit
                                    </button>
                                </Link>
                                <button 
                                    className="btn btn-delete"
                                    onClick={() => handleDelete(contact.id!)}
                                    >Delete
                                </button>
                                <Link to={`/info/${contact.id}`}>
                                    <button className="btn btn-view">View</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};


