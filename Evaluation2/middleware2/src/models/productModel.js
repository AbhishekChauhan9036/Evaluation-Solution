
const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
	name:String,
	category:String,
	price:{
		type:Number,
		required:true,
	}
})
module.exports=mongoose.model('Product',productSchema)