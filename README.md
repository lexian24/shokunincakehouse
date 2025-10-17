# 🍰 Shokunin Cake House Website - Beginner's Guide

A simple, beautiful static website to showcase your cake portfolio with shopping cart and WhatsApp ordering integration. Perfect for GitHub Pages hosting!

## 📱 Live Demo
After setup, your site will be at: `https://lexian24.github.io/shokunincakehouse`

---

## 🎯 Quick Start (5 Minutes!)

### Step 1: Get the Files
1. Download this repository or clone it
2. You'll see these folders:
   - `images/cakes/` - Put your cake photos here
   - `css/` - Website colors and styling
   - `js/` - Shopping cart functionality
   - `index.html` - Main website content

---

## ✏️ How to Make Changes (No Coding Required!)

### 1️⃣ **Change Your Cake Photos**

📁 **Location:** `images/cakes/` folder

**Steps:**
1. Take photos of your cakes (recommended: 800x800 pixels, square format)
2. Rename them to: `cake1.jpg`, `cake2.jpg`, `cake3.jpg`, etc.
3. Put them in the `images/cakes/` folder
4. Replace the existing placeholder images

**Tips:**
- Use `.jpg` format for photos
- Keep file size under 500KB for fast loading
- Use good lighting and clean backgrounds

---

### 2️⃣ **Update Your WhatsApp Number**

📁 **Location:** `js/script.js`

**Steps:**
1. Open `js/script.js` in any text editor (Notepad, TextEdit, VS Code)
2. Find **line 7** - it looks like this:
   ```javascript
   const WHATSAPP_NUMBER = '60177759738';
   ```
3. Replace `60177759738` with your WhatsApp number
   - Include country code (e.g., Malaysia = 60, Singapore = 65)
   - Remove spaces, dashes, or + symbol
   - Example: `+60 12-345 6789` becomes `60123456789`

**Example:**
```javascript
// Old
const WHATSAPP_NUMBER = '60177759738';

// New (your number)
const WHATSAPP_NUMBER = '60123456789';
```

---

### 3️⃣ **Change Cake Names, Descriptions & Prices**

📁 **Location:** `index.html`

**Steps:**
1. Open `index.html` in any text editor
2. Search for "Cake Card 1" (around line 82)
3. You'll see this structure:

```html
<div class="cake-card" data-cake-id="1">
    <div class="cake-image">
        <img src="images/cakes/cake1.jpg" alt="Adorable Tiger Birthday Cake">
    </div>
    <div class="cake-info">
        <h3 class="cake-name">Adorable Tiger Birthday Cake</h3>
        <p class="cake-description">Custom 3D tiger character cake with party hat and bow tie</p>
        <div class="cake-price">RM 210.00</div>
        <div class="quantity-selector">
            <button class="qty-btn" onclick="decreaseQty(1)">-</button>
            <input type="number" id="qty-1" value="1" min="1" max="10" readonly>
            <button class="qty-btn" onclick="increaseQty(1)">+</button>
        </div>
        <button class="btn btn-add-cart" onclick="addToCart(1, 'Adorable Tiger Birthday Cake', 210.00)">
            Add to Cart
        </button>
    </div>
</div>
```

**What to Change:**

| What | Where | Example |
|------|-------|---------|
| **Cake Name** | `<h3 class="cake-name">` | Change to your cake name |
| **Description** | `<p class="cake-description">` | Describe your cake |
| **Price** | `<div class="cake-price">RM 210.00</div>` | Change the price |
| **Add to Cart Button** | `onclick="addToCart(1, 'Name', 210.00)"` | Update name and price (must match!) |

**⚠️ IMPORTANT:** When changing the price, you must update it in **TWO places:**
1. The display price: `<div class="cake-price">RM 210.00</div>`
2. The Add to Cart button: `onclick="addToCart(1, 'Cake Name', 210.00)`

