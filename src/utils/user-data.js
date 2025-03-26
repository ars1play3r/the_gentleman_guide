// user-data.js
import { db } from '../config';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export const getUserData = async (uid) => {
  const userRef = doc(db, 'users', uid);
  const docSnap = await getDoc(userRef);
  return docSnap.exists() ? docSnap.data() : null;
};

export const updateUserPoints = async (uid, points) => {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, { points });
};