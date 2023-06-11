const router= require("express").Router();
const Booking= require("../models/booking");

router.post("/book", async function(req, res){
    try{
        const from= req.body.from;
        const to= req.body.to;
        const departure_date= req.body.departure_date;
        const arrival_date=req.body.arrival_date;
        const time= req.body.time;
        const no_of_seats= req.body.no_of_seats;
        const type_of_passenger= req.body.type_of_passenger;
        const price= req.body.price;
        const flight_no= req.body.flight_no;
        
        const email= "pk1853894@gmail.com";
        console.log(req.body)
        if(!from || !to || !departure_date || !time || !no_of_seats || !type_of_passenger || !price || !flight_no){
            return res.status(422).json({error: "Please fill all the fields"});
        }



        const booking= new Booking({
            from: from,
            to: to,
            departure_date: departure_date,
            arrival_date: arrival_date,
            time: time,
            no_of_seats: no_of_seats,
            type_of_passenger: type_of_passenger,
            email: email,
            price:price, 
            flight_no:flight_no
        });
        await booking.save();
        // res.send("Booking done successfully",booking);
        return res.status(201).json({message: "Booking done successfully",booking:booking});
    }
    catch(err){
        console.log(err);
    }
});


// get the booked flights
router.get("/get_booking_details", async function(req, res){
    try{
        const email= "pk1853894@gmail.com";
        const booked= await Booking.find({email: email});
        // res.send("booked");
        return res.status(201).json({message: "booked details fetched successfully",booked:booked});
    }
    catch(err){
        console.log(err);
    }
});




module.exports=router;
