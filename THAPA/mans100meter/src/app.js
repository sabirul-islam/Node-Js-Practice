const express = require("express")
const MensRanking = require("../src/models/mens")

require("../src/db/conn")

const app = express()

app.use(express.json())

const port = process.env.PORT || 8080

app.post('/mens', async (req, res)=>{
    try{
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save()
        res.status(201).send(insertMens)
    }catch(e){
        res.status(500).send(e)
    }
})

app.listen(port, ()=>{
    console.log(`app listening at ${port} port.`);
})