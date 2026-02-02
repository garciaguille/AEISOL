# Script PowerShell para generar iconos PNG
# Requiere Windows 10+ con .NET

Add-Type -AssemblyName System.Drawing

function Crear-Icono {
    param(
        [int]$size,
        [string]$filename
    )

    # Crear bitmap
    $bitmap = New-Object System.Drawing.Bitmap($size, $size)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

    # Fondo con gradiente
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        [System.Drawing.Point]::new(0, 0),
        [System.Drawing.Point]::new($size, $size),
        [System.Drawing.Color]::FromArgb(108, 92, 231),
        [System.Drawing.Color]::FromArgb(162, 155, 254)
    )
    $graphics.FillRectangle($brush, 0, 0, $size, $size)

    # Dado blanco en el centro
    $dadoSize = [int]($size * 0.4)
    $dadoX = [int](($size - $dadoSize) / 2)
    $dadoY = [int](($size - $dadoSize) / 2)
    $whiteBrush = [System.Drawing.Brushes]::White
    $graphics.FillRectangle($whiteBrush, $dadoX, $dadoY, $dadoSize, $dadoSize)

    # Puntos del dado (5 puntos)
    $puntoSize = [int]($dadoSize * 0.15)
    $purpleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(108, 92, 231))

    $centerX = $size / 2
    $centerY = $size / 2
    $offset = [int]($dadoSize * 0.25)

    # Centro
    $graphics.FillEllipse($purpleBrush, $centerX - $puntoSize/2, $centerY - $puntoSize/2, $puntoSize, $puntoSize)
    # Esquinas
    $graphics.FillEllipse($purpleBrush, $centerX - $offset - $puntoSize/2, $centerY - $offset - $puntoSize/2, $puntoSize, $puntoSize)
    $graphics.FillEllipse($purpleBrush, $centerX + $offset - $puntoSize/2, $centerY - $offset - $puntoSize/2, $puntoSize, $puntoSize)
    $graphics.FillEllipse($purpleBrush, $centerX - $offset - $puntoSize/2, $centerY + $offset - $puntoSize/2, $puntoSize, $puntoSize)
    $graphics.FillEllipse($purpleBrush, $centerX + $offset - $puntoSize/2, $centerY + $offset - $puntoSize/2, $puntoSize, $puntoSize)

    # Texto ABC
    $font = New-Object System.Drawing.Font("Arial", [int]($size * 0.08), [System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 255))
    $text = "ABC"
    $stringFormat = New-Object System.Drawing.StringFormat
    $stringFormat.Alignment = [System.Drawing.StringAlignment]::Center
    $stringFormat.LineAlignment = [System.Drawing.StringAlignment]::Far
    $textRect = New-Object System.Drawing.RectangleF(0, [float]($size * 0.8), $size, [float]($size * 0.2))
    $graphics.DrawString($text, $font, $textBrush, $textRect, $stringFormat)

    # Guardar
    $bitmap.Save($filename, [System.Drawing.Imaging.ImageFormat]::Png)

    # Limpiar
    $graphics.Dispose()
    $bitmap.Dispose()

    Write-Host "✅ Icono creado: $filename ($size x $size)"
}

try {
    Write-Host "🎨 Generando iconos para PWA..."
    Crear-Icono -size 192 -filename "icon-192.png"
    Crear-Icono -size 512 -filename "icon-512.png"
    Write-Host ""
    Write-Host "✨ ¡Iconos generados exitosamente!"
    Write-Host "📁 Ubicación: $PWD"
}
catch {
    Write-Host "❌ Error al generar iconos: $_"
    Write-Host ""
    Write-Host "💡 Alternativa: Abre 'generar-iconos.html' en tu navegador"
    Write-Host "   y descarga los iconos manualmente."
}
