import express from 'express'
import controllers from '../controllers';

const router = express.Router();
const { accountController } = controllers;

router.post("/admin/login",
    validateMiddleware({ schema: accountValidator.adminSignInSchema }),
    accountController.signIn
);