import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

import { Video } from "expo-av";

import { VideoPlayerProps } from "./props";
import { styles } from "./styles";

export default function VideoPlayer({
  video,
  onShare,
  onSave,
  onDiscard,
}: VideoPlayerProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={{ uri: video.uri }}
        useNativeControls
        isLooping
        style={styles.video}
      />
      <View style={styles.menuButton}>
        <Button title="Share" onPress={onShare} />
        <Button title="Save" onPress={onSave} />
        <Button title="Discard" onPress={onDiscard} />
      </View>
    </SafeAreaView>
  );
}
