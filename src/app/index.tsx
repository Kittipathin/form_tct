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
      <View style={styles.counterCard}>
        <Text style={styles.counterTitle}>Counter Display</Text>
        <Text style={styles.counterValue}>{count}</Text>
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity
          style={styles.countBtn}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.countBtn} onPress={dec}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.resetBtn} onPress={reset}>
        <Text style={styles.resetBtnText}>Reset Counter</Text>
      </TouchableOpacity>

      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>Navigation Menu</Text>

        <Link href="/arith" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>1. Arith Calculator </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/form" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>2. CED_Form Registration </Text>
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
    paddingHorizontal: 24,
    backgroundColor: "#020617",
  },
  counterCard: {
    backgroundColor: "#0F172A",
    borderColor: "#1E293B",
    borderWidth: 1,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    marginBottom: 20,
  },
  counterTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#38BDF8",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  counterValue: {
    fontSize: 56,
    fontWeight: "bold",
    color: "#F8FAFC",
    marginTop: 4,
  },
  actionRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  countBtn: {
    flex: 1,
    backgroundColor: "#38BDF8",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  btnText: {
    color: "#020617",
    fontWeight: "bold",
    fontSize: 24,
  },
  resetBtn: {
    backgroundColor: "#EF4444",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 32,
  },
  resetBtnText: {
    color: "#F8FAFC",
    fontWeight: "bold",
    fontSize: 16,
  },
  menuContainer: {
    gap: 12,
  },
  menuTitle: {
    color: "#94A3B8",
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  },
  linkButton: {
    backgroundColor: "#0F172A",
    borderColor: "#38BDF8",
    borderWidth: 1,
    padding: 16,
    borderRadius: 12,
  },
  linkText: {
    color: "#38BDF8",
    fontSize: 16,
    fontWeight: "700",
  },
});
