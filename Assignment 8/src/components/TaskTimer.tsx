import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface TaskTimerProps {
  onTimeUpdate?: (secondsElapsed: number) => void;
  initialSeconds?: number;
}

const TaskTimer: React.FC<TaskTimerProps> = ({ onTimeUpdate, initialSeconds = 0 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  // Use number | null here for React Native timer IDs
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setSeconds((prev) => {
          const newSeconds = prev + 1;
          if (onTimeUpdate) {
            onTimeUpdate(newSeconds);
          }
          return newSeconds;
        });
      }, 1000);
    } else if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, onTimeUpdate]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(initialSeconds);
    if (onTimeUpdate) {
      onTimeUpdate(initialSeconds);
    }
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(seconds)}</Text>
      <View style={styles.buttons}>
        <Button title={isRunning ? 'Pause' : 'Start'} onPress={handleStartPause} />
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
    width: '60%',
    justifyContent: 'space-around',
  },
});

export default TaskTimer;
