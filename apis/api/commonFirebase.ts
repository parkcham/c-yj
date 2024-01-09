import { firebase } from "../../config/firebase";

const db = firebase.firestore();
export const createdAt = firebase.firestore.FieldValue.serverTimestamp();

export function createContent({ collection, ...props }: any) {
  return db.collection(collection).add(props);
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
