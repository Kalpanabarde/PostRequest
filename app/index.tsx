
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Alert} from "react-native";

export default function HomeScreen() {

const postRequest=async()=>{

try{ 
const postData = await fetch("https://dev5.fari.sh/v1/auth/login", 
  {method:'POST', headers:{
'Content-Type':'application/json'

}, body:JSON.stringify({
  "email": "test@test.com",
  "password": "password"
})}
)
console.log("Raw response:", postData);

const data = await postData.json()
console.log("Parsed response:", data);


if (postData.ok)
{
Alert.alert("success", JSON.stringify(data))

return;

}

if (postData.status===401)
  {
Alert.alert("Wrong Password", data?.message||"wrong password");
return;
  }


Alert.alert( "Invalid credentials");
 
}


 catch (error)

 {

Alert.alert('Something went wrong')

 }



}




  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post Request Sending through Payloads</Text>



    <TouchableOpacity style={styles.button} onPress={()=>postRequest()}>
<Text style={styles.buttonText} >Login</Text>
</TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
padding: 20,
backgroundColor: "#1E293B",
},


title: {
fontSize: 25,
fontWeight: "bold",
textAlign: "center",
marginBottom: 30,
color: "#fff",
},


input: {
borderWidth: 1,
borderRadius: 10,
marginBottom: 15,
borderColor: "#475569",
backgroundColor: "#fff",
paddingHorizontal: 15,
paddingVertical: 10,
fontSize: 16,
},


button: {
borderRadius: 10,
paddingVertical: 12,
backgroundColor: "#3B82F6",
},


buttonText: {
textAlign: "center",
fontSize: 18,
color: "#fff",
fontWeight: "600",
},
});
