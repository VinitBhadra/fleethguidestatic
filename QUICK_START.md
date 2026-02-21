# 🚀 QUICK START - Deploy in 30 Minutes

## Step 1: GitHub Account (5 min)
```
1. Go to: https://github.com
2. Click "Sign up"
3. Enter email, password, username
4. Verify email
```

## Step 2: Create Repository (2 min)
```
1. Click "+" → "New repository"
2. Name: fleetguide
3. Public ✅
4. Add README ✅
5. Create repository
```

## Step 3: Upload Files (10 min)
```
1. Extract fleetguide-static.tar.gz
2. In GitHub: "Add file" → "Upload files"
3. Drag ALL files from fleetguide-static folder
4. Commit changes
```

## Step 4: Enable GitHub Pages (3 min)
```
1. Settings → Pages
2. Source: main branch, / (root)
3. Save
4. Wait 3 minutes
5. Your site: https://username.github.io/fleetguide/
```

## Step 5: Add Domain (10 min)
```
1. Settings → Pages → Custom domain
2. Enter: fleetguide.in
3. Save
4. Create CNAME file with content: fleetguide.in
```

## Step 6: Configure DNS (15 min)

**Login to your domain registrar, add these records:**

### A Records:
```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
```

### CNAME Record:
```
Type: CNAME, Name: www, Value: YOUR_USERNAME.github.io
```

**Replace YOUR_USERNAME with your actual GitHub username!**

## Step 7: Wait & Enable HTTPS (24-48 hours)
```
1. Wait for DNS propagation: 24-48 hours
2. Check: https://www.whatsmydns.net
3. When DNS is live: Settings → Pages → ✅ Enforce HTTPS
4. Wait 30 minutes for SSL certificate
```

## ✅ DONE!

Your website will be live at: **https://fleetguide.in**

---

## 📋 CHECKLIST

- [ ] GitHub account created
- [ ] Repository created
- [ ] All files uploaded
- [ ] GitHub Pages enabled
- [ ] Custom domain added
- [ ] CNAME file created
- [ ] 4 A records in DNS
- [ ] 1 CNAME (www) in DNS
- [ ] DNS propagated (wait 24-48h)
- [ ] HTTPS enabled
- [ ] Website live!

---

## 🆘 QUICK TROUBLESHOOTING

**Site shows 404?**
→ Wait 5 minutes and refresh

**Domain not working?**
→ Check DNS records, wait 24-48 hours

**HTTPS error?**
→ Wait 30 minutes after DNS propagation

**Images not loading?**
→ Check files uploaded to root folder

---

## 💰 COST

- GitHub Pages Hosting: **FREE**
- SSL Certificate: **FREE**
- Domain (fleetguide.in): ₹500-800/year
- **Total: ₹500-800/year**

vs Traditional hosting: ₹4,000-7,000/year

**You save: ₹3,500+ per year!** 💸

---

## 📞 NEED HELP?

1. Check GITHUB_DEPLOYMENT.md (detailed guide)
2. GitHub Pages Docs: https://docs.github.com/en/pages
3. DNS Checker: https://www.whatsmydns.net

---

**Total time: 35 minutes of work + 24-48 hours DNS wait**

Let's do this! 🎯
