import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { RadioButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Form() {
  const depts = [
    { label: "Please Select Department", value: "", index: 0 },
    { label: "Civil Engineering", value: "CE", index: 1 },
    { label: "Computer Education", value: "CED", index: 2 },
    { label: "Electrical Engineering", value: "EE", index: 3 },
    { label: "Mechanical Engineering", value: "ME", index: 4 },
  ];

  const [data, setData] = useState({
    name: "",
    gender: "",
    dept: "",
    comment: "",
    isAgree: false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#020617" }}>
      <ScrollView style={styles.container}>
        <View style={styles.displayCard}>
          <Text style={styles.displayHeader}>Preview Data</Text>
          <Text style={styles.displayText}>Name: {data.name || "-"}</Text>
          <Text style={styles.displayText}>Gender: {data.gender || "-"}</Text>
          <Text style={styles.displayText}>Dept: {data.dept || "-"}</Text>
          <Text style={styles.displayText}>Comment: {data.comment || "-"}</Text>
          <Text style={styles.displayText}>
            Agree: {data.isAgree ? "Yes" : "No"}
          </Text>
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={data.name}
            onChangeText={(text) => setData({ ...data, name: text })}
            placeholder="Enter Your Name"
            placeholderTextColor="#64748B"
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Gender</Text>
          <RadioButton.Group
            value={data.gender}
            onValueChange={(value) => setData({ ...data, gender: value })}
          >
            <View style={styles.radioRow}>
              <View style={styles.radioOption}>
                <RadioButton
                  value="Male"
                  color="#38BDF8"
                  uncheckedColor="#64748B"
                />
                <Text style={styles.radioLabel}>Male</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton
                  value="Female"
                  color="#38BDF8"
                  uncheckedColor="#64748B"
                />
                <Text style={styles.radioLabel}>Female</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Department</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={{ color: "#64748B" }}
            selectedTextStyle={{ color: "#F8FAFC" }}
            containerStyle={{
              backgroundColor: "#0F172A",
              borderColor: "#1E293B",
            }}
            itemTextStyle={{ color: "#F8FAFC" }}
            activeColor="#1E293B"
            data={depts}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Department"
            onChange={(item) => setData({ ...data, dept: item.value })}
            value={data.dept}
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Comment</Text>
          <TextInput
            style={styles.commentInput}
            multiline
            value={data.comment}
            onChangeText={(text) => setData({ ...data, comment: text })}
            placeholder="Enter Your Comment"
            placeholderTextColor="#64748B"
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Do you agree?</Text>
          <Switch
            trackColor={{ true: "#38BDF8", false: "#1E293B" }}
            thumbColor={data.isAgree ? "#F8FAFC" : "#64748B"}
            value={data.isAgree}
            onValueChange={(value) => setData({ ...data, isAgree: value })}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#020617",
  },
  displayCard: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: "#0F172A",
    borderColor: "#1E293B",
    borderWidth: 1,
    marginVertical: 12,
  },
  displayHeader: {
    color: "#38BDF8",
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 8,
    letterSpacing: 1,
  },
  displayText: {
    color: "#F8FAFC",
    fontSize: 15,
    marginBottom: 4,
  },
  fieldGroup: {
    paddingVertical: 8,
  },
  label: {
    fontWeight: "700",
    color: "#94A3B8",
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: "#1E293B",
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#0F172A",
    color: "#F8FAFC",
    fontSize: 16,
  },
  radioRow: {
    flexDirection: "row",
    gap: 20,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    color: "#F8FAFC",
    fontSize: 15,
  },
  dropdown: {
    height: 50,
    borderColor: "#1E293B",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: "#0F172A",
  },
  commentInput: {
    height: 90,
    borderColor: "#1E293B",
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#0F172A",
    color: "#F8FAFC",
    fontSize: 16,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    marginBottom: 40,
  },
  switchLabel: {
    color: "#F8FAFC",
    fontSize: 16,
    fontWeight: "600",
  },
});
