const mongoose = require("mongoose")
const validator = require("validator")

// Mongoose Connection
mongoose.connect("mongodb://localhost:27017/ttchannel", { useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true })
.then(()=>console.log("connection successful"))
.catch((err)=>console.log(err))

// Schema
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        // uppercase: true,
        trim: true,
        minlength: [2, "Minimum 2 letters needed"],
        maxlength: 12
    },
    ctype: {
        type: String,
        lowercase: true,
        required: true,
        enum: ["frontend", "backend", "database"]
    },
    videos: {
        type: Number,
        // min: 1,
        // max: 2,
        // enum: 50
        validate(value){
            if(value<0){
                throw new Error ("videos should not be negative")
            }
        }
        // validate:{
        //     validator:function(value){
        //         return value.length < 0
        //     },
        //     message: "videos count should not be negative"
        //     }
        },
    
    author: String,
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid")
            }
        }        
    },
    active: Boolean,
    date:{
        type: Date,
        default: Date.now
    }
})

// Collections
const Playlist = new mongoose.model("Playlist", playlistSchema)

// Insert Data
const createDocument = async () => {
    try{
        // const javascriptPlaylist = new Playlist({
        //     name: "Jvascript",
        //     ctype: "Front End",
        //     videos: 70,
        //     author: "Shimul",
        //     active: true
        // })

        // const mongoPlaylist = new Playlist({
        //     name: "mongoDb",
        //     ctype: "Database",
        //     videos: 150,
        //     author: "Shimul",
        //     active: true
        // })

        // const expressPlaylist = new Playlist({
        //     name: "Express",
        //     ctype: "Back end",
        //     videos: 40,
        //     author: "Shimul",
        //     active: true
        // })

        const mongoosePlaylist = new Playlist({
            name: "android",
            ctype: "Database",
            videos: 90,
            author: "Shimul",
            email: "shimul@gmail.co",
            active: true
        })
        
        // const result = await reactPlaylist.save()
        const result = await Playlist.insertMany([mongoosePlaylist])
        // const result = await Playlist.insertMany([javascriptPlaylist, mongoPlaylist, mongoosePlaylist, expressPlaylist])
        console.log(result)
    }catch(err){
        console.log(err)
    }
    
}
createDocument()

// Read Data
const getDocument = async () => {
    try{
    const result = await Playlist
    // .find({ctype: "Front End"})
    // .find({ctype: {$nin : ["Front End", "Database"]}})
    // .find({ $or : [{ctype: "Back end"}, {author: "Shimul"}]})
    .find({author: "Shimul"})
    // .find({videos : {$lte : 50}})
    .select({name:1})
    // .countDocuments()
    // .sort("name : 1")
    .sort({name : -1})
    // .limit(1)
    console.log(result)
    }catch(err){
        console.log(err)
    }
}
// getDocument()

// Update Data
const updateDocument = async (_id) => {
    try{
        const result = await Playlist.findByIdAndUpdate({_id}, {
            $set : {
               name: "Javascript"
            }
        },{
            new: true,
            useFindAndModify: false
        })
        console.log(result)

    }catch(err){
        console.log(err)
    }
}
// updateDocument("601976a66bf164308c965e61")

// Delete Data
const deleteDocument = async (_id) => {
    try{
        const result = await Playlist.findByIdAndDelete({_id})
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
// deleteDocument("601972248aa3cb1e70a207cf")