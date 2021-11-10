const addProduct =  () => {
    $( document ).ready(function() {
      $( "#btnAddProduct" ).click(function() {
        
        
        $("#divAddProduct" ).empty();
    
        
    
    
        $('#divAddProduct').append(`
        <form id="frmAddProduct">
        <div class="containerNoBs" >
          
            <div class="column">
                <div class="row">
                 <label for="">ID </label>
                <input type="number"  readonly="readonly"></input>
                </div>
                <div class="row">
                   
                <label for="">Descripcion</label>
                <input type="text"></input>
                    
                </div>
                <div class="row">
                    <label for="">Peso(KG)</label>
                    <input type="number"></input>
                </div>
              
                
            </div>
            <div class="column color">
            <label for="">Guardar </label>
            <button type="submit"><i class="far fa-save fa-3x"></i></button>
            </div>
            
           </div>
           </form>
           <hr class="sensitiveDivisor">
            
            `)
            //Capturo en un array los inputs
            inputs = $('#frmAddProduct input' )
            
            $('#divAddProduct').toggle('fast');
            // Obtengo el Ultimo ID de Producto Existente
            let idMax=0;
            for (let id of products)
            {
              idMax < id.ID ? idMax=id.ID : null
              
            }
            idMax && (inputs[0].value=Number(idMax+1));
            
            //MANEJO DEL SUBMIT
              $( "#frmAddProduct" ).submit(function( event ) {
    
    
                event.preventDefault(); 
                let valueFirstInp = Number(inputs[0].value)
                     ,valueSecondtInp = (inputs[1].value)
                    ,valueThirdInp = Number(inputs[2].value);
                  valueSecondtInp=valueSecondtInp.trim();
                    if (valueFirstInp > 0 && valueSecondtInp && valueThirdInp>0 )
                    {
                      products.push({
                        "ID": valueFirstInp,
                        "Producto": valueSecondtInp, 
                        "Tipo": "Muzzarrella",
                        "Peso": valueThirdInp,
                        "Unidad": "KG",
                        "img": "",
                        "Valor": (valueThirdInp*400)   ,
                        "img" : "./image/none.png" 
                        })
    
                        showProductList();
                        addProduct();
                    }
                    else{
                      SwalErr('Falta completar los campos')
                    }
                
                               
              
                
    
               
        //}  
              })
              
      });
    });
    
    }
    
    