import {
	collection,
	addDoc,
	getDocs,
	doc,
	updateDoc,
	deleteDoc,
	writeBatch,
} from "firebase/firestore";
import { db } from "./config";

export async function save(data) {
	try {
		const docRef = await addDoc(collection(db, "tasks"), data);
		return docRef.id;
	} catch (e) {
		console.error("Error adding document: ", e);
		return null;
	}
}

export async function update(id, status) {
	const docRef = doc(db, "tasks", id);
	await updateDoc(docRef, { status });
}

export async function remove(id) {
	try {
		await deleteDoc(doc(db, "tasks", id));
		return true;
	} catch {
		return false;
	}
}

export async function clear() {
	try {
		const querySnapshot = await getDocs(collection(db, "tasks"));
		const batch = writeBatch(db);
		querySnapshot.forEach((doc) => {
			batch.delete(doc.ref);
		});
		await batch.commit();
		return true;
	} catch {
		return false;
	}
}
