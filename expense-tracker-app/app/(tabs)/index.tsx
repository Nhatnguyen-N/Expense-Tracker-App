import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import Button from "@/components/Button";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";
import ScreenWrap from "@/components/ScreenWrap";

const Home = () => {
  return (
    <ScreenWrap>
      <Text>Home</Text>
    </ScreenWrap>
  );
};

export default Home;

const styles = StyleSheet.create({});
