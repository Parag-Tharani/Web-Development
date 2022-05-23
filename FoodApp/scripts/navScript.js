var somatoData = JSON.parse(localStorage.getItem("somatoUser"))


function navbar(){
    var LogIn;
    if(somatoData === null){
        LogIn = "Login"
    }else{
        somatoData.forEach(data => {
            if(data.loginStat){
            LogIn = data.name
            }
        });
    }

    return `
            <div id="navLogo"><h1><a href="./atb.html">Somato</a></h1></div>
            <div id="navSections">
            <div><a href="./search.html">Search</a></div>
            <div><a href="./toBest.html">Today's Best</a></div>
            <div><a href="./atb.html">All Time Fav</a></div>
            <div id="navLogin"><a href="./login.html" id="kuchbhi">${LogIn}</a></div>
            </div>`

}


export default navbar;