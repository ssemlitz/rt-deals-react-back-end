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

function index(req, res) {
  Deal.find({})
  .populate('owner')
  .then(deals => {
    res.json(deals)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function deleteOne(req, res) {
  Deal.findById(req.params.id)
  .then(deal => {
    if (deal.owner._id.equals(req.user.profile)){
      Deal.findByIdAndDelete(deal._id)
      .then(deletedDeal => {
        res.json(deletedDeal)
      })
    } else {
      res.status(401).json({err: "Not Authorized"})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function update(req, res) {
  Deal.findById(req.params.id)
  .then(deal => {
    if (deal.owner._id.equals(req.user.profile)){
      Deal.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .populate('owner')
      .then(updatedDeal => {
        res.json(updatedDeal)
      })
    } else {
      res.status(401).json({err: err.errmsg})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function show(req, res) {
  Deal.findById(req.params.id)
  .then(deal => {
    res.json(deal)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export {
  create,
  index,
  deleteOne as delete,
  update,
  show
}