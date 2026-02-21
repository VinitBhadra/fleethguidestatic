# Deploy FleetGuide.in on GitHub Pages (FREE)

## Complete Step-by-Step Guide

---

## PART 1: Create GitHub Account & Repository (15 minutes)

### Step 1: Create GitHub Account

1. Go to https://github.com
2. Click **"Sign up"** (top right)
3. Enter your details:
   - Email address
   - Password
   - Username (example: `fleetguide` or your name)
4. Complete the verification puzzle
5. Click **"Create account"**
6. Verify your email (check inbox)

### Step 2: Create New Repository

1. After logging in, click **"+"** icon (top right)
2. Select **"New repository"**
3. Fill in details:
   - **Repository name:** `fleetguide` (or any name you like)
   - **Description:** "FleetGuide.in - Fleet Management Tools"
   - **Public** (must be public for free GitHub Pages)
   - ✅ Check **"Add a README file"**
4. Click **"Create repository"**

✅ Your repository URL will be: `https://github.com/YOUR_USERNAME/fleetguide`

---

## PART 2: Upload Your Website Files (10 minutes)

### Method 1: Upload via GitHub Website (EASIEST)

1. In your repository, click **"Add file"** → **"Upload files"**

2. **Extract your website first:**
   ```bash
   # On your computer, extract the tar.gz file
   tar -xzf fleetguide-static.tar.gz
   ```

3. **Drag and drop ALL files from `fleetguide-static` folder:**
   - index.html
   - about.html
   - contact.html
   - privacy.html
   - terms.html
   - guides.html
   - rules.html
   - reviews.html
   - products.html
   - css/ (entire folder)
   - js/ (entire folder)
   - images/ (entire folder)
   - sitemap.xml
   - robots.txt

4. **Important:** Upload files directly to root, NOT inside a folder

5. Scroll down, add commit message: "Initial website upload"

6. Click **"Commit changes"**

⏱️ Wait 2-3 minutes for upload to complete

---

## PART 3: Enable GitHub Pages (5 minutes)

### Step 1: Go to Repository Settings

1. In your repository, click **"Settings"** tab (top)
2. Scroll down left sidebar, click **"Pages"**

### Step 2: Configure GitHub Pages

1. Under **"Source"**, select:
   - Branch: **main** (or master)
   - Folder: **/ (root)**
2. Click **"Save"**

3. Wait 2-3 minutes for deployment

4. Refresh the page

5. You'll see: 
   ```
   ✅ Your site is live at https://YOUR_USERNAME.github.io/fleetguide/
   ```

### Step 3: Test Your Website

1. Click the URL to visit your site
2. Test all pages:
   - Homepage with calculators
   - About page
   - Contact page
   - GPS Guides
   - All other pages

✅ If everything works, proceed to add custom domain!

---

## PART 4: Add Custom Domain (fleetguide.in)

### Step 1: Add Domain in GitHub

1. Still in **Settings → Pages**
2. Under **"Custom domain"**, enter: `fleetguide.in`
3. Click **"Save"**
4. ✅ Check **"Enforce HTTPS"** (after DNS is configured)

### Step 2: Create CNAME File

1. In your repository, click **"Add file"** → **"Create new file"**
2. Name it: `CNAME` (all caps, no extension)
3. Content (just one line):
   ```
   fleetguide.in
   ```
4. Click **"Commit changes"**

---

## PART 5: Configure DNS at Your Domain Registrar

### Where Did You Buy fleetguide.in?

Common registrars: GoDaddy, Namecheap, Google Domains, Hostinger, BigRock, etc.

### Step 1: Login to Your Domain Registrar

Example: If you bought from GoDaddy:
1. Go to https://www.godaddy.com
2. Login with your account
3. Go to **"My Products"** or **"Domains"**
4. Click **"Manage"** next to fleetguide.in
5. Find **"DNS Management"** or **"DNS Settings"**

### Step 2: Add DNS Records

You need to add **4 A Records** and **1 CNAME Record**:

#### A Records (for root domain):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

#### CNAME Record (for www):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | YOUR_USERNAME.github.io | 3600 |

**Example:** If your GitHub username is `johnsmith`:
- CNAME: www → johnsmith.github.io

### Step 3: Remove Old Records (Important!)

