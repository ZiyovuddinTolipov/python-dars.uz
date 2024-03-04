import React from 'react';
import { useSearchParams } from 'react-router-dom';
const Users = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('sort')); // 'name'

    return <div>Users</div>;
};
export default Users;