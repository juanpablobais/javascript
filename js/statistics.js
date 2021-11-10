let statisticsView = document.getElementById('statisticsView');

let newArr = [] ;

statisticsView.onclick = () => {
    
    
     newArr = [] ;

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (  (key.includes('Sale') ) ) 
        {
        let dataLocalStorage = localStorage.getItem(key) ;
        
        dataLocalStorage = JSON.parse(dataLocalStorage) ;
        let client = dataLocalStorage[1];
        let mount = dataLocalStorage[4];

        //POPULO UN ARRAY CON LOS CLIENTES Y EL TOTAN EN $ VENDIDO
        newArr.push({'client':client, 'mount':mount})   

        }
    }

    // COMIENZO EL FILTRADO Y AGRUPACION POR SI EXISTE MAS DE UNA VENTA PARA EL MISMO CLIENTE
    let arrayWithClient = newArr.map(x => x.client);

    let uniqueClients = [...new Set(arrayWithClient)];

    let arrWithSales=[]

    
    for (let i = 0; i < uniqueClients.length; i++) {
        
        const found = newArr.filter(e => e.client==uniqueClients[i])

        const totalAmounts = found.map(x=>x.mount)
        
        const totalAmountByClient = totalAmounts.reduce((a,b)=>a+b,0)

        //POPULO LOS DATOS EN EL ARRAY QUE FINALMENTE SE MUESTRA EN EL GRAFICO
        arrWithSales.push( {label:found[0].client  ,y:totalAmountByClient}  )  
    }


            
    
    //MUESTRA EL DIV QUE CARGA EL GRAFICO
    $('#dibsub2').empty();
    $('#dibsub1').slideUp("fast");

    $('#dibsub2').fadeIn("fast");

    //GENERANDO EL HTML QUE CONTIENE EL GRAFICO
    $('#dibsub2').append(`<h2 class="producTitle"> Graficos </h2>`)
    $('#dibsub2').append(`<div id="chartContainer" style="height: 400px; width: 50%;"></div>`)

       //PROGRAMACION DEL GRAFICO
    var chart = new CanvasJS.Chart("chartContainer", {
     animationEnabled: true,
	theme: "dark1", // "light1", "light2", "dark1", "dark2"
	title: {
		text: "Ventas Por Cliente"
	},
	subtitles: [{
		text: "Total in $",
		fontSize: 26
	}],
	axisY: {
		prefix: "$",
		scaleBreaks: {
			customBreaks: []
		}
	},
	data: [{
		type: "column",
		yValueFormatString: "$#,##0.00",
		dataPoints: arrWithSales
	}]
});
    if (localStorage.length>0){
    chart.render();
            }
            else{SwalErr('Sin datos Para mostrar')}
    
    }