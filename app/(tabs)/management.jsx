import { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CowCard from '../../components/management/CowCard';
import { EllipsisVertical, Funnel, Plus, Search } from 'lucide-react-native';
import Svg, { Path } from 'react-native-svg';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Management() {
  const [searchText, setSearchText] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  // Datos de ejemplo para las vacas
  const cowsData = [
    {
      id: '#H-001',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=150&h=150&fit=crop',
      status: 'Preñada',
      breed: 'Holstein',
      production: '28.5L',
      age: '3 años',
      alert: true,
      statusColor: '#10B981',
      breedColor: '#E5E7EB'
    },
    {
      id: '#J-045',
      image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=150&h=150&fit=crop',
      status: 'Pseudo',
      breed: 'Jersey',
      production: '22.1L',
      age: '5 años',
      alert: false,
      statusColor: '#F59E0B',
      breedColor: '#E5E7EB'
    },
    {
      id: '#B-023',
      image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=150&h=150&fit=crop',
      status: 'Preñada',
      breed: 'Brown Swiss',
      production: '25.8L',
      age: '4 años',
      alert: false,
      statusColor: '#10B981',
      breedColor: '#E5E7EB'
    }
  ]

  const FilterButton = ({ title, isSelected, onPress, color }) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        isSelected && { backgroundColor: color || '#E5E7EB' }
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.filterButtonText,
        isSelected && { color: color === '#10B981' ? '#FFFFFF' : '#1F2937' }
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
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
        <Text style={styles.headerTitle}>Gestión de Vacas</Text>
        <TouchableOpacity style={styles.menuButton}>
          <EllipsisVertical />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por ID o nombre..."
            placeholderTextColor="#9CA3AF"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <TouchableOpacity style={styles.filtersButton}>
          <Funnel />
          <Text style={styles.filtersButtonText}>Filtros</Text>
        </TouchableOpacity>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterTags}>
          <FilterButton
            title="Holstein"
            isSelected={selectedBreed === 'Holstein'}
            onPress={() => setSelectedBreed(selectedBreed === 'Holstein' ? '' : 'Holstein')}
            color="#10B981"
          />
          <FilterButton
            title="Preñada"
            isSelected={selectedStatus === 'Preñada'}
            onPress={() => setSelectedStatus(selectedStatus === 'Preñada' ? '' : 'Preñada')}
            color="#F59E0B"
          />
        </ScrollView>
      </View>

      {/* Cows List */}
      <ScrollView style={styles.cowsList} showsVerticalScrollIndicator={false}>
        {cowsData.map((cow) => (
          <CowCard key={cow.id} cow={cow} />
        ))}
      </ScrollView>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Plus color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  menuButton: {
    padding: 4,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  filtersButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  filtersButtonText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  filterTags: {
    flex: 1,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  cowsList: {
    flex: 1,
    paddingHorizontal: 20,
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
    top: 200,
    transform: [{ rotate: "-27.557deg" }, { scaleX: 1 }, { scaleY: 2 }],
  },
  blob2: {
    position: "absolute",
    left: -100,
    bottom: -150,
    transform: [{ rotate: "90deg" }, { scaleX: 1.3 }, { scaleY: 1.3 }],
  },
});