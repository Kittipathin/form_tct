import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  const dec = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 45, textAlign: "center", marginBottom: 10 }}>
        Count: {count}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.button_label}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count - 1)}
      >
        <Text style={styles.button_label}>-</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={reset}>
        <Text style={styles.button_label}>Reset</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <Link href="/arith" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Go to Calculator</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/form" asChild>
          <TouchableOpacity style={styles.linkButtonBlue}>
            <Text style={styles.linkText}>Go to Form</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  display: {
    backgroundColor: "#03c672",
    color: "white",
    fontSize: 32,
    padding: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    margin: 10,
  },
  button_label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
  },
  linkContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  linkButton: {
    backgroundColor: "#222",
    padding: 14,
    borderRadius: 8,
  },
  linkButtonBlue: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  linkText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
