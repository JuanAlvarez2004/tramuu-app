import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import BackToButton from "../../components/BackToButton";
import SimpleButton from "../../components/SimpleButton";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function CompanyRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: "",
    nitId: "",
    direccion: "",
    telefono: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle registration logic here
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']} >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      <KeyboardAvoidingView 
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Black header background with decorative blobs */}
          <View style={styles.header}>
            <View style={styles.blob1Container}>
              <Svg
                width={screenWidth * 0.8}
                height={screenHeight * 0.25}
                viewBox="0 0 319 374"
                style={styles.blob1}
              >
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.4844 -34.4703C99.829 -26.0187 101.506 52.8974 142.429 79.2997C194.298 112.764 286.258 75.7754 312.877 133.526C337.695 187.369 275.402 244.498 240.469 291.999C214.093 327.862 178.651 353.348 138.787 370.244C105.208 384.475 69.1812 374.14 33.4307 379.745C-14.9562 387.331 -73.1843 445.812 -107.096 408.793C-143.037 369.559 -86.0708 304.865 -85.3112 250.122C-84.8546 217.212 -106.767 188.615 -103.587 155.858C-99.6089 114.89 -90.7012 73.4347 -65.128 42.2481C-34.1923 4.52207 6.06197 -42.7572 52.4844 -34.4703Z"
                  fill="black"
                />
              </Svg>
            </View>
            
            <View style={styles.blob2Container}>
              <Svg
                width={screenWidth * 0.45}
                height={screenHeight * 0.15}
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

            {/* Back button */}
            <BackToButton addStyles={ styles.backButton } />
          </View>

          {/* White form card */}
          <View style={styles.formCard}>
            <Text style={styles.title}>Registro</Text>

            <View style={styles.form}>
              {/* Nombre */}
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Nombre</Text>
                <TextInput
                  placeholder="Lacteos S.A"
                  placeholderTextColor="#64748B"
                  value={formData.nombre}
                  onChangeText={(value) => updateFormData("nombre", value)}
                  style={styles.input}
                />
              </View>

              {/* NIT/ID */}
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>NIT/ID</Text>
                <TextInput
                  placeholder="800197268-4"
                  placeholderTextColor="#64748B"
                  value={formData.nitId}
                  onChangeText={(value) => updateFormData("nitId", value)}
                  style={styles.input}
                />
              </View>

              {/* Dirección */}
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Dirección</Text>
                <TextInput
                  placeholder="Cra 2 Bis Cl 22"
                  placeholderTextColor="#64748B"
                  value={formData.direccion}
                  onChangeText={(value) => updateFormData("direccion", value)}
                  style={styles.input}
                />
              </View>

              {/* Teléfono */}
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Teléfono</Text>
                <TextInput
                  placeholder="3145442377"
                  placeholderTextColor="#64748B"
                  value={formData.telefono}
                  onChangeText={(value) => updateFormData("telefono", value)}
                  style={styles.input}
                  keyboardType="phone-pad"
                />
              </View>

              {/* Correo electrónico */}
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Correo electrónico</Text>
                <TextInput
                  placeholder="example@gmail.com"
                  placeholderTextColor="#64748B"
                  value={formData.email}
                  onChangeText={(value) => updateFormData("email", value)}
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              {/* Contraseña */}
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                  placeholder="contraseña"
                  placeholderTextColor="#64748B"
                  value={formData.password}
                  onChangeText={(value) => updateFormData("password", value)}
                  style={styles.input}
                  secureTextEntry
                />
              </View>

              {/* Submit Button */}
              <SimpleButton onPress={handleSubmit} addStylesButton={styles.submitBtn}>
                <Text style={styles.submitBtnText}>Registrar</Text>
              </SimpleButton>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    width: "100%",
    height: Math.max(screenHeight * 0.2, 140),
    position: "relative",
  },
  blob1Container: {
    position: "absolute",
    left: -screenWidth * 0.3,
    top: -screenHeight * 0.08,
    zIndex: 0,
    transform: [{ rotate: "2.6deg" }, { scaleX: 2 }, { scaleY: 2 }],
  },
  blob1: {
    opacity: 1,
  },
  blob2Container: {
    position: "absolute",
    right: -200,
    top: 30,
    zIndex: 0,
    transform: [{ rotate: "-40.41deg" }, { scaleX: 3 }, { scaleY: 2 }],
  },
  blob2: {
    opacity: 1,
  },
  formCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: Math.max(screenWidth * 0.05, 20),
    paddingVertical: Math.max(screenHeight * 0.03, 24),
    marginTop: -Math.max(screenHeight * 0.06, 40),
    position: "relative",
    zIndex: 1,
    marginBottom: Math.max(screenHeight * 0.05, 30),
  },
  title: {
    fontSize: Math.min(screenWidth * 0.065, 26),
    fontWeight: "700",
    color: "#000000",
    marginBottom: Math.max(screenHeight * 0.025, 20),
    lineHeight: Math.min(screenWidth * 0.08, 32),
  },
  form: {
    gap: Math.max(screenHeight * 0.02, 14),
  },
  fieldContainer: {
    gap: Math.max(screenHeight * 0.008, 6),
  },
  label: {
    fontSize: Math.min(screenWidth * 0.028, 11),
    fontWeight: "500",
    color: "#000000",
    lineHeight: Math.min(screenWidth * 0.045, 18),
  },
  input: {
    width: "100%",
    paddingVertical: Math.max(screenHeight * 0.018, 14),
    paddingHorizontal: Math.max(screenWidth * 0.05, 20),
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
    fontSize: Math.min(screenWidth * 0.035, 14),
    fontWeight: "400",
    color: "#222222ff",
    elevation: 1,
  },
  submitBtn: {
    width: "100%",
    backgroundColor: "#000000",
    marginTop: Math.max(screenHeight * 0.015, 12),
  },
  submitBtnText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: Math.min(screenWidth * 0.04, 16),
    lineHeight: Math.min(screenWidth * 0.06, 24),
  },
});
