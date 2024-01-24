import { useRef } from "react";
import { Modalize } from "react-native-modalize";

export default function () {
  const modalRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalRef.current?.open();
  };
  const onClose = () => {
    modalRef.current?.close();
  };

  return { modalRef, onClose, onOpen };
}
