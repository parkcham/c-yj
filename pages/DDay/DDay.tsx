import React from "react";
import { FlatList, View, Text } from "react-native";
import { DateData } from "react-native-calendars/src/types";
import { Card } from "react-native-paper";

const DDay = () => {
  const data = [
    {
      id: 929,
      detail: "수발",
      day: "D-1",
      date: "2024.01.01(금)",
    },

    {
      id: 9934,
      detail: "수발",
      day: "8일",

      date: "2024.01.01(금)",
    },
    {
      id: 43299,
      detail: "수발",
      day: "D-Day",

      date: "2024.01.01(금)",
    },

    {
      id: 94329,
      detail: "수발",
      day: "지남 !",

      date: "2024.01.01(금)",
    },
  ];
  // const renderItem = ({item}:any) => (
  //     <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderBottomWidth:1.2,        borderColor: "#F2F2F2",
  // }}>

  //     <View>
  //     <Text style={{fontSize:24,color:"#545454",paddingTop:10,paddingBottom:10}}>{item.detail}</Text>
  //     <Text style={{color:"#8A8A8A",paddingBottom:10}}>{item.date}</Text>
  //     </View>

  //     <Text style={{fontSize:22}}>{item.day}</Text>

  //     </View>
  // )
  const renderItem = ({ item }: any) => (
    <Card style={{ margin: 5 }}>
      <Card.Content>
        <Text style={{fontSize:20,color:"#545454"}}>{item.detail}</Text>
        <Text style={{color:"#8A8A8A",paddingTop:5,paddingBottom:10}}>{item.date}</Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F7F7F7",
            padding: 14,
            borderRadius: 7,
          }}
        >
          <Text style={{ fontSize: 24 }}>{item.day}</Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingLeft: 7,
        paddingRight: 7,
      }}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default DDay;
