import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import { usePageWidth } from "@/hooks/usePageWidth";
import css from "@/styles/css";
import { useMarkers } from "@/hooks/useMarkers";
import { FavButton } from "@/components/FavButton";
import { useScreenSize } from "@/hooks/useScreenSize";

const Index: React.FC = () => {
  const { videoWidth, videoHeight } = usePageWidth();
  const styles = css();
  const { markers } = useMarkers();
  const { screenSize } = useScreenSize();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={styles.video}>
          <YoutubeIframe
            height={videoHeight}
            width={videoWidth}
            videoId="9wvzEOq1imo"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.h1}>Problema del Día</Text>
          <Text style={styles.h2}>TP Assembly</Text>
          <Text style={styles.mainText}>
            {" "}
            1- Probar número más grande que pueda asignarse directamente, y que
            todos los anteriores al mismo puedan asignarse directamente. Deducir
            el por qué. {"\n"} 2- Guardar el número "1234" en R2. {"\n"} 3-
            Guardar dicho número en memoria. {"\n"} 4- Guardar el doble del
            número anterior en la siguiente posición de memoria. Utilizando
            offset.
          </Text>
          <Image
            source={require("../assets/images/registers.png")}
            style={{ width: videoWidth, height: videoHeight }}
          ></Image>
        </View>
      </View>
      {screenSize == "large" && (
        <ScrollView style={styles.floatingBox}>
          <FavButton
            key={0}
            markerId={0}
            text={"Ejemplo"}
            press={"/"}
            pined={true}
            vertical={true}
          />
          <FavButton
            key={1}
            markerId={1}
            text={"Ejemplo"}
            press={"/"}
            pined={true}
            vertical={true}
          />
          {Array.isArray(markers) && markers.length > 0
            ? markers.map((marker) => (
                <FavButton
                  key={marker.id}
                  markerId={marker.id}
                  text={String(marker.id)}
                  press={marker.link}
                  pined={true}
                />
              ))
            : null}
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default Index;
