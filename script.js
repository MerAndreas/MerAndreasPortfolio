// Soft Wave Background Animation
class WaveBackground {
    constructor() {
        this.canvas = document.getElementById('matrixCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        
        this.time = 0;
        this.speed = 0.005;
        
        window.addEventListener('resize', () => this.handleResize());
        this.animate();
    }
    
    handleResize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }
    
    animate() {
        // Clear canvas with dark background
        this.ctx.fillStyle = '#0a0a0a';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        this.time += this.speed;
        
        // Draw multiple layers of waves for depth
        this.drawWaveLayer(this.time, 0.3, '#FF6B35', 0.15);
        this.drawWaveLayer(this.time * 0.7, 0.5, '#FF8C42', 0.2);
        this.drawWaveLayer(this.time * 0.4, 0.7, '#FFA500', 0.15);
        
        requestAnimationFrame(() => this.animate());
    }
    
    drawWaveLayer(timeOffset, frequency, color, alpha) {
        this.ctx.fillStyle = color;
        this.ctx.globalAlpha = alpha;
        
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.height);
        
        for (let x = 0; x <= this.width; x += 10) {
            // Sine wave calculation with multiple frequencies for smooth swirling
            const y1 = Math.sin(x * 0.005 + timeOffset) * 80;
            const y2 = Math.sin(x * 0.003 + timeOffset * 0.8) * 60;
            const y3 = Math.cos(x * 0.002 + timeOffset * 0.5) * 40;
            
            const waveY = this.height * frequency + y1 + y2 + y3;
            this.ctx.lineTo(x, waveY);
        }
        
        this.ctx.lineTo(this.width, this.height);
        this.ctx.closePath();
        this.ctx.fill();
        
        this.ctx.globalAlpha = 1.0;
    }
}

// Initialize wave background when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WaveBackground();
});

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.nav-links .tab-link');
    const allTabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Show the first tab by default
    if (tabContents.length > 0) {
        tabContents[0].style.display = 'block';
        tabLinks[0].classList.add('active');
    }
    
    // Handle all tab link clicks (including greeting buttons)
    allTabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const tabName = link.getAttribute('data-tab');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // Remove active class from all navbar links
            tabLinks.forEach(l => {
                l.classList.remove('active');
            });
            
            // Show selected tab content
            const activeContent = document.querySelector(`.tab-content[data-tab="${tabName}"]`);
            if (activeContent) {
                activeContent.style.display = 'block';
                activeContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            
            // Add active class to corresponding navbar link
            const correspondingNavLink = document.querySelector(`.nav-links .tab-link[data-tab="${tabName}"]`);
            if (correspondingNavLink) {
                correspondingNavLink.classList.add('active');
            }
        });
    });
});

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.education-item, .training-item, .skill-category, .reference-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});
