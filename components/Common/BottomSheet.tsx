import React, { forwardRef } from "react";
import { Modalize } from "react-native-modalize";

import { TStyle } from "react-native-modalize/lib/options";

interface IProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  modalStyle?: TStyle;
  modalHeight: number;
}
type Ref = Modalize;

const BottomSheet = forwardRef<Ref, IProps>((props, ref) => {
  return (
    <Modalize
      modalStyle={props.modalStyle}
      scrollViewProps={{ bounces: false }}
      withReactModal={true}
      handlePosition="inside"
      modalHeight={props.modalHeight}
      ref={ref}
      HeaderComponent={props.HeaderComponent}
    >
      {props.children}
    </Modalize>
  );
});

export default BottomSheet;
