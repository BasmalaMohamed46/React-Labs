import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Store/Actions/UsersAction';

const UserDetailsRedux = () => {
    let { id } = useParams();
    let [usr, setUsr] = useState(null);
    let User = useSelector((state) => state.Users.User);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getUser(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        setUsr(User);
        console.log(usr)
    }, [User]);

    return (
        <div className='container mt-3 mb-3 ml-3'>
            <h1>User Details</h1>
            {
                usr ? (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{usr.firstName}</h5>
                            <h5 className="card-title">age: {usr.age}</h5>
                            <h5 className="card-title">phone: {usr.phone}</h5>
                            <h5 className="card-title">birthDate: {usr.birthDate}</h5>
                            <h5 className="card-title">username: {usr.username}</h5>
                            <h5 className="card-title">email: {usr.email}</h5>
                            <h5 className="card-title">password: {usr.password}</h5>
                            <a href={`/editRedux/${usr.id}`} className="btn btn-dark">Edit</a>
                        </div>
                    </div>
                ) : (<h1>Loading...</h1>)
            }
        </div>
    );
};

export default UserDetailsRedux;
