# /public/fonts

Place self-hosted font files here (optional — currently loaded via Google Fonts CDN).

- `BebasNeue-Regular.woff2`
- `Inter-Regular.woff2`
- `Inter-Medium.woff2`
- `Inter-SemiBold.woff2`

## To switch from CDN to self-hosted
Update `src/app/globals.css` — replace the @import with @font-face rules:

```css
@font-face {
  font-family: 'Bebas Neue';
  src: url('/fonts/BebasNeue-Regular.woff2') format('woff2');
  font-display: swap;
}
```

## Download fonts
- Bebas Neue: https://fonts.google.com/specimen/Bebas+Neue
- Inter: https://fonts.google.com/specimen/Inter
