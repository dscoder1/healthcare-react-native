import { useRef, useState } from "react";

import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import { useRouter } from "expo-router";

import Header from "../src/components/Header";

import ChatBubble from "../src/components/ChatBubble";

import ChatInput from "../src/components/ChatInput";

import LoadingDots from "../src/components/LoadingDots";

import { useChatStore } from "../src/store/chatStore";

import { useTheme } from "../src/theme/themeProvider";

import { sendChatMessage } from "../src/services/api";

export default function ChatScreen() {
  const router = useRouter();

  const {
    messages,

    addMessage,
  } = useChatStore();

  const { colors } = useTheme();

  const [loading, setLoading] = useState(false);

  const flatListRef = useRef<FlatList>(null);

  async function handleSend(text: string) {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now().toString(),

      text: text,

      sender: "user" as const,

      time: "Now",
    };

    addMessage(userMessage);

    setLoading(true);

    try {
      const response = await sendChatMessage(
        text,

        messages,
      );

      const aiMessage = {
        id: (Date.now() + 1).toString(),

        text: response.reply || "Sorry, I could not understand.",

        sender: "ai" as const,

        time: "Now",
      };

      addMessage(aiMessage);
    } catch (error) {
      const errorMessage = {
        id: (Date.now() + 2).toString(),

        text: "Unable to connect to AI server.",

        sender: "ai" as const,

        time: "Now",
      };

      addMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView
      style={[
        styles.container,

        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <Header title="AI Assistant" onBack={() => router.back()} />

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,

          paddingBottom: 20,
        }}
        onContentSizeChange={() => {
          flatListRef.current?.scrollToEnd({
            animated: true,
          });
        }}
        renderItem={({ item }) => (
          <ChatBubble
            message={item.text}
            sender={item.sender}
            time={item.time}
          />
        )}
        ListFooterComponent={loading ? <LoadingDots /> : null}
      />

      <ChatInput onSend={handleSend} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
