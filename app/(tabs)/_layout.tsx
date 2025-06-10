import React from "react";
import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const TabIcons = ({
  text,
  focused,
  icon,
}: {
  text: string;
  focused: boolean;
  icon: any;
}) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row flex-1 justify-center items-center min-w-[112px] min-h-16 mt-4 rounded-full overflow-hidden"
      >
        <Image source={icon} className="size-5" tintColor="#151312" />
        <Text className="text-secondary ml-2 font-semibold text-base">
          {text}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <>
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <Image source={icon} tintColor="#A8B5DB" className="size-5" />
      </View>
    </>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle:{
          // backgroundColor:"red",
          width:'100%',
          height:'100%',
          justifyContent:'center',
          alignItems:"center"
        },
        tabBarStyle:{
          backgroundColor:'#0f0D23',
          borderRadius:50,
          marginHorizontal:20,
          marginBottom:36,
          height:52,
          position:'absolute',
          overflow:'hidden'
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcons text="Home" focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcons text="Profile" focused={focused} icon={icons.person} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcons text="Search" focused={focused} icon={icons.search} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcons text="Saved" focused={focused} icon={icons.save} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
