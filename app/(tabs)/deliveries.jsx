import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import {
  Calendar as CalendarIcon,
  ChevronDown,
  Clock,
  EllipsisVertical,
  MoreHorizontal,
  Plus,
  Truck,
  Users
} from 'lucide-react-native';
import { useState } from 'react';
import {
  Alert,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import KeyboardAwareWrapper from '@/components/KeyboardAwareWrapper';


const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Deliveries() {
  const [activeTab, setActiveTab] = useState('programar'); // programar, entregar, clientes
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedClient, setSelectedClient] = useState('');
  const [cantidad, setCantidad] = useState('0');
  const [unidad, setUnidad] = useState('Litros');
  const [hora, setHora] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [direccion, setDireccion] = useState('');
  const [lecheroAsignado, setLecheroAsignado] = useState('Juan Pérez');
  const [notas, setNotas] = useState('');
  
  // Estados para controlar la visibilidad de los pickers
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Datos de ejemplo
  const deliveriesData = [
    {
      id: 1,
      cliente: 'María González',
      cantidad: '5 litros',
      hora: '08:30 AM',
      direccion: 'Calle Principal 123',
      estado: 'Pendiente',
      estadoColor: '#F59E0B'
    },
    {
      id: 2,
      cliente: 'Carlos Ruiz',
      cantidad: '3 litros',
      hora: '10:00 AM',
      direccion: 'Av. Central 456',
      estado: 'Completado',
      estadoColor: '#10B981'
    }
  ];

  const Tab = ({ id, title, icon: Icon, isSelected, onPress }) => (
    <TouchableOpacity
      style={[styles.tab, isSelected && styles.tabSelected]}
      onPress={onPress}
    >
      <View style={styles.tabContent}>
        {Icon && <Icon size={16} color={isSelected ? '#3B82F6' : '#6B7280'} />}
        <Text style={[styles.tabText, isSelected && styles.tabTextSelected]}>
          {title}
        </Text>
      </View>
      {isSelected && <View style={styles.tabIndicator} />}
    </TouchableOpacity>
  );

  const Dropdown = ({ value, placeholder, onPress }) => (
    <TouchableOpacity style={styles.dropdownWrapper} onPress={onPress}>
      <Text style={[styles.dropdownText, !value && styles.placeholderText]}>
        {value || placeholder}
      </Text>
      <ChevronDown size={20} color="#6B7280" />
    </TouchableOpacity>
  );

  const InputField = ({ label, value, onChangeText, placeholder, rightIcon: RightIcon, onRightPress }) => (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
        />
        {RightIcon && (
          <TouchableOpacity onPress={onRightPress} style={styles.inputIcon}>
            <RightIcon size={20} color="#6B7280" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const DeliveryCard = ({ delivery }) => (
    <View style={styles.deliveryCard}>
      <View style={styles.deliveryHeader}>
        <View style={styles.deliveryInfo}>
          <Text style={styles.deliveryClient}>{delivery.cliente}</Text>
          <Text style={styles.deliveryDetails}>{delivery.cantidad} • {delivery.hora}</Text>
          <Text style={styles.deliveryAddress}>{delivery.direccion}</Text>
        </View>
        <View style={styles.deliveryActions}>
          <View style={[styles.statusBadge, { backgroundColor: delivery.estadoColor }]}>
            <Text style={styles.statusText}>{delivery.estado}</Text>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <MoreHorizontal size={16} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const handleClientSelect = () => {
    Alert.alert("Seleccionar Cliente", "Funcionalidad de selección de cliente en desarrollo");
  };

  const handleTimeSelect = () => {
    if (Platform.OS === 'android') {
      DateTimePickerAndroid.open({
        value: selectedTime,
        onChange: onTimeChange,
        mode: 'time',
        is24Hour: true,
      });
    } else {
      setShowTimePicker(true);
    }
  };

  const handleDateSelect = () => {
    if (Platform.OS === 'android') {
      DateTimePickerAndroid.open({
        value: selectedDate,
        onChange: onDateChange,
        mode: 'date',
      });
    } else {
      setShowDatePicker(true);
    }
  };

  const onDateChange = (event, date) => {
    const currentDate = date || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
  };

  const onTimeChange = (event, time) => {
    const currentTime = time || selectedTime;
    setShowTimePicker(false);
    setSelectedTime(currentTime);
    
    // Formatear la hora para mostrar
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    setHora(`${hours}:${minutes}`);
  };

  const handleLecheroSelect = () => {
    Alert.alert("Seleccionar Lechero", "Funcionalidad de selección de lechero en desarrollo");
  };

  const handleProgramarEntrega = () => {
    Alert.alert("Entrega Programada", "La entrega ha sido programada exitosamente");
  };

  const renderProgramar = () => (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      {/* Date Selection Section */}
      <View style={styles.calendarSection}>
        <View style={styles.calendarHeader}>
          <Text style={styles.calendarTitle}>Seleccionar Fecha</Text>
        </View>

        <TouchableOpacity style={styles.dateButton} onPress={handleDateSelect}>
          <CalendarIcon size={20} color="#3B82F6" />
          <Text style={styles.dateButtonText}>
            {selectedDate.toLocaleDateString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Text>
          <ChevronDown size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>

      {/* Nueva Entrega Form */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nueva Entrega</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Cliente</Text>
          <Dropdown
            value={selectedClient}
            placeholder="Seleccionar cliente"
            onPress={handleClientSelect}
          />
        </View>

        <View style={styles.quantityRow}>
          <View style={styles.quantityInput}>
            <Text style={styles.inputLabel}>Cantidad</Text>
            <TextInput
              style={styles.quantityField}
              value={cantidad}
              onChangeText={setCantidad}
              placeholder="0"
              placeholderTextColor="#9CA3AF"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.unitInput}>
            <Text style={styles.inputLabel}>Unidad</Text>
            <Dropdown
              value={unidad}
              placeholder="Litros"
              onPress={() => Alert.alert("Unidad", "Seleccionar unidad")}
            />
          </View>
        </View>

        <InputField
          label="Hora"
          value={hora || 'Seleccionar hora'}
          onChangeText={setHora}
          placeholder="--:-- --"
          rightIcon={Clock}
          onRightPress={handleTimeSelect}
        />

        <InputField
          label="Dirección"
          value={direccion}
          onChangeText={setDireccion}
          placeholder="Dirección de entrega"
        />

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Lechero Asignado</Text>
          <Dropdown
            value={lecheroAsignado}
            placeholder="Seleccionar lechero"
            onPress={handleLecheroSelect}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Notas</Text>
          <View style={styles.notesWrapper}>
            <TextInput
              style={styles.notesInput}
              value={notas}
              onChangeText={setNotas}
              placeholder="Observaciones adicionales"
              placeholderTextColor="#9CA3AF"
              multiline
              numberOfLines={3}
              textAlignVertical="top"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.programButton} onPress={handleProgramarEntrega}>
          <Text style={styles.programButtonText}>Programar Entrega</Text>
        </TouchableOpacity>
      </View>

      {/* Entregas del día */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Entregas del {selectedDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}
        </Text>
        <View style={styles.deliveriesContainer}>
          {deliveriesData.map((delivery) => (
            <DeliveryCard key={delivery.id} delivery={delivery} />
          ))}
        </View>
      </View>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );

  const renderEntregar = () => (
    <View style={styles.emptyState}>
      <Truck size={48} color="#9CA3AF" />
      <Text style={styles.emptyTitle}>Entregas Activas</Text>
      <Text style={styles.emptyText}>Las entregas en curso aparecerán aquí</Text>
    </View>
  );

  const renderClientes = () => (
    <View style={styles.emptyState}>
      <Users size={48} color="#9CA3AF" />
      <Text style={styles.emptyTitle}>Gestión de Clientes</Text>
      <Text style={styles.emptyText}>Lista de clientes y direcciones de entrega</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <KeyboardAwareWrapper keyboardVerticalOffset={100}>

        {/* Decorative Background Elements */}
        <View style={styles.backgroundContainer}>
          <Svg
            style={styles.blob1}
            viewBox="0 0 220 652"
            width={screenWidth * 0.8}
            height={screenHeight * 0.4}
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M135.567 165.28C198.708 104.625 244.335 -2.03809 331.846 0.561042C417.299 3.09907 444.691 120.968 509.756 176.393C582.479 238.342 718.835 248.925 734.109 343.226C749.407 437.67 643.249 506.96 573.999 573.017C524.535 620.2 463.564 652.135 396.482 665.282C342.269 675.906 292.183 637.63 236.959 639.071C162.029 641.025 76.1528 725.34 20.5643 675.085C-34.0802 625.683 38.9803 533.96 39.2092 460.293C39.3821 404.674 4.4645 351.341 21.7349 298.465C40.3198 241.564 92.3933 206.754 135.567 165.28Z"
              fill="black"
            />
          </Svg>
          
        </View>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Entregas y Distribución</Text>
          <TouchableOpacity style={styles.menuButton}>
            <EllipsisVertical size={24} color="#111827" />
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <Tab
            id="programar"
            title="Programar"
            icon={CalendarIcon}
            isSelected={activeTab === 'programar'}
            onPress={() => setActiveTab('programar')}
          />
          <Tab
            id="entregar"
            title="Entregar"
            icon={Truck}
            isSelected={activeTab === 'entregar'}
            onPress={() => setActiveTab('entregar')}
          />
          <Tab
            id="clientes"
            title="Clientes"
            icon={Users}
            isSelected={activeTab === 'clientes'}
            onPress={() => setActiveTab('clientes')}
          />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {activeTab === 'programar' && renderProgramar()}
          {activeTab === 'entregar' && renderEntregar()}
          {activeTab === 'clientes' && renderClientes()}
        </View>

        {/* Add Button */}
        {activeTab !== 'programar' && (
          <TouchableOpacity style={styles.addButton}>
            <Plus size={24} color="#FFFFFF" />
          </TouchableOpacity>
        )}

        {/* Date Time Pickers - Solo para iOS */}
        {Platform.OS === 'ios' && showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
        
        {Platform.OS === 'ios' && showTimePicker && (
          <DateTimePicker
            testID="timeTimePicker"
            value={selectedTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onTimeChange}
          />
        )}
      </KeyboardAwareWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  blob1: {
    position: "absolute",
    right: -50,
    top: -50,
    transform: [{ rotate: "-50deg" }, { scaleX: 2.4 }, { scaleY: 2 }],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  menuButton: {
    padding: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    zIndex: 10,
  },
  tab: {
    flex: 1,
    position: 'relative',
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginLeft: 6,
  },
  tabTextSelected: {
    color: '#3B82F6',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#3B82F6',
  },
  content: {
    flex: 1,
    zIndex: 5,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  calendarSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  calendarHeader: {
    marginBottom: 16,
  },
  calendarTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  dateButton: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 16,
    gap: 12,
  },
  dateButtonText: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
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
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 6,
  },
  inputWrapper: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    minHeight: 44,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
  },
  inputIcon: {
    padding: 4,
  },
  dropdownWrapper: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    minHeight: 44,
  },
  dropdownText: {
    fontSize: 14,
    color: '#111827',
  },
  placeholderText: {
    color: '#9CA3AF',
  },
  quantityRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  quantityInput: {
    flex: 1,
  },
  unitInput: {
    flex: 1,
  },
  quantityField: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#111827',
  },
  notesWrapper: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
  },
  notesInput: {
    fontSize: 14,
    color: '#111827',
    minHeight: 60,
    textAlignVertical: 'top',
  },
  programButton: {
    backgroundColor: '#60A5FA',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  programButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  deliveriesContainer: {
    gap: 12,
  },
  deliveryCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  deliveryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  deliveryInfo: {
    flex: 1,
  },
  deliveryClient: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  deliveryDetails: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
  },
  deliveryAddress: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  deliveryActions: {
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
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#60A5FA',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomSpacing: {
    height: 40,
  },
});