import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUpScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    console.log("Sign up pressed", {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
  };

  const handleLogin = () => {
    console.log("Login pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.signUpForm}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <Image source={require("@/assets/lodg.png")} />
              </View>

              <View style={styles.formContainer}>
                <View style={styles.intro}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.welcomeTitle}>Create Account 🚀</Text>
                  </View>
                  <Text style={styles.subtitle}>
                    Join us today and start managing your taxes with ease.
                  </Text>
                </View>

                <View style={styles.form}>
                  <View style={styles.inputsContainer}>
                    <View style={styles.nameRow}>
                      <View style={styles.nameInputGroup}>
                        <Text style={styles.label}>First Name</Text>
                        <View style={styles.nameInputField}>
                          <TextInput
                            style={styles.textInput}
                            placeholder="First name"
                            placeholderTextColor="#C8C8C8"
                            value={firstName}
                            onChangeText={setFirstName}
                            autoCapitalize="words"
                          />
                        </View>
                      </View>

                      <View style={styles.nameInputGroup}>
                        <Text style={styles.label}>Last Name</Text>
                        <View style={styles.nameInputField}>
                          <TextInput
                            style={styles.textInput}
                            placeholder="Last name"
                            placeholderTextColor="#C8C8C8"
                            value={lastName}
                            onChangeText={setLastName}
                            autoCapitalize="words"
                          />
                        </View>
                      </View>
                    </View>

                    <View style={styles.inputGroup}>
                      <Text style={styles.label}>Email Address</Text>
                      <View style={styles.inputField}>
                        <TextInput
                          style={styles.textInput}
                          placeholder="Enter your email"
                          placeholderTextColor="#C8C8C8"
                          value={email}
                          onChangeText={setEmail}
                          keyboardType="email-address"
                          autoCapitalize="none"
                        />
                      </View>
                    </View>

                    <View style={styles.inputGroup}>
                      <Text style={styles.label}>Password</Text>
                      <View style={styles.inputField}>
                        <TextInput
                          style={[styles.textInput, styles.passwordInput]}
                          placeholder="Create a password"
                          placeholderTextColor="#C8C8C8"
                          value={password}
                          onChangeText={setPassword}
                          secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                          style={styles.eyeIcon}
                          onPress={() => setShowPassword(!showPassword)}
                        >
                          <Ionicons
                            name={showPassword ? "eye-off" : "eye"}
                            size={18}
                            color="#C8C8C8"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.inputGroup}>
                      <Text style={styles.label}>Confirm Password</Text>
                      <View style={styles.inputField}>
                        <TextInput
                          style={[styles.textInput, styles.passwordInput]}
                          placeholder="Confirm your password"
                          placeholderTextColor="#C8C8C8"
                          value={confirmPassword}
                          onChangeText={setConfirmPassword}
                          secureTextEntry={!showConfirmPassword}
                        />
                        <TouchableOpacity
                          style={styles.eyeIcon}
                          onPress={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          <Ionicons
                            name={showConfirmPassword ? "eye-off" : "eye"}
                            size={18}
                            color="#C8C8C8"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={handleSignUp}
                  >
                    <Text style={styles.signUpButtonText}>Create Account</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.loginText}>
                Already have an account?{" "}
                <Text style={styles.loginLink}>Sign in</Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              © Lodg 2025. All rights reserved
            </Text>
            <Text style={styles.footerText}>
              Terms and Conditions | Privacy Policy
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: 44,
    minHeight: 756,
  },
  signUpForm: {
    width: 327,
    backgroundColor: "#FFFFFF",
    borderRadius: 23,
    alignSelf: "center",
    shadowColor: "#04329A",
    shadowOffset: {
      width: 0,
      height: 17,
    },
    shadowOpacity: 0.1,
    shadowRadius: 57.6,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    width: 279,
    gap: 40,
  },
  logo: {
    width: 124,
    height: 32,
    alignSelf: "center",
  },
  formContainer: {
    width: 279,
    gap: 40,
  },
  intro: {
    width: 279,
    gap: 12,
  },
  titleContainer: {
    width: 279,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 22,
    lineHeight: 36,
    color: "#0C1421",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    color: "#222529",
    textAlign: "center",
    letterSpacing: 0.02,
  },
  form: {
    width: 279,
    gap: 20,
  },
  inputsContainer: {
    width: 279,
    gap: 18,
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 279,
    gap: 12,
  },
  nameInputGroup: {
    flex: 1,
    gap: 8,
  },
  nameInputField: {
    height: 42,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  inputGroup: {
    width: 279,
    gap: 8,
  },
  label: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    color: "#545454",
  },
  inputField: {
    width: 279,
    height: 42,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontFamily: "PlusJakartaSans",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    color: "#303030",
    height: 40,
  },
  passwordInput: {
    paddingRight: 30,
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    width: 279,
    height: 46,
    backgroundColor: "#2256CB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  signUpButtonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  loginText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#222529",
    textAlign: "center",
    width: 279,
    marginTop: 12,
  },
  loginLink: {
    color: "#2256CB",
  },
  footer: {
    marginTop: 30,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  footerText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#888888",
    textAlign: "center",
  },
});
