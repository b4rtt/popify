import { forwardRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

import Colors from '@/constants/Colors';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

interface InputProps extends TextInputProps {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ label, helperText, error, style, ...props }, ref) => {
    const { colors } = useAppTheme();
    const [isFocused, setIsFocused] = useState(false);

    return (
      <View style={styles.container}>
        {label ? <Text style={[styles.label, { color: colors.subtle }]}>{label}</Text> : null}
        <TextInput
          ref={ref}
          style={[
            styles.input,
            {
              backgroundColor: colors.input,
              color: colors.text,
              borderColor: error ? '#ef4444' : isFocused ? Colors.primary : colors.border,
            },
            style,
          ]}
          placeholderTextColor={colors.placeholder}
          onFocus={(event) => {
            setIsFocused(true);
            props.onFocus?.(event);
          }}
          onBlur={(event) => {
            setIsFocused(false);
            props.onBlur?.(event);
          }}
          {...props}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {!error && helperText ? <Text style={[styles.helper, { color: colors.subtle }]}>{helperText}</Text> : null}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: Spacing.xs,
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  input: {
    width: '100%',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
  },
  helper: {
    marginTop: Spacing.xs,
    fontSize: FontSize.xs,
    fontFamily: 'Inter-Regular',
  },
  error: {
    marginTop: Spacing.xs,
    fontSize: FontSize.xs,
    fontFamily: 'Inter-Medium',
    color: '#ef4444',
  },
});
