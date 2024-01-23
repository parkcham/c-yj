import React from "react";
import { View, Text } from "react-native";

import RemoveButton from "../Common/RemoveButton";

interface IProps {
  id?: number,
  detail: string,
  time: string,
}

const CalendarCard = (props:IProps) => {
  
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: "#F2F2F2",
        marginLeft: 14,
        marginRight: 14,
        marginBottom:10,
      }}
    >
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
      <Text style={{fontSize:20,color:"#545454"}}>{props.time}</Text>
      <RemoveButton size={13} onPress={() => console.log("tlqkf")}/>
      </View>
      <Text style={{color:"#545454",paddingTop:5,paddingBottom:15,fontSize:16}}>{props.detail}</Text>
    </View>
  );
};

export default CalendarCard;
