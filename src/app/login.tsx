import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
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

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Login pressed", { email, password });
  };

  const handleForgotPassword = () => {
    console.log("Forgot password pressed");
  };

  const handleSignUp = () => {
    console.log("Sign up pressed");
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
          <View style={styles.loginForm}>
            <View style={styles.content}>
              <View style={styles.logo}>
                <Image source={require("@/assets/lodg.png")} />
              </View>

              <View style={styles.formContainer}>
                <View style={styles.intro}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.welcomeTitle}>Welcome back! 👋</Text>
                  </View>
                  <Text style={styles.subtitle}>
                    Sign in to your customer portal to start managing your
                    taxes.
                  </Text>
                </View>

                <View style={styles.form}>
                  <View style={styles.inputsContainer}>
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
                      <View style={styles.labelRow}>
                        <Text style={styles.label}>Password</Text>
                        <TouchableOpacity onPress={handleForgotPassword}>
                          <Text style={styles.forgotPassword}>
                            Forgot Password?
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.inputField}>
                        <TextInput
                          style={[styles.textInput, styles.passwordInput]}
                          placeholder="Enter your password"
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
                  </View>

                  <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                  >
                    <Text style={styles.loginButtonText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signUpText}>
                Don't you have an account?{" "}
                <Link
                  style={styles.signUpLink}
                  href="/signup"
                >
                  Sign up
                </Link>
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
  loginForm: {
    width: width - 60,
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
    gap: 50,
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
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  forgotPassword: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#2256CB",
  },
  loginButton: {
    width: 279,
    height: 46,
    backgroundColor: "#2256CB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  loginButtonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  signUpText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#222529",
    textAlign: "center",
    width: 279,
    marginTop: 12,
  },
  signUpLink: {
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
