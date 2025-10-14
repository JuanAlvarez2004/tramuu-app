import { Tabs } from 'expo-router';
import { House, Milk, NotepadText, Package, Truck } from 'lucide-react-native';

export default function TabLayout() {
  const { width: screenWidth } = require('react-native').Dimensions.get('window');

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopLeftRadius: Math.max(20, screenWidth * 0.04),
          borderTopRightRadius: Math.max(20, screenWidth * 0.04),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.05,
          shadowRadius: 16,
          elevation: 16,
          paddingHorizontal: Math.max(8, screenWidth * 0.02),
          paddingTop: Math.max(8, screenWidth * 0.01),
          paddingBottom: Math.max(12, screenWidth * 0.015),
          height: 80,
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#D1D1D1',
        tabBarLabelStyle: {
          fontSize: Math.max(12, screenWidth * 0.028),
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <House color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="management"
        options={{
          title: 'Gestión',
          tabBarIcon: ({ color, focused }) => (
            <NotepadText color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="quality"
        options={{
          title: 'Calidad',
          tabBarIcon: ({ color, focused }) => (
            <Milk color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: 'Inventario',
          tabBarIcon: ({ color, focused }) => (
            <Package color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="deliveries"
        options={{
          title: 'Entregas',
          tabBarIcon: ({ color, focused }) => (
            <Truck color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}