import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  C·YJ: undefined;
  FeedUpload: undefined;
  FeedModify: {
    id : string
    oldDetail : string
  };
  CalendarUpload: undefined;
};

export type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;
