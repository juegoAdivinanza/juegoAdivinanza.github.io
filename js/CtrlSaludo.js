importar  {  valida  }  desde  "../lib/util.js" ;
exportar  clase  CtrlSaludo  {
  / ** @param { string } nombre * /
  calculaSaludo ( nombre )  {
    const  nombreSinEspacios  =  nombre ? nombre . recortar ( ) : "" ;
    valida ( nombreSinEspacios ,  "Falta proporcionar el nombre." ) ;
    volver  `de Hola $ { nombreSinEspacios } .` ;
  }
}
