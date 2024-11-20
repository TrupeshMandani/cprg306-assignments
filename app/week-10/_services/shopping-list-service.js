import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

// Retrieve items from Firestore for a specific user
export async function getItems(userId) {
  const itemsRef = collection(db, "users", userId, "items");
  const itemsSnapshot = await getDocs(itemsRef);
  const items = [];
  itemsSnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return items;
}

// Add a new item to Firestore for a specific user
export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}
