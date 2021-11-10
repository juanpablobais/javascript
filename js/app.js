let sessionData = sessionStorage.getItem('gitHubVerifi');

//Verifica si el usuario esta logueado
if (Number(sessionData)==1) {
    
    populateSideBarWithUserData();
}
else{
    verifyLogin();
}

// Aun sin Login Continua
startApp();

  

  




