import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

class BankDepositController {
  async submitBankDeposit(req: Request, res: Response): Promise<void> {
    try {
      const { amount, reference, appointmentId } = req.body;
      const depositProof = req.file; // Assuming you're handling file uploads

      // Check if the file was uploaded
      if (!depositProof) {
        res.status(400).json({ error: 'Deposit proof is required.' });
        return; // Ensure the method ends after sending the response
      }

      // Save the proof to disk or cloud storage
      const filePath = path.join(__dirname, '../uploads', depositProof.filename);

      // You can save the file to the disk (example)
      fs.writeFileSync(filePath, depositProof.buffer); // Assuming `multer` is configured to provide a `buffer`

      // Save deposit info in the database (assuming you have a Deposit model)
      // const deposit = await Deposit.create({ amount, reference, appointmentId, proofPath: filePath });

      // Send success response
      res.status(200).json({ message: 'Bank deposit submitted successfully!' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred.' });
      }
    }
  }
}

export default BankDepositController;
