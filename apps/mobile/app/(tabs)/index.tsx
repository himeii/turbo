import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "~/components/HelloWave";
import ParallaxScrollView from "~/components/ParallaxScrollView";
import { ThemedText } from "~/components/ThemedText";
import { ThemedView } from "~/components/ThemedView";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Text } from "~/components/ui/text";

const GITHUB_AVATAR_URI = "https://github.com/mrzachnugent.png";

function Example() {
  return (
    <View>
      <Text>Hello</Text>
      <Avatar className="w-12 h-12" alt="Zach Nugent's Avatar">
        <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
        <AvatarFallback>
          <Text>ZN</Text>
        </AvatarFallback>
      </Avatar>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <View>
      <Example />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
