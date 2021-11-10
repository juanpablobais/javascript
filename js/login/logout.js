let btnLogOut = document.getElementById('btnLogOut');

//LOGOUT DEL USUARIO ; 

btnLogOut.onclick = () => {

    sessionStorage.clear();
    

    $('#imgUsr').fadeOut('slow');
    $('#usrName').fadeOut('slow');
    $('#btnLogOut').fadeOut('slow');

    location.reload();
}