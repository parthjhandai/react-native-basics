import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Modal , Image} from 'react-native';

import GoalItem from './GoalItem';
import GoalInput from './GoalInput'; 

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText('');
    setModalVisible(false);
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== goalId);
    });
  }

    return (
      <View style={styles.appContainer}>
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('/assets/goal.png')} />
  <TextInput
              style={[styles.textInput , styles.color]}
              placeholder="Your course goal!"
              onChangeText={goalInputHandler}
              value={enteredGoalText}
              
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Add Goal" onPress={addGoalHandler} color='#1e90ff' />
              </View>
              <View style={styles.button}>
                <Button title="Cancel" onPress={() => setModalVisible(false)} color="#ff69b4" />
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.goalsContainer}>
          <Button title="Add New Goal" onPress={() => setModalVisible(true)} color="#4169e1" />
          <FlatList
            data={courseGoals}
            renderItem={itemData => (
              <View style={styles.goalItem}>
                <Text>{itemData.item.text}</Text>
                <Button
                  title="Delete"
                  color="#b0e0e6"
                  onPress={() => deleteGoalHandler(itemData.item.id)}
                />
              </View>
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16, 
    backgroundColor: '#4b0082'
  },
  image: {
    height: 250,
    width: 250,
    margin: 30
  },
  textInput: {
    borderWidth: 3,
    borderColor: 'black',
    width: '100%',
    padding: 8,
    Color:'black',
  },
  goalsContainer: {
    flex: 1,
    marginTop: 16,
    
  },
  goalItem: {
    backgroundColor: '#87cefa',
    padding: 8,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%',
  },
  color: {
    color:'white'
  }});