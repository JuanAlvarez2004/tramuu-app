import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Quality() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9FAFB' }}>
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
          Calidad
        </Text>
        <Text style={{ 
          fontSize: 16, 
          color: '#6B7280',
          textAlign: 'center'
        }}>
          Pantalla de control de calidad en desarrollo
        </Text>
      </View>
    </SafeAreaView>
  );
}