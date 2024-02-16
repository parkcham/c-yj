import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  C·YJ: undefined;
  FeedUpload: undefined;
  FeedModify: {
    oldDetail : string
  };
  CalendarUpload: undefined;
};

export type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;
