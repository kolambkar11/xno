const UserData = (props) =>{

    return(<>
    <div className="user-card">
        <img className="user-img" src={props.data.picture.large}/>
            <h3>{props.data.name.first}</h3>
            <p>{props.data.location.city}, {props.data.location.state}</p>
        
    </div>
    </>)
}

export default UserData