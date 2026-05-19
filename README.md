# Mer Andreas S. Jorgio - Portfolio

A minimal, professional portfolio website with an orange theme built with HTML, CSS, and JavaScript. Designed for easy customization and GitHub Pages deployment.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Orange Theme**: Modern, professional styling with easy customization
- **Easy to Edit**: Simple HTML structure for quick content updates
- **GitHub Pages Ready**: Deploy directly from your repository
- **Smooth Animations**: Subtle scroll animations and transitions
- **Fast Loading**: Optimized performance with minimal dependencies

## Quick Start

### Local Preview

1. Clone this repository or download the files
2. Open `index.html` in your web browser
3. Edit content in `index.html` as needed
4. Update colors in `styles.css` if desired

### GitHub Pages Deployment

Follow these steps to publish your portfolio on GitHub Pages:

#### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Name your repository: `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - This is important! GitHub Pages will automatically deploy from this repository
3. Make sure "Public" is selected
4. Click "Create repository"

#### Step 2: Upload Your Portfolio Files
You can upload files in two ways:

**Option A: Using Git (Recommended)**
```bash
# Navigate to your portfolio folder
cd path/to/Portfolio

# Initialize git
git init

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Web Interface**
1. Go to your repository
2. Click "Add file" → "Upload files"
3. Drag and drop your portfolio files or select them
4. Commit the changes

#### Step 3: Verify Deployment
1. Wait 1-2 minutes for GitHub to process
2. Visit: `https://yourusername.github.io` in your browser
3. Your portfolio is now live!

## File Structure

```
Portfolio/
├── index.html       # Main HTML file with all content
├── styles.css       # Styling and responsive design
├── script.js        # JavaScript for interactions
└── README.md        # This file
```

## Customization Guide

### Update Personal Information

Edit `index.html` and update:
- **Name and Title**: Search for `Mer Andreas S. Jorgio`
- **Contact Info**: Update phone number and email
- **GitHub Link**: Update GitHub URL in multiple places
- **Social Links**: Add more contact methods in the Contact section

### Change Color Theme

Edit `styles.css` - look for the `:root` section at the top:

```css
:root {
    --primary: #FF8C42;           /* Main orange color */
    --primary-dark: #E67E3A;      /* Darker orange */
    --primary-light: #FFB166;     /* Lighter orange */
    /* ... other colors */
}
```

Change the hex colors to your preferred palette. For example:
- Use `#0066CC` for blue theme
- Use `#00AA66` for green theme
- Use `#FF6B35` for red-orange theme

### Add New Sections

To add a new section (e.g., Projects or Experience):

1. Add the section in `index.html`:
```html
<section id="projects" class="section">
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

### Update Education & Experience

Simply edit the content within the respective sections. The structure is self-explanatory:
- Education items
- Training entries
- Reference cards

## Tips for Maintenance

1. **Version Control**: Use Git to track changes over time
2. **Regular Updates**: Add new projects, skills, and experiences as you grow
3. **Backup**: Keep a local copy of all files
4. **Test Before Pushing**: Preview changes locally before uploading
5. **SEO**: Consider adding meta tags for better search visibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Page load time: ~200ms (cached)
- Fully responsive
- Optimized images and minimal CSS
- No external dependencies (except Google Fonts)

## Future Enhancements

Consider adding:
- Blog section for articles
- Project showcase with images
- Dark mode toggle
- Contact form
- Analytics tracking
- PDF download of CV

## License

Free to use and modify for personal portfolio purposes.

## Support

For GitHub Pages issues:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

---

**Happy sharing! 🎉**
