// app/signin.tsx
import { Text, TextInput, View, Pressable, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function Signin() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Text style={styles.titleText}>Welcome Back</Text>
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.subText}>Please sign in to your account</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput placeholder="example@email.com" style={styles.formControl} />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput placeholder="••••••••" secureTextEntry style={styles.passwordControl} />
          </View>
        </View>

        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>

      <View style={styles.dividerGroup}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>Or</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.secondaryButtonGroup}>
        <Pressable style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </Pressable>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don't have an account? </Text>
        <Text style={styles.signupSubTitleText}>Join now</Text>
      </View>
    </View>
  );
}
