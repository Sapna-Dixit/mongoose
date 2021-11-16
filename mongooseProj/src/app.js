const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/mycargarage', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));
  
    // schema
    // mongoose schema defines the structure of the document.
    //default values, validators  etc.


    const playlistSchema = new mongoose.Schema(
        {
            name :{
                type : String,
                required : true
            },
            type : String,
            author : String,
            active : Boolean,
        date : {
            type : Date,
            Default : Date.now
        }

        });



const  Playlist = new mongoose.model("PlayList ",playlistSchema);

//create document or insert

const reactPlaylist  = new Playlist({
    name : "Python",
    type :  "Back End",
    author : "Guido Van Rossum",
    active : true

});
reactPlaylist.save();
