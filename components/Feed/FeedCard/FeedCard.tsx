import React from "react";
import FeedCardImageList from "./FeedCardImageList";
import FeedCardHeader from "./FeedCardHeader";
import FeedCardDetail from "./FeedCardDetail";

interface IProps {
  id: string;
  detail: string;
  images: string;
}

const FeedCard = (props: IProps) => {
  return (
    <>
      <FeedCardHeader />
      <FeedCardImageList images={props.images} />
      <FeedCardDetail detail={props.detail} />
    </>
  );
};

export default FeedCard;
