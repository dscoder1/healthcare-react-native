import React, { useState } from "react";

import {
    Alert,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { router } from "expo-router";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);

  const [notifications, setNotifications] = useState(true);

  function clearChats() {
    Alert.alert("Clear Chats", "All local conversations will be removed.", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Clear",
        style: "destructive",
        onPress: () => {},
      },
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#111" />
        </Pressable>

        <Text style={styles.headerTitle}>Settings</Text>

        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile */}

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={35} color="white" />
          </View>

          <View>
            <Text style={styles.name}>Guest User</Text>

            <Text style={styles.email}>guest@aichat.com</Text>
          </View>
        </View>

        {/* Appearance */}

        <Text style={styles.sectionTitle}>Appearance</Text>

        <View style={styles.card}>
          <SettingRow
            icon="moon"
            title="Dark Mode"
            right={<Switch value={darkMode} onValueChange={setDarkMode} />}
          />
        </View>

        {/* Preferences */}

        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.card}>
          <SettingRow
            icon="notifications"
            title="Notifications"
            right={
              <Switch value={notifications} onValueChange={setNotifications} />
            }
          />

          <SettingRow icon="trash" title="Clear Chats" onPress={clearChats} />
        </View>

        {/* Information */}

        <Text style={styles.sectionTitle}>Information</Text>

        <View style={styles.card}>
          <SettingRow
            icon="information-circle"
            title="About AI Assistant"
            onPress={() => {}}
          />

          <SettingRow
            icon="shield-checkmark"
            title="Privacy Policy"
            onPress={() => {}}
          />

          <SettingRow
            icon="document-text"
            title="Terms & Conditions"
            onPress={() => {}}
          />
        </View>

        {/* Logout */}

        <Pressable
          style={styles.logout}
          onPress={() => {
            Alert.alert("Logout", "You are currently using guest mode.");
          }}
        >
          <Ionicons name="log-out" size={22} color="white" />

          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

function SettingRow({
  icon,

  title,

  right,

  onPress,
}: {
  icon: any;

  title: string;

  right?: React.ReactNode;

  onPress?: () => void;
}) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View style={styles.left}>
        <Ionicons name={icon} size={23} color="#2563eb" />

        <Text style={styles.rowText}>{title}</Text>
      </View>

      {right || <Ionicons name="chevron-forward" size={20} color="#94a3b8" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f8fafc",
  },

  header: {
    height: 65,

    backgroundColor: "white",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    paddingHorizontal: 20,

    borderBottomWidth: 1,

    borderBottomColor: "#e2e8f0",
  },

  headerTitle: {
    fontSize: 21,

    fontWeight: "700",
  },

  profileCard: {
    margin: 20,

    backgroundColor: "white",

    padding: 20,

    borderRadius: 22,

    flexDirection: "row",

    alignItems: "center",

    shadowColor: "#000",

    shadowOpacity: 0.05,

    shadowRadius: 10,

    elevation: 3,
  },

  avatar: {
    height: 65,

    width: 65,

    borderRadius: 35,

    backgroundColor: "#2563eb",

    justifyContent: "center",

    alignItems: "center",

    marginRight: 15,
  },

  name: {
    fontSize: 18,

    fontWeight: "700",
  },

  email: {
    color: "#64748b",

    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 18,

    fontWeight: "700",

    marginHorizontal: 20,

    marginTop: 15,

    marginBottom: 10,
  },

  card: {
    backgroundColor: "white",

    marginHorizontal: 20,

    borderRadius: 20,

    overflow: "hidden",

    shadowColor: "#000",

    shadowOpacity: 0.04,

    shadowRadius: 5,

    elevation: 2,
  },

  row: {
    height: 60,

    paddingHorizontal: 18,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    borderBottomWidth: 1,

    borderBottomColor: "#f1f5f9",
  },

  left: {
    flexDirection: "row",

    alignItems: "center",
  },

  rowText: {
    fontSize: 16,

    marginLeft: 15,

    fontWeight: "500",
  },

  logout: {
    margin: 25,

    height: 55,

    borderRadius: 18,

    backgroundColor: "#ef4444",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "center",

    gap: 10,
  },

  logoutText: {
    color: "white",

    fontSize: 17,

    fontWeight: "700",
  },
});
