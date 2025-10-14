import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CompanyDashboard() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9FAFB' }}>
      <Stack.Screen 
        options={{ 
          headerShown: false 
        }} 
      />
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 20
      }}>
        <Text style={{ 
          fontSize: 24, 
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: 10
        }}>
          Dashboard Empresa
        </Text>
        <Text style={{ 
          fontSize: 16, 
          color: '#6B7280',
          textAlign: 'center'
        }}>
          Panel de control para empresas
        </Text>
      </View>
    </SafeAreaView>
  );
}
