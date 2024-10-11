import { Request, Response } from 'express';
// import Stripe from 'stripe';
import dotenv from 'dotenv';


// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//   apiVersion: '2022-11-15' as any,  // Cast the version to 'any'
// });


class PaymentController {
  async createPaymentIntent(req: Request, res: Response) {
    try {
      const { amount, currency } = req.body;

      // const paymentIntent = await stripe.paymentIntents.create({
      //   amount: Math.round(amount * 100), // Stripe works in cents
      //   currency: currency,
      // });

      // res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      const errorMessage = (error instanceof Error) ? error.message : 'An unknown error occurred';
      res.status(500).json({ error: errorMessage });
    }
  }
}

export default PaymentController;
