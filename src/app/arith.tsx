import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

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

  const handleReset = () => {
    setX("");
    setY("");
    setZ("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultCard}>
        <Text style={styles.resultTitle}>Result:</Text>
        <Text style={styles.resultValue}>{z}</Text>
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          keyboardType="number-pad"
          placeholder="Enter number(x)"
          placeholderTextColor="#64748B"
          value={x}
          onChangeText={setX}
          style={styles.input}
        />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          keyboardType="number-pad"
          placeholder="Enter number(y)"
          placeholderTextColor="#64748B"
          value={y}
          onChangeText={setY}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="ADD" onPress={handleAdd} color="#38BDF8" />
        <Button title="SUB" onPress={handleSub} color="#38BDF8" />
        <Button title="RESET" onPress={handleReset} color="#EF4444" />
      </View>
    </View>
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
    marginBottom: 28,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#38BDF8",
  },
  resultValue: {
    fontSize: 36,
    color: "white",
    marginTop: 8,
    fontWeight: "bold",
  },
  inputWrapper: {
    marginBottom: 20,
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
  buttonContainer: {
    gap: 12,
    marginTop: 10,
  },
});

export default Arith;
