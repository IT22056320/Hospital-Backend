import mongoose, { Document, Schema } from "mongoose";

// Define the IPatientDiagnosis interface
export interface IPatientDiagnosis extends Document {
  patientId: string; // Reference to the patient
  diagnosis: string;
  symptoms: string;
  prescribedTreatment: string;
  date: Date;
}

// Define the schema for patient diagnosis
const patientDiagnosisSchema = new Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true }, // Reference to the patient
  diagnosis: { type: String, required: true },
  symptoms: { type: String, required: true },
  prescribedTreatment: { type: String, required: true },
  date: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

// Export the model
const PatientDiagnosis = mongoose.model<IPatientDiagnosis>('PatientDiagnosis', patientDiagnosisSchema);
export default PatientDiagnosis;
