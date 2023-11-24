import { Request, Response } from 'express';
import userZodSchema from '../zodValidations/user.zod.validation';
import { UserServices } from '../services/user.service';

const createUser = async (req: Request, res: Response) => {
  // const result = await UserServices.createUserIntoDB(userData)
  try {
    const userData = req.body;
    /*_______________ zod validation str_________________*/
    const zodParsedData = userZodSchema.parse(userData);
    // main with zod
    const result = await UserServices.createUserIntoDB(zodParsedData);
    /*_______________ zod validation str_________________*/

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

// get all user
const getAllUser = async (req: Request, res: Response) => {
  const result = await UserServices.getAllUserIntoDB();
  res.status(200).json({
    success: true,
    message: 'user is retrieve successfully',
    data: result,
  });
};
// get single user/dynamic user
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserServices.getSingleUserIntoDB(userId);
    res.status(200).json({
      success: true,
      message: 'get single user successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
// update
const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const userId = req.params.userId;
    const result = await UserServices.updateUserIntoDB(userId, userData);
    res.status(200).json({
      success: true,
      message: 'update user successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      }
    })
  }
};
// delete
const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserServices.deleteUserIntoDB(userId);
    res.status(200).json({
      success: true,
      message: 'delete user successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
        success: false,
        message: 'User not found',
        error: {
            code: 404,
            description: 'User not found!',
          }
      })
  }
};

export const UserControllers = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
