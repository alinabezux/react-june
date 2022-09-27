const UserDetails = ({user}) => {

    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <p>Email:{user.email}<br/>
                City: {user.address.city}<br/>
                Phone number: {user.phone}<br/>
                Company name: {user.company.name}
            </p>
        </div>
    );
}
export {UserDetails}