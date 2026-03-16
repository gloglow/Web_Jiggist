import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import admin from "firebase-admin";
import fs from "fs";

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
});

const db = admin.firestore();

const filePath = path.join(process.cwd(), "seed", "products.json");
const products = JSON.parse(fs.readFileSync(filePath, "utf8"));

async function seedProducts() {
  const batch = db.batch();

  products.forEach((product: any) => {
    const docRef = db.collection("products").doc()
    batch.set(docRef, product);
  });

  await batch.commit();
  console.log("✅ Products successfully seeded!");
}

seedProducts().catch(console.error);