let  modal = document.getElementById("myModal")
    ,fromChangeModal = document.getElementById("frmAddClient")
    ,spanCloseModal = document.getElementById('CloseModal')
    ,modalTitle = document.getElementById('titleModal')
    ,btnAddClient = document.getElementById("btnNewClient")
    ,btnSale = document.getElementById("btnSale");

//MANEJO DEL CIERRE DEL MODAL
spanCloseModal.onclick = function (e) {
  frmAddClient.style.display='none'
  frmSalesClient.style.display='none'
  $('#frmAddClient').trigger("reset");
  emptyForm();
  modal.style.display = "none";
  e.stopPropagation()
}