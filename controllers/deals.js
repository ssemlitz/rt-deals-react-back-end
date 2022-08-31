import { Deal } from "../models/deal.js";

function create(req,res) {
  req.body.owner = req.user.profile
  Deal.create(req.body)
  .then(deal => {
    Deal.findById(deal._id)
    .populate('owner')
    .then(populatedDeal => {
      res.json(populatedDeal)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export {
  create
}