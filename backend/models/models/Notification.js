const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: {
      type: String,
      enum: [
        'AssetAssigned', 'MaintenanceApproved', 'MaintenanceRejected', 'BookingConfirmed',
        'BookingCancelled', 'BookingReminder', 'TransferApproved', 'OverdueReturn',
        'AuditDiscrepancy', 'General',
      ],
      default: 'General',
    },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    link: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Notification', notificationSchema);
