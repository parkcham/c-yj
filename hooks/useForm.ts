import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";


// interface IProps {
//   oldTitle? : string 
//   oldDetail? : string
// }


export default function useForm() {
  const [inputs, setInputs] = useState({
    title:  "",
    detail:  ""
  });
  const { title, detail } = inputs;

  const onChange = (
    keyvalue: string,
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const { text } = e.nativeEvent;
    setInputs({
      ...inputs,
      [keyvalue]: text,
    });
  };

  return { title, detail, onChange };
}
