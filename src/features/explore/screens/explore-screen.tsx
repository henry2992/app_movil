import { StyleSheet } from 'react-native';

import { ThemedText } from '@/shared/components/themed-text';
import { ThemedView } from '@/shared/components/themed-view';

export function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>Explore</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
