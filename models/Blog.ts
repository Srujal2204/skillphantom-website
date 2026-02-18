import mongoose, { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Cloudinary URL link
  category: { type: String, default: 'General' },
  createdAt: { type: Date, default: Date.now },
});

// Agar model pehle se bana hai toh use use karo, warna naya banao
export const Blog = models.Blog || model('Blog', BlogSchema);