const mongoose =require("mongoose")

const ciudadesSchema= new mongoose.Schema ({

    city: {type:String, require:true},
    country: {type:String, require:true},
    description: {type:String, require:true},
    slogan:{type:String, require:true},
    flag:{type:String, require:true},
    language: {type:String, require:true},
    currency: {type:String, require:true},
    continent: {type:String, require:true},
    region:{type:String, require:true},
    icon:{type:String},
    image: {type:Object, require:true}
})

const Ciudades = mongoose.model("cities", ciudadesSchema)

module.exports =Ciudades;