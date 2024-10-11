import { Router } from 'express';
import PaymentController from '../controllers/payment.controller';

const paymentController = new PaymentController();
const router = Router();

router.post('/create-payment-intent', paymentController.createPaymentIntent.bind(paymentController));

export default router;
