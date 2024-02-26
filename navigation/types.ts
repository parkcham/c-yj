import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  C·YJ: undefined;
  FeedUpload: undefined;
  FeedModify: {
    id : string
    oldDetail : string
  };
  CalendarUpload: undefined;
  HomeUpload:{
    id:string | undefined
    value:number
    oldDetail:string| undefined
    date: string
  }
};

export type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;
