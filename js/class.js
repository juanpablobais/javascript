let ultimoIDStorage = 0
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

//FECHA EN FORMATO DE SALIDA AAAA-MM-DD
let dateConstructor = (year, month, day) => {
    let dateResult = `${day}-${month}-${year}`
    
    return dateResult
}

//VERIFICO EL ULTIMO ID EXISTENTE 
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key > ultimoIDStorage) {
        ultimoIDStorage = (parseInt(key))
    }
}

//CLASE QUE REGISTRA AL CLIENTE
class Cliente {

    static contadorCliente = ultimoIDStorage;

    constructor(razonSocialCliente, cuitCliente,  telefonoCliente, emailCliente) {

            this.razonsocial = razonSocialCliente,
            this.cuit = cuitCliente,
            this.telefono = telefonoCliente,
            this.email = emailCliente,
            this.date = dateConstructor(year, month, day)
            this.monto = 0
            this.deuda = 0
            this.balance = 0
        this.id = ++Cliente.contadorCliente;
    }

    



}

//CLASE QUE REGISTRA LA VENTA
class SalesRegister {

    constructor(saleid, company,  product, amount, price) {

            this.saleid = saleid,
            this.company = company,
            this.product = product,
            this.amount = amount,
            this.price = price,
            this.date = dateConstructor(year, month, day)
      }
    
}