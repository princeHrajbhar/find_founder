import mongoose, { Schema, Document, model, models } from "mongoose";

export interface IFounder extends Document {
  founder_name: string;
  company: string;
  skills: string[];
  company_address: string;
  company_website: string;
  linkedin_url: string;
  offered_salary: number;
  offer_stakes: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const FounderSchema = new Schema<IFounder>(
  {
    founder_name: { type: String, required: true },
    company: { type: String, required: true },
    skills: { type: [String], required: true },
    company_address: { type: String, required: true },
    company_website: { type: String, required: true },
    linkedin_url: { type: String, required: true },
    offered_salary: { type: Number, required: true },
    offer_stakes: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Ensure the model isn't re-compiled during hot reload
export default models.Founder || model<IFounder>("Founder", FounderSchema);
