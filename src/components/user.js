const User = ({user, getUserId}) => {
    return (
        <div>
            <h3>User № {user.id}</h3>
            <h2>{user.name} - <i>{user.username}</i></h2>
            <p>
                email: <b>{user.email}</b><br/>
                city: <b>{user.address.city}</b><br/>
                phone: <b>{user.phone}</b>
            </p>
            <button onClick={() => getUserId(user.id)}>See {user.name}'s posts</button>
            <hr/>
        </div>
    );
}

export {User}