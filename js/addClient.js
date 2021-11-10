let numbers = '^[0-9]+$';
let clientList = [];

btnAddClient.onclick = function () {
    $('#dibsub2').fadeOut("fast")
        $('#dibsub1').fadeIn("fast")
   
    hideAnotherForms('frmAddClient')
    frmAddClient.style.display='block'
    
    modalTitle.innerHTML='Nuevo Cliente'
    emptyForm();
    $('#frmAddClient').prepend(` 
    <label for="rasoID">Nombre: </label>
    <input class="inputModalGreen" type="text"  name="razonSocial" id="inpRSocial" required="true"
        placeholder="Nombre" required />
    <label for="rasoID">Cuit: </label>
    <input class="inputModalGreen" type="number"  name="cuit" id="inpCuit" required="true"
        placeholder="Cuit Social" required />
  
    <label for="rasoID">Telefono </label>
    <input class="inputModalGreen" type="number"  name="tel" id="inpTel" placeholder="Telefono" required />
  
    <label for="rasoID">E-Mail </label>
    <input  class="inputModalGreen" type="email"  name="email" id="inpEmail" placeholder="E-Mail" required /> 
        `)
    modal.style.display = "block";
  }

  
frmAddClient.addEventListener('submit', (event) => {
    
    event.preventDefault();
    let rzInpData = frmAddClient.children[1].value;
    let cuitInpData = Number(frmAddClient.children[3].value);
    let telInpData = Number(frmAddClient.children[5].value);
    let emailInpData = frmAddClient.children[7].value;

    let newCliente = new Cliente(rzInpData,cuitInpData,telInpData,emailInpData);
    clientList.push(newCliente)

   if (clientList.length > 0) {
   for (const cliente of clientList){
    const {id} = cliente
    localStorage.setItem(id,JSON.stringify(cliente))
    }
    }
        let timerInterval
        Swal.fire({
        title: 'Procesando',
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {     
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {  
        if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire(
               'Datos Almacenados con Exito'
              )
              setTimeout(() => {
                  Swal.close();
                  modal.style.display = "none";
                  loadHtml();


                  
                  //formClean();
              }, 1500);
        }
        })
 event.stopPropagation()
})