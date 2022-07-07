
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Layout } from "./pages/Layout";
import tw from "twrnc";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Store, Persistor } from "./utils/Store";

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <SafeAreaView style={tw`flex-1`}>
          <Layout />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
