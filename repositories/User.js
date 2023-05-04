module.exports ={
    pg:{
        INSERT: {
            USER : "INSERT INTO airline.users (name , phone , email , password) VALUES ($1, $2 ,$3 ,$4)"
        },
        SELECT :
            {
                SEARCHFLIGHT : "SELECT source , destination from airlines.flights where flightname = $1"
            }

    }
}