**Delete these if they exist:**
- Old A records pointing to other IPs
- Old CNAME records for @ or www
- Parking page records

**Keep only:**
- The 4 GitHub A records
- The 1 www CNAME record
- Any email-related records (MX, TXT for email)

### Step 4: Save DNS Changes

1. Click **"Save"** or **"Update DNS"**
2. Wait for propagation

---

## PART 6: Wait for DNS Propagation (24-48 hours)

### What Happens Now?

DNS changes take time to spread worldwide. This is called "propagation."

**Timeline:**
- 5 minutes: You might see changes
- 1 hour: Most regions updated
- 24 hours: Almost complete
- 48 hours: Fully propagated everywhere

### Check DNS Propagation Status

Use this tool: https://www.whatsmydns.net

1. Enter: `fleetguide.in`
2. Select: `A`
3. Click **"Search"**

You should see GitHub's IPs (185.199.108.153, etc.) in green checkmarks worldwide.

### Enable HTTPS (After DNS Works)

1. Go back to GitHub: **Settings → Pages**
2. ✅ Check **"Enforce HTTPS"**
3. Wait 10-30 minutes for SSL certificate

---

## PART 7: Verify Everything Works

### Test These URLs:

1. **http://fleetguide.in** → Should redirect to HTTPS
2. **https://fleetguide.in** → Should load homepage
3. **https://www.fleetguide.in** → Should work
4. **https://fleetguide.in/about.html** → Should load About page
5. **https://fleetguide.in/guides.html** → Should load GPS Guides

### Test All Features:

- ✅ Calculators work
- ✅ All pages load
- ✅ Images display
- ✅ Amazon links work
- ✅ Navigation works
- ✅ Mobile responsive

---

## TROUBLESHOOTING

### Issue 1: Site Shows 404 Error

**Solution:**
- Check files are in root folder (not in subfolder)
- Ensure `index.html` exists in root
- Wait 5 minutes and refresh

### Issue 2: Custom Domain Not Working

**Solution:**
- Check CNAME file exists with correct content
- Verify DNS records are correct
- Wait up to 48 hours for DNS propagation
- Clear browser cache (Ctrl+Shift+Delete)

### Issue 3: HTTPS Not Working

**Solution:**
- Wait 30 minutes after DNS propagation
- Uncheck and recheck "Enforce HTTPS" in Settings
- May take up to 24 hours for certificate

### Issue 4: Images Not Loading

**Solution:**
- Check images folder uploaded correctly
- Check file paths in HTML (should be `images/filename.jpg`)
- Check file names match exactly (case-sensitive)

### Issue 5: www Not Working

**Solution:**
- Check CNAME record for www subdomain
- Value should be: `YOUR_USERNAME.github.io`
- Wait for DNS propagation

---

## DETAILED DNS CONFIGURATION BY REGISTRAR

### GoDaddy:

1. Login → My Products → Domains
2. Click domain → Manage DNS
3. Add Records:
   - Click **"Add"** for each A record
   - Type: A, Name: @, Value: (GitHub IPs)
   - Click **"Add"** for CNAME
   - Type: CNAME, Name: www, Value: username.github.io
4. Save

### Namecheap:

1. Login → Domain List → Manage
2. Advanced DNS tab
3. Add New Record:
   - A Record: Host: @, Value: (GitHub IPs)
   - CNAME: Host: www, Value: username.github.io
4. Save

### Google Domains:

1. Login → My Domains → Manage
2. DNS tab → Custom Records
3. Add:
   - Type: A, Name: @, Data: (GitHub IPs)
   - Type: CNAME, Name: www, Data: username.github.io
4. Save

### Hostinger:

1. Login → Domains → Manage
2. DNS / Nameservers → DNS Records
3. Add Record:
   - Type: A, Name: @, Points to: (GitHub IPs)
   - Type: CNAME, Name: www, Points to: username.github.io
4. Save

### BigRock:

1. Login → Domains → Manage
2. Manage DNS → Add DNS Record
3. Add:
   - A Record: @, (GitHub IPs)
   - CNAME: www, username.github.io
4. Update

---

## UPDATING YOUR WEBSITE (FUTURE)

### Method 1: Via GitHub Website

1. Go to your repository
2. Click on file you want to edit (e.g., index.html)
3. Click pencil icon (Edit)
4. Make changes
5. Scroll down → Commit changes
6. Wait 2-3 minutes → Changes live!

