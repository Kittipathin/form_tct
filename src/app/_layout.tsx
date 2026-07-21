import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#0F172A" },
        headerTintColor: "#38BDF8",
        headerTitleStyle: { fontWeight: "bold", color: "#F8FAFC" },
        contentStyle: { backgroundColor: "#020617" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Counter" }} />
      <Stack.Screen name="arith" options={{ title: "Arith Calculator" }} />
      <Stack.Screen name="form" options={{ title: "CED_Form" }} />
    </Stack>
  );
}
