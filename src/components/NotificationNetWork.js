import React from 'react';
import {StyleSheet, Text, Platform, SafeAreaView} from 'react-native';
import {useTranslation} from 'react-i18next';

const NotificationNetWork = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.text}>{t('noInternet')}</Text>
    </SafeAreaView>
  );
};

export default NotificationNetWork;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    fontSize: Platform.OS === 'android' ? 12 : 16,
    padding: 10,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 2,
  },
});
