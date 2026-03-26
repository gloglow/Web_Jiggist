'use client'
import CartItem from "../../components/cart/CartItem"
import { getCartItems } from "@/repositories/cart.client";
import { useAuth } from "@/providers/AuthProvider";
import { useEffect, useState } from "react";
import { CartItemWithProduct } from "@/types/cart";

export default function Cart() {
  const { user, loading } = useAuth();
  const [cartItems, setCartItems] = useState<CartItemWithProduct[]>([]);
  const [cartLoading, setCartLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      setCartLoading(false);
      return;
    }

    const fetchCartItems = async () => {
      try {
        const items = await getCartItems(user.uid);
        setCartItems(items);
      } finally {
        setCartLoading(false);
      }
    };

    fetchCartItems();
  }, [user, loading]);

  if (loading || cartLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in.</div>;
  }

  return (
    <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white">Shopping Cart</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">You have 2 items in your cart</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((cartItem) => (
            <CartItem
            cartItem={cartItem} />
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-primary/5 dark:bg-primary/5 border border-primary/20 rounded-xl p-8 sticky top-28">
            <h3 className="font-display text-2xl font-bold mb-8 dark:text-white">Order Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Subtotal</span>
                <span className="font-medium dark:text-white">$110.00</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Estimated Shipping</span>
                <span className="font-medium dark:text-white">$15.00</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Tax</span>
                <span className="font-medium dark:text-white">$0.00</span>
              </div>
              <div className="pt-4 border-t border-primary/20 flex justify-between items-center">
                <span className="text-lg font-bold dark:text-white">Total</span>
                <span className="text-2xl font-display font-bold text-primary">$125.00</span>
              </div>
            </div>
            <div className="space-y-4">
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all uppercase tracking-widest text-sm">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}