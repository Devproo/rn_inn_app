import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ActionRow from "../components/ActionRow";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";


export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative">
      <ScrollView>
        <TouchableOpacity onPress={() =>navigation.navigate('Paywall')} className="absolute z-50 top-5 right-10 items-center">
          <Ionicons name="person-circle" size={24} color="#e59620" />
          <Text className="text-center text-[#e59620]">UPGRADE</Text>
        </TouchableOpacity>

        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcYgXzbbYIwFk8IkPCPwIMkHewU4KYw9vMQ&usqp=CAU",
          }}
          className="h-60 w-full"
        />
        <View className="mx-5">
        <View className="flex-row justify-between space-x-2">
        <ActionRow
          title="Track workout"
          screen={"Demo"}
          color={"orange"}
          icon="fitness"
          vertical
        />
        <ActionRow
          title={"Browse workout"}
          screen={"Demo"}
          color={"red"}
          icon="share-social"
          vertical
        />
        </View>
        <ActionRow
          title={"Contact friends"}
          screen={"Demo"}
          color={"skyblue"}
          icon="library"
          requiresPro
        />
        <ActionRow
          title={"Create routine"}
          screen={"Demo"}
          color={"yellow"}
          icon="add-circle"
          requiresPro
        />
        <ActionRow
          title={"Move "}
          screen={"Demo"}
          color={"green"}
          icon="trophy"
          requiresPro
        />
        <ActionRow
          title={"Practice"}
          screen={"Demo"}
          color={"pink"}
          icon="md-time"
          requiresPro
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
