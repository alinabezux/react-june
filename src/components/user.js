export default function User ({user}) {
    return (
        <div>
            <h2>{user.name} - <i>{user.username}</i></h2>
            <p>
                email: <b>{user.email}</b><br/>
            </p>
        </div>
    );
}

