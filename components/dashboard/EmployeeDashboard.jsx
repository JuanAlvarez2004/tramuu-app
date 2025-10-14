import { router } from "expo-router";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { G, Path } from "react-native-svg";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function EmployeeDashboard() {
  const handleNavigation = (route) => {
    router.push(`/(tabs)/${route}`);
  };

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      {/* Decorative Background Elements */}
      <View style={styles.backgroundContainer}>
        <Svg
          style={[styles.blob, styles.blob1]}
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
          style={[styles.blob, styles.blob2]}
          viewBox="0 0 178 355"
          width={screenWidth * 0.6}
          height={screenHeight * 0.3}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-134.52 -246.761C-71.9315 -244.444 6.32327 -226.179 32.4602 -169.263C61.5771 -105.857 -32.8925 -32.4908 -6.46982 32.0845C18.1105 92.1572 127.155 74.0972 155.858 132.313C185.388 192.207 188.853 283.045 139.38 327.898C88.1616 374.333 3.00064 349.293 -63.7898 331.447C-111.632 318.663 -129.695 243.417 -179.211 242.769C-261.929 241.686 -328.918 353.33 -407.323 326.949C-472.14 305.139 -503.226 205.885 -482.759 140.632C-460.639 70.111 -343.24 76.3272 -308.288 11.2054C-277.214 -46.6918 -346.347 -127.427 -309.637 -181.925C-274.143 -234.617 -198.008 -249.111 -134.52 -246.761Z"
            fill="black"
          />
        </Svg>
      </View>

      {/* Main Content */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}
      >
        {/* Resumen del Día */}
        <View style={styles.summarySection}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>Resumen del Día</Text>
            <View style={styles.statsRow}>
              <View style={styles.statCard}>
                <View style={styles.statContent}>
                  <View>
                    <Text style={styles.statLabel}>Ordeños</Text>
                    <Text style={styles.statValue}>24</Text>
                  </View>
                  <Svg width={15} height={21} viewBox="0 0 15 21" fill="none">
                    <G clipPath="url(#clip2)">
                      <Path
                        d="M7.5 20.5C3.35938 20.5 0 17.1406 0 13C0 9.4375 5.08594 2.75391 6.50781 0.957031C6.74219 0.664062 7.08984 0.5 7.46484 0.5H7.53516C7.91016 0.5 8.25781 0.664062 8.49219 0.957031C9.91406 2.75391 15 9.4375 15 13C15 17.1406 11.6406 20.5 7.5 20.5ZM3.75 13.625C3.75 13.2812 3.46875 13 3.125 13C2.78125 13 2.5 13.2812 2.5 13.625C2.5 16.043 4.45703 18 6.875 18C7.21875 18 7.5 17.7188 7.5 17.375C7.5 17.0312 7.21875 16.75 6.875 16.75C5.14844 16.75 3.75 15.3516 3.75 13.625Z"
                        fill="white"
                      />
                    </G>
                  </Svg>
                </View>
              </View>
              <View style={styles.statCard}>
                <View style={styles.statContent}>
                  <View>
                    <Text style={styles.statLabel}>Litros</Text>
                    <Text style={styles.statValue}>485</Text>
                  </View>
                  <Svg width={20} height={21} viewBox="0 0 20 21" fill="none">
                    <Path
                      d="M2.5 3C2.5 2.30859 1.94141 1.75 1.25 1.75C0.558594 1.75 0 2.30859 0 3V16.125C0 17.8516 1.39844 19.25 3.125 19.25H18.75C19.4414 19.25 20 18.6914 20 18C20 17.3086 19.4414 16.75 18.75 16.75H3.125C2.78125 16.75 2.5 16.4688 2.5 16.125V3ZM18.3828 6.38281C18.8711 5.89453 18.8711 5.10156 18.3828 4.61328C17.8945 4.125 17.1016 4.125 16.6133 4.61328L12.5 8.73047L10.2578 6.48828C9.76953 6 8.97656 6 8.48828 6.48828L4.11328 10.8633C3.625 11.3516 3.625 12.1445 4.11328 12.6328C4.60156 13.1211 5.39453 13.1211 5.88281 12.6328L9.375 9.14453L11.6172 11.3867C12.1055 11.875 12.8984 11.875 13.3867 11.3867L18.3867 6.38672L18.3828 6.38281Z"
                      fill="white"
                    />
                  </Svg>
                </View>
              </View>
            </View>
            <View style={styles.averageCard}>
              <Text style={styles.averageText}>Promedio: 20.2L por ordeño</Text>
            </View>
          </View>
        </View>

        {/* Alertas */}
        <View style={styles.alertsSection}>
          <View style={styles.alertsHeader}>
            <Text style={styles.sectionTitle}>Alertas</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
          <View style={styles.alertsList}>
            <View style={styles.alertCard}>
              <View style={styles.alertIcon}>
                <Svg width={14} height={15} viewBox="0 0 14 15" fill="none">
                  <G clipPath="url(#clip3)">
                    <Path
                      d="M12.0586 0.941456L12.9336 1.81646L13.8086 2.69146C14.0657 2.94849 14.0657 3.36411 13.8086 3.61841C13.5516 3.87271 13.136 3.87544 12.8817 3.61841L12.4715 3.20825L11.427 4.25005L12.9309 5.75396C13.1879 6.01099 13.1879 6.42661 12.9309 6.68091C12.6739 6.93521 12.2583 6.93794 12.004 6.68091L10.0352 4.71216L8.06646 2.74614C7.80942 2.48911 7.80942 2.07349 8.06646 1.81919C8.32349 1.56489 8.73911 1.56216 8.99341 1.81919L10.4973 3.3231L11.5418 2.2813L11.129 1.87114C10.8719 1.61411 10.8719 1.19849 11.129 0.944191C11.386 0.689894 11.8016 0.68716 12.0559 0.944191L12.0586 0.941456ZM5.75044 5.00747L7.42114 3.33677C7.42935 3.34497 7.43755 3.35591 7.44849 3.36411L7.88599 3.80161L9.41724 5.33286L10.9485 6.86411L11.386 7.30161C11.3942 7.30982 11.4024 7.31802 11.4133 7.32896L6.19068 12.5516C5.90357 12.8387 5.51528 13 5.10786 13H2.677L1.12114 14.5586C0.864113 14.8157 0.448488 14.8157 0.194191 14.5586C-0.0601061 14.3016 -0.0628404 13.886 0.194191 13.6317L1.75278 12.0731V9.64497C1.75278 9.23755 1.91411 8.84927 2.20122 8.56216L3.38521 7.37818L4.9438 8.93677C5.11333 9.1063 5.39224 9.1063 5.56177 8.93677C5.7313 8.76724 5.7313 8.48833 5.56177 8.3188L4.00318 6.76021L5.13521 5.62818L6.6938 7.18677C6.86333 7.3563 7.14224 7.3563 7.31177 7.18677C7.4813 7.01724 7.4813 6.73833 7.31177 6.5688L5.75318 5.01021L5.75044 5.00747Z"
                      fill="black"
                    />
                  </G>
                </Svg>
              </View>
              <View style={styles.alertContent}>
                <Text style={styles.alertTitle}>Vacuna Pendiente</Text>
                <Text style={styles.alertDescription}>
                  Vaca #127 - Vacuna antirrábica
                </Text>
                <Text style={styles.alertTime}>Vence en 2 días</Text>
              </View>
            </View>

            <View style={styles.alertCard}>
              <View style={styles.alertIcon}>
                <Svg width={14} height={15} viewBox="0 0 14 15" fill="none">
                  <Path
                    d="M6.99997 1.625C7.38825 1.625 7.74645 1.83008 7.94333 2.16641L13.8496 12.2289C14.0492 12.568 14.0492 12.9863 13.855 13.3254C13.6609 13.6645 13.2972 13.875 12.9062 13.875H1.09372C0.702702 13.875 0.33903 13.6645 0.144889 13.3254C-0.0492514 12.9863 -0.0465171 12.5652 0.150358 12.2289L6.05661 2.16641C6.25348 1.83008 6.61169 1.625 6.99997 1.625ZM6.99997 5.125C6.6363 5.125 6.34372 5.41758 6.34372 5.78125V8.84375C6.34372 9.20742 6.6363 9.5 6.99997 9.5C7.36364 9.5 7.65622 9.20742 7.65622 8.84375V5.78125C7.65622 5.41758 7.36364 5.125 6.99997 5.125ZM7.87497 11.25C7.87497 11.0179 7.78278 10.7954 7.61869 10.6313C7.45459 10.4672 7.23203 10.375 6.99997 10.375C6.7679 10.375 6.54534 10.4672 6.38125 10.6313C6.21715 10.7954 6.12497 11.0179 6.12497 11.25C6.12497 11.4821 6.21715 11.7046 6.38125 11.8687C6.54534 12.0328 6.7679 12.125 6.99997 12.125C7.23203 12.125 7.45459 12.0328 7.61869 11.8687C7.78278 11.7046 7.87497 11.4821 7.87497 11.25Z"
                    fill="black"
                  />
                </Svg>
              </View>
              <View style={styles.alertContent}>
                <Text style={styles.alertTitle}>Atención Requerida</Text>
                <Text style={styles.alertDescription}>
                  Vaca #089 - Revisión veterinaria
                </Text>
                <Text style={styles.alertTime}>Programada para hoy</Text>
              </View>
            </View>

            <View style={styles.alertCard}>
              <View style={styles.alertIcon}>
                <Svg width={14} height={15} viewBox="0 0 14 15" fill="none">
                  <G clipPath="url(#clip4)">
                    <Path
                      d="M7 0.75C8.85652 0.75 10.637 1.4875 11.9497 2.80025C13.2625 4.11301 14 5.89348 14 7.75C14 9.60652 13.2625 11.387 11.9497 12.6997C10.637 14.0125 8.85652 14.75 7 14.75C5.14348 14.75 3.36301 14.0125 2.05025 12.6997C0.737498 11.387 0 9.60652 0 7.75C0 5.89348 0.737498 4.11301 2.05025 2.80025C3.36301 1.4875 5.14348 0.75 7 0.75ZM6.34375 4.03125V7.75C6.34375 7.96875 6.45312 8.17383 6.63633 8.29688L9.26133 10.0469C9.56211 10.2492 9.96953 10.1672 10.1719 9.86367C10.3742 9.56016 10.2922 9.15547 9.98867 8.95312L7.65625 7.4V4.03125C7.65625 3.66758 7.36367 3.375 7 3.375C6.63633 3.375 6.34375 3.66758 6.34375 4.03125Z"
                      fill="black"
                    />
                  </G>
                </Svg>
              </View>
              <View style={styles.alertContent}>
                <Text style={styles.alertTitle}>Próximo Ordeño</Text>
                <Text style={styles.alertDescription}>Sector B - En 2 horas</Text>
                <Text style={styles.alertTime}>15:30 PM</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Accesos Rápidos */}
        <View style={styles.quickAccessSection}>
          <Text style={styles.sectionTitle}>Accesos Rápidos</Text>
          <View style={styles.quickAccessGrid}>
            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => handleNavigation("inventory")}
            >
              <View style={styles.quickAccessIcon}>
                <Svg width={24} height={21} viewBox="0 0 24 21" fill="none">
                  <G clipPath="url(#clip5)">
                    <Path
                      d="M10.4375 0.5H8.875C7.83984 0.5 7 1.33984 7 2.375V6.75C7 8.12891 8.12109 9.25 9.5 9.25H14.5C15.8789 9.25 17 8.12891 17 6.75V2.375C17 1.33984 16.1602 0.5 15.125 0.5H13.5625V3.625C13.5625 3.96875 13.2812 4.25 12.9375 4.25H11.0625C10.7188 4.25 10.4375 3.96875 10.4375 3.625V0.5ZM3.25 10.5C1.87109 10.5 0.75 11.6211 0.75 13V18C0.75 19.3789 1.87109 20.5 3.25 20.5H9.5C10.8789 20.5 12 19.3789 12 18V13C12 11.6211 10.8789 10.5 9.5 10.5H7.9375V13.625C7.9375 13.9688 7.65625 14.25 7.3125 14.25H5.4375C5.09375 14.25 4.8125 13.9688 4.8125 13.625V10.5H3.25ZM14.5 20.5H20.75C22.1289 20.5 23.25 19.3789 23.25 18V13C23.25 11.6211 22.1289 10.5 20.75 10.5H19.1875V13.625C19.1875 13.9688 18.9062 14.25 18.5625 14.25H16.6875C16.3438 14.25 16.0625 13.9688 16.0625 13.625V10.5H14.5C13.9141 10.5 13.375 10.6992 12.9492 11.0391C13.1406 11.4453 13.25 11.8984 13.25 12.375V18.625C13.25 19.1016 13.1406 19.5547 12.9492 19.9609C13.375 20.3008 13.9141 20.5 14.5 20.5Z"
                      fill="black"
                    />
                  </G>
                </Svg>
              </View>
              <Text style={styles.quickAccessTitle}>Mi Inventario</Text>
              <Text style={styles.quickAccessDesc}>Gestionar recursos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickAccessCard}
              onPress={() => handleNavigation("profile")}
            >
              <View style={styles.quickAccessIcon}>
                <Svg width={18} height={21} viewBox="0 0 18 21" fill="none">
                  <G clipPath="url(#clip6)">
                    <Path
                      d="M9 10.5C10.3261 10.5 11.5979 9.97322 12.5355 9.03553C13.4732 8.09785 14 6.82608 14 5.5C14 4.17392 13.4732 2.90215 12.5355 1.96447C11.5979 1.02678 10.3261 0.5 9 0.5C7.67392 0.5 6.40215 1.02678 5.46447 1.96447C4.52678 2.90215 4 4.17392 4 5.5C4 6.82608 4.52678 8.09785 5.46447 9.03553C6.40215 9.97322 7.67392 10.5 9 10.5ZM7.21484 12.375C3.36719 12.375 0.25 15.4922 0.25 19.3398C0.25 19.9805 0.769531 20.5 1.41016 20.5H16.5898C17.2305 20.5 17.75 19.9805 17.75 19.3398C17.75 15.4922 14.6328 12.375 10.7852 12.375H7.21484Z"
                      fill="black"
                    />
                  </G>
                </Svg>
              </View>
              <Text style={styles.quickAccessTitle}>Mi Perfil</Text>
              <Text style={styles.quickAccessDesc}>Configuración</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
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
  },
  blob1: {
    left: -screenWidth * 0.2,
    top: screenHeight * 0.15,
    transform: [{ rotate: "-27.557deg" }, { scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  blob2: {
    left: -screenWidth * 0.4,
    top: -screenHeight * 0.1,
  },
  scrollContainer: {
    flex: 1,
    zIndex: 1,
  },
  main: {
    paddingHorizontal: Math.max(16, screenWidth * 0.035),
  },
  summarySection: {
    marginTop: Math.max(20, screenHeight * 0.025),
    marginBottom: Math.max(20, screenHeight * 0.025),
  },
  summaryCard: {
    backgroundColor: "#3B82F6",
    borderRadius: Math.max(12, screenWidth * 0.03),
    padding: Math.max(20, screenWidth * 0.04),
  },
  summaryTitle: {
    fontSize: Math.max(16, screenWidth * 0.038),
    fontWeight: "600",
    color: "#FFF",
    marginBottom: Math.max(14, screenHeight * 0.017),
  },
  statsRow: {
    flexDirection: "row",
    gap: Math.max(12, screenWidth * 0.03),
    marginBottom: Math.max(14, screenHeight * 0.017),
  },
  statCard: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.70)",
    borderRadius: Math.max(10, screenWidth * 0.025),
    padding: Math.max(14, screenWidth * 0.03),
  },
  statContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statLabel: {
    fontSize: Math.max(13, screenWidth * 0.03),
    fontWeight: "400",
    color: "#FFF",
    marginBottom: Math.max(4, screenHeight * 0.005),
  },
  statValue: {
    fontSize: Math.max(22, screenWidth * 0.05),
    fontWeight: "700",
    color: "#FFF",
    lineHeight: Math.max(29, screenWidth * 0.065),
  },
  averageCard: {
    backgroundColor: "rgba(0, 0, 0, 0.70)",
    borderRadius: Math.max(6, screenWidth * 0.015),
    padding: Math.max(10, screenWidth * 0.025),
  },
  averageText: {
    fontSize: Math.max(13, screenWidth * 0.03),
    fontWeight: "400",
    color: "#FFF",
  },
  alertsSection: {
    marginBottom: Math.max(20, screenHeight * 0.025),
  },
  alertsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Math.max(14, screenHeight * 0.017),
  },
  sectionTitle: {
    fontSize: Math.max(16, screenWidth * 0.038),
    fontWeight: "600",
    color: "#111827",
  },
  badge: {
    width: Math.max(20, screenWidth * 0.05),
    height: Math.max(20, screenWidth * 0.05),
    borderRadius: Math.max(10, screenWidth * 0.025),
    backgroundColor: "#3B82F6",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: Math.max(11, screenWidth * 0.025),
    fontWeight: "500",
    color: "#000",
  },
  alertsList: {
    gap: Math.max(10, screenHeight * 0.012),
  },
  alertCard: {
    flexDirection: "row",
    gap: Math.max(10, screenWidth * 0.025),
    backgroundColor: "#FFF",
    borderRadius: Math.max(10, screenWidth * 0.025),
    borderLeftWidth: 4,
    borderLeftColor: "#3B82F6",
    padding: Math.max(14, screenWidth * 0.03),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  alertIcon: {
    width: Math.max(28, screenWidth * 0.07),
    height: Math.max(28, screenWidth * 0.07),
    borderRadius: Math.max(14, screenWidth * 0.035),
    backgroundColor: "rgba(113, 183, 220, 0.60)",
    alignItems: "center",
    justifyContent: "center",
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: Math.max(14, screenWidth * 0.034),
    fontWeight: "500",
    color: "#111827",
    marginBottom: Math.max(3, screenHeight * 0.004),
  },
  alertDescription: {
    fontSize: Math.max(13, screenWidth * 0.03),
    fontWeight: "400",
    color: "#4B5563",
    marginBottom: Math.max(3, screenHeight * 0.004),
  },
  alertTime: {
    fontSize: Math.max(11, screenWidth * 0.025),
    fontWeight: "400",
    color: "#000",
  },
  quickAccessSection: {
    marginBottom: Math.max(20, screenHeight * 0.025),
  },
  quickAccessGrid: {
    flexDirection: "row",
    gap: Math.max(12, screenWidth * 0.03),
    marginTop: Math.max(14, screenHeight * 0.017),
  },
  quickAccessCard: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: Math.max(10, screenWidth * 0.025),
    padding: Math.max(14, screenWidth * 0.03),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  quickAccessIcon: {
    width: Math.max(44, screenWidth * 0.1),
    height: Math.max(44, screenWidth * 0.1),
    borderRadius: Math.max(10, screenWidth * 0.025),
    backgroundColor: "rgba(113, 183, 220, 0.60)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Math.max(10, screenHeight * 0.012),
  },
  quickAccessTitle: {
    fontSize: Math.max(14, screenWidth * 0.034),
    fontWeight: "500",
    color: "#111827",
    marginBottom: Math.max(4, screenHeight * 0.005),
  },
  quickAccessDesc: {
    fontSize: Math.max(13, screenWidth * 0.03),
    fontWeight: "400",
    color: "#4B5563",
  },
};