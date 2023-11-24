import express from 'express';
import { UserControllers } from '../controllers/user.controller';

const router = express.Router();

router.post('/POST/api/users', UserControllers.createUser);
router.get('/GET/api/users', UserControllers.getAllUser);
// single user router
router.get('/GET/api/users/:userId', UserControllers.getSingleUser);
router.put('/PUT/api/users/:userId', UserControllers.updateUser);

router.delete('/DELETE/api/users/:userId', UserControllers.deleteUser);

export const UserRoutes = router;
