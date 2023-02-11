const mongoose = require("mongoose")

const connectDB = async() => {
  try{
    await mongoose.connect("mongodb+srv://taichi-kobayashi:i6BAHkyhLvtfieux@cluster0.ff0aaie.mongodb.net/?retryWrites=true&w=majority")
    console.log("Success: Connected to MongoDB")
  }catch(err){
    console.log("Failure: Unconnected to MongoDB")
    throw new Error()
  }
}

module.exports = connectDB