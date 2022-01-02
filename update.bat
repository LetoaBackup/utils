@echo off
echo "Starting to publish new utils package..."
npm run build
git add *
set /p CommitMessage=Commit message?
git commit -m "%CommitMessage%"
pause