# Portfolio Content Update Guide

This guide shows you exactly where to find and update specific content in your portfolio.

## Quick Updates

### Personal Information (Name, Contact, Location)

**In `index.html` - Hero Section:**
- Look for: `<h1 class="hero-title">Mer Andreas S. Jorgio</h1>`
- Also update: `<title>Mer Andreas S. Jorgio - Portfolio</title>`
- Nav brand: `<div class="nav-brand">MJ</div>` (use your initials)

**In `index.html` - About Section:**
- Phone: `+63 (9) 9311 7620 1` → Your phone number
- Email: `jorgiomer@g.cjc.edu.ph` → Your email
- Location: `Digos City, Davao del Sur, Philippines` → Your location
- GitHub link: `https://github.com/meranareas` → Your GitHub profile

### Add New Skill

1. Open `index.html`
2. Find the Skills Section
3. Locate the skill category you want to update (e.g., "Languages")
4. Add a new tag:
```html
<span class="skill-tag">NewSkill</span>
```

Example - Adding "TypeScript" to Languages:
```html
<div class="skill-category">
    <h3>Languages</h3>
    <div class="skill-tags">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">Java</span>
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">HTML/CSS</span>
        <span class="skill-tag">TypeScript</span>  <!-- New! -->
    </div>
</div>
```

### Add New Training/Seminar

1. Find the Training Section in `index.html`
2. Copy this template and add it to the list:
```html
<div class="training-item">
    <div class="training-header">
        <h3>Workshop Name Here</h3>
        <span class="date">Month Year</span>
    </div>
    <p class="training-org">Organization Name</p>
</div>
```

### Add New Reference

1. Find the References Section in `index.html`
2. Copy this template and add it to the references grid:
```html
<div class="reference-card">
    <h3>Full Name</h3>
    <p class="reference-title">Job Title</p>
    <p class="reference-org">Organization</p>
    <a href="mailto:email@example.com">email@example.com</a>
</div>
```

### Update Education

1. Find the Education Section in `index.html`
2. Update existing entries or add new ones following this format:
```html
<div class="education-item">
    <div class="education-header">
        <h3>School/University Name</h3>
        <span class="date">2022 - Present</span>
    </div>
    <p class="education-degree">Degree Name</p>
    <p class="education-meta">Achievement or honors</p>
    <p class="education-location">Location</p>
</div>
```

## Theme Customization

### Change Orange Color to Different Shade

Open `styles.css` and find this section at the very top:

```css
:root {
    --primary: #FF8C42;           /* Main color - change this */
    --primary-dark: #E67E3A;      /* Darker version - change this */
    --primary-light: #FFB166;     /* Lighter version - change this */
}
```

**Popular Color Combinations:**

**Blue Theme:**
- `--primary: #0066CC;`
- `--primary-dark: #0052A3;`
- `--primary-light: #3399FF;`

**Green Theme:**
- `--primary: #00AA66;`
- `--primary-dark: #008844;`
- `--primary-light: #33CC99;`

**Purple Theme:**
- `--primary: #7B2CBF;`
- `--primary-dark: #5A189A;`
- `--primary-light: #C77DFF;`

**Red Theme:**
- `--primary: #E63946;`
- `--primary-dark: #A4161A;`
- `--primary-light: #F77F88;`

## Before Publishing to GitHub Pages

Checklist before your first push to GitHub:

- [ ] Updated name and title in hero section and `<title>` tag
- [ ] Updated email address in Contact section
- [ ] Updated phone number
- [ ] Updated GitHub profile link
- [ ] Verified all sections have your information
- [ ] Tested links (especially email and phone)
- [ ] Checked spelling and grammar
- [ ] Tested on mobile browser
- [ ] Color theme matches your preference

## Adding New Sections

If you want to add a completely new section (e.g., Projects or Blog):

1. Add to HTML after the closing `</section>` of another section:
```html
<section id="projects" class="section section-alt">
    <div class="container">
        <h2 class="section-title">Projects</h2>
        <!-- Your content here -->
    </div>
</section>
```

2. Add navigation link in the navbar:
```html
<li><a href="#projects">Projects</a></li>
```

The `section-alt` class gives it an alternate background (light gray). Omit it for white background.

## Mobile Testing

After making changes, test on mobile:

1. Open `index.html` in your browser
2. Press F12 or right-click → Inspect
3. Click the device icon (mobile view)
4. Check that content looks good
5. Test all links

## Updating GitHub

After editing:

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Update portfolio with new skills"

# Push to GitHub
git push
```

Visit your site at `https://yourusername.github.io` after 1-2 minutes.

---

**Need help?** Most updates follow the same pattern. Copy the structure of nearby items and replace the content!
