import {
    Alert,
    Clipboard,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type ChatBubbleProps = {
  message: string;

  sender: "user" | "ai";

  time?: string;
};

export default function ChatBubble({
  message,

  sender,

  time = "Now",
}: ChatBubbleProps) {
  const isUser = sender === "user";

  function copyMessage() {
    Clipboard.setString(message);

    Alert.alert("Copied", "Message copied to clipboard");
  }

  return (
    <View
      style={[
        styles.container,
        isUser ? styles.userContainer : styles.aiContainer,
      ]}
    >
      {/* Avatar */}

      {!isUser && (
        <View style={styles.avatar}>
          <Ionicons name="sparkles" size={18} color="white" />
        </View>
      )}

      <View
        style={[styles.bubble, isUser ? styles.userBubble : styles.aiBubble]}
      >
        <Text style={[styles.text, isUser ? styles.userText : styles.aiText]}>
          {message}
        </Text>

        <View style={styles.bottom}>
          <Text style={[styles.time, isUser && styles.userTime]}>{time}</Text>

          <Pressable onPress={copyMessage}>
            <Ionicons
              name="copy-outline"
              size={16}
              color={isUser ? "#dbeafe" : "#64748b"}
            />
          </Pressable>
        </View>
      </View>

      {isUser && (
        <View style={styles.userAvatar}>
          <Ionicons name="person" size={18} color="white" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    marginVertical: 8,

    paddingHorizontal: 12,

    alignItems: "flex-end",
  },

  userContainer: {
    justifyContent: "flex-end",
  },

  aiContainer: {
    justifyContent: "flex-start",
  },

  bubble: {
    maxWidth: "78%",

    padding: 15,

    borderRadius: 22,
  },

  userBubble: {
    backgroundColor: "#2563eb",

    borderBottomRightRadius: 5,
  },

  aiBubble: {
    backgroundColor: "white",

    borderBottomLeftRadius: 5,

    shadowColor: "#000",

    shadowOpacity: 0.05,

    shadowRadius: 8,

    elevation: 2,
  },

  text: {
    fontSize: 16,

    lineHeight: 23,
  },

  userText: {
    color: "white",
  },

  aiText: {
    color: "#111827",
  },

  avatar: {
    height: 32,

    width: 32,

    borderRadius: 16,

    backgroundColor: "#7c3aed",

    justifyContent: "center",

    alignItems: "center",

    marginRight: 8,
  },

  userAvatar: {
    height: 32,

    width: 32,

    borderRadius: 16,

    backgroundColor: "#2563eb",

    justifyContent: "center",

    alignItems: "center",

    marginLeft: 8,
  },

  bottom: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "flex-end",

    marginTop: 8,

    gap: 10,
  },

  time: {
    fontSize: 11,

    color: "#64748b",
  },

  userTime: {
    color: "#dbeafe",
  },
});
