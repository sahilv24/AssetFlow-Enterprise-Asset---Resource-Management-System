const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6, select: false },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', default: null },
    // Signup always creates 'Employee'. Only Admin (via Employee Directory) can promote to
    // 'DepartmentHead' or 'AssetManager'. 'Admin' is seeded, never self-assigned.
    role: {
      type: String,
      enum: ['Employee', 'DepartmentHead', 'AssetManager', 'Admin'],
      default: 'Employee',
    },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    resetPasswordToken: { type: String, select: false },
    resetPasswordExpires: { type: Date, select: false },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('User', userSchema);