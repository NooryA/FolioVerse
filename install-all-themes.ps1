# PowerShell script to install dependencies in all theme folders
Write-Host "🚀 Installing dependencies in all theme folders..." -ForegroundColor Green
Write-Host ""

# Get all theme folders (folders ending with "-theme")
$themeFolders = Get-ChildItem -Directory -Name "*-theme"

$totalFolders = $themeFolders.Count
$currentFolder = 0

Write-Host "Found $totalFolders theme folders to process" -ForegroundColor Yellow
Write-Host ""

foreach ($folder in $themeFolders) {
    $currentFolder++
    Write-Host "[$currentFolder/$totalFolders] Processing: $folder" -ForegroundColor Cyan
    
    # Check if package.json exists
    if (Test-Path "$folder/package.json") {
        Write-Host "  ✅ package.json found, running npm install..." -ForegroundColor Green
        
        # Change to the folder and run npm install
        Push-Location $folder
        
        try {
            # Run npm install with minimal output
            npm install --silent --no-progress 2>$null
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "  ✅ Successfully installed dependencies in $folder" -ForegroundColor Green
            } else {
                Write-Host "  ❌ Failed to install dependencies in $folder" -ForegroundColor Red
            }
        }
        catch {
            Write-Host "  ❌ Error installing dependencies in $folder" -ForegroundColor Red
        }
        finally {
            Pop-Location
        }
    } else {
        Write-Host "  ⚠️  No package.json found in $folder, skipping..." -ForegroundColor Yellow
    }
    
    Write-Host ""
}

Write-Host "🎉 Finished processing all theme folders!" -ForegroundColor Green
Write-Host ""
Write-Host "Summary:" -ForegroundColor Yellow
Write-Host "- Total folders processed: $totalFolders" -ForegroundColor White
Write-Host "- You can now run 'npm run dev' in any theme folder to start development" -ForegroundColor White
Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 