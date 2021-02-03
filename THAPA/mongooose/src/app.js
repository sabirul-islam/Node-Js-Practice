const mongoose = require("mongoose")

// Mongoose Connection
mongoose.connect("mongodb://localhost:27017/ttchannel", { useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>console.log("connection successful"))
.catch((err)=>console.log(err))

// Schema
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
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
        const javascriptPlaylist = new Playlist({
            name: "Jvascript",
            ctype: "Front End",
            videos: 70,
            author: "Shimul",
            active: true
        })

        const mongoPlaylist = new Playlist({
            name: "mongoDb",
            ctype: "Database",
            videos: 150,
            author: "Shimul",
            active: true
        })

        const mongoosePlaylist = new Playlist({
            name: "Mongoose",
            ctype: "Schema",
            videos: 40,
            author: "Shimul",
            active: true
        })

        const expressPlaylist = new Playlist({
            name: "Express",
            ctype: "Back end",
            videos: 40,
            author: "Shimul",
            active: true
        })
        
        // const result = await reactPlaylist.save()
        const result = await Playlist.insertMany([javascriptPlaylist, mongoPlaylist, mongoosePlaylist, expressPlaylist])
        console.log(result)
    }catch(err){
        console.log(err)
    }
    
}
// createDocument()

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
        const result = await Playlist.updateOne({_id}, {
            $set : {
               name: "Javascript"
            }
        })

    }catch(err){
        console.log(err)
    }
}

updateDocument("601976a66bf164308c965e61")