import React from "react";
import { Href, router } from "expo-router";
import { Image, Pressable, Text } from "react-native";
import { getValueFor } from "@/utils/storage";
import { markerLink } from "@/apis/linkMarker";
import { useMarkersContext } from "@/context/MarkersContext";
import css from "@/styles/css";

export const FavButton: React.FC<{
  markerId: number;
  text: string;
  press: string;
  vertical?: boolean;
  pined?: boolean;
}> = ({ markerId, text, press, vertical = false, pined = false }) => {
  let padH = 0;
  let padV = 0;
  if (vertical) {
    padV = 10;
  } else {
    padH = 10;
  }
  const { refreshMarkers } = useMarkersContext();
  const styles = css()
  const vinMarker = async () => {
    try {
      const token = await getValueFor("token");
      token ? (await markerLink(markerId, token)) : null;
      refreshMarkers()
    } catch (error) {
      console.error("Error deleating marker:", error);
    }
  };
  return (
    <Pressable onPress={() => router.replace(press as Href)} style={[styles.button, { marginLeft: padH, marginBottom: padV }]}>
      <Pressable onPress={() => vinMarker()}>
        {pined ? (
          <Image
            style={styles.favImage}
            source={require("../assets/images/starMark.png")}
          />
        ) : (
          <Image
            style={styles.favImage}
            source={require("../assets/images/starUnmark.png")}
          />
        )}
      </Pressable>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};