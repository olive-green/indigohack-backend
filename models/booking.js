const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    from:{
        type: String,
        required: true,
    },
    to:{
        type: String,
        required: true,
    },
    departure_date:{
        type: String,
        required: true,

    },
    arrival_date:{
        type: String,
        required: true,

    },
    time:{
        type: String,
        required: true,
    },
    no_of_seats:{
        type: Number,
        required: true,
    },
    type_of_passenger:{
        type: String,
        required: true,
    },
    email:{ 
        type: String,
        required: true,
    },
    price:{
        type:Number,
        required:true
    },
    flight_no:{
        type:String,
        required:true
    }


});

const Booking= mongoose.model("Booking", bookingSchema);

module.exports= Booking;