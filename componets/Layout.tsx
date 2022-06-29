import { Tab, Text, TabView } from "@rneui/themed";
import { useState } from "react";
import { View } from "react-native";
import { TodoPage } from "./TodoPage";
import { ReminderPage } from "./ReminderPage";
import { SettingsPage } from "./SettingsPage";
import tw from "twrnc";

export function Layout() {
  const [index, setIndex] = useState(0);

  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-1`}>
        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item style={{ width: "100%" }}>
            <TodoPage />
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <ReminderPage />
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <SettingsPage />
          </TabView.Item>
        </TabView>
      </View>

      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Todos"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "checkbox", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Reminders"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "calendar", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Settings"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "settings", type: "ionicon", color: "white" }}
        />
      </Tab>
    </View>
  );
}
