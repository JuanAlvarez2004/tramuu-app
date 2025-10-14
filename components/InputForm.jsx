import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputForm({ 
  updateFormData, 
  formData, 
  label, 
  placeholder, 
  secureTextEntry = false,
}) {
  
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#64748B"
        value={formData[label]}
        onChangeText={(value) => updateFormData(label, value)}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fieldContainer: {
    gap: 2,
  },
  label: {
    fontSize: 11,
    fontWeight: "500",
    color: "#000",
    lineHeight: 18,
  },
  input: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
    fontSize: 14,
    fontWeight: "400",
    color: "#222222ff",
    elevation: 1,
  },
})