const mongoose = require('mongoose');

const allocationSchema = new mongoose.Schema(
  {
    asset: { type: mongoose.Schema.Types.ObjectId, ref: 'Asset', required: true },
    allocatedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }, // employee
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', default: null },
    allocationDate: { type: Date, default: Date.now },
    expectedReturnDate: { type: Date, default: null },
    actualReturnDate: { type: Date, default: null },
    returnConditionNotes: { type: String, default: '' },
    status: { type: String, enum: ['Active', 'Returned', 'Transferred'], default: 'Active' },
    // Transfer sub-workflow: Requested -> Approved -> Re-allocated
    transferRequest: {
      requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
      requestedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
      status: { type: String, enum: ['None', 'Requested', 'Approved', 'Rejected', 'Completed'], default: 'None' },
      approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
      requestedAt: { type: Date, default: null },
      resolvedAt: { type: Date, default: null },
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Allocation', allocationSchema);