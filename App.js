import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  // Task add karne ka function (Pure JavaScript)
  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, { id: Date.now().toString(), text: task }]);
      setTask(''); // Input box khali karne ke liye
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo App</Text>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Write a task..." 
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* List of Tasks */}
      <FlatList 
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

// Simple CSS/Styling
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 60, paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 20, textAlign: 'center' },
  inputContainer: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, backgroundColor: '#fff', padding: 10, borderRadius: 8, borderWidth: 1, borderColor: '#ccc', marginRight: 10 },
  button: { backgroundColor: '#007BFF', padding: 12, borderRadius: 8, justifyContent: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  taskItem: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#e0e0e0' },
  taskText: { fontSize: 16, color: '#333' }
});
