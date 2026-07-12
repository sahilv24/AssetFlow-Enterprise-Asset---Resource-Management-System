const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
    name: String,
    category: String,
    assetTag: String,
    status: {
        type: String,
        enum: ["Available", "Allocated", "Under Maintenance"],
        default: "Available"
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Asset", assetSchema);
