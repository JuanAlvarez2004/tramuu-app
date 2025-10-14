import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Svg, { G, Path } from "react-native-svg";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function HeaderUser() {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <View style={styles.userInfo}>
          <Image
            source={{
              uri: "https://api.builder.io/api/v1/image/assets/TEMP/40731bff813067c3d5adf5dc52c6259f237a5ef2?width=64",
            }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.headerTitle}>Dashboard</Text>
            <Text style={styles.headerSubtitle}>Lechero</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.addButton}>
            <Svg width={18} height={21} viewBox="0 0 18 21" fill="none">
              <G clipPath="url(#clip0)">
                <Path
                  d="M10.25 3.625C10.25 2.93359 9.69141 2.375 9 2.375C8.30859 2.375 7.75 2.93359 7.75 3.625V9.25H2.125C1.43359 9.25 0.875 9.80859 0.875 10.5C0.875 11.1914 1.43359 11.75 2.125 11.75H7.75V17.375C7.75 18.0664 8.30859 18.625 9 18.625C9.69141 18.625 10.25 18.0664 10.25 17.375V11.75H15.875C16.5664 11.75 17.125 11.1914 17.125 10.5C17.125 9.80859 16.5664 9.25 15.875 9.25H10.25V3.625Z"
                  fill="white"
                />
              </G>
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationWrapper}>
            <Svg width={16} height={19} viewBox="0 0 16 19" fill="none">
              <G clipPath="url(#clip1)">
                <Path
                  d="M7.87506 0.25C7.25279 0.25 6.75006 0.752734 6.75006 1.375V2.05C4.18365 2.57031 2.25006 4.84141 2.25006 7.5625V8.22344C2.25006 9.87578 1.64186 11.4719 0.544981 12.7094L0.284825 13.0012C-0.0104874 13.3316 -0.0807999 13.8063 0.098497 14.2105C0.277794 14.6148 0.682091 14.875 1.12506 14.875H14.6251C15.068 14.875 15.4688 14.6148 15.6516 14.2105C15.8344 13.8063 15.7606 13.3316 15.4653 13.0012L15.2051 12.7094C14.1083 11.4719 13.5001 9.8793 13.5001 8.22344V7.5625C13.5001 4.84141 11.5665 2.57031 9.00006 2.05V1.375C9.00006 0.752734 8.49732 0.25 7.87506 0.25ZM9.46764 17.5926C9.88951 17.1707 10.1251 16.5977 10.1251 16H7.87506H5.62506C5.62506 16.5977 5.86061 17.1707 6.28248 17.5926C6.70436 18.0145 7.2774 18.25 7.87506 18.25C8.47272 18.25 9.04576 18.0145 9.46764 17.5926Z"
                  fill="black"
                />
              </G>
            </Svg>
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFF",
    elevation: 2,
    paddingTop: 35,
    zIndex: 1,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Math.max(16, screenWidth * 0.04),
    paddingVertical: Math.max(12, screenHeight * 0.015),
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: Math.max(8, screenWidth * 0.02),
  },
  avatar: {
    width: Math.max(32, screenWidth * 0.08),
    height: Math.max(32, screenWidth * 0.08),
    borderRadius: Math.max(16, screenWidth * 0.04),
  },
  headerTitle: {
    fontSize: Math.max(16, screenWidth * 0.038),
    fontWeight: "600",
    color: "#111827",
    lineHeight: Math.max(24, screenWidth * 0.057),
  },
  headerSubtitle: {
    fontSize: Math.max(11, screenWidth * 0.025),
    fontWeight: "400",
    color: "#6B7280",
    lineHeight: Math.max(14, screenWidth * 0.033),
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: Math.max(12, screenWidth * 0.03),
  },
  addButton: {
    width: Math.max(26, screenWidth * 0.07),
    height: Math.max(26, screenWidth * 0.07),
    borderRadius: Math.max(13, screenWidth * 0.035),
    backgroundColor: "#3B82F6",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  notificationWrapper: {
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    width: Math.max(10, screenWidth * 0.025),
    height: Math.max(10, screenWidth * 0.025),
    borderRadius: Math.max(5, screenWidth * 0.0125),
    backgroundColor: "#3B82F6",
  },
})

