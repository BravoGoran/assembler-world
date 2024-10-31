import Slider from "@/components/Slider";
import { useScreenSize } from "@/hooks/useScreenSize";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";
import { useContext } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DefaultButton } from "@/components/DefaultButton";
import { UserPreferencesContext } from "@/context/UserPreferencesContext";
import { useMarkersContext } from "@/context/MarkersContext";
import { useAuthContext } from "@/context/AuthContext";
import css from "@/styles/css";

const NavBar: React.FC = () => {
  const { logout, isLoggedIn, toMarker } = useAuthContext();
  const { theme, setTheme } = useContext(UserPreferencesContext);
  const { setIsVisible } = useMarkersContext();

  const { screenSize } = useScreenSize();

  const styles = css();

  return (
    <>
      <SafeAreaView
        style={{ backgroundColor: useThemeColor({}, "background") }}
      >
        <View style={styles.navbar}>
          <Pressable onPress={() => router.replace("/")}>
            <Text style={styles.logoText}>Assembler World</Text>
          </Pressable>

          {screenSize === "large" && (
            <View style={styles.navbarButtonsContainer}>
              <DefaultButton
                text={theme === "light" ? "Modo Oscuro" : "Modo Claro"}
                press={() => setTheme(theme === "light" ? "dark" : "light")}
                color="#dc3545"
              />
              {isLoggedIn ? (
                <>
                  <DefaultButton
                    text={"Añadir a Favoritos"}
                    press={() => toMarker}
                    closeAfter={false}
                  />
                  <DefaultButton text={"Cerrar Sesion"} press={logout} />
                </>
              ) : (
                <>
                  <DefaultButton
                    text={"Registrarse"}
                    press={() => router.replace("/RegisterScreen")}
                  />
                  <DefaultButton
                    text={"Iniciar Sesion"}
                    press={() => router.replace("/LoginScreen")}
                  />
                </>
              )}
            </View>
          )}

          {screenSize !== "large" && (
            <Pressable onPress={() => setIsVisible(true)}>
              <Image
                style={styles.sliderImg}
                source={require("../assets/images/threeLines.png")}
              />
            </Pressable>
          )}
        </View>
      </SafeAreaView>

      <Slider />
    </>
  );
};

export default NavBar;
