const ChosenUserDetails = ({user}) => {
    return (
        <div>
            <h2>{user.name} {user.username}</h2>
            <h4>Email: <i>{user.email}</i></h4>
            <h4>City: {user.address.city}</h4>
            <h4>Phone: {user.phone}</h4>
        </div>
    );
}

export {ChosenUserDetails}