maincon = document.getElementById("mainContent");
// repolist = document.getElementById("repolist");
next = document.getElementById("next");
prev = document.getElementById("previous");
maincon.remove();
var list = new Array();
var pageList = new Array();
var currPage = 1;
var numPerPage = 5;
var numOfPage = 0;
async function getapi(url){
    const response = await fetch(url)
    var data = await response.json()
    bgcolor = ["#6f42c1", "#007bff", "#e83e8c", "#0dd909c7"]
    for(i=0; i<data["length"]; i++){
        nam = data[i]["name"];        
        var l = await fetch(data[i]["languages_url"]);
        var lang = await l.json()
        typel = Object.keys(lang)[0]
        console.log(typel)
        if(typel==null || typel==undefined)
            typel = ""
        list.push("<div style='background-color:"+bgcolor[i%4]+"; border-radius: 0.25rem!important; padding: 1rem!important; margin-top: 1rem!important; display: flex!important; margin-bottom: 1rem!important;'><div><a href="+data[i]["html_url"]+" style='text-decoration:none;'><h1 style='font-size:1rem!important; color:white'>"+nam+"</h1></a><small style='color:white;'>"+typel+"</small></div></div>");
        if(i==5)
            loadList();
        // repolist.insertAdjacentHTML("beforeend","<div style='background-color:"+bgcolor[i%4]+"; border-radius: 0.25rem!important; padding: 1rem!important; margin-top: 1rem!important; display: flex!important; margin-bottom: 1rem!important;'><div><a href="+data[i]["html_url"]+" style='text-decoration:none;'><h1 style='font-size:1rem!important; color:white'>"+nam+"</h1></a><small style='color:white;'>"+typel+"</small></div></div>");
    }
    numOfPage = Math.ceil(list.length/numPerPage);
}
function nextPage(){
    if(currPage!=numOfPage)
        currPage += 1;
    loadList();
}
function previousPage(){
    if(currPage!=1)
        currPage -= 1;
    loadList();
}
function loadList(){
    var beg = ((currPage-1)*numPerPage);
    var end = beg + numPerPage;
    pageList = list.slice(beg, end);
    document.getElementById("list").innerHTML = "";
    for(r=0; r<pageList.length; r++){
        document.getElementById("list").innerHTML += pageList[r] + "<br/>";
    }
    prev.disabled = currPage==1 ? true : false;
    next.disabled = currPage==numOfPage ? true : false;
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
    getapi(repo_url);
    loadList();
}
