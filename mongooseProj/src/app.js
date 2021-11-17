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
const createDocument = async () =>{

    try{
        const jsPlaylist = new Playlist({
            name : "javascript",
            type : "Front End",
            author : "James Gosling",
            active : true
        })
        const reactPlaylist  = new Playlist({
            name : "React Js",
            type :  "Back End",
            author : "James Gosling",
            active : true
        

        })  

        const nodePlaylist = new Playlist({
            name : "nodeJS",
            type : "Back End",
            author :"patrick naughton",
            active : true
        })
        const mongoosePlaylist = new Playlist({
            name : "Database",
            type : "Back end",
            author : "mike shridon",
            active : true
        })
   // const result = await reactPlaylist.save();
   // save() method used only when onlyt one document is inserted
    
 const result  = await Playlist.insertMany([jsPlaylist, reactPlaylist, nodePlaylist,mongoosePlaylist])
   console.log(result);
// console.log("Fetch the recorded...!!");
// Playlist.find(function(err, res){
//     console.log(res);
// })
}
catch(err)
{
    console.log(err);
}

}
// createDocument();

const getDocument = async () =>{
   // const result  = await Playlist.find();
   try{
   const result = await Playlist.find({type :"Back-End"})
   .select({name:1})
   .limit(1);
    console.log(result);
   }
   catch(err)
   {
       console.log(err);
   }
}

getDocument();