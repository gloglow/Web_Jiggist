import { CartItem, CartItemWithProduct } from "@/types/cart";
import { db } from "../../lib/firebase/client";
import { setDoc, doc, increment, getDocs, collection, getDoc, QuerySnapshot } from "firebase/firestore";

export async function getCartItems(userId: string){
  const snapshot = await getDocs(
    collection(db, "users", userId, "cart_items")
  ) as QuerySnapshot<CartItem>;

  const cartItems = snapshot.docs.map((doc) => ({
    productId: doc.id,
    quentity: doc.data().quentity
  }));

  const products = await Promise.all(
    cartItems.map((item) => {
      return getDoc(doc(db, "products", item.productId))
    })
  );

  return cartItems.map((item, i) => ({
    ...item,
    product: products[i].data()
  } as CartItemWithProduct));
}

export async function addProductToCart(
  userId: string, productId: string, quentity: number) {
  const ref = doc(db, "users", userId, "cart_items", productId);

  await setDoc(
    ref,
    {
      productId,
      quentity: increment(1),
      addedAt: new Date()
    },
    { merge: true }
  );
}