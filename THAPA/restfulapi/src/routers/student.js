const express = require("express")
const router = new express.Router()
const Student = require("../models/students")

router.get('/students', async (req, res)=>{
    try{
        const studentsData = await Student.find()
        res.send(studentsData)
    }catch(e){
        res.send(e)
    }
})

// get students by id
router.get('/students/:id', async (req, res)=>{
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
router.patch("/students/:id", async (req, res)=>{
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

router.post('/students', async(req, res)=>{
    try{
        const user = new Student(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser)
    }catch(e){
        res.status(400).send(e)
    }
})

// Delete by Id
router.delete("/students/:id", async (req, res)=>{
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

module.exports = router;