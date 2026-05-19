# GitHub Pages Setup Checklist

Follow these steps to get your portfolio live on GitHub Pages in minutes.

## ✅ Before Starting
- [ ] You have a GitHub account (free at github.com)
- [ ] You have Git installed on your computer (git-scm.com)
- [ ] All portfolio files are in this folder

## ✅ Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Enter repository name: **`yourusername.github.io`**
   - Replace `yourusername` with YOUR actual GitHub username
   - Example: `meranareas.github.io`
3. Select "Public"
4. **DO NOT** initialize with README (you already have one)
5. Click "Create repository"
6. **Copy the HTTPS URL** - you'll need it next

## ✅ Step 2: Connect Your Local Folder to GitHub

Open Command Prompt/PowerShell and run these commands:

```
cd C:\Users\MerAndreas\Desktop\CS3\Second Sem\Portfolio
```

Then run these one at a time:

```
git init
```

```
git remote add origin https://github.com/yourusername/yourusername.github.io.git
```
*Replace `yourusername` with your actual GitHub username!*

```
git add .
```

```
git commit -m "Initial portfolio commit"
```

```
git branch -M main
```

```
git push -u origin main
```

If prompted for authentication, use your GitHub username and personal access token (or your password if on older Git).

## ✅ Step 3: Verify Your Site is Live

1. Wait 1-2 minutes
2. Visit: `https://yourusername.github.io`
3. Your portfolio should be live! 🎉

## ✅ Future Updates

Whenever you edit `index.html`, `styles.css`, or add content:

```
git add .
git commit -m "Update portfolio - [describe what changed]"
git push
```

Then wait 1-2 minutes and refresh your site.

## ⚠️ Common Issues

**Repository name matters!**
- ❌ Wrong: `portfolio`, `my-portfolio`, `Portfolio`
- ✅ Correct: `yourusername.github.io`

**Can't see your site after pushing?**
1. Double-check repository name is exactly `yourusername.github.io`
2. Wait 2-3 minutes
3. Try a hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
4. Check GitHub Pages settings under repository Settings

**Git push shows authentication error?**
1. Use GitHub personal access token instead of password
2. Or configure SSH keys (see GitHub docs)

## 📱 Quick Git Commands Reference

```
git status                    # Check what's changed
git add .                     # Stage all changes
git commit -m "message"       # Save with description
git push                      # Upload to GitHub
git log                       # See commit history
```

## 🎨 Still want to customize?

- **Colors**: Edit `styles.css` (see CONTENT_GUIDE.md)
- **Content**: Edit `index.html` (see CONTENT_GUIDE.md)
- **Names/Links**: Search for existing values in `index.html`

## 🚀 You're Done!

Your portfolio is now published on GitHub Pages. Every time you push changes, they'll be live within 1-2 minutes.

**Share your portfolio URL:**
```
https://yourusername.github.io
```

---

**Questions?** See README.md or CONTENT_GUIDE.md for more help.
