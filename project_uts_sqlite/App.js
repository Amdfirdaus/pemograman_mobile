import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { initDB, getProducts, getTransactions } from './src/database/database';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [dbReady, setDbReady] = useState(false);

  useEffect(() => {
    async function initializeApp() {
      try {
        await initDB();
        const dbProducts = await getProducts();
        const dbTransactions = await getTransactions();
        setProducts(dbProducts);
        setTransactions(dbTransactions);
        setDbReady(true);
      } catch (error) {
        console.error("Gagal inisialisasi database:", error);
        setDbReady(true); // Biarkan aplikasi memuat meskipun ada error agar tidak stuck
      }
    }
    initializeApp();
  }, []);

  if (!dbReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F6FA' }}>
        <ActivityIndicator size="large" color="#6C63FF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AppNavigator
        products={products}
        setProducts={setProducts}
        cart={cart}
        setCart={setCart}
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </NavigationContainer>
  );
}