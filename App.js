import React from 'react';
import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, ActivityIndicator, View, Text, TextInput, SafeAreaView, Button, TouchableOpacity, Image, ImageBackground, Alert, Animated } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import { Picker } from '@react-native-picker/picker';


const Stack = createNativeStackNavigator();

function MyScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LaunchScreen'
        component={LaunchScreen}
        options={{
          headerBackVisible: false,
          headerTransparent: true,
          headerTitleStyle: {
            color: 'black'
          },
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name='WelcomeScreen'
        component={WelcomeScreen}
        options={{
          headerBackVisible: false,
          headerTransparent: true,
          headerTitleStyle: {
            color: 'black'
          },
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name='LogInScreen'
        component={LogInScreen}
        options={{
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTitleStyle: {
            color: 'black'
          },
          headerTitle: 'Log in'
        }}
      />
      <Stack.Screen
        name='SignUpScreen'
        component={SignUpScreen1}
        options={{
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTitleStyle: {
            color: 'black'
          },
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name='Profilee'
        component={Profilee}
        options={{
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTitleStyle: {
            color: 'black'
          },
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyScreens />
    </NavigationContainer>
  );
};

const LaunchScreen = () => {

  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeScreen');
    }, 5000);
  }, []);

  return (
    <View style={styles.launch}>
      <Image source={require('./Logo.jpg')} style={styles.logo_launch} />
      <Text style={styles.title}>Ablaze</Text>
      <ActivityIndicator style={{ top: 280 }} size="small" color="#20B5CE" />
    </View>
  );
};

const WelcomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.welcomescreen}>

      <Image
        resizeMode='contain'
        style={styles.imagebg}
        source={require('./Welcbgi.jpg')}>
      </Image>

      <ImageBackground
        source={require('./Logo.jpg')}
        style={styles.logo}
      >
      </ImageBackground>

      {/* <Text style={styles.welcomeText}>Welcome to Ablaze!</Text> */}
      {/* <Text style={styles.welcomeText}> Where new friendships kindle</Text> */}

      <TouchableOpacity style={styles.logButton} onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.logButtonText}>Create an account!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.welclogin} onPress={() => navigation.navigate('LogInScreen')} >
        <Text style={styles.newAccText}>Log in</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const LogInScreen = ({ navigation }) => {
  const [text, SetText] = React.useState('');
  const [password, SetPassword] = React.useState('');

  return (

    <SafeAreaView style={styles.main}>
      <TextInput
        style={styles.loginTextBox}
        value={text}
        onChangeText={SetText}
        placeholder='Username or email'
        placeholderTextColor='gray'
      />

      <TextInput
        style={styles.loginTextBox}
        value={password}
        placeholder='Password'
        placeholderTextColor='gray'
        onChangeText={SetPassword}
      />

      <TouchableOpacity style={styles.logButton}>
        <Text style={styles.logButtonText}>Log in</Text>
      </TouchableOpacity>

      <Button title='Forgot password' />

      <View >
        <TouchableOpacity style={styles.newAcc}>
          <Text style={styles.newAccText}>Create account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
};

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0));  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};




const SignUpScreen1 = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (email === "" || password === "" || confirmPassword === "") {
      Alert.alert("Error", "Please fill in all the fields.");
    } else if (password !== confirmPassword) {
      Alert.alert("Error", "The passwords do not match.");
    } else {
      Alert.alert("Success", "You have signed up successfully.");
    }
  };

  const [flameAnim] = useState(new Animated.Value(0));
  const [flickerAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(flameAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true
        }),
        Animated.timing(flameAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true
        })
      ]),
      { useNativeDriver: true }
    ).start();

    Animated.loop(
      Animated.timing(flickerAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true
      }),
      { useNativeDriver: true }
    ).start();
  }, []);

  const flameOpacity = flameAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1]
  });

  const flameScale = flameAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1.2]
  });

  const flickerOpacity = flickerAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.8, 1]
  });

  return (

    <View style={styles.container}>

      <FadeInView >
        <Text style={styles.fadeAn}>
          Welcome to the Ablaze community!
        </Text>
      </FadeInView>

      <Animated.Image
        source={require('./flame.jpg')}
        style={[
          styles.flame,
          {
            opacity: flameOpacity,
            transform: [{ scaleX: flameScale }, { scaleY: flameScale }]
          }
        ]}
      />

      <ImageBackground
        style={styles.email}
        source={require('./email_logo.jpg')} ></ImageBackground>

      <Animated.View
        style={[
          styles.flicker,
          {
            opacity: flickerOpacity
          }
        ]}
      />

      <Text style={styles.title}>Create account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.newAcc1} onPress={() => navigation.navigate('Profilee')}>
        <Text style={styles.newAccText1}>Continue</Text>
      </TouchableOpacity>

    </View>
  );
};

