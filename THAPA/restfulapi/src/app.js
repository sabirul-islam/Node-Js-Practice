const e = require("express")
const express = require("express")
require("./db/conn")
const Student = require("./models/students")
const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.get('/students', async (req, res)=>{
    try{
        const studentsData = await Student.find()
        res.send(studentsData)
    }catch(e){
        res.send(e)
    }
})

// get students by id
app.get('/students/:id', async (req, res)=>{
    try{
        const _id = req.params.id
        const studentData = await Student.findById(_id)

        if(!studentData){
            res.status(404).send()
        }else{
            res.status(200).send(studentData)
        }

        console.log(studentData);
    }catch(e){
        res.status(500).send(e)
    }
})


// app.get('/students/:name', async (req, res)=>{
//     try{
//         const name = req.params.name
//         const studentData = await Student.
//         find({name})
//         res.status(200).send(studentData)
//         console.log(studentData);
//     }catch(e){
//         res.status(500).send(e)
//     }
// })

// update students by id
app.patch("/students/:id", async (req, res)=>{
    try{
        const _id = req.params.id
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(200).send(updateStudents)
    }catch(e){
        res.status(404).send(e)
    }
    
})

// create a new student
// app.post('/students', (req, res)=>{
//     console.log(req.body)
//     const user = new Student(req.body)
//     user.save()
//     .then(()=>{
//         res.status(201).send(user)
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
// })

app.post('/students', async(req, res)=>{
    try{
        const user = new Student(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser)
    }catch(e){
        res.status(400).send(e)
    }
})

// Delete by Id
app.delete("/students/:id", async (req, res)=>{
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id)
        if(!req.params.id){
            return res.status(400).send()
        }
        res.status(200).send(deleteStudent)
        console.log(deleteStudent);
    }catch(e){
        res.status(500).send(e)
    }
})

app.listen(port, ()=>{
    console.log(`listening at the port ${port}`)
})