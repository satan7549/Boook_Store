const catchAsyncErrors = require("../middleware/catchAsyncError");

// Get All Users
const getAllUsers = catchAsyncErrors(async (req, res, next) => {
  try {
    // console.log("req", req.use
    res.status(200).json({
      success: true,
      message: "sucess route complete",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving users",
    });
  }
});

module.exports = {
  getAllUsers,
};
