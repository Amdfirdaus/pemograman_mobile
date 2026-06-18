import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";


export default function ProductCard({
  item,
  onPress,
  showDelete,
  onDelete
}) {

  return (

    <View style={styles.card}>


      {item.image && (

        <Image
          source={{
            uri:item.image
          }}
          style={styles.image}
        />

      )}



      <View style={styles.content}>


        <Text
          numberOfLines={1}
          style={styles.name}
        >
          {item.name}
        </Text>



        <Text style={styles.price}>
          Rp {item.price}
        </Text>

        <Text style={styles.stock}>
          Stok: {item.stock}
        </Text>


        {showDelete ? (
          <TouchableOpacity
            style={[styles.addBtn, styles.deleteBtn]}
            onPress={onDelete}
          >
            <Text style={styles.btnText}>
              Hapus
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.addBtn}
            onPress={onPress}
          >
            <Text style={styles.btnText}>
              + Add
            </Text>
          </TouchableOpacity>
        )}


      </View>


    </View>

  );

}




const styles = StyleSheet.create({

  card:{
    width:170,
    height:250,

    marginHorizontal:8,

    backgroundColor:"#fff",

    borderRadius:20,

    overflow:"hidden",

    elevation:4
  },



  image:{
    width:"100%",
    height:115
  },



  content:{
    flex:1,

    padding:14,

    justifyContent:"space-between"
  },



  name:{
    fontSize:15,

    fontWeight:"bold"
  },



  price:{
    color:"gray"
  },

  stock:{
    fontSize:12,
    color:"#888",
    marginTop:2
  },

  addBtn:{
    backgroundColor:"#6C63FF",

    paddingVertical:10,

    borderRadius:14,

    alignItems:"center"
  },

  deleteBtn:{
    backgroundColor:"#FF4D4D"
  },

  btnText:{
    color:"#fff",

    fontWeight:"bold"
  }

});