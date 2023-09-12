import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/firebase/firebase.config';
import { v4 } from 'uuid';

export const uploadFile = async (file: File) => {
  try {
    if (!file) {
      throw new Error('No file provided');
    }

    const fileRef = ref(storage, `${file.name}-${v4()}`);
    const uploadResult = await uploadBytes(fileRef, file);
    const url = await getDownloadURL(uploadResult.ref);

    return url;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
