import { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';


const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setActive] = useState(false);
  
    function Toggle(){
      setActive(!isActive);
    }
  
    function Reset(){
      setSeconds(0);
      setActive(false);
    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);      
      }
      else if (!isActive && seconds != 0) { 
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);
  
    return(
      <SafeAreaView style={styles.container}>
          <Text style={styles.timer}>{seconds}s</Text>
  
          <View style={styles.fixToText}>
            <Button title={isActive ? 'Stop' : 'Start'} onPress={Toggle}></Button>
            <Button title='Reset' onPress={Reset}></Button>
          </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    timer: {
      alignSelf: 'center',
      fontSize: 80,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent:  'space-around',
      alignItems: 'flex-start'
    },
  });

export default Timer;