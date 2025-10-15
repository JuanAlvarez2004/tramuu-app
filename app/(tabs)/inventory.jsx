import {
  Calendar,
  ChevronDown,
  Clock,
  EllipsisVertical,
  Package,
  Thermometer,
  TrendingUp
} from 'lucide-react-native';
import { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Inventory() {
  const [activeTab, setActiveTab] = useState('estado'); // estado, movimientos, vencimientos

  // Datos de ejemplo para el inventario
  const capacityData = {
    total: 24000,
    frios: 15240,
    calientes: 8760
  };

  const lotesActivos = [
    {
      id: '#LT-2024-001',
      cantidad: '2,500 L',
      ingreso: '15/01/2024',
      diasAtras: 3,
      estado: 'Frío',
      estadoColor: '#10B981'
    },
    {
      id: '#LT-2024-002',
      cantidad: '1,800 L',
      ingreso: '14/01/2024',
      diasAtras: 4,
      estado: 'Proceso',
      estadoColor: '#F59E0B'
    },
    {
      id: '#LT-2024-003',
      cantidad: '3,200 L',
      ingreso: '12/01/2024',
      diasAtras: 6,
      estado: 'Frío',
      estadoColor: '#10B981'
    }
  ];

  const categoriesData = [
    { name: 'Leche Fresca', cantidad: '15,240 L', percentage: 63.5, color: '#3B82F6' },
    { name: 'En Proceso', cantidad: '5,680 L', percentage: 23.7, color: '#F59E0B' },
    { name: 'Almacenada', cantidad: '3,080 L', percentage: 12.8, color: '#10B981' }
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

  const StatCard = ({ label, value, unit, color, icon: Icon }) => (
    <View style={styles.statCard}>
      <View style={styles.statHeader}>
        {Icon && <Icon size={20} color={color} />}
        <Text style={styles.statLabel}>{label}</Text>
      </View>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statUnit}>{unit}</Text>
    </View>
  );

  const LoteCard = ({ lote }) => (
    <View style={styles.loteCard}>
      <View style={styles.loteHeader}>
        <View>
          <Text style={styles.loteTitle}>Lote</Text>
          <Text style={styles.loteId}>{lote.id}</Text>
          <Text style={styles.loteCantidad}>Cantidad: {lote.cantidad}</Text>
        </View>
        <View style={styles.loteRight}>
          <View style={[styles.estadoBadge, { backgroundColor: lote.estadoColor }]}>
            <Text style={styles.estadoText}>{lote.estado}</Text>
          </View>
          <View style={styles.loteInfo}>
            <Text style={styles.ingresoLabel}>Ingreso:</Text>
            <Text style={styles.ingresoDate}>{lote.ingreso}</Text>
          </View>
        </View>
      </View>
      <View style={styles.loteFooter}>
        <View style={styles.timeInfo}>
          <Clock size={14} color="#6B7280" />
          <Text style={styles.timeText}>Hace {lote.diasAtras} días</Text>
        </View>
      </View>
    </View>
  );

  const CategoryBar = ({ category }) => (
    <View style={styles.categoryItem}>
      <View style={styles.categoryHeader}>
        <View style={[styles.categoryIndicator, { backgroundColor: category.color }]} />
        <Text style={styles.categoryName}>{category.name}</Text>
        <Text style={styles.categoryPercentage}>{category.percentage}%</Text>
      </View>
      <View style={styles.categoryBar}>
        <View 
          style={[
            styles.categoryProgress, 
            { 
              backgroundColor: category.color, 
              width: `${category.percentage}%` 
            }
          ]} 
        />
      </View>
      <Text style={styles.categoryCantidad}>{category.cantidad}</Text>
    </View>
  );

  const renderEstadoBodega = () => (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      {/* Capacity Stats */}
      <View style={styles.capacitySection}>
        <Text style={styles.sectionTitle}>Capacidad Total</Text>
        <View style={styles.statsContainer}>
          <StatCard
            label="Litros Fríos"
            value={capacityData.frios.toLocaleString()}
            unit="Litros"
            color="#3B82F6"
            icon={Thermometer}
          />
          <StatCard
            label="Litros Calientes"
            value={capacityData.calientes.toLocaleString()}
            unit="Litros"
            color="#EF4444"
            icon={TrendingUp}
          />
        </View>
      </View>

      {/* Stock por Categoría */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Stock por Categoría</Text>
        <View style={styles.categoriesContainer}>
          {categoriesData.map((category, index) => (
            <CategoryBar key={index} category={category} />
          ))}
        </View>
      </View>

      {/* Lotes Activos */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Lotes Activos</Text>
          <Text style={styles.lotesCount}>{lotesActivos.length} lotes</Text>
        </View>
        
        <View style={styles.lotesContainer}>
          {lotesActivos.map((lote, index) => (
            <LoteCard key={index} lote={lote} />
          ))}
        </View>

        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>Ver todos los lotes</Text>
          <ChevronDown size={16} color="#3B82F6" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );

  const renderMovimientos = () => (
    <View style={styles.emptyState}>
      <TrendingUp size={48} color="#9CA3AF" />
      <Text style={styles.emptyTitle}>Movimientos de Inventario</Text>
      <Text style={styles.emptyText}>Los movimientos de entrada y salida aparecerán aquí</Text>
    </View>
  );

  const renderVencimientos = () => (
    <View style={styles.emptyState}>
      <Calendar size={48} color="#F59E0B" />
      <Text style={styles.emptyTitle}>Próximos Vencimientos</Text>
      <Text style={styles.emptyText}>No hay productos próximos a vencer</Text>
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
        <Text style={styles.headerTitle}>Inventario</Text>
        <TouchableOpacity style={styles.menuButton}>
          <EllipsisVertical size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <Tab
          id="estado"
          title="Estado Bodega"
          icon={Package}
          isSelected={activeTab === 'estado'}
          onPress={() => setActiveTab('estado')}
        />
        <Tab
          id="movimientos"
          title="Movimientos"
          icon={TrendingUp}
          isSelected={activeTab === 'movimientos'}
          onPress={() => setActiveTab('movimientos')}
        />
        <Tab
          id="vencimientos"
          title="Vencimientos"
          icon={Calendar}
          isSelected={activeTab === 'vencimientos'}
          onPress={() => setActiveTab('vencimientos')}
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {activeTab === 'estado' && renderEstadoBodega()}
        {activeTab === 'movimientos' && renderMovimientos()}
        {activeTab === 'vencimientos' && renderVencimientos()}
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
    right: -100,
    top: -100,
    transform: [{ rotate: "-40deg" }, { scaleX: 2.4 }, { scaleY: 2 }],
  },
  blob2: {
    position: "absolute",
    left: -100,
    bottom: -100,
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
    fontSize: 12,
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
  capacitySection: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  statUnit: {
    fontSize: 12,
    color: '#9CA3AF',
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
  lotesCount: {
    fontSize: 14,
    color: '#6B7280',
  },
  categoriesContainer: {
    gap: 16,
  },
  categoryItem: {
    marginBottom: 12,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  categoryName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  categoryPercentage: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  categoryBar: {
    height: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 3,
    marginBottom: 4,
  },
  categoryProgress: {
    height: '100%',
    borderRadius: 3,
  },
  categoryCantidad: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'right',
  },
  lotesContainer: {
    gap: 12,
  },
  loteCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  loteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  loteTitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  loteId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  loteCantidad: {
    fontSize: 14,
    color: '#374151',
  },
  loteRight: {
    alignItems: 'flex-end',
  },
  estadoBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  estadoText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  loteInfo: {
    alignItems: 'flex-end',
  },
  ingresoLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  ingresoDate: {
    fontSize: 12,
    fontWeight: '500',
    color: '#374151',
  },
  loteFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3B82F6',
    marginRight: 4,
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