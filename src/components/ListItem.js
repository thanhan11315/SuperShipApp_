import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const ListItem = ({icon, title, note, colorTitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.listItem}>
          <View style={styles.containerIconTitleNote}>
            <FontAwesome name={icon} size={25} color="#a73a3a" />
            <View style={styles.containerTitleNote}>
              <Text
                style={[
                  styles.listItemTitle,
                  {color: colorTitle ?? '#a73a3a'},
                ]}>
                {title}
              </Text>
              {note && <Text style={styles.listItemNote}>{note}</Text>}
            </View>
          </View>
          <View style={styles.containerIcon}>
            <Feather name="chevron-right" size={25} color="#8A8E9C" />
          </View>
        </View>
      </View>
      <View style={styles.divider} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    minHeight: 48,
    paddingTop: 10,
    paddingRight: 12,
    paddingBottom: 10,
    paddingLeft: 12,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  containerIconTitleNote: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerTitleNote: {
    marginLeft: 12,
  },
  listItemTitle: {
    fontSize: 14,
  },
  listItemNote: {
    marginTop: -5,
    fontSize: 12,
    color: '#8A8E9C',
  },
  containerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#E8EAF3',
  },
});

export default ListItem;
