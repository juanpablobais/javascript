let urlApi='https://www.dolarsi.com/api/api.php?type=valoresprincipales'
let dolarValue;
 
    const getDolarValueApi = async() => {
        
        try {
            const resp   = await fetch(urlApi);
            const data =  await resp.json(); 
            const  {venta} = data[1].casa;
            
            return venta
           
        } catch (error) {
            return undefined;
        }
    }; 
        
    const  getDolarValue = async() =>  {
        dolarValue = await getDolarValueApi()
        dolarValue = parseFloat(dolarValue)
        
    }

    getDolarValue();