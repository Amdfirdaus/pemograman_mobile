import React from "react";

import {
  createNativeStackNavigator
} from "@react-navigation/native-stack";

import {
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";

import {
  MaterialIcons
} from "@expo/vector-icons";


// screens
import DashboardScreen from "../src/screens/DashboardScreen";
import ProductScreen from "../src/screens/ProductScreen";
import CashierScreen from "../src/screens/CashierScreen";
import PaymentScreen from "../src/screens/paymentScreen";
import HistoryScreen from "../src/screens/HistoryScreen";



const Stack =
  createNativeStackNavigator();

const Tab =
  createBottomTabNavigator();







function BottomTabs({

  products,
  setProducts,

  cart,
  setCart,

  transactions,
  setTransactions

}){


  return(

    <Tab.Navigator

      screenOptions={({route})=>({

        headerShown:false,

        tabBarShowLabel:false,





        tabBarStyle:{

          position:"absolute",

          left:15,

          right:15,

          bottom:15,

          height:70,

          borderRadius:25,

          borderTopWidth:0,

          elevation:10,

          backgroundColor:"#fff"
        },







        tabBarIcon:({

          focused

        })=>{


          let icon;


          if(
            route.name ===
            "Dashboard"
          ){

            icon =
              "dashboard";

          }


          if(
            route.name ===
            "Produk"
          ){

            icon =
              "inventory";

          }


          if(
            route.name ===
            "Cashier"
          ){

            icon =
              "point-of-sale";

          }


          if(
            route.name ===
            "History"
          ){

            icon =
              "receipt-long";

          }






          return(

            <MaterialIcons

              name={icon}

              size={28}

              color={

                focused
                ? "#6C63FF"
                : "#B8B8B8"

              }

            />

          );

        }

      })}

    >







      <Tab.Screen
        name="Dashboard"
      >

        {(props)=>(

          <DashboardScreen
            {...props}

            products={products}

            transactions={transactions}
          />

        )}

      </Tab.Screen>










      <Tab.Screen
        name="Produk"
      >

        {(props)=>(

          <ProductScreen
            {...props}

            products={products}

            setProducts={setProducts}
          />

        )}

      </Tab.Screen>










      <Tab.Screen
        name="Cashier"
      >

        {(props)=>(

          <CashierScreen
            {...props}

            products={products}

            cart={cart}

            setCart={setCart}
          />

        )}

      </Tab.Screen>










      <Tab.Screen
        name="History"
      >

        {(props)=>(

          <HistoryScreen
            {...props}

            transactions={transactions}
            setTransactions={setTransactions}
          />

        )}

      </Tab.Screen>




    </Tab.Navigator>

  );

}









export default function AppNavigator({

  products,
  setProducts,

  cart,
  setCart,

  transactions,
  setTransactions

}){


  return(

    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >





      {/* MAIN TAB */}
      <Stack.Screen
        name="Home"
      >

        {(props)=>(

          <BottomTabs
            {...props}

            products={products}

            setProducts={setProducts}

            cart={cart}

            setCart={setCart}

            transactions={transactions}
            setTransactions={setTransactions}
          />

        )}

      </Stack.Screen>










      {/* PAYMENT */}
      <Stack.Screen
        name="Payment"
      >

        {(props)=>(

          <PaymentScreen
            {...props}

            cart={cart}

            setCart={setCart}

            products={products}
            setProducts={setProducts}

            transactions={transactions}

            setTransactions={setTransactions}
          />

        )}

      </Stack.Screen>




    </Stack.Navigator>

  );

}