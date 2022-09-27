const Rocket = ({rocket}) => {
    return (
        <div>
            <h3>Name - {rocket.mission_name}</h3>
            <h4>Launch year - {rocket.launch_year}</h4>
            <img src={rocket.links.mission_patch_small} alt={rocket.mission_name}/>
            <hr/>
        </div>
    );
}

export {Rocket}