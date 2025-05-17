import React, { useState } from 'react';
import { Switch } from 'react-native';

interface ToggleProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ value, onChange }) => {
  const [internalValue, setInternalValue] = useState(false);
  const isControlled = value !== undefined;

  const currentValue = isControlled ? value : internalValue;

  const toggle = () => {
    const newValue = !currentValue;
    if (!isControlled) setInternalValue(newValue);
    onChange?.(newValue);
  };

  return <Switch value={currentValue} onValueChange={toggle} />;
};

export default Toggle;
// // Example usage:
// // <Toggle value={true} onChange={(value) => console.log(value)} />