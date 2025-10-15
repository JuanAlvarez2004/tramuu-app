import { Stack } from 'expo-router';
import {
  Bell,
  Lock,
  Mail,
  MapPin,
  MoreHorizontal,
  Phone,
  Plus,
  Settings,
  Shield,
  Trash2,
  User,
  Users
} from 'lucide-react-native';
import { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import KeyboardAwareWrapper from '../KeyboardAwareWrapper';
import { InputField, ProfilePhoto, SettingItem, Tab, ToggleSwitch } from '../ui';

export default function ConfigurationCompany() {
  const [activeTab, setActiveTab] = useState('perfil'); // perfil, lecheros, configuracion
  const [companyName, setCompanyName] = useState('Finca Santa María');
  const [email, setEmail] = useState('admin@fincasantamaria.com');
  const [phone, setPhone] = useState('+57 123 456 7890');
  const [address, setAddress] = useState('Vereda La Esperanza, Km 5');
  const [adminName, setAdminName] = useState('María González');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Datos de ejemplo para lecheros
  const employees = [
    {
      id: 1,
      name: 'Carlos Méndez',
      role: 'Admin',
      email: 'carlos@finca.com',
      avatar: null,
      isActive: true
    },
    {
      id: 2,
      name: 'José Rivera',
      role: 'Lechero',
      email: 'jose@finca.com',
      avatar: null,
      isActive: true
    }
  ];

  const EmployeeCard = ({ employee }) => (
    <View style={styles.employeeCard}>
      <View style={styles.employeeInfo}>
        <View style={styles.employeeAvatar}>
          {employee.avatar ? (
            <Image source={{ uri: employee.avatar }} style={styles.avatarImage} />
          ) : (
            <User size={24} color="#9CA3AF" />
          )}
        </View>
        <View style={styles.employeeDetails}>
          <Text style={styles.employeeName}>{employee.name}</Text>
          <Text style={styles.employeeRole}>{employee.role}</Text>
          <Text style={styles.employeeEmail}>{employee.email}</Text>
        </View>
      </View>
      <View style={styles.employeeActions}>
        <View style={[styles.statusBadge, { backgroundColor: employee.isActive ? '#10B981' : '#F59E0B' }]}>
          <Text style={styles.statusText}>{employee.isActive ? 'Activo' : 'Inactivo'}</Text>
        </View>
        <TouchableOpacity style={styles.moreButton} onPress={() => handleEmployeeAction(employee.id)}>
          <MoreHorizontal size={16} color="#6B7280" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleEmployeeAction = (employeeId) => {
    Alert.alert(
      "Acciones del Empleado",
      "Selecciona una acción",
      [
        { text: "Editar", onPress: () => console.log("Edit employee", employeeId) },
        { text: "Desactivar", onPress: () => console.log("Deactivate employee", employeeId) },
        { text: "Eliminar", style: "destructive", onPress: () => console.log("Delete employee", employeeId) },
        { text: "Cancelar", style: "cancel" }
      ]
    );
  };

  const handleAddEmployee = () => {
    Alert.alert("Agregar Lechero", "Funcionalidad para agregar nuevo lechero");
  };

  const handleChangePhoto = () => {
    Alert.alert("Cambiar Foto", "Funcionalidad para cambiar foto de perfil");
  };

  const handleSaveProfile = () => {
    Alert.alert("Perfil Guardado", "Los cambios han sido guardados exitosamente");
  };

  const renderPerfil = () => (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      {/* Foto de Perfil */}
      <View style={styles.card}>
        <ProfilePhoto
          name={adminName}
          role="Administrador"
          company={companyName}
          onChangePhoto={handleChangePhoto}
        />
      </View>

      {/* Información de la Empresa */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Información de la Empresa</Text>
        
        <InputField
          label="Nombre de la Empresa"
          value={companyName}
          onChangeText={setCompanyName}
          placeholder="Nombre de la finca"
          icon={User}
        />

        <InputField
          label="Email Corporativo"
          value={email}
          onChangeText={setEmail}
          placeholder="email@empresa.com"
          icon={Mail}
        />

        <InputField
          label="Teléfono"
          value={phone}
          onChangeText={setPhone}
          placeholder="+57 123 456 7890"
          icon={Phone}
        />

        <InputField
          label="Dirección"
          value={address}
          onChangeText={setAddress}
          placeholder="Dirección de la finca"
          icon={MapPin}
        />
      </View>

      {/* Información Personal del Administrador */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Información Personal</Text>
        
        <InputField
          label="Nombre Completo"
          value={adminName}
          onChangeText={setAdminName}
          placeholder="Nombre del administrador"
          icon={User}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
        <Text style={styles.saveButtonText}>Guardar Cambios</Text>
      </TouchableOpacity>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );

  const renderLecheros = () => (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      {/* Header con botón agregar */}
      <View style={styles.employeesHeader}>
        <View>
          <Text style={styles.employeesTitle}>Usuarios / Lecheros</Text>
          <Text style={styles.employeesSubtitle}>Gestiona los usuarios de tu finca</Text>
        </View>
        <TouchableOpacity style={styles.addEmployeeButton} onPress={handleAddEmployee}>
          <Plus size={16} color="#FFFFFF" />
          <Text style={styles.addEmployeeText}>Invitar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de empleados */}
      <View style={styles.card}>
        <View style={styles.employeesContainer}>
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </View>
      </View>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );

  const renderConfiguracion = () => (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      {/* Configuración de la Aplicación */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Configuración de la Aplicación</Text>
        
        <SettingItem
          title="Notificaciones"
          subtitle="Recibe alertas importantes"
          icon={Bell}
          onPress={() => setNotifications(!notifications)}
          hasChevron={false}
          rightComponent={
            <ToggleSwitch
              isActive={notifications}
              onPress={() => setNotifications(!notifications)}
            />
          }
        />

        <SettingItem
          title="Modo Oscuro"
          subtitle="Cambia la apariencia de la app"
          icon={Settings}
          onPress={() => setDarkMode(!darkMode)}
          hasChevron={false}
          rightComponent={
            <ToggleSwitch
              isActive={darkMode}
              onPress={() => setDarkMode(!darkMode)}
            />
          }
        />
      </View>

      {/* Seguridad */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Seguridad</Text>
        
        <SettingItem
          title="Cambiar Contraseña"
          subtitle="Actualiza tu contraseña"
          icon={Lock}
          onPress={() => Alert.alert("Cambiar Contraseña", "Funcionalidad en desarrollo")}
        />

        <SettingItem
          title="Autenticación de Dos Factores"
          subtitle="Añade una capa extra de seguridad"
          icon={Shield}
          onPress={() => Alert.alert("2FA", "Funcionalidad en desarrollo")}
        />
      </View>

      {/* Zona de Peligro */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Zona de Peligro</Text>
        
        <SettingItem
          title="Eliminar Cuenta"
          subtitle="Eliminar permanentemente tu cuenta"
          icon={Trash2}
          onPress={() => Alert.alert("Eliminar Cuenta", "Esta acción no se puede deshacer")}
        />
      </View>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <Stack.Screen options={{ title: "Configuración" }} />
      <KeyboardAwareWrapper keyboardVerticalOffset={100}>       

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <Tab
            id="perfil"
            title="Perfil"
            icon={User}
            isSelected={activeTab === 'perfil'}
            onPress={() => setActiveTab('perfil')}
          />
          <Tab
            id="lecheros"
            title="Lecheros"
            icon={Users}
            isSelected={activeTab === 'lecheros'}
            onPress={() => setActiveTab('lecheros')}
          />
          <Tab
            id="configuracion"
            title="Config"
            icon={Settings}
            isSelected={activeTab === 'configuracion'}
            onPress={() => setActiveTab('configuracion')}
          />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {activeTab === 'perfil' && renderPerfil()}
          {activeTab === 'lecheros' && renderLecheros()}
          {activeTab === 'configuracion' && renderConfiguracion()}
        </View>
      </KeyboardAwareWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    zIndex: 10,
  },
  content: {
    flex: 1,
    zIndex: 5,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    marginBottom: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#60A5FA',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: 20,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  employeesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  employeesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  employeesSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  addEmployeeButton: {
    backgroundColor: '#60A5FA',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  addEmployeeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  employeesContainer: {
    gap: 16,
  },
  employeeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  employeeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  employeeAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  employeeDetails: {
    flex: 1,
  },
  employeeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  employeeRole: {
    fontSize: 12,
    color: '#60A5FA',
    fontWeight: '500',
    marginBottom: 2,
  },
  employeeEmail: {
    fontSize: 12,
    color: '#6B7280',
  },
  employeeActions: {
    alignItems: 'flex-end',
    gap: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  moreButton: {
    padding: 4,
  },
  bottomSpacing: {
    height: 40,
  },
});