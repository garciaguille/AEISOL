#!/usr/bin/env python3
"""
Script simple para generar iconos PNG para PWA
Requiere: pip install Pillow
"""

try:
    from PIL import Image, ImageDraw, ImageFont
    import os

    def crear_icono(size, filename):
        """Crear un icono PNG con el logo del juego"""
        # Crear imagen con fondo morado
        img = Image.new('RGB', (size, size), color='#6c5ce7')
        draw = ImageDraw.Draw(img)

        # Dado blanco en el centro
        dado_size = int(size * 0.4)
        dado_x = (size - dado_size) // 2
        dado_y = (size - dado_size) // 2
        draw.rectangle([dado_x, dado_y, dado_x + dado_size, dado_y + dado_size],
                      fill='white', outline=None)

        # Puntos del dado (5 puntos)
        punto_size = int(dado_size * 0.15)
        center_x = size // 2
        center_y = size // 2
        offset = int(dado_size * 0.25)

        def dibujar_punto(x, y):
            draw.ellipse([x - punto_size//2, y - punto_size//2,
                         x + punto_size//2, y + punto_size//2],
                        fill='#6c5ce7')

        # Centro y esquinas
        dibujar_punto(center_x, center_y)
        dibujar_punto(center_x - offset, center_y - offset)
        dibujar_punto(center_x + offset, center_y - offset)
        dibujar_punto(center_x - offset, center_y + offset)
        dibujar_punto(center_x + offset, center_y + offset)

        # Texto ABC
        try:
            font_size = int(size * 0.1)
            font = ImageFont.truetype("arial.ttf", font_size)
        except:
            font = ImageFont.load_default()

        text = "ABC"
        text_y = int(size * 0.85)

        # Calcular posición centrada del texto
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_x = (size - text_width) // 2

        draw.text((text_x, text_y), text, fill='white', font=font)

        # Guardar
        img.save(filename, 'PNG')
        print(f"Icono creado: {filename} ({size}x{size})")

    # Crear los iconos
    print("Generando iconos para PWA...")
    crear_icono(192, 'icon-192.png')
    crear_icono(512, 'icon-512.png')
    print("\nIconos generados exitosamente!")

except ImportError:
    print("ERROR: Pillow no esta instalado")
    print("Instala con: pip install Pillow")
    print("\nO usa el generador HTML: abre 'generar-iconos.html' en tu navegador")
except Exception as e:
    print(f"Error: {e}")
    print("\nAlternativa: abre 'generar-iconos.html' en tu navegador")
