import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyoUSU6obeVLy1oN0b_Di0cUNYJNnPrOgX4W7y39c1uoZPL2cnQBNsRFvxjctCEcsVL/exec";

export async function syncWorkoutData(workoutData: any) {
  // 1. Sync to Cloud Firestore
  try {
    const docRef = await addDoc(collection(db, "workouts"), workoutData);
    console.log("Firestore sync successful. ID: ", docRef.id);
  } catch (error) {
    console.error("Firestore sync failed: ", error);
  }

  // 2. Backup to Google Sheets
  try {
    await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      body: JSON.stringify(workoutData),
      headers: {
        "Content-Type": "text/plain;charset=utf-8", 
      }
    });
    console.log("Sheets backup successful.");
  } catch (error) {
    console.error("Sheets backup failed: ", error);
  }
}
