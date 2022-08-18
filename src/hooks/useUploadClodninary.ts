import React from 'react'
import { fileUpload } from '../cloudinary/fileUpload';
import { setSaving } from '../store/hotels/HotelSlice';
import { useAppDispatch } from '../store/store';

export const useUploadClodninary = () => {
  const dispatch = useAppDispatch();
  const uploadImages = async (files = []) => {
    dispatch(setSaving(true));
    // dispatch(setSaving());
    console.log("Entro con ", files);


    // await fileUpload( files[0] );
    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    const photosUrls = await Promise.all(fileUploadPromises);

    dispatch(setSaving(false));
    return photosUrls

  }

  return {
    uploadImages
  }
}
