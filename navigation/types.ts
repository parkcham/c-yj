import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  C·YJ: undefined;
  DDayUpload: undefined;
  FeedUpload: undefined;
  DiaryUpload: undefined;
  CalendarUpload: {
    selectedDate:string
  };
};

export type ScreenNavigationProp = StackNavigationProp<RootStackParamList,"CalendarUpload">;
