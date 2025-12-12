import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@components/Screen';
import { FeatureList } from '@components/FeatureList';
import { typography } from '@theme/typography';
import { spacing } from '@theme/spacing';
import { colors } from '@theme/colors';

export function ConnectionsScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={typography.title}>Connections</Text>
        <Text style={typography.subtitle}>
          Build a trusted network to enable check-ins, split payments, and safety notifications.
        </Text>
      </View>
      <View style={styles.card}>
        <FeatureList
          title="Pending requests"
          items={['Jo invites you to share safety updates', 'Local cafe wants to be a trusted spot']}
        />
      </View>
      <View style={styles.card}>
        <FeatureList title="Trusted circles" items={['Close friends', 'Ride home crew', 'Workmates']} />
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
