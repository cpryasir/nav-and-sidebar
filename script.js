const sidebarMain = document.getElementById("sidebarMain");

    function showSide(){
        if (sidebarMain.style.left == "0px"){
            sidebarMain.style.left = "-300px";
        }
        else{
            sidebarMain.style.left = "0px";
        }
    }
    