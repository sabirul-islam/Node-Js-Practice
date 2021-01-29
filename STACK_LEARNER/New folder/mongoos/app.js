const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const router = require('./route');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// let Schema = mongoose.Schema;
// let testSchema = new Schema({
//     name: String
// })
// let Test = mongoose.model('Test', testSchema);

app.use('/contacts', router);

app.get('/', (req, res) =>{
    // let test = new Test({
    //     name: "Shimul"
    // });
    // test.save()
    // .then(t =>{
    //     res.json(t);
    // })
    // .catch(err =>{
    //     console.log(err);
    //     res.status(500).json({
    //         error: "Error Occured"
    //     })
    // })
});

const PORT = process.env.PORT || 8080;
mongoose
.connect(`mongodb+srv://stackLearner:pass123@cluster0.vv22h.mongodb.net/stack?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch(err => {
    console.log(err);
})