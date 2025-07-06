# **************************************************************************
# start-servers.ps1
# PowerShell script to control starting, stopping, and listing multiple server processes
# Author: Satya (update as needed)
# Date: July 2025
#
# USAGE:
#   Dot-source this script to make the functions available in your session:
#       . .\start-servers.ps1
#   Then run:
#       Show-ServerFunctions
#   to see available commands.
#
# Future Enhancements:
# 1. Move server scripts to a persistent location (e.g., a config file or database)
#
# Fixes:
# 1. confirmation prompts for starting/stopping all servers 7/5/2025
# 2. Start-Server-By-Name function to start specific servers by name 7/5/2025
# **************************************************************************

# Global variable to store server info
$Global:ServerProcesses = @()

# Server map: define all server scripts here
$Global:ServerScripts = @(
    'start-ux-with-log.ps1',
#   'start-ux.ps1',
    'C:\satya\data\code\mcp-servers-testrepo\mcp-claims-python\runclaims-http.ps1',
    'C:\satya\data\code\mcp-servers-testrepo\mcp-claims-python\runinspector.ps1',
    'C:\satya\data\code\mcp-servers-testrepo\mcp-cmdb-python\runcmdb-http.ps1',
    'C:\satya\data\code\mcp-servers-testrepo\mcp-provider-python\runprovider-http.ps1',
    'C:\satya\data\code\mcp-servers-testrepo\mcp-prompts-python\runprompts-http.ps1'
    # Add more: 'start-api.ps1', etc.
)

# Function: Start a process and return its process object
function global:Start-ServerProcess {
    param(
        [string]$Name,
        [string]$Command,
        [string[]]$Arguments
    )
    # Start the process in a new window
    if ($Arguments -and $Arguments.Count -gt 0) {
        $proc = Start-Process -FilePath $Command -ArgumentList $Arguments -PassThru -WindowStyle Normal
    } else {
        $proc = Start-Process -FilePath $Command -PassThru -WindowStyle Normal
    }
    $Global:ServerProcesses += [PSCustomObject]@{
        Name = $Name
        Id = $proc.Id
        Process = $proc
    }
    Write-Host "Started $Name (PID: $($proc.Id))" -ForegroundColor Green
    return $proc
}

function global:New-ServerSpec {
    param(
        [string]$FileName
    )
    $base = [System.IO.Path]::GetFileNameWithoutExtension($FileName)
    $name = $base -replace '^start-', '' # Remove 'start-' prefix if present
    return @{
        Name = $name
        Command = 'powershell.exe'
        Arguments = @('-NoExit', '-File', $FileName)
    }
}

# Function: Start all servers in parallel
function global:Start-Servers {
    $confirm = Read-Host "Are you sure you want to start ALL servers? (yes/no)"
    if ($confirm -ne 'yes') {
        Write-Host "Aborted starting all servers." -ForegroundColor Yellow
        return
    }
    # Build server specs from the global server scripts list
    $servers = $Global:ServerScripts | ForEach-Object { New-ServerSpec $_ }
    foreach ($srv in $servers) {
        Start-ServerProcess -Name $srv.Name -Command $srv.Command -Arguments $srv.Arguments | Out-Null
    }
    Write-Host "All servers started. Use List-Servers to see running servers." -ForegroundColor Cyan
}

# Function: List all running servers
function global:List-Servers {
    if ($Global:ServerProcesses.Count -eq 0) {
        Write-Host "No servers are currently tracked." -ForegroundColor Yellow
        return
    }
    Write-Host "\nRunning Servers:" -ForegroundColor Cyan
    foreach ($srv in $Global:ServerProcesses) {
        $proc = Get-Process -Id $srv.Id -ErrorAction SilentlyContinue
        if ($proc) {
            Write-Host "$($srv.Name) (PID: $($srv.Id)) - Running"
        } else {
            Write-Host "$($srv.Name) (PID: $($srv.Id)) - Not Running" -ForegroundColor Red
        }
    }
}

# Function: Stop all servers
function global:Stop-Servers {
    $confirm = Read-Host "Are you sure you want to STOP ALL servers? (yes/no)"
    if ($confirm -ne 'yes') {
        Write-Host "Aborted stopping all servers." -ForegroundColor Yellow
        return
    }
    foreach ($srv in $Global:ServerProcesses) {
        try {
            # Use taskkill to kill the process tree (parent and all children)
            Start-Process -FilePath "taskkill" -ArgumentList "/PID $($srv.Id) /T /F" -NoNewWindow -Wait
            Write-Host "Stopped $($srv.Name) (PID: $($srv.Id)) and its child processes" -ForegroundColor Yellow
        } catch {
            Write-Host "Could not stop $($srv.Name) (PID: $($srv.Id)): $_" -ForegroundColor Red
        }
    }
    $Global:ServerProcesses = @()
    Write-Host "All servers stopped." -ForegroundColor Cyan
}