### Method 2: Upload New Files

1. Repository → Add file → Upload files
2. Drag updated files
3. Choose "Replace existing files"
4. Commit changes

### Method 3: Using Git (Advanced)

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/fleetguide.git
cd fleetguide

# Make changes to files

# Commit and push
git add .
git commit -m "Updated content"
git push origin main
```

---

## COST BREAKDOWN

| Item | Cost |
|------|------|
| GitHub Pages Hosting | **FREE** ✅ |
| SSL Certificate (HTTPS) | **FREE** ✅ |
| Bandwidth (Unlimited) | **FREE** ✅ |
| Domain (fleetguide.in) | ₹500-800/year |
| **Total Annual Cost** | **₹500-800** |

**vs Traditional Hosting:** ₹3,000-6,000/year + SSL ₹1,000/year = ₹4,000-7,000/year

**You Save:** ₹3,200-6,200 per year! 💰

---

## CHECKLIST

### Before Starting:
- [ ] GitHub account created
- [ ] Email verified
- [ ] Domain purchased (fleetguide.in)
- [ ] Website files extracted

### Repository Setup:
- [ ] Repository created
- [ ] Files uploaded to root folder
- [ ] All 9 HTML pages uploaded
- [ ] css/, js/, images/ folders uploaded
- [ ] sitemap.xml and robots.txt uploaded

### GitHub Pages:
- [ ] GitHub Pages enabled
- [ ] Source set to main/root
- [ ] Site accessible at github.io URL
- [ ] All pages working

### Custom Domain:
- [ ] Domain added in GitHub Pages
- [ ] CNAME file created
- [ ] 4 A records added to DNS
- [ ] 1 CNAME (www) added to DNS
- [ ] Old DNS records removed

### Final Verification:
- [ ] fleetguide.in loads
- [ ] www.fleetguide.in works
- [ ] HTTPS enabled
- [ ] All pages accessible
- [ ] Calculators work
- [ ] Images load
- [ ] Mobile responsive

---

## QUICK REFERENCE

### GitHub A Records (for DNS):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### CNAME File Content:
```
fleetguide.in
```

### Your Site URLs:
- Temporary: https://YOUR_USERNAME.github.io/fleetguide/
- Final: https://fleetguide.in

---

## SUPPORT

### Need Help?

**GitHub Pages Documentation:**
https://docs.github.com/en/pages

**DNS Help:**
- Check propagation: https://www.whatsmydns.net
- DNS checker: https://dnschecker.org

**Common Issues:**
- 404 Error: Wait 5 minutes, check file paths
- DNS Issues: Wait 24-48 hours
- HTTPS Error: Wait 30 minutes after DNS

---

## TIMELINE SUMMARY

| Task | Time |
|------|------|
| Create GitHub Account | 5 min |
| Create Repository | 2 min |
| Upload Files | 10 min |
| Enable GitHub Pages | 3 min |
| Configure DNS | 15 min |
| **Total Active Work** | **35 min** |
| DNS Propagation (waiting) | 24-48 hours |
| **Total Until Live** | **1-2 days** |

---

## SUCCESS! 🎉

Once everything is working:

✅ Your website is live at https://fleetguide.in
✅ FREE hosting forever
✅ FREE SSL certificate
✅ Automatic HTTPS
✅ Fast global CDN
✅ Easy to update
✅ No server maintenance

**You're all set!** Your fleet management website is now live and accessible to users across India! 🚀

---

## NEXT STEPS AFTER DEPLOYMENT

1. **Submit to Google Search Console:**
   - https://search.google.com/search-console
   - Add property: fleetguide.in
   - Submit sitemap: https://fleetguide.in/sitemap.xml

2. **Replace AdSense Placeholders:**
   - Edit HTML files
   - Replace `ca-pub-XXXXXXXXXXXXXXXXX` with your Publisher ID
   - Replace `YYYYYYYYYY` with your Ad Slot IDs

3. **Test AdSense Ads:**
   - Wait 30-60 minutes after code installation
   - Verify ads display correctly

4. **Monitor Performance:**
   - Check Google Analytics
   - Monitor AdSense earnings
   - Track affiliate clicks

Good luck! 🎯