const Profile = (navigation) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    // do something with the user input
    alert(`You entered: age: ${age}, gender: ${gender}, category: ${category}`);
  };

  return (
    <View style={styles.containerp1}>
      <Text style={styles.titlep1}>Welcome to my page!</Text>
      <Text style={styles.labelp1}>Please enter your age:</Text>
      <TextInput
        style={styles.inputp1}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Text style={styles.labelp1}>Please select your gender:</Text>
      <Picker
        style={styles.pickerp1}
        selectedValue={gender}
        onValueChange={setGender}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      <Text style={styles.labelp1}>Please choose your category:</Text>
      <Picker
        style={styles.pickerp1}
        selectedValue={category}
        onValueChange={setCategory}
      >
        <Picker.Item label="Highschool" value="highschool" />
        <Picker.Item label="University" value="university" />
        <Picker.Item label="Graduate school" value="graduate school" />
        <Picker.Item label="Middle age" value="middle age" />
      </Picker>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const Profilee = (navigation) => {
  const [birthday, setBirthday] = useState('');
  const [sex, setSex] = useState('');
  const [category, setCategory] = useState('');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const categoryOptions = [
    { label: 'High School', value: 'highschool' },
    { label: 'University', value: 'university' },
    { label: 'Graduate School', value: 'graduateschool' },
    { label: 'Middle Age', value: 'middleage' },
  ];

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log('Sign up:', { birthday, sex, category });
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const selectCategory = (value) => {
    setCategory(value);
    setIsCategoryDropdownOpen(false);
  };

  return (
    <View style={styles.container4}>
      <Text style={styles.title4}>Sign Up</Text>

      <View style={styles.inputContainer4}>
        <Text style={styles.label4}>Birthday</Text>
        <TextInput
          style={styles.input4}
          onChangeText={text => setBirthday(text)}
          value={birthday}
          placeholder="MM/DD/YYYY"
        />
      </View>

      <View style={styles.inputContainer4}>
        <Text style={styles.label4}>Sex</Text>
        <View style={styles.sexContainer4}>
          <TouchableOpacity
            style={[
              styles.sexButton4,
              sex === 'male' && styles.selectedSexButton4,
            ]}
            onPress={() => setSex('male')}
          >
            <Text style={styles.sexButtonText4}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sexButton,
              sex === 'female' && styles.selectedSexButton4,
            ]}
            onPress={() => setSex('female')}
          >
            <Text style={styles.sexButtonText4}>Female</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer4}>
        <Text style={styles.label4}>Age group</Text>
        <TouchableOpacity
          style={styles.categoryDropdown4}
          onPress={toggleCategoryDropdown}
        >
          <Text style={styles.categoryDropdownText4}>{category || 'Select age group'}</Text>
        </TouchableOpacity>

        {isCategoryDropdownOpen && (
          <View style={styles.categoryDropdownOptions4}>
            {categoryOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={styles.categoryOption4}
                onPress={() => selectCategory(option.value)}
              >
                <Text style={styles.categoryOptionText4}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.signUpButton4} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText4}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container4: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#63E4CE",
  },
  title4: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  inputContainer4: {
    width: '100%',
    marginBottom: 16,
  },
  label4: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input4: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  sexContainer4: {
    flexDirection: 'row',
  },
  sexButton4: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    marginHorizontal: 4,
  },
  selectedSexButton4: {
    backgroundColor: '#2196f3',
  },
  sexButtonText4: {
    textAlign: 'center',
    color: '#000',
  },
  categoryDropdown4: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryDropdownText4: {
    color: '#000',
  },
  categoryDropdownOptions4: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  categoryOption4: {
    padding: 10,
  },
  categoryOptionText4: {
    color: '#000',
  },
  signUpButton4: {
    backgroundColor: '#2196f3',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 4,
    marginTop: 32,
  },
  signUpButtonText4: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeText: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    fontSize: 23,
    padding: 5,
    color: 'black',
    top: -380,
    fontWeight: 'bold',
    fontFamily: 'Noteworthy',

  },
  fadeAn: {
    fontSize: 24,
    fontFamily: 'Papyrus',
    textAlign: 'center',
    top: 1,

  },
  flame: {
    width: 150,
    height: 200,
    top: 10
  },
  email: {
    width: 50,
    height: 50,
    top: 113,
    left: 120,
  },
  imagebg: {
    // position: 'absolute',
     width: 450,
     //height: 400,
    // left: -190,
    // top: -90,
    flex: 1,
    //alignContent: 'flex-start',
    justifyContent: 'center',


  },
  input: {
    width: 300,
    height: 40,
    borderColor: "#212121",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    justifyContent: 'flex-start',
    fontFamily: 'TrebuchetMS-Italic',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,

  },
  Signup2: {
    flex: 1,

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
    fontFamily: 'Papyrus',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#63E4CE",
    alignItems: "center",
    justifyContent: "center",
  },
  launch: {
    flex: 1,
    backgroundColor: "#f5f5dc",
    alignItems: "center",
    justifyContent: "center",
  },
  loginTextBox: {
    height: 60,
    width: 390,
    padding: 10,
    borderWidth: 1,
    borderRadius: 25,
    margin: 6,
    fontSize: 17,
    fontFamily: 'Papyrus',
    backgroundColor: "#faf0e6",
  },
  logo: {
    width: 310,
    height: 310,
    marginBottom: 420,
    justifyContent: 'flex-start',
    position: 'absolute',
    top: -15,

  },
  logo_launch: {
    width: 310,
    height: 310,
    marginBottom: 420,
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 160,

  },
  welclogin: {
    backgroundColor: "#20B5CE",
    height: 60,
    width: 140,
    borderRadius: 25,
    alignContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    //top: -0,
  },
  welcomescreen: {
    flex: 1,
    backgroundColor: "#f5f5dc",
    justifyContent: 'center',
    alignItems: 'center',

  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#f5f5dc",
  },
  logButton: {

    backgroundColor: "#20B5CE",
    height: 60,
    width: 370,
    borderRadius: 25,
    // alignContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    marginBottom: 30,
    //top: -100
    alignContent: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  logButtonText: {

    fontSize: 19,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Papyrus',
  },
  newAcc: {
    backgroundColor: "#20B5CE",
    height: 60,
    width: 140,
    borderRadius: 25,
    alignContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    bottom: -240,

  }, newAcc1: {
    backgroundColor: "#20B5CE",
    height: 60,
    width: 240,
    borderRadius: 25,
    alignContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    bottom: -40,

  },
  newAccText: {
    fontSize: 19,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Papyrus',

  },
  newAccText1: {
    fontSize: 19,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Papyrus',

  },

});


export default App;

