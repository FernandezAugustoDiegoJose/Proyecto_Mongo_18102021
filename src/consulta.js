/*
Todos los documentos con todos sus campos
*/
db.coleccion01.find()

/*
Todos los documentos cuya edad valga 28
*/
db.coleccion1.find({edad: 26})
/*
Todos los que residan en Sevilla
*/
db.coleccion1.find({residencia: "Sevilla"})
/*
Todos los documentos de la coleccion
*/
db.inventario.find({})

/*
Los que tienen el valor de estatus D
*/

db.inventario.find({status: "D"})


db.inventario.find({status: {$eq:"D"}})

/*
Los que tienen el valor 20
*/

db.inventario.find({  qty: {$eq: 20}})
/*
quiero los que tengan 123 en el campo item (code)
*/

db.inventory.find({"item.code": {$eq: "123"}})

/*
quiero los que esten en el M. United
*/

db.coleccion01.find({equipo: "M. United"})

/*
quiero los que valgan 135 en el mercado
*/
db.coleccion01.find({valor_mercado_en_millones: 135})