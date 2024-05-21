import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser ,addToCart} from '../Store/Actions/UsersAction';

const UsersRedux = () => {
    const Users = useSelector((state) => state.Users.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };
    const handleAddToCart = () => {
        dispatch(addToCart());
    };


    return (
        <div className='container mt-3 mb-3 ml-3'>
            <h1>Users Page</h1>
            <div className='container'>
                <div className='row'>
                    {Users ? (
                        Users.map((User) => (
                            <div className='col-md-4' key={User.id}>
                                <div className='card mb-2'>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{User.firstName}</h5>
                                        <h5 className='card-title'>age: {User.age}</h5>
                                        <h5 className='card-title'>phone: {User.phone}</h5>
                                        <h5 className='card-title'>birthDate: {User.birthDate}</h5>
                                        <div className='d-flex justify-content-between'>
                                            <button className='btn btn-danger' onClick={() => handleDelete(User.id)}>Delete</button>
                                            <button className='btn btn-dark' onClick={() => handleAddToCart()}>Add to Cart</button>
                                            <a href={`/usersRedux/${User.id}`} className='btn btn-dark'>Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UsersRedux;
