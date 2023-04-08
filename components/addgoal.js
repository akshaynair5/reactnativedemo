import { StyleSheet, Text, TextInput, View ,Button } from "react-native";

function Addgoal(){
    return(
        <View style={styles.AddgoalContainer}>
            <TextInput placeholder="Enter New Goal" style={styles.AGinp}></TextInput>
            <Button title='Add New Goal'/>
        </View>
    )
}

export default Addgoal

const styles = StyleSheet.create({
    AddgoalContainer:{
        backgroundColor:'black',
        position:'absolute',
        top:80,
        width:400,
        padding:30,
        borderRadius:20,
    },
    AGinp : {
        backgroundColor:'grey',
        padding:20,
        borderRadius:15,
        marginBottom:20,
    },
})