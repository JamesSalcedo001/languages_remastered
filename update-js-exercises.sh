#!/bin/bash

REMOTE_NAME="js-exercises"
BRANCH_NAME="js-daily-exercises-branch"
SUBDIR_PATH="javascript/language/frontend/js-daily-exercises"

echo "🔄 Splitting subtree from $SUBDIR_PATH..."

# Ensure clean split by deleting old branch if it exists
git branch -D $BRANCH_NAME 2>/dev/null

# Now create the split
git subtree split --prefix=$SUBDIR_PATH -b $BRANCH_NAME

echo "🚀 Pushing to $REMOTE_NAME:main..."
git push -f $REMOTE_NAME $BRANCH_NAME:main

echo "✅ Deployment updated! Check it at:"
echo "https://jamessalcedo001.github.io/JS-Exercises/"
