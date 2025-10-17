# Shokunin Cake House Website

A simple, beautiful static website to showcase your cake portfolio with WhatsApp ordering integration. Perfect for GitHub Pages hosting!

## 🎯 Features

- 📱 **Mobile Responsive** - Works perfectly on phones, tablets, and desktops
- 💬 **WhatsApp Integration** - Customers can order directly via WhatsApp with pre-filled messages
- 🎨 **Modern Design** - Clean, professional layout with smooth animations
- ⚡ **Fast Loading** - Static HTML/CSS/JavaScript for instant page loads
- 🆓 **Free Hosting** - Host for free on GitHub Pages

## 🚀 Quick Start Guide (No Coding Required!)

### Step 1: Add Your Cake Photos

1. Open the `images/cakes/` folder
2. Add your cake photos with these exact names:
   - `cake1.jpg`
   - `cake2.jpg`
   - `cake3.jpg`
   - `cake4.jpg`
   - `cake5.jpg`
   - `cake6.jpg`

**Photo Tips:**
- Use square images (800x800 pixels or larger)
- Keep file size under 500KB
- Use good lighting and clean backgrounds

### Step 2: Update Your WhatsApp Number

1. Open the file: `js/script.js`
2. Find this line near the top:
   ```javascript
   const WHATSAPP_NUMBER = '1234567890';
   ```
3. Replace `1234567890` with your WhatsApp number
   - Include country code
   - Remove spaces, dashes, or + symbol
   - Example: For +60 12-345 6789, use: `60123456789`

### Step 3: Customize Cake Information

1. Open `index.html` in any text editor (Notepad, TextEdit, VS Code, etc.)
2. Find the cake cards section (search for "Cake Card 1")
3. Update each cake's information:
   - Change the `<h3 class="cake-name">` text to your cake name
   - Update the `<p class="cake-description">` to describe your cake
   - Make sure the image name matches your photo file

**Example:**
```html
<div class="cake-card">
    <div class="cake-image">
        <img src="images/cakes/cake1.jpg" alt="My Custom Cake">
    </div>
    <div class="cake-info">
        <h3 class="cake-name">My Custom Cake</h3>
        <p class="cake-description">Your cake description here</p>
        <button class="btn btn-whatsapp" onclick="orderViaWhatsApp('My Custom Cake')">
            Order via WhatsApp
        </button>
    </div>
</div>
```

### Step 4: Personalize Your Website

Edit these sections in `index.html`:

1. **Website Title** (Line 7):
   ```html
   <title>Your Cake Shop Name - Custom Cakes</title>
   ```

2. **Navigation Brand** (Line 16):
   ```html
   <h1>🍰 Your Cake Shop Name</h1>
   ```

3. **Hero Section** (Lines 32-34):
   ```html
   <h1 class="hero-title">Welcome to Your Cake Shop</h1>
   <p class="hero-subtitle">Your Custom Tagline Here</p>
   ```

4. **About Section** (Lines 42-46):
   Update the text to describe your business

5. **Contact WhatsApp Link** (Line 150):
   Replace the phone number in the link

## 📤 Publishing to GitHub Pages

### Method 1: Using GitHub Website (Easiest)

1. Go to your GitHub repository: `https://github.com/lexian24/shokunincakehouse`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source", select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes
7. Your site will be live at: `https://lexian24.github.io/shokunincakehouse`

### Method 2: Using Git Commands

```bash
# Make sure you're in the website directory
cd /Users/lexiancheo/Desktop/website

# Add all files
git add .

# Commit your changes
git commit -m "Initial cake portfolio website"

# Push to GitHub
git push origin main
```

Then follow Method 1, steps 2-7 to enable GitHub Pages.

## ✏️ Adding More Cakes

To add more than 6 cakes:

1. Add more images: `cake7.jpg`, `cake8.jpg`, etc.
2. In `index.html`, find any cake card and copy the entire section:
   ```html
   <!-- Cake Card 7 -->
   <div class="cake-card">
       ...
   </div>
   ```
3. Paste it below the last cake card
4. Update the image name, cake name, and description

## 🎨 Customizing Colors

To change the color scheme, edit `css/style.css`:

- **Primary Color** (Pink): Search for `#e91e63` and replace with your color
- **Purple Gradient**: Search for `#667eea` and `#764ba2`
- **WhatsApp Green**: `#25d366` (you might want to keep this)

## 📁 File Structure

```
website/
├── index.html          # Main website page
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # WhatsApp integration & interactions
├── images/
│   └── cakes/          # Your cake photos go here
│       ├── cake1.jpg
│       ├── cake2.jpg
│       └── ...
└── README.md           # This file
```

## 🆘 Troubleshooting

### Images Not Showing
- Check that image files are named exactly: `cake1.jpg`, `cake2.jpg`, etc.
- Make sure images are in the `images/cakes/` folder
- File names are case-sensitive: use lowercase

### WhatsApp Not Opening
- Verify your WhatsApp number in `js/script.js`
- Make sure the number includes country code
- Test by clicking a button and checking the URL

### Website Not Updating on GitHub Pages
- Wait 1-2 minutes after pushing changes
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that you pushed to the correct branch

### Site Not Loading
- Make sure `index.html` is in the root directory
- Check GitHub Pages settings show the green checkmark
- Verify the repository is public (not private)

## 💡 Tips for Success

1. **Use High-Quality Photos**: Good photos make your cakes look irresistible!
2. **Write Descriptive Text**: Help customers understand what makes each cake special
3. **Test on Mobile**: Most customers will view on phones
4. **Update Regularly**: Add new cakes to keep content fresh
5. **Share Your Link**: Post your GitHub Pages URL on social media

## 🔗 Your Website URL

After enabling GitHub Pages, your website will be at:
```
https://lexian24.github.io/shokunincakehouse
```

## 📱 Testing Locally

To test on your computer before publishing:

1. Simply open `index.html` in any web browser
2. Or use VS Code's "Live Server" extension for auto-refresh

## 🤝 Need Help?

- Check the troubleshooting section above
- Review the comments in the code files
- GitHub Pages Documentation: https://docs.github.com/pages

## 📝 License

Feel free to use and modify this template for your cake business!

---

**Made with ❤️ for cake entrepreneurs**

Enjoy your new website! 🎉🍰
