import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Paywall"
>;

const Paywall = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView className="bg-[#0facac]">
      <View className="m-10 space-y-2">
        <Text className="text-2xl text-center uppercase text-white">
          Upgrade
        </Text>
        <Text className="text-center text-white">
          Upgrade to pro to access all the features
        </Text>
      </View>

      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-0 p-5 right-0"
      >
        <Ionicons name="md-close-circle-sharp" size={32} color="orange" />
      </TouchableOpacity>
      <View className="items-center">
        <MaterialCommunityIcons name="trophy-award" size={150} color="orange" />
      </View>
      <View className="space-y-5 px-10 py-5">
        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-key" size={32} color="orange" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Access to all pro features
            </Text>
            <Text className="text-white text-sm font-extralight">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ut quas impedit aut possimus inventore dignissimos at.
              Optio rerum itaque ut corporis ab distinctio. Fuga debitis quaerat
              quo id nemo.
            </Text>
          </View>
        </View>
        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-person-add-outline" size={32} color="orange" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Access to all pro features
            </Text>
            <Text className="text-white text-sm font-extralight">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ut quas impedit aut possimus inventore dignissimos at.
              Optio rerum itaque ut corporis ab distinctio. Fuga debitis quaerat
              quo id nemo.
            </Text>
          </View>
        </View>
        <View className="flex-row space-x-10 items-center">
          <Ionicons name="md-star" size={32} color="orange" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Access to all pro features
            </Text>
            <Text className="text-white text-sm font-extralight">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ut quas impedit aut possimus inventore dignissimos at.
              Optio rerum itaque ut corporis ab distinctio. Fuga debitis quaerat
              quo id nemo.
            </Text>
          </View>
        </View>
      </View>
      
    </ScrollView>
  );
};

export default Paywall;