**Example Change:**
```html
<!-- Before -->
<h3 class="cake-name">Adorable Tiger Birthday Cake</h3>
<p class="cake-description">Custom 3D tiger character cake with party hat and bow tie</p>
<div class="cake-price">RM 210.00</div>
<button class="btn btn-add-cart" onclick="addToCart(1, 'Adorable Tiger Birthday Cake', 210.00)">

<!-- After -->
<h3 class="cake-name">Chocolate Fudge Cake</h3>
<p class="cake-description">Rich chocolate layers with fudge frosting</p>
<div class="cake-price">RM 180.00</div>
<button class="btn btn-add-cart" onclick="addToCart(1, 'Chocolate Fudge Cake', 180.00)">
```

**Repeat for all 6 cakes!** (Cake Card 1, 2, 3, 4, 5, 6)

---

### 4️⃣ **Change Your Business Name**

📁 **Location:** `index.html`

**Steps:**
1. Open `index.html`
2. Find **line 15** - the navigation brand:
   ```html
   <h1>🍰 Shokunin Cake House</h1>
   ```
3. Change "Shokunin Cake House" to your business name

**Also change these places:**
- **Line 29:** Hero title
  ```html
  <h1 class="hero-title">Welcome to Shokunin Cake House</h1>
  ```
- **Line 39:** About section
  ```html
  At Shokunin Cake House, we specialize in...
  ```
- **Line 220:** Footer
  ```html
  <p>&copy; 2024 Shokunin Cake House. All rights reserved.</p>
  ```

---

### 5️⃣ **Change About Section Text**

📁 **Location:** `index.html`

**Steps:**
1. Open `index.html`
2. Find **line 38-43** - the About section:
   ```html
   <p class="about-text">
       At Shokunin Cake House, we specialize in creating adorable custom character cakes...
   </p>
   ```
3. Replace with your own business description

---

### 6️⃣ **Change Website Colors**

📁 **Location:** `css/style.css`

**Main Colors to Change:**

| Color | Where | Current Value | What it affects |
|-------|-------|---------------|----------------|
| **Primary Pink** | Search for `#ff6b9d` | Pink | Buttons, titles, accents |
| **Secondary Coral** | Search for `#ffa07a` | Coral | Gradients, buttons |
| **WhatsApp Green** | Search for `#25d366` | Green | WhatsApp buttons |
| **Background** | Line 17 | `#fff5f7` | Page background |

**How to Change:**
1. Open `css/style.css`
2. Use Find & Replace (Ctrl+F or Cmd+F)
3. Find: `#ff6b9d` (old color)
4. Replace: `#e91e63` (new color - your choice!)
5. Click "Replace All"

