import { StyleSheet, Text, View } from 'react-native';

function Navbar(){
    return(
        <View style={styles.navbar}>
            <Text style={styles.navbarText}>Home</Text>
            <Text style={styles.navbarText}>My Goals</Text>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    navbar:{
        backgroundColor:'black',
        flex:1,
        flexDirection:'row',
        position:'fixed',
        top:0,
        width:500,
        height:60,
        alignItems:'center',
        justifyContent:'center'
    },
    navbarText:{
        color:'white',
        margin:15,
        fontSize:20
    }
    
  });