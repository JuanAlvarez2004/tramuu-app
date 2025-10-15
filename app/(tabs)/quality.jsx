
import {
  AlertTriangle,
  Bell,
  Camera,
  ChevronDown,
  EllipsisVertical,
  FileText,
  History
} from 'lucide-react-native';
import { useState } from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Quality() {
  const [activeTab, setActiveTab] = useState('pruebas'); // pruebas, historial, alertas
  const [selectedSample, setSelectedSample] = useState('');
  const [selectedCows, setSelectedCows] = useState('');
  const [grasa, setGrasa] = useState('3.25');
  const [proteina, setProteina] = useState('3.10');
  const [lactosa, setLactosa] = useState('4.80');
  const [ufc, setUfc] = useState('50000');
  const [acidez, setAcidez] = useState('6.8');
  const [observaciones, setObservaciones] = useState('');

  const Tab = ({ id, title, icon: Icon, isSelected, onPress, hasNotification }) => (
    <TouchableOpacity
      style={[styles.tab, isSelected && styles.tabSelected]}
      onPress={onPress}
    >
      <View style={styles.tabContent}>
        {Icon && <Icon size={16} color={isSelected ? '#3B82F6' : '#6B7280'} />}
        <Text style={[styles.tabText, isSelected && styles.tabTextSelected]}>
          {title}
        </Text>
        {hasNotification && (
          <View style={styles.notificationDot} />
        )}
      </View>
      {isSelected && <View style={styles.tabIndicator} />}
    </TouchableOpacity>
  );

  const InputField = ({ 
    label, 
    value, 
    onChangeText, 
    placeholder, 
    range,
    suffix,
    maxValue,
    keyboardType = 'default'
  }) => (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          keyboardType={keyboardType}
        />
        {suffix && (
          <Text style={styles.inputSuffix}>{suffix}</Text>
        )}
      </View>
      {range && (
        <Text style={styles.rangeText}>Rango: {range}</Text>
      )}
      {maxValue && (
        <Text style={styles.rangeText}>Max: {maxValue}</Text>
      )}
    </View>
  );

  const Dropdown = ({ label, value, placeholder, onPress, isOptional = false }) => (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>
        {label} {isOptional && <Text style={styles.optionalText}>(Opcional)</Text>}
      </Text>
      <TouchableOpacity style={styles.dropdownWrapper} onPress={onPress}>
        <Text style={[styles.dropdownText, !value && styles.placeholderText]}>
          {value || placeholder}
        </Text>
        <ChevronDown size={20} color="#6B7280" />
      </TouchableOpacity>
    </View>
  );

  const handleSampleSelect = () => {
    Alert.alert(
      "Seleccionar Muestra",
      "Funcionalidad de selección de muestra en desarrollo"
    );
  };

  const handleCowSelect = () => {
    Alert.alert(
      "Seleccionar Vacas",
      "Funcionalidad de selección de vacas en desarrollo"
    );
  };

  const handleCapturePhoto = () => {
    Alert.alert(
      "Capturar Foto",
      "Funcionalidad de cámara en desarrollo"
    );
  };

  const handleSaveDraft = () => {
    Alert.alert(
      "Borrador Guardado",
      "La prueba ha sido guardada como borrador"
    );
  };

  const handleRegisterTest = () => {
    Alert.alert(
      "Prueba Registrada",
      "La prueba de calidad ha sido registrada exitosamente"
    );
  };

  const renderPruebas = () => (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      {/* Nueva Prueba Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Nueva Prueba de Calidad</Text>
          <View style={styles.idBadge}>
            <Text style={styles.idText}>ID: ML-2024-001</Text>
          </View>
        </View>

        {/* Sample Selection */}
        <Dropdown
          label="Muestra (ID Bodega)"
          value={selectedSample}
          placeholder="Seleccionar muestra..."
          onPress={handleSampleSelect}
        />

        {/* Cows Selection */}
        <Dropdown
          label="Vacas"
          value={selectedCows}
          placeholder="Todas las vacas"
          onPress={handleCowSelect}
          isOptional
        />
      </View>

      {/* Quality Parameters Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Parámetros de Calidad</Text>
        
        <View style={styles.parametersGrid}>
          <View style={styles.parameterRow}>
            <InputField
              label="Grasa %"
              value={grasa}
              onChangeText={setGrasa}
              placeholder="3.25"
              range="3.0-4.5%"
              keyboardType="decimal-pad"
            />
            <InputField
              label="Proteína %"
              value={proteina}
              onChangeText={setProteina}
              placeholder="3.10"
              range="2.8-3.5%"
              keyboardType="decimal-pad"
            />
          </View>
          
          <View style={styles.parameterRow}>
            <InputField
              label="Lactosa %"
              value={lactosa}
              onChangeText={setLactosa}
              placeholder="4.80"
              range="4.5-5.0%"
              keyboardType="decimal-pad"
            />
            <InputField
              label="UFC"
              value={ufc}
              onChangeText={setUfc}
              placeholder="50000"
              maxValue="100,000"
              keyboardType="numeric"
            />
          </View>
        </View>

        <InputField
          label="Acidez"
          value={acidez}
          onChangeText={setAcidez}
          placeholder="6.8"
          range="6.5-7.2 pH"
          keyboardType="decimal-pad"
        />
      </View>

      {/* Photo Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Foto del Ensayo</Text>
        <TouchableOpacity style={styles.photoContainer} onPress={handleCapturePhoto}>
          <View style={styles.photoPlaceholder}>
            <Camera size={40} color="#9CA3AF" />
            <Text style={styles.photoText}>Tomar foto del ensayo</Text>
            <View style={styles.captureButton}>
              <Camera size={16} color="#FFFFFF" />
              <Text style={styles.captureButtonText}>Capturar</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Observations */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Observaciones</Text>
        <View style={styles.observationsWrapper}>
          <TextInput
            style={styles.observationsInput}
            value={observaciones}
            onChangeText={setObservaciones}
            placeholder="Agregar observaciones adicionales..."
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.draftButton} onPress={handleSaveDraft}>
          <Text style={styles.draftButtonText}>Guardar Borrador</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.registerButton} onPress={handleRegisterTest}>
          <Text style={styles.registerButtonText}>Registrar Prueba</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );

  const renderHistorial = () => (
    <View style={styles.emptyState}>
      <History size={48} color="#9CA3AF" />
      <Text style={styles.emptyTitle}>Historial de Pruebas</Text>
      <Text style={styles.emptyText}>Las pruebas de calidad anteriores aparecerán aquí</Text>
    </View>
  );

  const renderAlertas = () => (
    <View style={styles.emptyState}>
      <AlertTriangle size={48} color="#F59E0B" />
      <Text style={styles.emptyTitle}>Alertas de Calidad</Text>
      <Text style={styles.emptyText}>No hay alertas activas en este momento</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
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
        <Svg
          style={styles.blob2}
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
        <Text style={styles.headerTitle}>Calidad de Leche</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={20} color="#111827" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <EllipsisVertical size={24} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <Tab
          id="pruebas"
          title="Pruebas"
          icon={FileText}
          isSelected={activeTab === 'pruebas'}
          onPress={() => setActiveTab('pruebas')}
        />
        <Tab
          id="historial"
          title="Historial"
          icon={History}
          isSelected={activeTab === 'historial'}
          onPress={() => setActiveTab('historial')}
        />
        <Tab
          id="alertas"
          title="Alertas"
          icon={AlertTriangle}
          isSelected={activeTab === 'alertas'}
          onPress={() => setActiveTab('alertas')}
          hasNotification
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {activeTab === 'pruebas' && renderPruebas()}
        {activeTab === 'historial' && renderHistorial()}
        {activeTab === 'alertas' && renderAlertas()}
      </View>
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
    right: -130,
    top: 300,
    transform: [{ rotate: "-15.557deg" }, { scaleX: 1 }, { scaleY: 2 }],
  },
  blob2: {
    position: "absolute",
    left: -100,
    bottom: -50,
    transform: [{ rotate: "90deg" }, { scaleX: 1.3 }, { scaleY: 1.3 }],
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
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  notificationButton: {
    position: 'relative',
    padding: 4,
  },
  notificationBadge: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
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
    paddingHorizontal: 12,
    position: 'relative',
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
  notificationDot: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EF4444',
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
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  idBadge: {
    backgroundColor: '#EBF8FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  idText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#3B82F6',
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
  optionalText: {
    color: '#9CA3AF',
    fontWeight: '400',
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
  inputSuffix: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginLeft: 8,
  },
  rangeText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
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
  parametersGrid: {
    gap: 0,
  },
  parameterRow: {
    flexDirection: 'row',
    gap: 12,
  },
  photoContainer: {
    marginTop: 8,
  },
  photoPlaceholder: {
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
  },
  photoText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
    marginBottom: 12,
  },
  captureButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#60A5FA',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  captureButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 6,
  },
  observationsWrapper: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
    marginTop: 8,
  },
  observationsInput: {
    fontSize: 14,
    color: '#111827',
    minHeight: 80,
    textAlignVertical: 'top',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  draftButton: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  draftButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  registerButton: {
    flex: 1,
    backgroundColor: '#60A5FA',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  registerButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
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
