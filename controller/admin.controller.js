console.log("nksdbkjsdkjd")
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const bcrypt = require('bcrypt')
const { Client } = require('pg')
const {request, response} = require("express");
const pg = require('../repositories/admin')
const db = require('../app')
class AdminController {
    register(app){
        app.route("/admin_login")
            .post(async (request , response, next) =>{
                try{
                    console.log("admin log")
                    const username = request.body.username;
                    const password = request.body.password;
                    db.query('SELECT password,admin_id,username FROM airlines.admin WHERE username = $1', [username] , function (error, results) {
                        if (!error){
                            bcrypt.compare(password, results.rows[0].password, function(err, hashResult) {
                                if(hashResult === true) {
                                    console.log("Login Success!!");
                                    this.user_id = results.rows[0].admin_id;
                                    this.user_name = results.rows[0].username;
                                    response.statusCode(200).json({userId: user_id ,userName : user_name},"Login Successfull !!")

                                } else {
                                    const error = new Error("Error while Logging!!")
                                    error.statusCode=422;
                                    throw error


                                }
                            });
                        }
                    });

                }
                catch(err){
                    console.log(err)
                }
            })

        app.route("/admin/add_flight")
            .post(async (request,response,next) =>{
                try{
                    const name = request.body.name;
                    const source = request.body.source;
                    const destination = request.body.destination;
                    const date = request.body.date;
                    const duration = request.body.duration;
                    const departureTime = request.body.departureTime;
                    const arrivalTime = request.body.arrivalTime;
                    const fare = request.body.fare;
                    const seatingCapacity = request.body.seatingCapacity;
                    let querystring = pg.pg.INSERT.AIRLINE
                    db.query(querystring, function (error , results)
                    {
                        if(error){

                            error = new Error("Error while adding flight",error)
                            error.statusCode = 422;
                            throw error
                        }
                        else{
                            response.statusCode(200).json({},"Flight Details Added Successfully")
                        }
                    })
                }
                catch (err){
                    console.log(err)
                }
            })

        app.route("/admin/flightConfig/:flightId")
            .put(async (request,response,next) =>{
                try{
                    const flightId = request.params.flightId;
                    const seatCapacity = request.body.seatNumber;
                    const status = request.body.status;
                    const StaffCount = request.body.staffCount;
                    let querystring = pg.pg.UPDATE.AIRLINE
                    db.query(querystring, function (error , results)
                    {
                        if(error){
                            const error = new Error("Error while updating flight Config")
                            error.statusCode = 422;
                            throw error
                        }
                        else{
                            response.statusCode(200).json({}," Details updated Successfully")
                        }
                    })
                }
                catch (err){
                    const error = new Error()
                    error.statusCode = 422;
                    throw error
                }
            })

    }



}

module.exports = AdminController