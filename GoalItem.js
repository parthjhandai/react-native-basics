import { View,Text,StyleSheet,Pressable } from 'react-native';

function GoalItem(props) {
    return(
        <Pressable onPress={props.onDeleteItem}>
            <View style={styles.goalItem}>
                <Text> style={styles.goalText}  {props.Text}</Text>
            </View>
        </Pressable> 
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,  
        borderRadius:6,

    }
})

export default GoalItem;
