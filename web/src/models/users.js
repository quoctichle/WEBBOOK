const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  User_Name: { type: String, required: true, unique: true },
  Full_Name: { type: String, maxlength: 50 },
  Email: { type: String, maxlength: 50 },
  Avatar: { type: String, maxlength: 50 },
  Password: { type: String, required: true },
  Create_at: { type: Date },
  Last_Login: { type: Date },
  Status: { type: String, maxlength: 50 },
  Permission_Id: { type: Boolean },
  Books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  ReadHistory: [{ type: Schema.Types.ObjectId, ref: 'ReadHistory' }],
  User_Login: [{ type: Schema.Types.ObjectId, ref: 'User_Login' }],
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
