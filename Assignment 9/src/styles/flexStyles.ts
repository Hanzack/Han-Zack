import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius } from './globalStyles';

export const flexStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.onSurface,
    marginBottom: spacing.md,
    marginTop: spacing.lg,
  },
  demoContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
    minHeight: 120,
  },
  // Flexbox Direction Examples
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
  },
  columnContainer: {
    flexDirection: 'column',
    backgroundColor: colors.lightGray,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
  },
  // Justify Content Examples
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  justifySpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  // Align Items Examples
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStretch: {
    alignItems: 'stretch',
  },
  // Flex Items
  flexItem: {
    backgroundColor: colors.primary,
    padding: spacing.sm,
    margin: spacing.xs,
    borderRadius: borderRadius.sm,
    minWidth: 60,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexItem1: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: spacing.sm,
    margin: spacing.xs,
    borderRadius: borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexItem2: {
    flex: 2,
    backgroundColor: colors.secondary,
    padding: spacing.sm,
    margin: spacing.xs,
    borderRadius: borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexItem3: {
    flex: 3,
    backgroundColor: colors.error,
    padding: spacing.sm,
    margin: spacing.xs,
    borderRadius: borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexItemText: {
    color: colors.onPrimary,
    fontWeight: 'bold',
    fontSize: 12,
  },
  // Position Examples
  positionContainer: {
    height: 200,
    backgroundColor: colors.lightGray,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
    position: 'relative',
  },
  absoluteItem: {
    position: 'absolute',
    backgroundColor: colors.primary,
    padding: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  topLeft: {
    top: 10,
    left: 10,
  },
  topRight: {
    top: 10,
    right: 10,
  },
  bottomLeft: {
    bottom: 10,
    left: 10,
  },
  bottomRight: {
    bottom: 10,
    right: 10,
  },
  center: {
    top: '50%',
    left: '50%',
    transform: [{ translateX: -30 }, { translateY: -15 }],
  },
});