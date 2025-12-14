import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TABS = [
  { key: 'home', label: 'Home', icon: 'home-outline', color: '#f6f6f6' },
  { key: 'map', label: 'Map', icon: 'map-outline', color: '#e0f7fa' },
  { key: 'chat', label: 'Chat', icon: 'chatbubble-ellipses-outline', color: '#e8eaf6' },
  { key: 'wallet', label: 'Wallet', icon: 'wallet-outline', color: '#fff3e0' },
  { key: 'profile', label: 'Profile', icon: 'person-outline', color: '#f3e5f5' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const activeConfig = TABS.find((tab) => tab.key === activeTab) ?? TABS[0];

  return (
    <View style={[styles.container, { backgroundColor: activeConfig.color }]}>
      <StatusBar style="auto" />
      <View style={styles.pagePlaceholder}>
        <Ionicons name={activeConfig.icon} size={64} color="#222" />
        <Text style={styles.pageLabel}>{activeConfig.label}</Text>
        <Text style={styles.pageDescription}>This is the {activeConfig.label} page.</Text>
      </View>
      <View style={styles.tabBar}>
        {TABS.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <TouchableOpacity
              key={tab.key}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab.key)}
              accessibilityLabel={`${tab.label} tab`}
            >
              <Ionicons
                name={tab.icon}
                size={24}
                color={isActive ? '#111' : '#777'}
                style={styles.tabIcon}
              />
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagePlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageLabel: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 12,
  },
  pageDescription: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 32,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    color: '#777',
  },
  tabLabelActive: {
    color: '#111',
    fontWeight: '700',
  },
});
