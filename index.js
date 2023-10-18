const express = require ("express");
const app = express()
const PORT = 4001;
const mascotas = [
    { id: 1, nombre: "Chiqui", tipo: "Gato"    },
    { id: 2, nombre: "Judi",tipo: "felino"     }
]

app.use(express.json());

app.get("/",(req, res)=>{
    res.send({nombre: "Ada"})
});

app.get("/mascotas",(req, res)=>{
    res.json(mascotas)
});

app.get("/mascotas",(req, res)=>{
  const crearMascota=(req.body);
  console.log(crearMascota);
  res.json({ mensaje: "Crear Mascota"})
});
app.listen(PORT, ()=>{
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });