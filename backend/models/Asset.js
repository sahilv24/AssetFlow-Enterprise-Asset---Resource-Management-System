const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    assetTag: { type: String, required: true, unique: true }, // auto-generated e.g. AF-0001
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'AssetCategory', required: true },
    serialNumber: { type: String, default: '' },
    qrCode: { type: String, default: '' },
    acquisitionDate: { type: Date },
    acquisitionCost: { type: Number, default: 0 }, // reporting only, not linked to accounting
    condition: { type: String, enum: ['New', 'Good', 'Fair', 'Poor', 'Damaged'], default: 'New' },
    location: { type: String, default: '' },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', default: null },
    photoUrl: { type: String, default: '' },
    documents: [{ type: String }],
    isBookable: { type: Boolean, default: false }, // shared/bookable flag
    status: {
      type: String,
      enum: ['Available', 'Allocated', 'Reserved', 'Under Maintenance', 'Lost', 'Retired', 'Disposed'],
      default: 'Available',
    },
    customFieldValues: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

assetSchema.index({ assetTag: 1, serialNumber: 1, name: 'text' });

module.exports = mongoose.model('Asset', assetSchema);
