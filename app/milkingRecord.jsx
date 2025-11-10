import { ComingSoon } from '@/components/ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function MilkingRecord() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ComingSoon
        title="Registro de Ordeños"
        description="El módulo de ordeños está en construcción. Esta es una funcionalidad crítica que permitirá registrar ordeños AM/PM, litros producidos, temperatura y calidad."
        variant="in-development"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
});
