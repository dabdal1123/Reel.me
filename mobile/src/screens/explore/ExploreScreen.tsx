import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@components/Screen';
import { FeatureList } from '@components/FeatureList';
import { typography } from '@theme/typography';
import { spacing } from '@theme/spacing';
import { colors } from '@theme/colors';

export function ExploreScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={typography.title}>Explore establishments</Text>
        <Text style={typography.subtitle}>
          Filter by safety signals, friends who frequent a spot, and perks offered to your network.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={typography.subtitle}>Suggested categories</Text>
        <FeatureList
          title=""
          items={['Late-night cafes', 'Partnered safe rides', 'Popular with your friends', 'Crypto-friendly venues']}
        />
      </View>
      <View style={styles.card}>
        <Text style={typography.subtitle}>Upcoming visits</Text>
        <Text style={typography.body}>
          Keep your calendar synced with planned meetups so auto check-in and payment shortcuts are ready.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  card: {
    marginTop: spacing.lg,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 16,
    gap: spacing.sm,
    borderColor: colors.border,
    borderWidth: 1,
  },
});
