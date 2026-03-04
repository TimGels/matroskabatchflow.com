# Suggested Commands

## Development
```bash
npm install       # Install dependencies
npm run dev       # Start dev server at localhost:4321
npm run build     # Build static output to dist/
npm run preview   # Preview the production build locally
```

## System Utilities (Windows)
```powershell
Get-ChildItem              # List files (alias: dir, ls)
Set-Location <path>        # Change directory (alias: cd)
Select-String -Pattern     # Search in files (like grep)
Test-Path <path>           # Check if file/dir exists
Get-Content <file>         # Read file contents (alias: cat)
git status                 # Git status
git diff                   # Git diff
git log --oneline -10      # Recent commits
```

## Notes
- No linter or formatter is configured in this project (no ESLint, Prettier, etc.)
- No test framework is configured
- The `version.ts` file is auto-updated by a GitHub Actions workflow — do not manually edit
- For commit message standards, see the `task_completion` memory