**Color Picker:** Use [Google Color Picker](https://g.co/kgs/colorpicker) to choose colors

---

### 7️⃣ **Add More Cakes (Beyond 6)**

**Steps:**
1. Add new image: `images/cakes/cake7.jpg`
2. Open `index.html`
3. Find Cake Card 6 (around line 181)
4. Copy the entire cake card section (from `<div class="cake-card"` to `</div>`)
5. Paste it below Cake Card 6
6. Update the new card:
   - Change `data-cake-id="6"` to `data-cake-id="7"`
   - Change image: `cake6.jpg` to `cake7.jpg`
   - Change `id="qty-6"` to `id="qty-7"`
   - Change `onclick="decreaseQty(6)"` to `onclick="decreaseQty(7)"`
   - Change `onclick="increaseQty(6)"` to `onclick="increaseQty(7)"`
   - Change `onclick="addToCart(6, ...)` to `onclick="addToCart(7, ...)`
   - Update name, description, and price

**Example:**
```html
<!-- Cake Card 7 -->
<div class="cake-card" data-cake-id="7">
    <div class="cake-image">
        <img src="images/cakes/cake7.jpg" alt="Your New Cake">
    </div>
    <div class="cake-info">
        <h3 class="cake-name">Your New Cake Name</h3>
        <p class="cake-description">Your cake description</p>
        <div class="cake-price">RM 200.00</div>
        <div class="quantity-selector">
            <button class="qty-btn" onclick="decreaseQty(7)">-</button>
            <input type="number" id="qty-7" value="1" min="1" max="10" readonly>
            <button class="qty-btn" onclick="increaseQty(7)">+</button>
        </div>
        <button class="btn btn-add-cart" onclick="addToCart(7, 'Your New Cake Name', 200.00)">
            Add to Cart
        </button>
    </div>
</div>
```

---

## 🚀 Publishing Your Website on GitHub Pages

### Option 1: Using GitHub Website (Easiest!)

1. **Push your files to GitHub:**
   - Open Terminal (Mac) or Command Prompt (Windows)
   - Navigate to your website folder:
     ```bash
     cd /path/to/your/website
     ```
   - Run these commands:
     ```bash
     git add .
     git commit -m "Update my cake website"
     git push origin dev
     ```

2. **Enable GitHub Pages:**
   - Go to: https://github.com/lexian24/shokunincakehouse/settings/pages
   - Under "Source", select:
     - **Branch:** `dev`
     - **Folder:** `/ (root)`
   - Click **Save**
   - Wait 1-2 minutes

3. **Your site is live!**
   - Visit: `https://lexian24.github.io/shokunincakehouse`

### Option 2: Using GitHub Desktop (No Command Line!)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Open your repository in GitHub Desktop
3. Make your changes to the files
4. In GitHub Desktop:
   - Write a summary (e.g., "Update cake photos")
   - Click "Commit to dev"
   - Click "Push origin"
5. Follow Step 2 from Option 1 to enable GitHub Pages

---

## 🧪 Testing Locally (Before Publishing)

Want to see your changes before going live?

1. **Simple Method:**
   - Just double-click `index.html`
   - It opens in your web browser!

2. **Advanced Method (Live Reload):**
   - Install [VS Code](https://code.visualstudio.com/)
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"
   - Changes appear instantly when you save!

---

## 📋 Complete File Guide

### Files You'll Edit Often:

| File | What it does | When to edit |
|------|--------------|--------------|
| `index.html` | Main content | Change text, cakes, prices, business info |
| `js/script.js` | WhatsApp number | Update your phone number |
| `images/cakes/` | Cake photos | Add/replace cake images |
| `css/style.css` | Colors & styling | Change colors, fonts, spacing |

### Files You Don't Need to Touch:

| File | What it does |
|------|--------------|
| `.git/` | Git version control (auto-generated) |
| `.DS_Store` | Mac system file (auto-generated) |

---

## 🆘 Common Issues & Solutions

### Issue 1: Images Not Showing
**Problem:** You see placeholder or broken images

**Solution:**
- Check image file names are EXACTLY: `cake1.jpg`, `cake2.jpg`, etc.
- File names are case-sensitive (use lowercase)
- Images must be in `images/cakes/` folder
- Supported formats: `.jpg`, `.jpeg`, `.png`

### Issue 2: WhatsApp Opens but Wrong Number
**Problem:** WhatsApp opens with incorrect number

**Solution:**
- Check `js/script.js` line 7
- Format: Country code + phone number, no spaces/dashes
- Example: `60123456789` NOT `+60 12-345 6789`

### Issue 3: Price Changes Don't Work in Cart
**Problem:** Cart shows old price

**Solution:**
- You must update price in TWO places:
  1. Display: `<div class="cake-price">RM XXX.XX</div>`
  2. JavaScript: `onclick="addToCart(1, 'Name', XXX.XX)"`
- Clear browser cache (Ctrl+Shift+Delete)

### Issue 4: Cart Not Working
**Problem:** Add to Cart button does nothing

**Solution:**
- Check browser console for errors (F12 → Console tab)
- Make sure `js/script.js` is in the `js/` folder
- Check `<script src="js/script.js"></script>` is at bottom of `index.html`

### Issue 5: Website Not Updating on GitHub Pages
**Problem:** Changes don't appear on live site

**Solution:**
- Wait 2-3 minutes after pushing changes
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check you pushed to the correct branch (`dev`)
- Verify GitHub Pages is enabled in repository settings

---

## 🎨 Customization Ideas

### Change Button Shape
📁 `css/style.css` - Line 95
```css
/* Change from rounded to square */
border-radius: 25px;  /* Change to 5px for square buttons */
```

### Change Font Size
📁 `css/style.css`
```css
/* Make cake names bigger */
.cake-name {
    font-size: 1.3rem;  /* Change to 1.5rem for bigger */
}
```

### Change Background Pattern
📁 `css/style.css` - Line 17
```css
/* Current: Gradient background */
background: linear-gradient(180deg, #fff5f7 0%, #fffbf0 50%, #f0f9ff 100%);

/* Option 1: Solid color */
background: #fff5f7;

/* Option 2: Different gradient */
background: linear-gradient(180deg, #ffeef8 0%, #fff8e7 100%);
```

---

## 📱 Mobile Testing

**Test your site on different screen sizes:**

1. **In Browser:**
   - Press F12 (Windows) or Cmd+Option+I (Mac)
   - Click the phone icon (Toggle Device Toolbar)
   - Select different devices: iPhone, iPad, Android

2. **On Real Phone:**
   - Before publishing: Use [ngrok](https://ngrok.com/) to test locally
   - After publishing: Visit your GitHub Pages URL

---

## 💡 Pro Tips

### Tip 1: Keep Backups
Before making big changes:
```bash
git add .
git commit -m "Backup before changes"
git push origin dev
```

### Tip 2: Use Descriptive Commit Messages
```bash
# Good ✅
git commit -m "Update chocolate cake price to RM 180"

# Bad ❌
git commit -m "changes"
```

### Tip 3: Test Everything
Before publishing:
- [ ] Click all navigation links
- [ ] Add items to cart
- [ ] Try WhatsApp checkout
- [ ] Test on mobile view (F12 → phone icon)
- [ ] Check all images load
- [ ] Verify all prices are correct

### Tip 4: Use High-Quality Images
- Take photos in natural light
- Use a clean, simple background
- Show cake from best angle
- Edit photos before uploading (brightness, contrast)
- Tools: [Canva](https://canva.com), [Photopea](https://photopea.com) (free)

---

## 🔗 Useful Links

- **GitHub Pages Docs:** https://docs.github.com/pages
- **HTML Tutorial:** https://www.w3schools.com/html/
- **CSS Tutorial:** https://www.w3schools.com/css/
- **Color Picker:** https://htmlcolorcodes.com/
- **Image Compression:** https://tinypng.com/
- **VS Code Editor:** https://code.visualstudio.com/

---

## 📞 Need More Help?

### Quick Reference Card

**WhatsApp Number:** `js/script.js` line 7
**Cake Names:** `index.html` search "cake-name"
**Cake Prices:** `index.html` search "cake-price"
**Business Name:** `index.html` line 15, 29, 39, 220
**Colors:** `css/style.css` search for color codes like `#ff6b9d`
**Add Cakes:** Copy Cake Card 6, paste below, update IDs

---

## ✨ Features Overview

### What This Website Can Do:
- ✅ Display unlimited cake products
- ✅ Shopping cart with quantity selection
- ✅ Cart persists in browser (saved even after closing)
- ✅ WhatsApp checkout with formatted order
- ✅ Mobile-responsive design
- ✅ Fast loading (static site)
- ✅ Free hosting on GitHub Pages
- ✅ No backend/database needed
- ✅ Easy to maintain

### What It Cannot Do:
- ❌ Process online payments (use WhatsApp for payment coordination)
- ❌ Send automated emails (use WhatsApp instead)
- ❌ Track inventory automatically
- ❌ User accounts/login system
- ❌ Real-time updates (must republish)

---

## 🎉 You're All Set!

Your cake website is ready to go! Just remember:

1. **Update your photos** in `images/cakes/`
2. **Change your WhatsApp number** in `js/script.js`
3. **Edit cake details** in `index.html`
4. **Push to GitHub** and **enable GitHub Pages**
5. **Share your link** with customers!

**Your website:** `https://lexian24.github.io/shokunincakehouse`

Happy baking! 🍰✨

---

**Made with ❤️ for cake entrepreneurs**
Last updated: 2024
