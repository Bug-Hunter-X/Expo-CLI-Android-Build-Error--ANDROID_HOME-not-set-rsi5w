# Expo CLI Android Build Error: ANDROID_HOME not set

This repository demonstrates a common error encountered when building Android projects with the Expo CLI.  The error, typically related to the `ANDROID_HOME` environment variable, prevents the build process from accessing necessary Android SDK components.

## Problem

When attempting to build an Android APK with `expo build:android`, the CLI might fail with an error indicating that the `ANDROID_HOME` environment variable is not set or that the `android` command is not in your system's PATH.

## Solution

This issue stems from an improperly configured Android development environment. To fix this:

1. **Install the Android SDK:** Ensure you have the Android SDK correctly installed and configured. You can download it from the official Android developer website.
2. **Set ANDROID_HOME:** Set the `ANDROID_HOME` environment variable to point to the directory containing your Android SDK installation.  The exact path depends on your system; it's typically found in a directory similar to `~/Library/Android/sdk` (macOS) or `C:\Users\<YourUserName>\AppData\Local\Android\Sdk` (Windows).
3. **Add platform-tools to your PATH:** Add the `platform-tools` directory within your Android SDK to your system's PATH environment variable. This allows your system to find the necessary Android tools.
4. **Restart your terminal or IDE:** After making these changes, restart your terminal or IDE to ensure the changes take effect.
5. **Verify the installation:** Run `expo build:android` again to verify the problem is resolved.

Note: The precise instructions for setting environment variables depend on your operating system (macOS, Windows, Linux).  Refer to your operating system's documentation for details.
