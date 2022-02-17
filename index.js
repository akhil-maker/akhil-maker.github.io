maincon = document.getElementById("mainContent");
maincon.remove();
function landingPage(){
    var mydiv = document.getElementById("firstLook");
    mydiv.childNodes[0].remove()
    mydiv.childNodes[0].remove()
    mydiv.style.backgroundImage = "url('spaceTravel.gif')";
    mydiv.style.backgroundSize = "cover";
    mydiv.style.backgroundPosition = "center";
    mydiv.style.backgroundRepeat = "no-repeat";
    setTimeout(function(){mydiv.remove(); document.body.appendChild(maincon);}, 5000);
}
