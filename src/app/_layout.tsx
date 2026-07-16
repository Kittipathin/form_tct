import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="arith" options={{ title: "Calculator" }} />
      <Stack.Screen name="form" options={{ title: "Survey Form" }} />
    </Stack>
  );
}
