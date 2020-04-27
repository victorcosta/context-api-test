import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import firebase, { getUserData, getDataList } from '../services';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    getUserData((doc) => {
      if (doc.exists) {
        setUser(doc.data());
      }
    });
  }, []);

  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{user.name}</Text>

      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
