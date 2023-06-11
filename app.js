const express= require("express");
const app= express();
const mongoose=require("mongoose");
const Booking=require("./models/booking")



app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static("public"))

//importing routes
const bookingRoutes= require("./routes/booking-routes");

//using routes
app.use("/indigo",bookingRoutes);


//connecting database
mongoose.connect("mongodb+srv://pankaj:pankaj123@cluster0.82akh.mongodb.net/indigo?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("database connected successfully"))
.catch((err)=>console.log(err))



//index page
app.get("/", async function(req, res){
    try{
        const email= "pk1853894@gmail.com";
        const booked= await Booking.find({email: email});
        // res.send("booked");
        // return res.status(201).json({message: "booked details fetched successfully",booked:booked});
        res.render("index",{bookings:booked});
    }

    catch(err){
        console.log(err);
    }
});



//create a server
app.listen(3000, function(){
    console.log("Server is running on port 3000");
}
);
