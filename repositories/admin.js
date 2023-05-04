module.exports = {
    pg :{
        INSERT :{
            AIRLINE: "INSERT INTO airlines.Schemas.public.Tables.flights (name , source , destination , date , duration , departureTime , arrivalTime ,fare,seatingCapacity) VALUES ($1 ,$2 , $3 , $4 , $5 , $6 , $7, $8,$9)",
            SEAT : "INSERT INTO airline.seats (seat_no, flight_id, seat_type, class, fare, status) VALUES ($1, $2, $3, $4, $5, $6)', [seat_no, flight_id, seat_type, seat_class,fare,status]",
        },
        UPDATE :{
            AIRLINE : "UPDATE airline.flights SET seatCapacity =$1 , staffCount = $2 , status = $3 WHERE flightId = $4 ,[seatCapacity , staffCount , status , flightId]"
        },
        SELECT :{
            AIRLINE :"SELECT * from airline.flights where flightId  =$1 ,[flightId]"
        }
    }
}