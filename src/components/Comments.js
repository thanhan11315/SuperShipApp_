// Comments.js
import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import colors from '../theme/Colors';
const {width} = Dimensions.get('window');
const Comments = ({comments}) => {
  return (
    <>
      {comments.map(comment => {
        const isCurrentUser = comment.isCurrentUser;
        return (
          <View
            key={comment.id}
            style={[
              styles.commentContainer,
              isCurrentUser
                ? styles.currentUserComment
                : styles.otherUserComment,
            ]}>
            {!isCurrentUser && (
              <Image
                source={{
                  uri: 'https://zpsocial-f51-org.zadn.vn/b09bfb526e9880c6d989.jpg',
                }}
                style={styles.avatar}
              />
            )}
            <View
              style={[
                styles.commentContent,
                isCurrentUser
                  ? styles.currentUserCommentContent
                  : styles.otherUserCommentContent,
              ]}>
              <Text style={styles.commentName}>{comment.name}</Text>
              <Text style={styles.commentText}>{comment.content}</Text>
              <Text style={styles.commentTime}>{comment.time}</Text>
            </View>
            {isCurrentUser && (
              <Image
                source={{
                  uri: 'https://zpsocial-f51-org.zadn.vn/b09bfb526e9880c6d989.jpg',
                }}
                style={styles.avatar}
              />
            )}
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'flex-start',
    paddingHorizontal: 12,
  },
  currentUserComment: {
    justifyContent: 'flex-end',
  },
  otherUserComment: {
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  commentContent: {
    width: width - 68,
    marginHorizontal: 12,
    borderRadius: 5,
    paddingVertical: 8,
    backgroundColor: colors.backGroundLightpink,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  commentName: {
    color: colors.brand,
    fontWeight: 'bold',
    fontSize: 14,
  },
  commentTime: {
    fontSize: 12,
    color: colors.colorLightgray,
  },
  commentText: {
    color: colors.colorLightgray,
    fontSize: 14,
  },
  currentUserCommentContent: {
    alignItems: 'flex-end',
  },
  otherUserCommentContent: {
    alignItems: 'flex-start',
  },
});

export default Comments;
