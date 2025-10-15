import {
  AlertTriangle,
  Clock,
  Droplet,
  Star,
  Thermometer,
  TrendingDown,
  TrendingUp,
  Truck,
  Users
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
import { LineChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function CompanyDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('Día');

  // Datos del dashboard
  const dashboardData = {
    produccionHoy: {
      value: '2,840L',
      change: '+12% vs ayer',
      isPositive: true
    },
    calidadPromedio: {
      value: '94%',
      label: 'Excelente',
      isPositive: true
    },
    entregasHoy: {
      value: '8',
      pendientes: '3 pendientes'
    },
    lecherosActivos: {
      value: '24',
      total: 'de 28 total'
    }
  };

  // Datos para el gráfico
  const chartData = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        data: [2600, 2850, 2700, 2950, 2900, 3000, 2900],
        strokeWidth: 3,
        color: (opacity = 1) => `rgba(96, 165, 250, ${opacity})`,
      }
    ]
  };

  // Top 5 vacas productoras
  const topCows = [
    { id: 1, name: 'Vaca #247', breed: 'Holstein', production: '42L', change: '+5%', isPositive: true },
    { id: 2, name: 'Vaca #156', breed: 'Jersey', production: '38L', change: '+2%', isPositive: true },
    { id: 3, name: 'Vaca #089', breed: 'Holstein', production: '36L', change: '-1%', isPositive: false }
  ];

  // Alertas críticas
  const criticalAlerts = [
    {
      id: 1,
      type: 'warning',
      icon: AlertTriangle,
      title: 'Inventario Bajo',
      description: 'Alimento concentrado: 2 días restantes',
      color: '#F59E0B'
    },
    {
      id: 2,
      type: 'clock',
      icon: Clock,
      title: 'Entrega Retrasada',
      description: 'Lechero Juan Pérez - 2 horas de retraso',
      color: '#EF4444'
    },
    {
      id: 3,
      type: 'temperature',
      icon: Thermometer,
      title: 'Temperatura Alta',
      description: 'Tanque #2: 6°C (revisar refrigeración)',
      color: '#F59E0B'
    }
  ];

  // Inventario de bodega
  const inventory = [
    { id: 1, name: 'Alimento Concentrado', amount: '150kg', icon: Droplet, color: '#60A5FA' },
    { id: 2, name: 'Heno', amount: '1,200kg', icon: Droplet, color: '#60A5FA' },
    { id: 3, name: 'Medicamentos', amount: '18 unid', icon: Droplet, color: '#60A5FA' }
  ];

  const MetricCard = ({ title, value, subtitle, icon: Icon, isPositive }) => (
    <View style={styles.metricCard}>
      <View style={styles.metricHeader}>
        <Text style={styles.metricTitle}>{title}</Text>
        <View style={[styles.metricIconContainer]}>
          <Icon size={25} color="#000" />
        </View>
      </View>
      <Text style={styles.metricValue}>{value}</Text>
      <View style={styles.metricSubtitle}>
        {isPositive !== undefined && (
          <View style={styles.changeContainer}>
            {isPositive ? (
              <TrendingUp size={12} color="#10B981" />
            ) : (
              <TrendingDown size={12} color="#EF4444" />
            )}
          </View>
        )}
        <Text style={[
          styles.metricSubtitleText,
          isPositive === true && styles.positiveChange,
          isPositive === false && styles.negativeChange
        ]}>
          {subtitle}
        </Text>
      </View>
    </View>
  );

  const PeriodButton = ({ period, isSelected, onPress }) => (
    <TouchableOpacity
      style={[styles.periodButton, isSelected && styles.periodButtonSelected]}
      onPress={onPress}
    >
      <Text style={[styles.periodButtonText, isSelected && styles.periodButtonTextSelected]}>
        {period}
      </Text>
    </TouchableOpacity>
  );

  const CowRankingItem = ({ cow, index }) => (
    <View style={styles.cowItem}>
      <View style={styles.cowRank}>
        <Text style={styles.cowRankNumber}>{index + 1}</Text>
      </View>
      <View style={styles.cowInfo}>
        <Text style={styles.cowName}>{cow.name}</Text>
        <Text style={styles.cowBreed}>{cow.breed}</Text>
      </View>
      <View style={styles.cowProduction}>
        <Text style={styles.cowProductionValue}>{cow.production}</Text>
        <View style={styles.cowChange}>
          {cow.isPositive ? (
            <TrendingUp size={12} color="#10B981" />
          ) : (
            <TrendingDown size={12} color="#EF4444" />
          )}
          <Text style={[
            styles.cowChangeText,
            cow.isPositive ? styles.positiveChange : styles.negativeChange
          ]}>
            {cow.change}
          </Text>
        </View>
      </View>
    </View>
  );

  const AlertItem = ({ alert }) => (
    <View style={styles.alertItem}>
      <View style={[styles.alertIcon]}>
        <alert.icon size={25} color="#000" />
      </View>
      <View style={styles.alertContent}>
        <Text style={styles.alertTitle}>{alert.title}</Text>
        <Text style={styles.alertDescription}>{alert.description}</Text>
      </View>
    </View>
  );

  const InventoryItem = ({ item }) => (
    <View style={styles.inventoryItem}>
      <View style={styles.inventoryIcon}>
        <item.icon size={25} color="#000" />
      </View>
      <View style={styles.inventoryInfo}>
        <Text style={styles.inventoryName}>{item.name}</Text>
        <View style={styles.inventoryProgress}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '70%' }]} />
          </View>
        </View>
      </View>
      <Text style={styles.inventoryAmount}>{item.amount}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      {/* Decorative Background Elements */}
      <View style={styles.backgroundContainer}>
        <Svg
          style={[styles.blob]}
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

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.topSpacing} />

        {/* Métricas principales */}
        <View style={styles.metricsGrid}>
          <MetricCard
            title="Producción Hoy"
            value={dashboardData.produccionHoy.value}
            subtitle={dashboardData.produccionHoy.change}
            icon={Droplet}
            color="#60A5FA"
            isPositive={dashboardData.produccionHoy.isPositive}
          />
          <MetricCard
            title="Calidad Promedio"
            value={dashboardData.calidadPromedio.value}
            subtitle={dashboardData.calidadPromedio.label}
            icon={Star}
            color="#60A5FA"
            isPositive={true}
          />
          <MetricCard
            title="Entregas Hoy"
            value={dashboardData.entregasHoy.value}
            subtitle={dashboardData.entregasHoy.pendientes}
            icon={Truck}
            color="#60A5FA"
          />
          <MetricCard
            title="Lecheros Activos"
            value={dashboardData.lecherosActivos.value}
            subtitle={dashboardData.lecherosActivos.total}
            icon={Users}
            color="#60A5FA"
          />
        </View>

        {/* Gráfico de Producción Semanal */}
        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Producción Semanal</Text>
            <View style={styles.periodSelector}>
              {['Día', 'Semana', 'Mes'].map((period) => (
                <PeriodButton
                  key={period}
                  period={period}
                  isSelected={selectedPeriod === period}
                  onPress={() => setSelectedPeriod(period)}
                />
              ))}
            </View>
          </View>
          <LineChart
            data={chartData}
            width={screenWidth - 60}
            height={200}
            chartConfig={{
              backgroundColor: '#FFFFFF',
              backgroundGradientFrom: '#FFFFFF',
              backgroundGradientTo: '#FFFFFF',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(96, 165, 250, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '4',
                strokeWidth: '2',
                stroke: '#60A5FA'
              }
            }}
            bezier
            style={styles.chart}
            withInnerLines={false}
            withOuterLines={false}
            withHorizontalLines={true}
            withVerticalLines={false}
          />
        </View>

        {/* Top 5 Vacas Productoras */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Top 5 Vacas Productoras</Text>
          <View style={styles.cowsList}>
            {topCows.map((cow, index) => (
              <CowRankingItem key={cow.id} cow={cow} index={index} />
            ))}
          </View>
        </View>

        {/* Alertas Críticas */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Alertas Críticas</Text>
          <View style={styles.alertsList}>
            {criticalAlerts.map((alert) => (
              <AlertItem key={alert.id} alert={alert} />
            ))}
          </View>
        </View>

        {/* Inventario Bodega */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Inventario Bodega</Text>
          <View style={styles.inventoryList}>
            {inventory.map((item) => (
              <InventoryItem key={item.id} item={item} />
            ))}
          </View>
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  blob: {
    position: "absolute",
    right: -100,
    top: 200,
    transform: [{ rotate: "-27.557deg" }, { scaleX: 2.5 }, { scaleY: 2 }],
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  metricCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  metricTitle: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  metricIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  metricSubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeContainer: {
    marginRight: 4,
  },
  metricSubtitleText: {
    fontSize: 12,
    color: '#6B7280',
  },
  positiveChange: {
    color: '#10B981',
  },
  negativeChange: {
    color: '#EF4444',
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 2,
  },
  periodButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  periodButtonSelected: {
    backgroundColor: '#60A5FA',
  },
  periodButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },
  periodButtonTextSelected: {
    color: '#FFFFFF',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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
  cowsList: {
    gap: 12,
  },
  cowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
  },
  cowRank: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#60A5FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cowRankNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  cowInfo: {
    flex: 1,
  },
  cowName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  cowBreed: {
    fontSize: 12,
    color: '#6B7280',
  },
  cowProduction: {
    alignItems: 'flex-end',
  },
  cowProductionValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 2,
  },
  cowChange: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  cowChangeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  alertsList: {
    gap: 12,
  },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#60A5FA',
  },
  alertIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  alertDescription: {
    fontSize: 12,
    color: '#6B7280',
  },
  inventoryList: {
    gap: 12,
  },
  inventoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
  },
  inventoryIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  inventoryInfo: {
    flex: 1,
  },
  inventoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  inventoryProgress: {
    width: '100%',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#111827',
    borderRadius: 2,
  },
  inventoryAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  bottomSpacing: {
    height: 20,
  },
  topSpacing: {
    height: 20,
  },
});
