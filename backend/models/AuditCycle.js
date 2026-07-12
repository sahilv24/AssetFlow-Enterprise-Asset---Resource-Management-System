const mongoose = require('mongoose');

const auditItemSchema = new mongoose.Schema(
  {
    asset: { type: mongoose.Schema.Types.ObjectId, ref: 'Asset', required: true },
    result: { type: String, enum: ['Pending', 'Verified', 'Missing', 'Damaged'], default: 'Pending' },
    notes: { type: String, default: '' },
    checkedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    checkedAt: { type: Date, default: null },
  },
  { _id: false }
);

const auditCycleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    scopeDepartment: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', default: null },
    scopeLocation: { type: String, default: '' },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    auditors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    items: [auditItemSchema],
    status: { type: String, enum: ['Planned', 'In Progress', 'Closed'], default: 'Planned' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    closedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model('AuditCycle', auditCycleSchema);
