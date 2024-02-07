const sidebarMain = document.getElementById("sidebarMain");
const sideMain = document.getElementById("sideMain");
const dashBoard = document.getElementById("dashBoard");
const dealsMain = document.getElementById("dealsMain");
const leadsMain = document.getElementById("leadsMain");
const clietsMain = document.getElementById("clietsMain");
const dropMain = document.getElementById("dropMain");
const automationMain = document.getElementById("automationMain");
const usersMain = document.getElementById("usersMain");
const settingsMain = document.getElementById("settingsMain");

    function showSide(){
        if (sidebarMain.style.left == "0px"){
            sidebarMain.style.left = "-300px";
            sideMain.style.left = "-300px";
            dealsMain.style.left = "-300px";
            leadsMain.style.left = "-300px";
            clietsMain.style.left = "-300px";
            dropMain.style.left = "-300px";
            automationMain.style.left = "-300px";
            usersMain.style.left = "-300px";
            settingsMain.style.left = "-300px";
        }
        else{
            sidebarMain.style.left = "0px";
        }
    }

//Sub-Sidebar

    function showDash(){
        if (sideMain.style.left == "80px"){
            sideMain.style.left = "-300px";
        }
        else{
            sideMain.style.left = "80px";
            dealsMain.style.left = "-300px";
            leadsMain.style.left = "-300px";
            clietsMain.style.left = "-300px";
            dropMain.style.left = "-300px";
            automationMain.style.left = "-300px";
            usersMain.style.left = "-300px";
            settingsMain.style.left = "-300px";
        }
    }

    function showDeals(){
        if (dealsMain.style.left == "80px"){
            dealsMain.style.left = "-300px";
        }
        else{
            dealsMain.style.left = "80px";
            sideMain.style.left = "-300px";
            leadsMain.style.left = "-300px";
            clietsMain.style.left = "-300px";
            dropMain.style.left = "-300px";
            automationMain.style.left = "-300px";
            usersMain.style.left = "-300px";
            settingsMain.style.left = "-300px";
        }
    }

    function showLeads(){
        if (leadsMain.style.left == "80px"){
            leadsMain.style.left = "-300px";
        }
        else{
            leadsMain.style.left = "80px";
            dealsMain.style.left = "-300px";
            sideMain.style.left = "-300px";
            clietsMain.style.left = "-300px";
            dropMain.style.left = "-300px";
            automationMain.style.left = "-300px";
            usersMain.style.left = "-300px";
            settingsMain.style.left = "-300px";
        }
    }

    function showClients(){
        if (clietsMain.style.left == "80px"){
            clietsMain.style.left = "-300px";
        }
        else{
            clietsMain.style.left = "80px";
            leadsMain.style.left = "-300px";
            dealsMain.style.left = "-300px";
            sideMain.style.left = "-300px";
            dropMain.style.left = "-300px";
            automationMain.style.left = "-300px";
            usersMain.style.left = "-300px";
            settingsMain.style.left = "-300px";
        }
    }

    function showDrop(){
        if (dropMain.style.left == "80px"){
            dropMain.style.left = "-300px";
        }
        else{
            dropMain.style.left = "80px";
            clietsMain.style.left = "-300px";
            leadsMain.style.left = "-300px";
            dealsMain.style.left = "-300px";
            sideMain.style.left = "-300px";
            automationMain.style.left = "-300px";
            usersMain.style.left = "-300px";
            settingsMain.style.left = "-300px";
        }
    }

    function showAuto(){
        if (automationMain.style.left == "80px"){
            automationMain.style.left = "-300px";
        }
        else{
            automationMain.style.left = "80px";
            clietsMain.style.left = "-300px";
            leadsMain.style.left = "-300px";
            dealsMain.style.left = "-300px";
            sideMain.style.left = "-300px";
            dropMain.style.left = "-300px";
            usersMain.style.left = "-300px";
            settingsMain.style.left = "-300px";
        }
    }

    function showUsers(){
        if (usersMain.style.left == "80px"){
            usersMain.style.left = "-300px";
        }
        else{
            usersMain.style.left = "80px";
            clietsMain.style.left = "-300px";
            leadsMain.style.left = "-300px";
            dealsMain.style.left = "-300px";
            sideMain.style.left = "-300px";
            dropMain.style.left = "-300px";
            automationMain.style.left = "-300px";
            settingsMain.style.left = "-300px";
        }
    }

    function showSettings(){
        if (settingsMain.style.left == "80px"){
            settingsMain.style.left = "-300px";
        }
        else{
            settingsMain.style.left = "80px";
            clietsMain.style.left = "-300px";
            leadsMain.style.left = "-300px";
            dealsMain.style.left = "-300px";
            sideMain.style.left = "-300px";
            dropMain.style.left = "-300px";
            automationMain.style.left = "-300px";
            usersMain.style.left = "-300px";
        }
    }














    // ------------------------------------------

    function showDash2(){
        if (sideMain.style.width == "0px"){
            sideMain.style.width = "220px";
        }
        else{
            sideMain.style.width = "0px";
        }
    }


const autoTempHiddenItems = document.getElementById("autoTempHiddenItems");
const rotateIcon = document.getElementById("rotateIcon");

    function showAutoHidden(){
        if (autoTempHiddenItems.style.height == "0px"){
            autoTempHiddenItems.style.height = "230px";
            rotateIcon.style.transform = "rotate(90deg)";
        }
        else{
            autoTempHiddenItems.style.height = "0px";
            rotateIcon.style.transform = "rotate(0deg)";
        }
    }


const navPlusHidden = document.getElementById("navPlusHidden");

    function showNavPlusHidden(){
        if (navPlusHidden.style.display == "block"){
            navPlusHidden.style.display = "none";
        }
        else{
            navPlusHidden.style.display = "block";
            profileHiddenBox.style.display = "none";
        }
    }

const profileHiddenBox =  document.getElementById("profileHiddenBox");

    function showProfileHidden(){
        if (profileHiddenBox.style.display == "block"){
            profileHiddenBox.style.display = "none";
        }
        else{
            profileHiddenBox.style.display = "block";
            navPlusHidden.style.display = "none";
        }
    }
    // showAutoHidden()
    showSide();