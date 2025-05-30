#!/bin/bash

# Define the remote and branch names
REMOTE_NAME="js-exercises"
BRANCH_NAME="js-daily-exercises-branch"
SUBDIR_PATH="javascript/language/frontend/js-daily-exercises"

echo "🔄 Splitting subtree from $SUBDIR_PATH..."
git subtree split --prefix=$SUBDIR_PATH -b $BRANCH_NAME

echo "🚀 Pushing to $REMOTE_NAME:main..."
git push $REMOTE_NAME $BRANCH_NAME:main --force

echo "✅ Deployment updated! Check it at:"
echo "https://jamessalcedo001.github.io/JS-Exercises/"
