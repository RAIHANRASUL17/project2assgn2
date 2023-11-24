import { UserModel } from '../modules/user.model';
import { IUser } from './../interfaces/user.interface';
const createUserIntoDB = async (user: IUser) => {
  const result = await UserModel.create(user);
  return result;
};
// get all users
const getAllUserIntoDB = async () => {
  const result = await UserModel.find();
  return result;
};
// specific user/ dynamic user
const getSingleUserIntoDB = async (id: string) => {
  const result = await UserModel.findById(id);
  return result;
};
// update
const updateUserIntoDB = async (id: string, userData: IUser) => {
  const result = await UserModel.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};
// delete
const deleteUserIntoDB = async (id: string) => {
  const result = await UserModel.findByIdAndDelete(id);
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserIntoDB,
  getSingleUserIntoDB,
  updateUserIntoDB,
  deleteUserIntoDB,
};
