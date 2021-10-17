db.inventario.deleteMany({})
db.inventario.insertMany(
    [
        { item: "diario", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
        { item: "libreta", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
        { item: "papel", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
        { item: "planificador", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
        { item: "postal", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
     ]
)
db.coleccion1.deleteMany({})
db.coleccion1.insertOne({nombre: "Antonio", edad: 26, residencia: "Sevilla"})
db.coleccion1.insertOne({nombre: "Eustaquio", edad: 41, residencia: "Madrid"})
db.coleccion1.insertOne({nombre: "Francisco", edad: 41, residencia: "Madrid"})
db.coleccion1.insertOne({nombre: "Jesus", edad: 21, residencia: "Sevilla"})
db.coleccion1.insertOne({nombre: "Javier", edad: 51, residencia: "Barcelona"})
db.coleccion1.insertOne({nombre: "Diego", edad: 26, residencia: "Sevilla"})

db.coleccion01.deleteMany({})
db.coleccion01.insertMany(
    [
        { nombre: "Haaland", equipo: "Borussia", edad: 21, valor_mercado_en_millones: 185 },
        { nombre: "Mbappe", equipo: "PSG", edad: 22, valor_mercado_en_millones: 176 },
        { nombre: "Werner", equipo: "Chelsea", edad: 25, valor_mercado_en_millones: 140 },
        { nombre: "Sterling", equipo: "M. City", edad: 26, valor_mercado_en_millones: 138 },
        { nombre: "Rashford", equipo: "M. United", edad: 23, valor_mercado_en_millones: 135 },
        { nombre: "Kane", equipo: "Tottenham", edad: 28, valor_mercado_en_millones: 135 },
        { nombre: "Lukaku", equipo: "Chelsea", edad: 28, valor_mercado_en_millones: 134 },
        { nombre: "Joao Felix", equipo: "Atlético de Madrid", edad: 21, valor_mercado_en_millones: 128 },
        { nombre: "Salah", equipo: "Liverpool", edad: 28, valor_mercado_en_millones: 128 },
        { nombre: "Bruno Fernandez", equipo: "M. United", edad: 26, valor_mercado_en_millones: 127 }
     ]
)
