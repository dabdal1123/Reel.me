import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@components/Screen';
import { FeatureList } from '@components/FeatureList';
import { typography } from '@theme/typography';
import { spacing } from '@theme/spacing';
import { colors } from '@theme/colors';
import { PrimaryButton } from '@components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

export function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <Screen>
      <View style={styles.header}>
        <Text style={typography.title}>Your profile</Text>
        <Text style={typography.subtitle}>Manage your trust badges, verification, and safety preferences.</Text>
      </View>
      <View style={styles.card}>
        <Text style={typography.subtitle}>Reputation</Text>
        <FeatureList
          title=""
          items={['Verified identity', 'Trusted connections', 'Check-in streaks', 'Community endorsements']}
        />
        <PrimaryButton label="Manage connections" onPress={() => navigation.navigate('Connections' as never)} />
      </View>
      <View style={styles.card}>
        <Text style={typography.subtitle}>Privacy controls</Text>
        <Text style={typography.body}>Choose who can see your check-ins, payment activity, and location status.</Text>
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
