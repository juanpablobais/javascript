let sideBarUSerAvatar = document.getElementById('imgUsr'),
sideBarUserName = document.getElementById('usrName');

//FUNCION QUE PROCESA EL LOGIN CON GITHUB
const verifyLogin  = ()=> {
    

  Swal.fire({
    title: 'Ingreso con Usuario de GithubValido',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    cancelButtonText: 'Acceder sin identificar',
    confirmButtonText: 'Acceso GitHub',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then(response => {
          
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          Swal.showValidationMessage(
            `Error, ingrese un usuario válido`
          )
        })
    },
    allowOutsideClick: () => !Swal.isLoading(),
    allowOutsideClick: false
  }).then((result) => {
    
    
//SE ALMACENA EL RESLTADO EN EL SESSIONSTORAGE
    if (result.isConfirmed) {
      
        sessionStorage.setItem('gitHubVerifi', '1');
        sessionStorage.setItem('usr_Picture', result.value.avatar_url);
        sessionStorage.setItem('usr_Name', result.value.login);
        sessionStorage.setItem('usr_Url', result.value.html_url);
        allowOutsideClick: true;
        populateSideBarWithUserData();
    }
    
  })

 
}

//LA DATA OBTENIDA DEL LOGIN SE MUESTRA EN EL SIDEBAR
let populateSideBarWithUserData = () => {

  let  pictureUrl = sessionStorage.getItem('usr_Picture')
      ,pictureUsr = sessionStorage.getItem('usr_Name')
      ,repoUrl = sessionStorage.getItem('usr_Url');

  if(pictureUrl && pictureUsr ){
      sideBarUSerAvatar.setAttribute('src',pictureUrl);
      sideBarUSerAvatar.setAttribute('href',repoUrl);
      sideBarUserName.textContent=`Iniciado como: ${pictureUsr}`
      $('#imgUsr').fadeIn('slow');
      $('#usrName').fadeIn('slow');
      $('#btnLogOut').fadeIn('slow');  
      
      sideBarUSerAvatar.onclick = () => {
        window.open(repoUrl, '_blank').focus();
      }
  }



}