import { firebase } from "../../config/firebase";

const db = firebase.firestore();
export const createdAt = firebase.firestore.FieldValue.serverTimestamp();

export function randomSt() {
  return Math.random().toString(36).substring(2, 11);
}

export async function getContent({ collection, limit, pageParam }: any) {
  let query = db
    .collection(collection)
    .orderBy("createdAt", "desc")
    .limit(limit);

  if (pageParam) {
    console.log(pageParam);
    const cursorDoc = await db.collection(collection).doc(pageParam.id).get();
    query = query.startAfter(cursorDoc);
  }

  const snapshot = await query.get();

  const content = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(content.length);
  return content;
}

export async function getNewerContent(id: string, collection: string) {
  return getContent({
    id,
    collection,
  });
}

export function updateContent({ collection, id, ...props }: any) {
  return db.collection(collection).doc(id).update(props);
}
export function createContent({ collection, ...props }: any) {
  return db.collection(collection).add(props);
}

// export function createContent({ collection,id, ...props }: any) {
//   return db.collection(collection).doc(id).set(props);
// }

export function deleteContent({ collection, id }: any) {
  return db.collection(collection).doc(id).delete();
}

export async function imageGetUrl(images: string) {
  let imageResult = [];
  let imageName = [];
  for (let i = 0; i < images.length; i++) {
    const responce = await fetch(images[i]);
    const blob = await responce.blob();
    const fileName = images[i].substring(images[i].lastIndexOf("/") + 1);
    const result = await firebase.storage().ref().child(fileName).put(blob);
    const imageUrl = await result.ref.getDownloadURL();
    imageResult.push(imageUrl);
    imageName.push(fileName);
  }
  return { imageResult: imageResult, imageName: imageName };
}
