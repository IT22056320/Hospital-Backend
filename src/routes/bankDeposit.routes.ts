import { Router } from 'express';
import multer from 'multer';
import BankDepositController from '../controllers/bankDeposit.controller';

const router = Router();
const bankDepositController = new BankDepositController();
const upload = multer({ dest: 'uploads/' }); // Set up file upload destination

// Route for submitting bank deposit proof
router.post('/submit-bank-deposit', upload.single('depositProof'), bankDepositController.submitBankDeposit.bind(bankDepositController));

export default router;
