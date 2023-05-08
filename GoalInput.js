import {useState} from 'react';
import { View,TextInput,Modal ,StyleSheet,Button, Image } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
        
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('')}
              />
                <TextInput
                    style={styles.textInput}
                    placeholder="your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

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
        backgroundColor: '#000080',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#fa8072',
        width: '100%',
        padding: 8,
    },
    goalsContainer: {
        flex: 1,
        marginTop: 16,
    },
    goalItem: {
        backgroundColor: '#afeeee',
        padding: 8,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 150,
        marginHorizontal: 10,
    },
});