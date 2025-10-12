import { router, Stack } from "expo-router";
import { ArrowLeft, Lock, Mail } from "lucide-react-native";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

export default function Login() {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.content}>
        <View style={styles.containerSections}>
          {/* Black background section with organic blobs */}
          <View style={styles.blackSection}>
            {/* Organic blob backgrounds */}
            <View style={styles.blob1Container}>
              <Svg
                width={427}
                height={462}
                viewBox="0 0 319 374"
                style={styles.blob1}
              >
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.4843 -34.4703C99.829 -26.0187 101.506 52.8974 142.429 79.2997C194.298 112.764 286.258 75.7754 312.877 133.526C337.695 187.369 275.402 244.498 240.469 291.999C214.093 327.862 178.651 353.348 138.787 370.244C105.208 384.475 69.1811 374.14 33.4307 379.745C-14.9563 387.331 -73.1843 445.812 -107.096 408.793C-143.037 369.559 -86.0708 304.865 -85.3112 250.122C-84.8546 217.212 -106.767 188.615 -103.587 155.858C-99.6089 114.89 -90.7013 73.4347 -65.128 42.2481C-34.1923 4.52207 6.06194 -42.7572 52.4843 -34.4703Z"
                  fill="black"
                />
              </Svg>
            </View>
            <View style={styles.blob2Container}>
              <Svg
                width={192}
                height={192}
                viewBox="0 0 178 80"
                style={styles.blob2}
              >
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.963 -22.1319C8.59902 -42.9504 42.3574 -39.0915 56.2366 -55.9699C73.8279 -77.3626 63.9451 -120.922 90.2756 -129.528C114.825 -137.552 135.195 -106.171 153.213 -87.6678C166.817 -73.698 175.415 -56.2535 180.066 -37.3205C183.984 -21.3726 177.27 -5.75893 177.37 10.6622C177.506 32.8875 198.714 62.5184 180.756 75.6198C161.725 89.505 137.787 60.079 114.492 56.5366C100.488 54.4069 86.8906 62.5991 73.1264 59.2523C55.9115 55.0665 38.8051 48.633 27.1445 35.2977C13.0388 19.166 -4.54376 -1.71893 1.963 -22.1319Z"
                  fill="black"
                />
              </Svg>
            </View>

            <Pressable onPress={() => router.push('/')} style={styles.backButton}>
              <ArrowLeft size={16} color="black" />
            </Pressable>

            {/* Heading */}
            <View style={styles.heading}>
              <Text style={styles.title}>Tramuu</Text>
              <Text style={styles.subtitle}>
                De la madrugada al anochecer, lleva el registro de cada ordeño,
                cada litro, cada detalle que hace la diferencia en tu producción.
              </Text>
            </View>
          </View>

          {/* White rounded section with form */}
          <View style={styles.whiteSection}>
            <Text style={styles.loginTitle}>Inicio de sesión</Text>

            <View style={styles.inputsContainer}>
              {/* Email Input */}
              <View style={styles.inputContainer}>
                <Mail size={20} color="black" />
                <TextInput
                  placeholder="admin@email.com"
                  placeholderTextColor="#64748B"
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Password Input */}
              <View style={styles.inputContainer}>
                <Lock size={20} color="black" />
                <TextInput
                  placeholder="***"
                  placeholderTextColor="#64748B"
                  style={styles.input}
                  secureTextEntry
                />
              </View>

              {/* Forgot Password */}
              <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity>
                  <Text style={styles.forgotPasswordText}>
                    ¿Olvidaste la contraseña?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Entrar Button */}
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>

            {/* Registrar Button */}
            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerSections: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  blackSection: {
    paddingTop: 56,
    paddingBottom: 128,
    paddingHorizontal: 28,
    position: "relative",
  },
  blob1Container: {
    position: "absolute",
    left: -70,
    top: -40,
  },
  blob1: {
    transform: [{ rotate: "2.634deg" }],
  },
  blob2Container: {
    position: "absolute",
    right: -50,
    top: -80,
  },
  blob2: {
    transform: [{ rotate: "-40.41deg" }],
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#60A5FA", // brand-blue equivalent
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 48,
  },
  heading: {
    position: "relative",
    zIndex: 10,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "#F6F8FD",
    fontSize: 12,
    lineHeight: 16,
    maxWidth: 270,
  },
  whiteSection: {
    backgroundColor: "white",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -112,
    paddingTop: 60,
    paddingBottom: 45,
    paddingHorizontal: 20,
    elevation: 5,
    position: "relative",
    zIndex: 20,
  },
  loginTitle: {
    color: "black",
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 40,
  },
  inputsContainer: {
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "white",
    elevation: 1,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#64748B",
    backgroundColor: "transparent",
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    fontSize: 12,
    fontWeight: "600",
    color: "black",
  },
  loginButton: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 32,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerButton: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 32,
    backgroundColor: "#60A5FA", // brand-blue equivalent
    alignItems: "center",
    justifyContent: "center",
  },
  registerButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
