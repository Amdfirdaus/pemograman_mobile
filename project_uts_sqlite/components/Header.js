import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Header({ title, navigation, showBack }) {
  return (
    <View style={styles.container}>
      
      {showBack && (
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  back: {
    fontSize: 20,
    color: '#fff',
    marginRight: 10
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  }
});