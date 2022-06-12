import React from "react";

function Profile({ name, age, location, org }){

    const [userAge, setAge] = React.useState(age)
    const [details, setDetails] = React.useState(false)

    return (
    <>
    <img src={require("./profilePic.jpg")} width={200} alt={"profilepic"} />
    <div>
    <h1>Name : { name }</h1>
    <h3>Age : {userAge}</h3>
    <div>
    <button onClick={() => setAge(userAge + 1) }>Increase Age</button>
    <button onClick={() => setAge(userAge - 1)}>Decrease Age</button>
    </div>
    <div>
    <button id="detailsButton" onClick={() => setDetails(!details) }> {details? "Hide Details":"More Details"} </button>
    { details?MoreDetails(location, org):null}
    </div>
    </div>
    </>
    )
}
 
function MoreDetails(location, org){

    return <div id="moreDetails">
        <p>Location : {location}</p>
        <p>Organisation : {org}</p>
    </div>

}


export { Profile }