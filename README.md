# Love Story Website

A beautiful, animated website to celebrate the love story of two couples with images, heart animations, and a relationship day counter.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Animated Hearts**: Pulsating hearts with floating heart animations
- **Day Counter**: Automatically calculates and displays days together for each couple
- **Beautiful Gradients**: Modern gradient backgrounds and smooth animations
- **Interactive Elements**: Hover effects and scroll animations

## Setup Instructions

### 1. Add Your Images

Replace the placeholder images with actual photos:
- `person1.jpg` - First person of couple 1 (Vera)
- `person2.jpg` - Second person of couple 1 (Nabil)
- `person3.jpg` - First person of couple 2 (Alex)
- `person4.jpg` - Second person of couple 2 (Jordan)

Place all images in the same folder as the HTML file.

**Recommended image specifications:**
- Size: 500x500 pixels or larger (square format)
- Format: JPG or PNG
- Quality: High resolution for best results

### 2. Update Relationship Dates

Open `script.js` and modify the relationship start dates:

```javascript
const relationshipDates = {
    couple1: new Date('2024-01-01'),  // Change to actual start date
    couple2: new Date('2023-03-15')   // Change to actual start date
};
```

### 3. Customize Names and Quotes

Open `index.html` and update:
- Person names in the `<h2 class="person-name">` tags
- Personal quotes in the `<p class="person-quote">` tags
- The "Since" dates in the `<div class="relationship-date">` sections

### 4. Open the Website

Simply double-click `index.html` to open it in your default browser, or:
- Right-click `index.html` → "Open with" → Choose your preferred browser

## Customization Options

### Change Colors

Edit `styles.css` to change the color scheme:
- Main gradient: `.container` background
- Heart color: `.heart-svg` fill property
- Header gradient: `header` background

### Modify Animations

In `styles.css`, you can adjust:
- `@keyframes heartbeat` - Heart pulsing speed
- `@keyframes floatUp` - Floating hearts animation
- Animation durations throughout the file

### Add More Couples

To add more couple sections:
1. Copy an entire `<section class="couple-section">` block in `index.html`
2. Update the IDs (`daysCount3`, etc.)
3. Add corresponding date in `script.js`
4. Update the counter initialization code

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## File Structure

```
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Day counter and interactive features
├── README.md       # This file
└── images/         # Place your couple photos here
    ├── person1.jpg
    ├── person2.jpg
    ├── person3.jpg
    └── person4.jpg
```

## Tips

- Use high-quality images for the best visual effect
- The day counter updates automatically every hour
- The website is fully responsive - try it on different devices!
- Hover over the hearts for a special animation effect
- The floating hearts appear randomly across the screen

## Support

For any issues or customization help, feel free to reach out!

---

Made with ❤️ for celebrating love stories