# Function: Stop a server by name
function global:Stop-Server-By-Name {
    if ($Global:ServerProcesses.Count -eq 0) {
        Write-Host "No servers are currently tracked." -ForegroundColor Yellow
        return
    }
    while ($Global:ServerProcesses.Count -gt 0) {
        $names = @($Global:ServerProcesses | ForEach-Object { $_.Name } | Where-Object { $_ -and $_ -ne '' } | Select-Object -Unique)
        if ($names.Count -eq 0) {
            Write-Host "No valid server names to stop." -ForegroundColor Yellow
            return
        }
        Write-Host "Current tracked server names: $($names -join ', ')" -ForegroundColor DarkGray
        Write-Host "Select a server to stop:"
        for ($i = 0; $i -lt $names.Count; $i++) {
            Write-Host "$($i+1). $($names[$i])"
        }
        $sel = Read-Host "Enter number (or press Enter to cancel)"
        if ([string]::IsNullOrWhiteSpace($sel)) { return }
        if ($sel -match '^[0-9]+$' -and $sel -ge 1 -and $sel -le $names.Count) {
            $choice = $names[$sel-1]
            $srv = $Global:ServerProcesses | Where-Object { $_.Name -eq $choice } | Select-Object -First 1
            if ($srv) {
                try {
                    Start-Process -FilePath "taskkill" -ArgumentList "/PID $($srv.Id) /T /F" -NoNewWindow -Wait
                    Write-Host "Stopped $($srv.Name) (PID: $($srv.Id)) and its child processes" -ForegroundColor Yellow
                    $Global:ServerProcesses = $Global:ServerProcesses | Where-Object { $_.Name -ne $choice }
                    return  # Exit after stopping one server
                } catch {
                    Write-Host "Could not stop $($srv.Name) (PID: $($srv.Id)): $_" -ForegroundColor Red
                    return
                }
            }
        } else {
            Write-Host "Invalid selection. Try again." -ForegroundColor Red
        }
    }
}

# Function: Start a server by name
function global:Start-Server-By-Name {
    # Build server specs from the global server scripts list
    $servers = $Global:ServerScripts | ForEach-Object { New-ServerSpec $_ }
    $runningNames = $Global:ServerProcesses | ForEach-Object { $_.Name }
    Write-Host "Available servers to start:" -ForegroundColor Cyan
    for ($i = 0; $i -lt $servers.Count; $i++) {
        $srv = $servers[$i]
        $isRunning = $runningNames -contains $srv.Name
        $status = if ($isRunning) { "(Running)" } else { "(Stopped)" }
        Write-Host "$($i+1). $($srv.Name) $status"
    }
    $sel = Read-Host "Enter number to start server (or press Enter to cancel)"
    if ([string]::IsNullOrWhiteSpace($sel)) { return }
    if ($sel -match '^[0-9]+$' -and $sel -ge 1 -and $sel -le $servers.Count) {
        $choice = $servers[$sel-1]
        $isRunning = $runningNames -contains $choice.Name
        if ($isRunning) {
            Write-Host "Server '$($choice.Name)' is already running." -ForegroundColor Yellow
        } else {
            Start-ServerProcess -Name $choice.Name -Command $choice.Command -Arguments $choice.Arguments | Out-Null
            Write-Host "Started server '$($choice.Name)'" -ForegroundColor Green
        }
    } else {
        Write-Host "Invalid selection. Try again." -ForegroundColor Red
    }
}

# Function: Show available global functions and their descriptions
function global:Show-ServerFunctions {
    Write-Host "\nAvailable Server Control Functions:" -ForegroundColor Cyan
    Write-Host "Start-Servers         - Start all servers in parallel"
    Write-Host "Stop-Servers          - Stop all running servers"
    Write-Host "List-Servers          - List all running/tracked servers and their process IDs"
    Write-Host "Stop-Server-By-Name   - Stop a server by its name"
    Write-Host "Start-Server-By-Name  - Start a server by its name"
    Write-Host "Show-ServerFunctions  - Show this help menu"
}

# Export functions to global scope for interactive use
Set-Alias Start-Servers Start-Servers
Set-Alias Stop-Servers Stop-Servers
Set-Alias List-Servers List-Servers
Set-Alias Stop-Server-By-Name Stop-Server-By-Name
Set-Alias Start-Server-By-Name Start-Server-By-Name
Set-Alias Show-ServerFunctions Show-ServerFunctions
