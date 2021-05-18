import React, { ReactNode } from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

type FlatListHeaderComponentProps = {
  darkMode: boolean;
}

function FlatListHeaderComponent({ darkMode }: FlatListHeaderComponentProps) {
  return (
    <View>
      <Text style={darkMode ? [styles.header, styles.headerDark] : styles.header}>
        Minhas tasks
      </Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  darkMode: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, darkMode }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={
              (item.done && darkMode) ? [styles.taskButtonDone, styles.taskButtonDoneDark] :
              (item.done && !darkMode) ? styles.taskButtonDone :
              styles.taskButton
            }
          >
            <View 
              testID={`marker-${index}`}
              style={
                (item.done && darkMode) ? [styles.taskMarkerDone, styles.taskMarkerDoneDark] :
                (item.done && !darkMode) ? styles.taskMarkerDone :
                (!item.done && darkMode) ? [styles.taskMarker, styles.taskMarkerDark] :
                styles.taskMarker
              }
            />
            <Text 
              style={
                (item.done && darkMode) ? [styles.taskTextDone, styles.taskTextDoneDark] :
                (item.done && !darkMode) ? styles.taskTextDone :
                (!item.done && darkMode) ? [styles.taskText, styles.taskTextDark] :
                styles.taskText
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent darkMode={darkMode} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  headerDark: {
    color: '#565BFF'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskMarkerDark: {
    borderColor: '#565BFF',
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextDark: {
    color: '#E1E1E6',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneDark: {
    backgroundColor: 'rgba(33, 33, 54, 0.3)',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskMarkerDoneDark: {
    backgroundColor: '#565BFF',
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  taskTextDoneDark: {
    color: 'rgba(225, 225, 230, 0.6)'
  }
})