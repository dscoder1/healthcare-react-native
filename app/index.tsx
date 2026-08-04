import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const chats = [
    {
      id: 1,
      title: "Explain React Native",
      time: "Today",
    },
    {
      id: 2,
      title: "Build AI Chat App",
      time: "Yesterday",
    },
    {
      id: 3,
      title: "Learn TypeScript",
      time: "2 days ago",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <LinearGradient colors={["#2563eb", "#7c3aed"]} style={styles.header}>
        <View>
          <Text style={styles.logo}>AI Assistant</Text>

          <Text style={styles.subtitle}>Your intelligent chat companion</Text>
        </View>

        <Pressable style={styles.profile}>
          <Ionicons name="person" size={24} color="white" />
        </Pressable>
      </LinearGradient>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        {/* Search */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={22} color="#64748b" />

          <TextInput
            placeholder="Search conversations..."
            placeholderTextColor="#94a3b8"
            style={styles.searchInput}
          />
        </View>

        {/* New Chat Card */}

        <Pressable onPress={() => router.push("/chat")}>
          <LinearGradient
            colors={["#0ea5e9", "#2563eb"]}
            style={styles.newChat}
          >
            <View>
              <Text style={styles.newChatTitle}>Start a new conversation</Text>

              <Text style={styles.newChatText}>
                Ask anything. Get instant AI answers.
              </Text>
            </View>

            <View style={styles.chatIcon}>
              <Ionicons name="chatbubble-ellipses" size={32} color="white" />
            </View>
          </LinearGradient>
        </Pressable>

        {/* Quick Actions */}

        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.actions}>
          <ActionCard icon="code-slash" title="Coding" />

          <ActionCard icon="book" title="Learning" />

          <ActionCard icon="bulb" title="Ideas" />
        </View>

        {/* History */}

        <Text style={styles.sectionTitle}>Recent Chats</Text>

        {chats.map((chat) => (
          <Pressable key={chat.id} style={styles.chatItem}>
            <Ionicons name="chatbox-outline" size={24} color="#2563eb" />

            <View
              style={{
                flex: 1,
                marginLeft: 15,
              }}
            >
              <Text style={styles.chatTitle}>{chat.title}</Text>

              <Text style={styles.chatTime}>{chat.time}</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
          </Pressable>
        ))}
      </ScrollView>

      {/* Floating Button */}

      <Pressable style={styles.fab} onPress={() => router.push("/chat")}>
        <Ionicons name="add" size={32} color="white" />
      </Pressable>
    </SafeAreaView>
  );
}

function ActionCard({ icon, title }: { icon: any; title: string }) {
  return (
    <View style={styles.actionCard}>
      <Ionicons name={icon} size={28} color="#2563eb" />

      <Text style={styles.actionText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  header: {
    height: 180,
    paddingHorizontal: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 30,
    fontWeight: "800",
    color: "white",
  },

  subtitle: {
    marginTop: 8,
    color: "#dbeafe",
    fontSize: 15,
  },

  profile: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 12,
    borderRadius: 50,
  },

  searchBox: {
    margin: 20,
    height: 55,
    backgroundColor: "white",
    borderRadius: 15,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 15,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  newChat: {
    marginHorizontal: 20,
    borderRadius: 25,
    padding: 25,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  newChatTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  newChatText: {
    color: "#dbeafe",
    marginTop: 8,
  },

  chatIcon: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 15,
    borderRadius: 50,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 15,
  },

  actions: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 12,
  },

  actionCard: {
    width: (width - 60) / 3,
    height: 100,

    backgroundColor: "white",

    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  actionText: {
    marginTop: 8,
    fontWeight: "600",
  },

  chatItem: {
    marginHorizontal: 20,
    marginBottom: 12,

    backgroundColor: "white",

    padding: 18,

    borderRadius: 18,

    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  chatTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  chatTime: {
    marginTop: 5,
    color: "#64748b",
  },

  fab: {
    position: "absolute",

    right: 25,
    bottom: 30,

    height: 65,
    width: 65,

    borderRadius: 35,

    backgroundColor: "#2563eb",

    justifyContent: "center",
    alignItems: "center",

    elevation: 8,
  },
});
