# How to Update Favicon

## Method 1: Simple Replacement (Recommended)

1. **Prepare your favicon file:**
   - Create or get your favicon image
   - Use an online favicon generator like:
     - https://favicon.io/
     - https://realfavicongenerator.net/
   - Recommended sizes: 16x16, 32x32, 48x48, 180x180 (for Apple devices)

2. **Replace the existing favicon:**
   - Navigate to: `app/favicon.ico`
   - Replace the existing `favicon.ico` file with your new one
   - Make sure the filename remains `favicon.ico`

3. **Clear browser cache and test:**
   - Hard refresh: `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
   - Or clear browser cache completely

## Method 2: Multiple Icon Formats (Advanced)

If you want to support multiple devices and resolutions:

1. **Generate multiple favicon formats:**
   - favicon.ico (for browsers)
   - apple-touch-icon.png (180x180 for iOS)
   - favicon-32x32.png
   - favicon-16x16.png
   - android-chrome-192x192.png
   - android-chrome-512x512.png

2. **Place files in the `app` directory:**
   ```
   app/
   ├── favicon.ico
   ├── apple-touch-icon.png
   ├── favicon-32x32.png
   └── favicon-16x16.png
   ```

3. **Update `app/layout.tsx` metadata:**
   Add the `icons` field to the metadata:
   ```typescript
   export const metadata: Metadata = {
     title: 'Sanjay Naik - Senior Software Engineer',
     description: '...',
     icons: {
       icon: '/favicon.ico',
       apple: '/apple-touch-icon.png',
     },
   };
   ```

## Quick Steps (Simplest Method)

1. Go to https://favicon.io/favicon-converter/
2. Upload your image (square image works best, like 512x512 PNG)
3. Download the generated favicon.ico
4. Replace `app/favicon.ico` with your new file
5. Restart your dev server: Stop (Ctrl+C) and run `npm run dev` again
6. Hard refresh browser: `Ctrl + Shift + R`

## Current Location

Your favicon is currently at:
```
c:/personal_projects/data/sanjay_portfolio_feb_2026/app/favicon.ico
```

Simply replace this file with your new favicon!

## Troubleshooting

- **Favicon not updating?** Clear browser cache or try incognito mode
- **Wrong size?** Favicon should be square (same width and height)
- **File not working?** Ensure it's named exactly `favicon.ico` (lowercase)
- **Still not showing?** Restart the development server

## Recommended Image

For your portfolio, consider using:
- Your initials "SN" in a styled design
- A minimalist logo
- A professional icon representing software/tech
- Colors that match your brand (the primary color from your site)

