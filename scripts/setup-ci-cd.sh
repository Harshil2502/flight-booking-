#!/bin/bash

echo "🚀 Setting up CI/CD Pipeline for React Native Expo App"
echo "=================================================="

# Check if EAS CLI is installed
if ! command -v eas &> /dev/null; then
    echo "❌ EAS CLI is not installed. Installing now..."
    npm install -g eas-cli
else
    echo "✅ EAS CLI is already installed"
fi

# Check if user is logged in to Expo
if ! eas whoami &> /dev/null; then
    echo "❌ Not logged in to Expo. Please run 'eas login' first"
    exit 1
else
    echo "✅ Logged in to Expo"
fi

# Initialize EAS build configuration
echo "📝 Initializing EAS build configuration..."
if [ ! -f "eas.json" ]; then
    eas build:configure
    echo "✅ EAS configuration created"
else
    echo "✅ EAS configuration already exists"
fi

# Check if GitHub repository exists
if git remote get-url origin &> /dev/null; then
    echo "✅ Git repository found"
    REPO_URL=$(git remote get-url origin)
    echo "   Repository: $REPO_URL"
else
    echo "❌ No Git repository found. Please initialize Git and add a remote origin"
    exit 1
fi

echo ""
echo "🎉 Setup Complete!"
echo "=================================================="
echo ""
echo "Next steps:"
echo "1. Add your EXPO_TOKEN to GitHub Secrets:"
echo "   - Go to your GitHub repository → Settings → Secrets and variables → Actions"
echo "   - Add secret: EXPO_TOKEN"
echo "   - Get your token from: https://expo.dev/accounts/[username]/settings/access-tokens"
echo ""
echo "2. Update your package name in app.json:"
echo "   - Change 'com.yourcompany.aditya' to your actual package name"
echo ""
echo "3. Push your code to trigger the first build:"
echo "   git add ."
echo "   git commit -m 'Add CI/CD pipeline'"
echo "   git push origin main"
echo ""
echo "4. Monitor your builds:"
echo "   - GitHub Actions: https://github.com/[username]/[repo]/actions"
echo "   - Expo Dashboard: https://expo.dev/accounts/[username]/projects/[project]/builds"
echo ""
echo "📚 For more information, see CI_CD_SETUP.md" 