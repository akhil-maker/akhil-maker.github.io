maincon = document.getElementById("mainContent");
repolist = document.getElementById("repolist");
maincon.remove();
async function getapi(repolist, url){
    const response = await fetch(url)
    var data = await response.json()
    bgcolor = ["#6f42c1", "#007bff", "#e83e8c"]
    for(i=0; i<data["length"]; i++){
        nam = data[i]["name"];
        repolist.insertAdjacentHTML("afterend","<div style='background-color:"+bgcolor[i%3]+"; border-radius: 0.25rem!important; padding: 1rem!important; margin-right: 7rem!important; margin-left: 7rem!important; margin-top: 1rem!important; display: flex!important; margin-bottom: 1rem!important;'><div><a href="+data[i]["html_url"]+" style='text-decoration:none;'><h1 style='font-size:1rem!important; color:white'>"+nam+"</h1></a><small></small></div></div>");
    }
}
function landingPage(){
    var con = document.getElementById("content");
    var mydiv = document.getElementById("firstLook");
    mydiv.childNodes[0].remove()
    mydiv.childNodes[0].remove()
    mydiv.style.backgroundImage = "url('spaceTravel.gif')";
    mydiv.style.backgroundSize = "cover";
    mydiv.style.backgroundPosition = "center";
    mydiv.style.backgroundRepeat = "no-repeat";
    setTimeout(function(){mydiv.remove(); con.insertBefore(maincon, con.children[0]);}, 3000);
    const repo_url = "https://api.github.com/users/akhil-maker/repos";
    getapi(repolist, repo_url);
}
