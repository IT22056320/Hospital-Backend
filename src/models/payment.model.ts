import mongoose from 'mongoose';

interface IPayment extends mongoose.Document {
  appointmentId: string;
  amount: number;
  method: 'stripe' | 'bank';
  status: 'pending' | 'completed' | 'failed';
  reference?: string;
  proofPath?: string; // For bank deposit
}

const paymentSchema = new mongoose.Schema(
  {
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    amount: { type: Number, required: true },
    method: { type: String, enum: ['stripe', 'bank'], required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], required: true },
    reference: { type: String }, // For bank deposit reference number
    proofPath: { type: String }, // For bank deposit proof
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model<IPayment>('Payment', paymentSchema);
export default Payment;
