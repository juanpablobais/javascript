const divSubMain = document.getElementById('dibsub1'),
btnProdudctList=document.getElementById('btnProdudctList'),
sidebar=document.getElementById('sidebarMain');



btnProdudctList.onclick = () => {
    $('#dibsub2').empty();
    $('#dibsub1').slideUp("fast");
    $('#dibsub2').fadeIn("fast");
    $('#dibsub2').append(`<h2 class="producTitle"> Listado de Productos </h2>`)
    $('#dibsub2').append(`<div id="mainDivPr"></div>`)

    for (let product of products){
        console.log(product)

        $('#mainDivPr').append(`
        <div class="cardContainer">
        
        <p># ${product.ID}</p>
        <p>Descripcion ${product.Producto}</p>
        <p>Dimensión ${product.Dimensión} ${product.Unidad}</p>
        <p>Valor $${product.Valor}</p>
        <img src="${product.img}" alt="">
        <img>
       
        </div>
            `)

    }
  




}

sidebar.onclick = (e) => {
aElement = e.target.closest('a')
    if (aElement.id !== "btnProdudctList")
    {
        $('#dibsub1').fadeIn("fast")
        $('#dibsub2').fadeOut("fast")
    }    
}