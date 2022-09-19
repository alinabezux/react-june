export default function Simpson(props) {
    const {simpson} = props;
    return (
        <div>
            <h2>{simpson.name} {simpson.surname}</h2>
            <h3>{simpson.age}</h3>
            <p>{simpson.info}</p>
            <img src={simpson.photo} alt={simpson.name}/>
        </div>
    );
}