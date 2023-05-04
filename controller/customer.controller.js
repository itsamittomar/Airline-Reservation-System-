const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const bcrypt = require('bcrypt')
const { Client } = require('pg')
const {request, response} = require("express");
const pg = require('../repositories/admin')
const { client } = require('../app')

class CustomerController {
    register(app){
        app.route("/register")
            .post(async  (request, response, next) =>{
                try{
                    const name = request.body.name;
                    const phone = request.body.phone;
                    const email = request.body.email;
                    const password = request.body.password
                    const confirmedPassword = request.body.confirmedPassword;

                    if(password !== confirmedPassword){
                        const error = new Error("Password and Confirmed Password Doesn't match")
                        error.statusCode=422;
                        throw error
                    }
                    const hashedPassword = await bcrypt.hash(password,12)
                    let queryString  = pg.pg.INSERT.USER;
                    client.query(queryString, function (error,results){
                        if(error){
                            console.log(error)
                        }
                        else{
                            response.statusCode(200).json({},"User Registered Successfully !!")
                        }
                    })

                }
                catch (err){
                    const error = new Error("Error while adding the user")
                    error.statusCode = 422;
                    throw  error
                }

            })
    }
}

module.exports= CustomerController