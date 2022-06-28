import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import tw from 'twrnc';

export default function App() {
  return (
    <TailwindProvider>
      <View style={tw`flex-1 items-center justify-center bg-red-500`}>
        <Text>Open up App.js to start working on your app! testt</Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}