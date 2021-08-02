const { Router } = require("express");
const fs = require('fs');

const router = Router();

router.get("/fecha", (req, res, next) => {
    
    const fecha = new Date()
    
    res.status(200).json({Fecha: fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear()});
    
});

router.get("/fs", (req, res, next) => {
    
   let archivo = fs.readFileSync('texto.txt', 'utf8', (err,data)=>{
        if (err) {
          console.error(err);
          return
        }
        return data
    })
    
    res.status(200).json({texto:archivo}); 
});

router.post("/saludo", (req, res, next) => {
    const {name} = req.body
    if (name){
        res.json({saludo:'Buenos Días ' + name }); 
    }else{
        res.status(400).json({error:'Falta el nombre'}); 
    }
 });


module.exports = router;