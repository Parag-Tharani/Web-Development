import React from "react";

function Profile({ name, age, location, org }){

    const [userAge, setAge] = React.useState(age)

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
    <button id="detailsButton" onClick={() => MoreDetails(location,org) }> More Details </button>
    <div id="moreDetails"></div>
    </div>
    </div>
    </>
    )
}

var count = 1 
function MoreDetails(location, org){
    count++;
    
    var box = document.getElementById("moreDetails")
    var button = document.getElementById("detailsButton")

    if(count%2 === 0){
        button.innerText = "Hide Details"

        var p1 = document.createElement("h3")
        p1.innerText = "Location : " + location 

        var p2 = document.createElement("h3")
        p2.innerText = "Organisation : " + org
    
        box.append(p1,p2)
    }else{
        button.innerText = "More Details"
        box.innerHTML = ""
    }
}


export { Profile }