# CI/CD Pipeline Setup Guide

This guide will help you set up an automated CI/CD pipeline for your React Native Expo app using GitHub Actions and EAS Build.

## Prerequisites

1. **Expo Account**: Make sure you have an Expo account and are logged in
2. **EAS CLI**: Install EAS CLI globally
   ```bash
   npm install -g eas-cli
   ```
3. **GitHub Repository**: Your code should be in a GitHub repository

## Setup Steps

### 1. Initialize EAS Build

Run the following command in your project root:
```bash
eas build:configure
```

This will create the `eas.json` file with build configurations.

### 2. Set up GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add the following secrets:

#### Required Secrets:
- `EXPO_TOKEN`: Your Expo access token
  - Get it from: https://expo.dev/accounts/[username]/settings/access-tokens
  - Or run: `eas login` and then `eas whoami` to get your token

#### Optional Secrets (for Google Play Store submission):
- `GOOGLE_SERVICE_ACCOUNT_KEY`: Your Google Service Account JSON key
- `EAS_PROJECT_ID`: Your EAS project ID (usually auto-detected)

### 3. Configure Environment Variables

Update the `app.json` file with your actual package name:
```json
{
  "expo": {
    "android": {
      "package": "com.yourcompany.aditya"
    }
  }
}
```

### 4. Google Play Store Setup (Optional)

If you want to automatically submit to Google Play Store:

1. Create a Google Service Account
2. Download the JSON key file
3. Add it as a GitHub secret named `GOOGLE_SERVICE_ACCOUNT_KEY`
4. Place the file in your project root as `google-service-account.json`

### 5. App Store Connect Setup (Optional)

If you want to automatically submit to App Store Connect:

1. Get your Apple ID and Team ID from Apple Developer account
2. Get your App Store Connect App ID
3. Update the `eas.json` file with your actual values:
   ```json
   "ios": {
     "appleId": "your-actual-apple-id@example.com",
     "ascAppId": "your-actual-app-store-connect-app-id",
     "appleTeamId": "your-actual-apple-team-id"
   }
   ```

## Pipeline Workflow

### Branch Strategy:
- **`develop` branch**: Triggers development builds
- **`main` branch**: Triggers staging and production builds

### Build Profiles:
1. **Development**: Debug builds for testing (Android APK, iOS Simulator)
2. **Staging**: Internal distribution for testing (Android APK, iOS IPA)
3. **Production**: Release builds for app stores (Android APK, iOS IPA)

### What the Pipeline Does:

1. **Test Job**: Runs TypeScript checks and linting
2. **Build Jobs**: Creates APK and IPA files for different environments
3. **Deploy Job**: Creates GitHub releases and optionally submits to app stores

## Local Development

### Available Scripts:
```bash
# Start development server
npm start

# Build APK locally
npm run build:android-dev    # Development build
npm run build:android-staging # Staging build
npm run build:android-prod   # Production build

# Build IPA locally
npm run build:ios-dev        # Development build
npm run build:ios-staging    # Staging build
npm run build:ios-prod       # Production build

# Submit to app stores
npm run submit:android       # Google Play Store
npm run submit:ios          # App Store Connect

# Run tests
npm run test
```

### Manual Build Commands:
```bash
# Build for Android
eas build --platform android --profile development
eas build --platform android --profile staging
eas build --platform android --profile production

# Build for iOS
eas build --platform ios --profile development
eas build --platform ios --profile staging
eas build --platform ios --profile production
```

## Troubleshooting

### Common Issues:

1. **Build Fails**: Check EAS build logs in the Expo dashboard
2. **Authentication Issues**: Verify your `EXPO_TOKEN` is correct
3. **Package Name Conflicts**: Ensure your package name is unique
4. **Missing Dependencies**: Make sure all dependencies are in `package.json`

### Debug Commands:
```bash
# Check EAS status
eas whoami

# List recent builds
eas build:list

# View build logs
eas build:view [BUILD_ID]
```

## Security Best Practices

1. **Never commit secrets**: All sensitive data should be in GitHub secrets
2. **Use environment-specific configs**: Different API endpoints for dev/staging/prod
3. **Regular token rotation**: Rotate your Expo token periodically
4. **Limit permissions**: Use minimal required permissions for Google Service Account

## Monitoring

### GitHub Actions:
- Monitor builds in the Actions tab of your repository
- Set up notifications for build failures

### Expo Dashboard:
- Track builds at https://expo.dev/accounts/[username]/projects/[project]/builds
- Monitor app performance and crashes

## Next Steps

1. **Set up environment-specific configurations**
2. **Add automated testing**
3. **Configure app signing**
4. **Set up crash reporting**
5. **Add performance monitoring**

## Support

- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Expo CLI Documentation](https://docs.expo.dev/workflow/expo-cli/) 