import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Arith = () => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");

  const handleAdd = () => {
    setZ((Number(x) + Number(y)).toString());
  };

  const handleSub = () => {
    setZ((Number(x) - Number(y)).toString());
  };

  const handleMul = () => {
    setZ((Number(x) * Number(y)).toString());
  };

  const handleDiv = () => {
    if (Number(y) === 0) {
      setZ("Error (Div by 0)");
    } else {
      const res = Number(x) / Number(y);
      setZ(Number.isInteger(res) ? res.toString() : res.toFixed(2));
    }
  };

  const handleReset = () => {
    setX("");
    setY("");
    setZ("");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.resultCard}>
        <Text style={styles.resultTitle}>Result</Text>
        <Text style={styles.resultValue}>{z || "0"}</Text>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Number (X)</Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="Enter number X"
          placeholderTextColor="#64748B"
          value={x}
          onChangeText={setX}
          style={styles.input}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Number (Y)</Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="Enter number Y"
          placeholderTextColor="#64748B"
          value={y}
          onChangeText={setY}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonGrid}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.calcBtn} onPress={handleAdd}>
            <Text style={styles.calcBtnText}>ADD (+)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcBtn} onPress={handleSub}>
            <Text style={styles.calcBtnText}>SUB (-)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.calcBtn} onPress={handleMul}>
            <Text style={styles.calcBtnText}>MUL (×)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcBtn} onPress={handleDiv}>
            <Text style={styles.calcBtnText}>DIV (÷)</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
          <Text style={styles.resetBtnText}>RESET</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 24,
  },
  resultCard: {
    backgroundColor: "#0F172A",
    borderColor: "#1E293B",
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    marginBottom: 24,
  },
  resultTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#38BDF8",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  resultValue: {
    fontSize: 36,
    color: "#F8FAFC",
    marginTop: 8,
    fontWeight: "bold",
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    color: "#94A3B8",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#0F172A",
    borderColor: "#1E293B",
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    color: "#F8FAFC",
    fontSize: 16,
  },
  buttonGrid: {
    gap: 12,
    marginTop: 12,
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
  },
  calcBtn: {
    flex: 1,
    backgroundColor: "#38BDF8",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  calcBtnText: {
    color: "#020617",
    fontWeight: "bold",
    fontSize: 15,
  },
  resetBtn: {
    backgroundColor: "#EF4444",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  resetBtnText: {
    color: "#F8FAFC",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Arith;
