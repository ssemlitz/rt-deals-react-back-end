import mongoose from 'mongoose'

const Schema = mongoose.Schema

const dealSchema = new Schema({
  title: {type: String, required: true},
  origPrice: {type: Number, required: true},
  salePrice: {type: Number, required: true},
  dealLink: {type: String, required: true},
  salePrice: {type: String, required: true},
  details: {type: String, required: true},
  // image: {type: String, default: '/images/sale.jpg'},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  // comments: [commentSchema],
}, {
  timestamps: true
})

const Deal = mongoose.model('Deal', dealSchema)

export {
  Deal
}