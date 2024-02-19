import { firebase } from "../../config/firebase";

const db = firebase.firestore();
export const createdAt = firebase.firestore.FieldValue.serverTimestamp();
// export const randomSt = Math.random().toString(36).substring(2, 11);

// export async function getContent({ collection, limit, pageParam }: any) {
//   let query = db
//     .collection(collection)
//     .orderBy("createdAt", "desc")
//     .limit(limit);
//   let last = undefined;

//   if (last === -1) {
//     return;
//   } else if (last) {
//     query = query.startAfter(last);
//   }

//   const snapshot = await query.get();
//   const content = snapshot.docs.map((doc) => {
//     ({
//       id: doc.id,
//       ...doc.data(),
//     });
//     if (snapshot.docs.length === 0) {
//       last = -1;
//     } else {
//       last = snapshot.docs[snapshot.docs.length - 1];
//     }
//   });
//   console.log(content);
//   return content;
// }
// export async function getContent({ collection, limit, pageParam }: any) {
//   let query = db
//     .collection(collection)
//     .orderBy("createdAt", "desc")
//     .limit(limit);
//     let lastVisible:any = undefined;
//   const da: { id: string; }[] = []
//   if (lastVisible === -1){
//     return
//   }else if (lastVisible) {
//     query = query.startAfter(lastVisible)
//   }

//     const snapshot = await query.get();
//     snapshot.forEach((doc) =>{
//       da.push({id : doc.id,...doc.data()});
//       if(snapshot.docs.length ===0){
//         lastVisible = -1
//       } else {
//         lastVisible = snapshot.docs[snapshot.docs.length -1]
//       }
//     })

  
//   console.log(da);
//   return da;
// }
export function randomSt(){
  return Math.random().toString(36).substring(2, 11);
}
 

export async function getContent({ collection,limit,pageParam}:any) {
  let query = db.collection(collection).orderBy("createdAt", "desc").limit(limit);

  if(pageParam){
    console.log(pageParam)
    const cursorDoc = await db.collection(collection).doc(pageParam.id).get();
    query= query.startAfter(cursorDoc)
  }

  // if (id) {
  //   const cursorDoc = await db.collection(collection).doc(id).get();
  //   query = query.endBefore(cursorDoc)
  // }

  const snapshot = await query.get();

  const content = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(content.length)
  return content;
}

export async function getNewerContent(id: string, collection: string) {
  return getContent({
    id,
    collection,
  });
}
// export async function getContent({ collection, mode, id,limit,pageParam }:any = {}) {
//   let query = db.collection(collection).orderBy("createdAt", "desc").startAfter(pageParam).limit(limit);

//   if (id) {
//     const cursorDoc = await db.collection(collection).doc(id).get();
//     query =
//       mode === "older"
//         ? query.startAfter(cursorDoc)
//         : query.endBefore(cursorDoc);
//   }

//   const snapshot = await query.get();
//   const content = snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
//   console.log(content)
//   return content;
// }
export function updateContent({ collection,id,...props }:any) {
  return db.collection(collection).doc(id).update(
    props,
  );
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
