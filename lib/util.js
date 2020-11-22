/ ** Si una condición no se cumple, lanza un Error con el mensaje indicado.
* @param { any } condición Condición que debe cumplirse.
* @param { string } mensaje Mensaje que se lanza el Error.
* @throws { Error } si la condición no se cumple. * /
 función de  exportación valida ( condición ,  mensaje )  {
  if  ( ! condición )  {
    lanzar  nuevo  Error ( mensaje ) ;
  }
}
