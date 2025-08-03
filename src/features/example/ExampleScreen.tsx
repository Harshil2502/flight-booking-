import React, { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getExampleData } from './exampleSlice';
import { useTranslation } from 'react-i18next';

const ExampleScreen = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(state => state.example);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(getExampleData());
  }, [dispatch]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title={t('changeLanguage')}
        onPress={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
      />
      {loading && <ActivityIndicator />}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {data && <Text>{JSON.stringify(data)}</Text>}
    </View>
  );
};

export default ExampleScreen;