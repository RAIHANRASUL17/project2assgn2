import { Schema, model } from 'mongoose';
import { IAddress, IFullName, IUser } from '../interfaces/user.interface';
import bcrypt from 'bcrypt';
import config from '../config';

const fullNameSchema = new Schema<IFullName>({
  firstName: { type: String },
  lastName: { type: String, required: true },
});
const addressSchema = new Schema<IAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

// main
const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    required: [true, 'Please tell us your userId'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Please tell us your name'],
    unique: true,
  },
  password: {
    type: String,
  },
  fullName: fullNameSchema,
  age: { type: Number },
  email: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  address: addressSchema,
  hobbies: [String],
});

// mongoose pre save middleware/hook
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save in to DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// mongoose post save middleware/hook
userSchema.post('save', async function (doc, next) {
  // console.log(doc.password);
  doc.password = '****';
  next();
});

export const UserModel = model<IUser>('User', userSchema);
