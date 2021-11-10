let formModal = document.getElementById('frmAddClient');
let formModalClient = document.getElementById('frmSalesClient');
let frmnewProductx = document.getElementById('frmnewProduct');

//VACIO LA VENTANA MODAL 
let emptyForm = () => {
    formModal.innerHTML=''
    formModalClient.innerHTML=''
    frmnewProductx.innerHTML=''
  fnStartForm()
  fnStartFormSales()
  
  }

//LLENO EL SELECTOR CON LOS PRODUCTOS EXISTENTES
  let populateSelectProcut =  function() {
    for (let product of products){
         $('#products_list').append(
             `<option value="${product.ID-1}" Key="${product.ID}"> ${product.Producto}      $${product.Valor}/U </option>`
   )
    }
  }

  //LLENO EL SELECTOR CON LOS CLIENTES EXISTENTES
  let populateSelectClient =  function() {
    
    for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (  !(key.includes('Sale') ) ) {
    let dataLocalStorage = localStorage.getItem(key)
    dataLocalStorage = JSON.parse(dataLocalStorage)
    const { razonsocial, telefono, email, date, cuit } = dataLocalStorage
    $('#client_list').append(
        `<option value="${key}">${razonsocial}</option>`
    )
  }
    }

  }