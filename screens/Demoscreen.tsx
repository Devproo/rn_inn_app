import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
const Demoscreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="bg-[#E5962D] flex-1">
      <TouchableOpacity
        onPress={navigation.goBack}
        className="flex-row items-center p-5"
      >
        <Ionicons name="arrow-back" size={50} color="white" />
        <Text className="text-white">Go Back</Text>
      </TouchableOpacity>
      <View className="px-10 flex-1 items-center justify-center">
        <Text className="text-white text-2xl font-extrabold">Hooray!</Text>
        <Text className="text-white text-2xl font-extrabold">
          You have access to this feature
        </Text>
        <Ionicons name="build-outline" size={200} color="white" />
        <View className="-mt-16 -ml-8">
          <Ionicons name="checkmark-circle-sharp" size={60} color="green" />
        </View>
        <Text className="text-white mt-10 flex-1 font-bold text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          dolores deleniti aperiam illum ducimus quidem culpa, id nam libero
          nobis expedita commodi dignissimos voluptas beatae doloremque. Ea
          deserunt vel asperiores.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Demoscreen;
