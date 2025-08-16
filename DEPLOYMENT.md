# 🚀 Deployment Guide - Timothy Bulumba Campaign Website

## MIME Type Fix for JavaScript Modules

If you encounter the error:
```
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream"
```

This guide provides solutions for different hosting platforms.

## 📁 Files Included

The following configuration files are automatically included in your `dist/` folder:

- `.htaccess` - Apache servers
- `web.config` - IIS/Windows servers  
- `_headers` - Netlify hosting
- `_redirects` - Netlify SPA routing

## 🌐 Platform-Specific Instructions

### Netlify
✅ **Automatic** - Files `_headers` and `_redirects` are automatically recognized.

### Vercel
Add to `vercel.json` in your project root:
```json
{
  "headers": [
    {
      "source": "/(.*)\\.js",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/javascript"
        }
      ]
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### GitHub Pages
✅ **Automatic** - The `.htaccess` file is included and will work.

### Apache Servers
✅ **Automatic** - Upload the `.htaccess` file (included in dist/).

### Nginx
Add to your server configuration:
```nginx
location ~* \\.js$ {
    add_header Content-Type application/javascript;
}

location / {
    try_files $uri $uri/ /index.html;
}
```

### IIS/Windows Servers
✅ **Automatic** - Upload the `web.config` file (included in dist/).

### Firebase Hosting
Add to `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.js",
        "headers": [
          {
            "key": "Content-Type",
            "value": "application/javascript"
          }
        ]
      }
    ]
  }
}
```

## 🔧 Manual Server Configuration

If you have access to your server configuration, add these MIME types:

### Apache (.htaccess)
```apache
AddType application/javascript .js
AddType application/javascript .mjs
```

### Nginx
```nginx
location ~* \\.js$ {
    add_header Content-Type application/javascript;
}
```

### IIS
```xml
<staticContent>
    <mimeMap fileExtension=".js" mimeType="application/javascript" />
</staticContent>
```

## 📱 Mobile-First Features Verified

✅ **Responsive Layout** - Automatic mobile/desktop detection  
✅ **Touch Optimizations** - iOS/Android specific optimizations  
✅ **Campaign Focus** - Mobile-first campaign exploration  
✅ **Performance** - Optimized bundles and assets  

## 🚀 Quick Deploy Commands

```bash
# Build for production
npm run build

# The dist/ folder contains everything you need
# Upload the entire dist/ folder to your hosting provider

# For static hosting (Netlify, Vercel, etc.)
# Just drag and drop the dist/ folder
```

## 🐛 Troubleshooting

### Still getting MIME type errors?

1. **Check server logs** for more details
2. **Verify .htaccess** is uploaded and readable
3. **Contact hosting support** with this error message
4. **Try different hosting** - Netlify and Vercel handle this automatically

### Performance Issues?

The bundle is ~1MB which is normal for a feature-rich React app. Consider:
- Using a CDN
- Enabling gzip compression (included in configs)
- Monitoring with tools like Lighthouse

## 📞 Support

If you continue having deployment issues:
1. Check the browser console for specific error messages
2. Verify all files in `dist/` are uploaded
3. Ensure your hosting provider supports SPA routing

The mobile-first experience will work perfectly once the MIME types are configured correctly! 🎯📱