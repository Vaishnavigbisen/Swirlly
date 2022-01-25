// import  mongoose  from "mongoose";

// const ImageSchema =new mongoose.Schema({
//   images: [{location : {type: String, required: true}}]

// });

// export const ImageModel = mongoose.model("Images", ImageSchema);


import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    images: [
      {
        location: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ImageModel = mongoose.model("Image", ImageSchema);

