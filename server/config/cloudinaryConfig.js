const cloudinary =require('cloudinary').v2;

// import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key: process.env.cloud_api_key, 
  api_secret: process.env.cloud_api_secret,
});

module.exports =  cloudinary;