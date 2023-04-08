import { useState } from "react";
import { StyleSheet, Text, TextInput, View ,Button,ScrollView } from "react-native";

function Addgoal(){
    const [goals,setGoals] = useState([])
    const [currentGoal,setCG] = useState('')
    const HandleChange =(enteredText)=>{
        setCG(enteredText)
    }
    const addgoal=()=>{
        setGoals([...goals,{text:`${currentGoal}`,id:'1'}])
    }
    return(
            <View style={styles.AddgoalContainer}>
                <TextInput placeholder="Enter New Goal" style={styles.AGinp} onChangeText={HandleChange}></TextInput>
                <Button title='Add New Goal' onPress={addgoal}/>
                <ScrollView style={styles.goalList}>
                    {
                        goals.map((item)=>(
                            <View style={styles.itemTab} key={item.id}>
                                <Text style={styles.itemTabtext}>{item.id}</Text>
                                <Text>{item.text}</Text>
                            </View>
                            
                        ))
                    }
                </ScrollView>
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
    itemTab:{
        backgroundColor:'white',
        marginTop:15,
        padding:15,
        borderRadius:15,
        flex:1,
        flexDirection:'row'
    },
    goalList:{
        height:'80%'
    },
    itemTabtext:{
        fontWeight:'700',
        fontSize:25
    }
})