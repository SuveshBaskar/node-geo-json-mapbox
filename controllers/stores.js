// @desc Get all Stores
// @route GET /api/v1/stores
// @access PUBLIC

const Store = require('../models/Store');

const getStores = async (req, res, next) => {
  try {
    const stores = await Store.find();

    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores
    });
  } catch (error) {
    console.error(error);
    res.status(200).json({
      error: `Server error`
    });
  }
};

// @desc Add Store
// @route POST /api/v1/stores
// @access PUBLIC

const addStore = async (req, res, next) => {
  try {
    const store = await Store.create(req.body);

    return res.status(200).json({
      success: true,
      data: store
    });
  } catch (error) {
    if (error.code == 11000) {
      res.status(400).json({
        success: false,
        error: `Store data already exists`
      });
    } else {
      res.status(200).json({
        error: `Server error`
      });
    }
  }
};

module.exports = {
  getStores,
  addStore
};
