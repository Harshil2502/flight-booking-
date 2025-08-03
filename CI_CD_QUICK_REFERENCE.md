# CI/CD Quick Reference

## 🚀 Quick Start

```bash
# Run the setup script
npm run setup-ci-cd

# Or manually
eas login
eas build:configure
```

## 📋 Required GitHub Secrets

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `EXPO_TOKEN` | Expo access token | https://expo.dev/accounts/[username]/settings/access-tokens |
| `GOOGLE_SERVICE_ACCOUNT_KEY` | Google Play Store service account | Google Cloud Console |

## 🔄 Workflow Triggers

| Branch | Event | Builds |
|--------|-------|--------|
| `develop` | Push/PR | Development APK + iOS Simulator |
| `main` | Push/PR | Staging APK + iOS IPA |
| `main` | Push only | Production APK + iOS IPA + Release |

## 🛠️ Local Commands

```bash
# Development
npm start                    # Start dev server
npm run build:android-dev   # Build dev APK
npm run build:ios-dev       # Build dev iOS

# Staging
npm run build:android-staging  # Build staging APK
npm run build:ios-staging      # Build staging iOS

# Production
npm run build:android-prod     # Build production APK
npm run build:ios-prod         # Build production iOS
npm run submit:android         # Submit to Play Store
npm run submit:ios            # Submit to App Store

# Testing
npm run test                   # Run all tests
npm run type-check            # TypeScript check
npm run lint                  # ESLint check
```

## 📱 Build Profiles

| Profile | Purpose | Distribution |
|---------|---------|--------------|
| `development` | Debug builds | Internal (APK + iOS Simulator) |
| `staging` | Testing builds | Internal (APK + iOS IPA) |
| `production` | Release builds | App Store (APK + iOS IPA) |

## 🔍 Monitoring

- **GitHub Actions**: `https://github.com/[username]/[repo]/actions`
- **Expo Dashboard**: `https://expo.dev/accounts/[username]/projects/[project]/builds`
- **Build Logs**: `eas build:view [BUILD_ID]`

## 🚨 Troubleshooting

```bash
# Check EAS status
eas whoami

# List builds
eas build:list

# View build details
eas build:view [BUILD_ID]

# Check project config
eas project:info
```

## 📦 Artifacts

### Android
- **Development APK**: Available in GitHub Actions artifacts
- **Staging APK**: Available in GitHub Actions artifacts  
- **Production APK**: Available in GitHub Actions artifacts + GitHub Releases

### iOS
- **Development IPA**: Available in GitHub Actions artifacts
- **Staging IPA**: Available in GitHub Actions artifacts
- **Production IPA**: Available in GitHub Actions artifacts + GitHub Releases

## 🔐 Security Notes

- Never commit `google-service-account.json`
- Rotate `EXPO_TOKEN` regularly
- Use environment-specific API endpoints
- Limit Google Service Account permissions

## 📞 Support

- [EAS Build Docs](https://docs.expo.dev/build/introduction/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Expo CLI Docs](https://docs.expo.dev/workflow/expo-cli/) 