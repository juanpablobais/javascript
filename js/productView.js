//VISTA DE PRODUCTOS

const   divSubMain = document.getElementById('dibsub1')
       ,btnProdudctList = document.getElementById('btnProdudctList')
       ,sidebar = document.getElementById('sidebarMain');

//MANEJO DEL BOTON PRODUCTOS ( SIDEBAR )
btnProdudctList.onclick = () => {

    showProductList();
    addProduct();

}



showProductList = () => {
    $('#dibsub2').empty();
    $('#dibsub1').slideUp("fast");
    $('#dibsub2').fadeIn("fast");

    $('#dibsub2').append(`<h2 class="producTitle"> Listado de Productos </h2>`);
    $('#dibsub2').append(`<p >Agregar <i id="btnAddProduct"  class="fas fa-plus fa-2x pointer"></i></p>`);
    $('#dibsub2').append(`<div style="display:none" id="divAddProduct"></div>`)
    $('#dibsub2').append(`<div  id="mainDivPr"></div>`)

    for (let product of products) { $('#mainDivPr').append(`
        <div  style="display:none" class="cardContainer ">    
        <p># ${product.ID}</p>
        <p>Descripcion ${product.Producto}</p>
        <p>Peso ${product.Peso} ${product.Unidad}</p>
        <p>Valor $${product.Valor}</p>
        <img src="${product.img}" alt=""><img>     
        <i id="iconErase${product.ID}" class="fas fa-trash fa-3x"></i>
        
        </div>
            `)
            //MANEJO DEL BORRADO DE PRODUCTOS
            $(`#iconErase${product.ID}`).on('click', function(){
                let targetToDelete = products.find(x=>x.ID===product.ID)
                let indexToDelete = products.indexOf(targetToDelete)
                if (indexToDelete > -1) {
                    products.splice(indexToDelete, 1);
                    $(this).parent().fadeOut("slow");  
                  }
                  
                

            })  
    }
    $('.cardContainer').fadeIn("slow")
}