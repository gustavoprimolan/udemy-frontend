import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const ListScreen = () => {

    //FRIST WAY
    const friends =  [
        { name: 'Friend #1', key: '1', age: 20 },
        { name: 'Friend #2', key: '2', age: 35  },
        { name: 'Friend #3', key: '3', age: 57  },
        { name: 'Friend #4', key: '4', age: 13  },
        { name: 'Friend #5', key: '5', age: 46  },
        { name: 'Friend #6', key: '6', age: 36  },
        { name: 'Friend #7', key: '7', age: 89  },
        { name: 'Friend #8', key: '8', age: 12  },
        { name: 'Friend #9', key: '9', age: 70  }
    ]

    //TWO DIFFERENT WAYS TO SOLVE KEY'S PROBLEM
    //SECOND WAY
    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={( {item} ) => {
                // element === {item: {name: 'Friend #1'}, index: 0}
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 25
    }
});

export default ListScreen;
