import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";


export default function CartItem({
  item,
  onAdd,
  onMinus
}) {

  return (

    <View style={styles.card}>


      <View>

        <Text style={styles.name}>
          {item.name}
        </Text>


        <Text style={styles.sub}>
          {item.qty} x Rp {item.price}
        </Text>

      </View>





      <View style={styles.action}>


        <TouchableOpacity
          style={styles.btn}
          onPress={onMinus}
        >

          <Text>-</Text>

        </TouchableOpacity>




        <Text style={styles.qty}>
          {item.qty}
        </Text>




        <TouchableOpacity
          style={styles.btn}
          onPress={onAdd}
        >

          <Text>+</Text>

        </TouchableOpacity>


      </View>


    </View>

  );

}



const styles = StyleSheet.create({

  card:{
    backgroundColor:"#fff",

    borderRadius:18,

    padding:15,

    marginBottom:10,

    flexDirection:"row",

    justifyContent:"space-between",

    alignItems:"center"
  },



  name:{
    fontWeight:"bold",

    fontSize:15
  },



  sub:{
    color:"gray",

    marginTop:3
  },



  action:{
    flexDirection:"row",

    alignItems:"center"
  },



  btn:{
    width:32,

    height:32,

    borderRadius:16,

    backgroundColor:"#EEE9FF",

    justifyContent:"center",

    alignItems:"center"
  },



  qty:{
    marginHorizontal:12,

    fontWeight:"bold"
  }

});