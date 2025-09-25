import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import PageLayout from "@/layouts/PageLayout";

interface ContactDetailsData {
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  occupation: string;
}

interface AddressData {
  addressLine1: string;
  addressLine2: string;
  country: string;
  city: string;
  zipCode: string;
}

interface FinancialDetailsData {
  bankName: string;
  bankAccount: string;
  billingEmail: string;
  irdNumber: string;
  gstNumber: string;
  earningsExceeded: string;
  taxIssues: string;
}

interface Tab {
  id: string;
  label: string;
}

export default function AccountProfileScreen() {
  const [activeTab, setActiveTab] = useState("contact");
  const [showChangePassword, setShowChangePassword] = useState(false);

  const router = useRouter();

  const [contactDetails, setContactDetails] = useState<ContactDetailsData>({
    username: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    occupation: "",
  });

  const [address, setAddress] = useState<AddressData>({
    addressLine1: "",
    addressLine2: "",
    country: "",
    city: "",
    zipCode: "",
  });

  const [financialDetails, setFinancialDetails] =
    useState<FinancialDetailsData>({
      bankName: "",
      bankAccount: "",
      billingEmail: "",
      irdNumber: "",
      gstNumber: "",
      earningsExceeded: "",
      taxIssues: "",
    });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const tabs: Tab[] = [
    { id: "contact", label: "Contact Details" },
    { id: "address", label: "Address" },
    { id: "financial", label: "Financial Details" },
    { id: "privacy", label: "Privacy & Security" },
  ];

  const handleContactDetailsChange = (
    field: keyof ContactDetailsData,
    value: string,
  ) => {
    setContactDetails(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddressChange = (field: keyof AddressData, value: string) => {
    setAddress(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFinancialDetailsChange = (
    field: keyof FinancialDetailsData,
    value: string,
  ) => {
    setFinancialDetails(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleChangePasswordPress = () => {
    setShowChangePassword(true);
  };

  const handleUpdatePassword = () => {
    console.log("Updating password:", passwordData);
    // Handle password update logic here
    setShowChangePassword(false);
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleBackToSecurity = () => {
    setShowChangePassword(false);
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleSave = () => {
    console.log("Saving profile data:", {
      contactDetails,
      address,
      financialDetails,
    });
  };

  const handleBackPress = () => {
    if (showChangePassword) {
      handleBackToSecurity();
    } else {
      router.push("/settings");
    }
  };

  const renderContactDetails = () => (
    <View style={styles.formContent}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Username</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            placeholderTextColor="#ADADAD"
            value={contactDetails.username}
            onChangeText={value =>
              handleContactDetailsChange("username", value)
            }
          />
        </View>
      </View>

      <View style={styles.dateRow}>
        <View style={styles.halfFieldContainer}>
          <Text style={styles.label}>First Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter first name"
              placeholderTextColor="#ADADAD"
              value={contactDetails.firstName}
              onChangeText={value =>
                handleContactDetailsChange("firstName", value)
              }
            />
          </View>
        </View>

        <View style={styles.halfFieldContainer}>
          <Text style={styles.label}>Last Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter last name"
              placeholderTextColor="#ADADAD"
              value={contactDetails.lastName}
              onChangeText={value =>
                handleContactDetailsChange("lastName", value)
              }
            />
          </View>
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor="#ADADAD"
            value={contactDetails.phoneNumber}
            onChangeText={value =>
              handleContactDetailsChange("phoneNumber", value)
            }
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Occupation</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter occupation"
            placeholderTextColor="#ADADAD"
            value={contactDetails.occupation}
            onChangeText={value =>
              handleContactDetailsChange("occupation", value)
            }
          />
        </View>
      </View>
    </View>
  );

  const renderAddress = () => (
    <View style={styles.formContent}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Address Line 1</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter address line 1"
            placeholderTextColor="#ADADAD"
            value={address.addressLine1}
            onChangeText={value => handleAddressChange("addressLine1", value)}
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Address Line 2</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter address line 2"
            placeholderTextColor="#ADADAD"
            value={address.addressLine2}
            onChangeText={value => handleAddressChange("addressLine2", value)}
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Country</Text>
        <TouchableOpacity style={styles.selectContainer}>
          <Text style={styles.selectText}>
            {address.country || "Select country"}
          </Text>
          <Ionicons
            name="chevron-down"
            size={16}
            color="#676767"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>City</Text>
        <TouchableOpacity style={styles.selectContainer}>
          <Text style={styles.selectText}>{address.city || "Select city"}</Text>
          <Ionicons
            name="chevron-down"
            size={16}
            color="#676767"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Zip Code</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter zip code"
            placeholderTextColor="#ADADAD"
            value={address.zipCode}
            onChangeText={value => handleAddressChange("zipCode", value)}
          />
        </View>
      </View>
    </View>
  );

  const renderFinancialDetails = () => (
    <View style={styles.formContent}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Bank Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter bank name"
            placeholderTextColor="#ADADAD"
            value={financialDetails.bankName}
            onChangeText={value =>
              handleFinancialDetailsChange("bankName", value)
            }
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Bank Account</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter bank account"
            placeholderTextColor="#ADADAD"
            value={financialDetails.bankAccount}
            onChangeText={value =>
              handleFinancialDetailsChange("bankAccount", value)
            }
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Billing Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter billing email"
            placeholderTextColor="#ADADAD"
            value={financialDetails.billingEmail}
            onChangeText={value =>
              handleFinancialDetailsChange("billingEmail", value)
            }
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>IRD Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter IRD number"
            placeholderTextColor="#ADADAD"
            value={financialDetails.irdNumber}
            onChangeText={value =>
              handleFinancialDetailsChange("irdNumber", value)
            }
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>GST Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter GST number"
            placeholderTextColor="#ADADAD"
            value={financialDetails.gstNumber}
            onChangeText={value =>
              handleFinancialDetailsChange("gstNumber", value)
            }
          />
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>
          Have your earnings exceeded $60K in the last year, or do you expect
          them to exceed $60K this year?
        </Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() =>
              handleFinancialDetailsChange("earningsExceeded", "yes")
            }
          >
            <View
              style={[
                styles.radioButton,
                financialDetails.earningsExceeded === "yes" &&
                  styles.radioButtonSelected,
              ]}
            >
              {financialDetails.earningsExceeded === "yes" && (
                <View style={styles.radioButtonInner} />
              )}
            </View>
            <Text style={styles.radioText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() =>
              handleFinancialDetailsChange("earningsExceeded", "no")
            }
          >
            <View
              style={[
                styles.radioButton,
                financialDetails.earningsExceeded === "no" &&
                  styles.radioButtonSelected,
              ]}
            >
              {financialDetails.earningsExceeded === "no" && (
                <View style={styles.radioButtonInner} />
              )}
            </View>
            <Text style={styles.radioText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>
          Do you have any unresolved tax issues from previous years?
        </Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => handleFinancialDetailsChange("taxIssues", "yes")}
          >
            <View
              style={[
                styles.radioButton,
                financialDetails.taxIssues === "yes" &&
                  styles.radioButtonSelected,
              ]}
            >
              {financialDetails.taxIssues === "yes" && (
                <View style={styles.radioButtonInner} />
              )}
            </View>
            <Text style={styles.radioText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => handleFinancialDetailsChange("taxIssues", "no")}
          >
            <View
              style={[
                styles.radioButton,
                financialDetails.taxIssues === "no" &&
                  styles.radioButtonSelected,
              ]}
            >
              {financialDetails.taxIssues === "no" && (
                <View style={styles.radioButtonInner} />
              )}
            </View>
            <Text style={styles.radioText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderPrivacySecurity = () => {
    if (showChangePassword) {
      return (
        <View style={styles.formContent}>
          {/* Current Password */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Current Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="-"
                placeholderTextColor="#ADADAD"
                secureTextEntry
                value={passwordData.currentPassword}
                onChangeText={value =>
                  handlePasswordChange("currentPassword", value)
                }
              />
            </View>
          </View>

          {/* New Password */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>New Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="-"
                placeholderTextColor="#ADADAD"
                secureTextEntry
                value={passwordData.newPassword}
                onChangeText={value =>
                  handlePasswordChange("newPassword", value)
                }
              />
            </View>
          </View>

          {/* Confirm New Password */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Confirm New Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="-"
                placeholderTextColor="#ADADAD"
                secureTextEntry
                value={passwordData.confirmPassword}
                onChangeText={value =>
                  handlePasswordChange("confirmPassword", value)
                }
              />
            </View>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.formContent}>
        <View style={styles.securityOptionsContainer}>
          {/* Two-Factor Authentication */}
          <TouchableOpacity style={styles.securityOption}>
            <View style={styles.securityIconContainer}>
              <Ionicons
                name="shield-checkmark"
                size={24}
                color="#2256CB"
              />
            </View>
            <View style={styles.securityTextContainer}>
              <Text style={styles.securityTitle}>Secure your account</Text>
              <Text style={styles.securityDescription}>
                Set up Two-Factor Authentication (2FA) to enhance the security
                of your account.
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#999999"
            />
          </TouchableOpacity>

          {/* Change Password */}
          <TouchableOpacity
            style={styles.securityOption}
            onPress={handleChangePasswordPress}
          >
            <View style={styles.securityIconContainer}>
              <Ionicons
                name="lock-closed"
                size={24}
                color="#2256CB"
              />
            </View>
            <View style={styles.securityTextContainer}>
              <Text style={styles.securityTitle}>Change your Password</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#999999"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "contact":
        return renderContactDetails();
      case "address":
        return renderAddress();
      case "financial":
        return renderFinancialDetails();
      case "privacy":
        return renderPrivacySecurity();
      default:
        return renderContactDetails();
    }
  };

  const getHeaderTitle = () => {
    if (activeTab === "privacy" && showChangePassword) {
      return "Change Password";
    }
    return "Profile Details";
  };

  const shouldShowButton = () => {
    if (activeTab === "privacy") {
      return showChangePassword;
    }
    return true;
  };

  const getButtonText = () => {
    if (activeTab === "privacy" && showChangePassword) {
      return "Change Password";
    }
    return "Save Changes";
  };

  const handleButtonPress = () => {
    if (activeTab === "privacy" && showChangePassword) {
      handleUpdatePassword();
    } else {
      handleSave();
    }
  };

  return (
    <PageLayout
      breadcrumb="Settings  /  Profile Details"
      title="Account Profile"
      onBackPress={handleBackPress}
    >
      <View style={styles.content}>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <View style={styles.headerContent}>
              {activeTab === "privacy" && showChangePassword && (
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={handleBackToSecurity}
                >
                  <Ionicons
                    name="chevron-back"
                    size={20}
                    color="#2256CB"
                  />
                </TouchableOpacity>
              )}
              <Text style={styles.tableTitle}>{getHeaderTitle()}</Text>
            </View>
          </View>

          <View style={styles.listContainer}>
            {!showChangePassword && (
              <View style={styles.tabContainerWrapper}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.tabScrollView}
                  contentContainerStyle={styles.tabContainer}
                >
                  {tabs.map(tab => (
                    <TouchableOpacity
                      key={tab.id}
                      style={[
                        styles.tab,
                        activeTab === tab.id && styles.activeTab,
                      ]}
                      onPress={() => setActiveTab(tab.id)}
                    >
                      <Text
                        style={[
                          styles.tabText,
                          activeTab === tab.id && styles.activeTabText,
                        ]}
                      >
                        {tab.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}

            <View style={styles.formContainer}>
              {renderTabContent()}

              {shouldShowButton() && (
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.saveButton,
                      activeTab === "privacy" &&
                        showChangePassword &&
                        styles.updatePasswordButton,
                    ]}
                    onPress={handleButtonPress}
                  >
                    <Text style={styles.buttonText}>{getButtonText()}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 16,
  },
  tableContainer: {
    backgroundColor: "#FEFEFE",
    borderRadius: 14,
  },
  tableHeader: {
    padding: 20,
    paddingBottom: 16,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F0F7FE",
    justifyContent: "center",
    alignItems: "center",
  },
  tableTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 18,
    lineHeight: 28,
    color: "#222529",
  },
  listContainer: {
    gap: 12,
  },
  tabContainerWrapper: {
    backgroundColor: "#F0F7FE",
    borderBottomWidth: 3,
    borderBottomColor: "rgba(34, 86, 203, 0.1)",
  },
  tabScrollView: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingRight: 24,
    minWidth: "100%",
  },
  tab: {
    paddingHorizontal: 8,
    paddingBottom: 12,
    marginRight: 16,
    position: "relative",
    minWidth: "auto",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#2256CB",
    marginBottom: -3,
  },
  tabText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0.28,
    color: "#676767",
  },
  activeTabText: {
    color: "#2256CB",
  },
  formContainer: {
    paddingBottom: 24,
  },
  formContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 16,
  },
  securityOptionsContainer: {
    gap: 30,
  },
  securityOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 8,
  },
  securityIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#F7F7F7",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  securityTextContainer: {
    flex: 1,
    gap: 2,
  },
  securityTitle: {
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
    color: "#222529",
  },
  securityDescription: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
  fieldContainer: {
    gap: 8,
  },
  halfFieldContainer: {
    flex: 1,
    gap: 8,
  },
  dateRow: {
    flexDirection: "row",
    gap: 16,
  },
  label: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#676767",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 8,
    height: 42,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  input: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
    color: "#363636",
    padding: 0,
    margin: 0,
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 8,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  selectText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
    color: "#ADADAD",
  },
  radioGroup: {
    flexDirection: "row",
    gap: 24,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#C8C8C8",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    borderColor: "#2256CB",
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#2256CB",
  },
  radioText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 14,
    lineHeight: 20,
    color: "#363636",
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  saveButton: {
    backgroundColor: "#2256CB",
    borderRadius: 12,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    alignSelf: "flex-start",
  },
  updatePasswordButton: {
    minWidth: 139,
  },
  buttonText: {
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    lineHeight: 18,
    color: "#FEFEFE",
  },
});
