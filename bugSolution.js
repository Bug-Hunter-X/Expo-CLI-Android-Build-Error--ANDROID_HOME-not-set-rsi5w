This solution focuses on resolving the ANDROID_HOME environment variable issue and making sure the correct paths are set:

**For macOS:**

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

Add these lines to your shell configuration file (e.g., `~/.bashrc` or `~/.zshrc`) to make the changes permanent.

**For Windows:**

1. Search for "environment variables" in the Windows search bar.
2. Click "Edit the system environment variables".
3. Click "Environment Variables...".
4. Under "System variables", click "New".
5. Set Variable name to `ANDROID_HOME` and Variable value to your Android SDK path (e.g., `C:\Users\YourUserName\AppData\Local\Android\Sdk`).
6. Select the `Path` variable and click "Edit..."
7. Click "New" and add `%ANDROID_HOME%\tools` and `%ANDROID_HOME%\platform-tools`.
8. Apply the changes and restart your command prompt or terminal.

**Verify After Change:**

After setting the environment variables, run this command in your terminal to verify it's correctly set.
```bash
echo $ANDROID_HOME
```
This should print your Android SDK path.  If not, double-check your steps.