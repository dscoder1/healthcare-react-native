import { useState } from "react";

import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    TextInput,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type ChatInputProps = {
  onSend: (message: string) => void;
};

export default function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState("");

  function handleSend() {
    const value = text.trim();

    if (!value) return;

    onSend(value);

    setText("");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Message AI..."
          placeholderTextColor="#94a3b8"
          multiline
          style={styles.input}
          onSubmitEditing={handleSend}
        />

        <Pressable
          onPress={handleSend}
          disabled={!text.trim()}
          style={[styles.sendButton, !text.trim() && styles.disabled]}
        >
          <Ionicons name="send" size={22} color="white" />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "white",

    paddingHorizontal: 12,

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: "#e2e8f0",
  },

  input: {
    flex: 1,

    backgroundColor: "#f1f5f9",

    borderRadius: 25,

    paddingHorizontal: 18,

    paddingVertical: 12,

    fontSize: 16,

    maxHeight: 120,

    color: "#111827",
  },

  sendButton: {
    height: 50,

    width: 50,

    borderRadius: 25,

    backgroundColor: "#2563eb",

    justifyContent: "center",

    alignItems: "center",

    marginLeft: 10,
  },

  disabled: {
    backgroundColor: "#94a3b8",
  },
});
