# Color Combination Examples

## 🎨 Practical UI Component Examples

This guide shows real-world examples of using the HMLogics color system in your components.

---

## Hero Sections

### Example 1: Ocean to Purple (Recommended)
```jsx
<section className="min-h-screen bg-gradient-to-br from-primary-500 via-accent-400 to-accent-600">
  <div className="container mx-auto px-4 py-20">
    <h1 className="text-6xl font-bold text-white mb-6">
      Transform Your Vision
    </h1>
    <p className="text-2xl text-primary-50 mb-8">
      Into Digital Reality
    </p>
    <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold 
                     hover:shadow-2xl transition-all duration-300">
      Get Started
    </button>
  </div>
</section>
```

### Example 2: Light Background with Gradient Text
```jsx
<section className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
  <div className="container mx-auto px-4 py-20">
    <h1 className="text-6xl font-bold gradient-text mb-6">
      Innovative Solutions
    </h1>
    <p className="text-xl text-neutral-700 mb-8">
      Powered by cutting-edge technology
    </p>
    <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 
                     text-white rounded-lg font-semibold hover:scale-105 
                     transition-transform duration-300">
      Learn More
    </button>
  </div>
</section>
```

---

## Cards & Content Blocks

### Example 1: Service Card with Gradient Icon
```jsx
<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all 
              duration-300 border border-neutral-200 hover:-translate-y-2">
  {/* Gradient Icon Container */}
  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 
                rounded-xl flex items-center justify-center mb-6">
    <Icon className="w-8 h-8 text-white" />
  </div>
  
  {/* Content */}
  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
    Web Development
  </h3>
  <p className="text-neutral-600 mb-6">
    Build modern, responsive web applications with the latest technologies.
  </p>
  
  {/* Tags */}
  <div className="flex flex-wrap gap-2">
    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
      React
    </span>
    <span className="px-3 py-1 bg-accent-100 text-accent-600 rounded-full text-sm">
      Node.js
    </span>
  </div>
</div>
```

### Example 2: Portfolio Card with Warm Gradient
```jsx
<div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
              transition-all duration-300 hover:-translate-y-2">
  {/* Gradient Header */}
  <div className="h-48 bg-gradient-to-br from-sunset-400 to-accent-500 relative">
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 
                  transition-colors"></div>
  </div>
  
  {/* Content */}
  <div className="p-6 bg-white">
    <span className="text-sm text-sunset-600 font-semibold">Mobile App</span>
    <h3 className="text-xl font-bold text-neutral-900 mt-2 mb-3">
      E-Commerce Platform
    </h3>
    <p className="text-neutral-600">
      Full-featured shopping experience with real-time inventory.
    </p>
  </div>
</div>
```

### Example 3: Testimonial Card with Glass Effect
```jsx
<div className="glass-effect rounded-2xl p-8 shadow-xl">
  {/* Rating Stars */}
  <div className="flex mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
    ))}
  </div>
  
  {/* Quote */}
  <p className="text-neutral-700 italic mb-6">
    "HMLogics transformed our business with their innovative solutions. 
    Highly recommended!"
  </p>
  
  {/* Author */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-teal-500 
                  rounded-full"></div>
    <div>
      <div className="font-semibold text-neutral-900">Jane Smith</div>
      <div className="text-sm text-neutral-600">CEO, TechCorp</div>
    </div>
  </div>
</div>
```

---

## Buttons & CTAs

### Primary Actions
```jsx
{/* Ocean to Purple - Main CTA */}
<button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 
                 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl 
                 hover:scale-105 transition-all duration-300">
  Get Started Now
</button>

{/* Solid Primary */}
<button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold 
                 hover:bg-primary-700 transition-colors duration-300">
  Learn More
</button>

{/* Outline Primary */}
<button className="px-6 py-3 bg-transparent border-2 border-primary-500 
                 text-primary-600 rounded-lg font-semibold 
                 hover:bg-primary-50 transition-colors duration-300">
  Contact Us
</button>
```

### Secondary Actions
```jsx
{/* Green Success Button */}
<button className="px-6 py-3 bg-gradient-to-r from-secondary-500 to-teal-500 
                 text-white rounded-lg font-semibold hover:shadow-lg 
                 transition-all duration-300">
  Submit
</button>

{/* Warm Accent Button */}
<button className="px-6 py-3 bg-gradient-to-r from-sunset-500 to-accent-500 
                 text-white rounded-lg font-semibold hover:shadow-lg 
                 transition-all duration-300">
  Special Offer
</button>

{/* Ghost Button */}
<button className="px-6 py-3 bg-white text-neutral-700 border border-neutral-300 
                 rounded-lg font-semibold hover:border-primary-500 
                 hover:text-primary-600 transition-colors duration-300">
  Cancel
</button>
```

---

## Navigation

### Light Navbar
```jsx
<nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="text-2xl font-bold gradient-text">
      HMLogics
    </div>
    
    {/* Nav Items */}
    <div className="flex items-center gap-8">
      <a href="#" className="text-neutral-700 hover:text-primary-600 
                          transition-colors font-medium">
        About
      </a>
      <a href="#" className="text-neutral-700 hover:text-primary-600 
                          transition-colors font-medium">
        Services
      </a>
      <button className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 
                       text-white rounded-lg font-semibold hover:shadow-lg 
                       transition-all duration-300">
        Contact
      </button>
    </div>
  </div>
</nav>
```

### Dark Navbar
```jsx
<nav className="fixed w-full bg-neutral-900 shadow-lg z-50">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    {/* Logo with Gradient */}
    <div className="text-2xl font-bold">
      <span className="bg-gradient-to-r from-primary-400 to-accent-400 
                     bg-clip-text text-transparent">
        HMLogics
      </span>
    </div>
    
    {/* Nav Items */}
    <div className="flex items-center gap-8">
      <a href="#" className="text-neutral-300 hover:text-primary-400 
                          transition-colors font-medium">
        About
      </a>
      <a href="#" className="text-neutral-300 hover:text-primary-400 
                          transition-colors font-medium">
        Services
      </a>
      <button className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 
                       text-white rounded-lg font-semibold hover:shadow-glow 
                       transition-all duration-300">
        Get Started
      </button>
    </div>
  </div>
</nav>
```

---

## Forms

### Modern Form with Gradient Focus
```jsx
<form className="bg-white rounded-2xl p-8 shadow-xl">
  {/* Input Group */}
  <div className="mb-6">
    <label className="block text-sm font-semibold text-neutral-700 mb-2">
      Your Name
    </label>
    <input 
      type="text"
      className="w-full px-4 py-3 rounded-lg border border-neutral-300 
               focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
               outline-none transition-all"
      placeholder="John Doe"
    />
  </div>
  
  {/* Select with Gradient */}
  <div className="mb-6">
    <label className="block text-sm font-semibold text-neutral-700 mb-2">
      Service
    </label>
    <select className="w-full px-4 py-3 rounded-lg border border-neutral-300 
                     focus:border-accent-500 focus:ring-2 focus:ring-accent-200 
                     outline-none transition-all">
      <option>Web Development</option>
      <option>Mobile Apps</option>
      <option>UI/UX Design</option>
    </select>
  </div>
  
  {/* Submit Button */}
  <button type="submit" 
          className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 
                   to-accent-500 text-white rounded-lg font-semibold 
                   shadow-lg hover:shadow-xl hover:scale-105 
                   transition-all duration-300">
    Submit Request
  </button>
</form>
```

---

## Badges & Tags

### Status Badges
```jsx
{/* Success */}
<span className="px-3 py-1 bg-success-light text-success-dark 
               rounded-full text-sm font-semibold">
  Active
</span>

{/* Warning */}
<span className="px-3 py-1 bg-warning-light text-warning-dark 
               rounded-full text-sm font-semibold">
  Pending
</span>

{/* Error */}
<span className="px-3 py-1 bg-error-light text-error-dark 
               rounded-full text-sm font-semibold">
  Failed
</span>

{/* Info */}
<span className="px-3 py-1 bg-info-light text-info-dark 
               rounded-full text-sm font-semibold">
  New
</span>
```

### Technology Tags
```jsx
<div className="flex flex-wrap gap-2">
  <span className="px-3 py-1 bg-primary-100 text-primary-700 
                 rounded-full text-xs font-semibold">
    React
  </span>
  <span className="px-3 py-1 bg-accent-100 text-accent-700 
                 rounded-full text-xs font-semibold">
    TypeScript
  </span>
  <span className="px-3 py-1 bg-teal-100 text-teal-700 
                 rounded-full text-xs font-semibold">
    Tailwind
  </span>
  <span className="px-3 py-1 bg-sunset-100 text-sunset-700 
                 rounded-full text-xs font-semibold">
    Node.js
  </span>
</div>
```

---

## Special Effects

### Animated Shimmer Text
```jsx
<h1 className="text-6xl font-bold shimmer mb-4">
  Welcome to HMLogics
</h1>

<h2 className="text-4xl font-bold shimmer-warm mb-4">
  Special Offer
</h2>

<h3 className="text-3xl font-bold shimmer-cool mb-4">
  Tech Innovation
</h3>
```

### Glow Cards
```jsx
{/* Primary Glow */}
<div className="card-glow bg-white rounded-2xl p-8 shadow-lg">
  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
    Premium Service
  </h3>
  <p className="text-neutral-600">
    Get the best experience with our premium offerings.
  </p>
</div>

{/* Warm Glow */}
<div className="card-glow-warm bg-white rounded-2xl p-8 shadow-lg">
  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
    Hot Deal
  </h3>
  <p className="text-neutral-600">
    Limited time offer - don't miss out!
  </p>
</div>

{/* Cool Glow */}
<div className="card-glow-cool bg-white rounded-2xl p-8 shadow-lg">
  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
    Tech Focus
  </h3>
  <p className="text-neutral-600">
    Cutting-edge technology solutions.
  </p>
</div>
```

---

## Footer

### Dark Footer with Gradient Accents
```jsx
<footer className="bg-neutral-900 text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      {/* Branding */}
      <div className="md:col-span-2">
        <h3 className="text-2xl font-bold gradient-text mb-4">
          HMLogics
        </h3>
        <p className="text-neutral-400 leading-relaxed mb-4">
          Transforming ideas into digital reality through innovative 
          technology solutions.
        </p>
        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg 
                              flex items-center justify-center 
                              hover:bg-gradient-to-r hover:from-primary-500 
                              hover:to-accent-500 transition-all duration-300">
            <LinkedinIcon />
          </a>
          <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg 
                              flex items-center justify-center 
                              hover:bg-gradient-to-r hover:from-primary-500 
                              hover:to-accent-500 transition-all duration-300">
            <TwitterIcon />
          </a>
        </div>
      </div>
      
      {/* Quick Links */}
      <div>
        <h4 className="font-semibold mb-4 text-primary-400">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-neutral-400 hover:text-primary-400 
                                transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-neutral-400 hover:text-primary-400 
                                transition-colors">
              Services
            </a>
          </li>
        </ul>
      </div>
    </div>
    
    {/* Copyright */}
    <div className="border-t border-neutral-800 pt-8 text-center 
                  text-neutral-500">
      <p>© 2024 HMLogics. All rights reserved.</p>
    </div>
  </div>
</footer>
```

---

## Alert Messages

```jsx
{/* Success Alert */}
<div className="bg-success-light border-l-4 border-success-dark 
              rounded-lg p-4 flex items-start gap-3">
  <CheckCircle className="w-5 h-5 text-success-dark flex-shrink-0 mt-0.5" />
  <div>
    <h4 className="font-semibold text-success-dark">Success!</h4>
    <p className="text-sm text-neutral-700">Your message has been sent.</p>
  </div>
</div>

{/* Warning Alert */}
<div className="bg-warning-light border-l-4 border-warning-dark 
              rounded-lg p-4 flex items-start gap-3">
  <AlertCircle className="w-5 h-5 text-warning-dark flex-shrink-0 mt-0.5" />
  <div>
    <h4 className="font-semibold text-warning-dark">Warning</h4>
    <p className="text-sm text-neutral-700">Please review your information.</p>
  </div>
</div>

{/* Error Alert */}
<div className="bg-error-light border-l-4 border-error-dark 
              rounded-lg p-4 flex items-start gap-3">
  <XCircle className="w-5 h-5 text-error-dark flex-shrink-0 mt-0.5" />
  <div>
    <h4 className="font-semibold text-error-dark">Error</h4>
    <p className="text-sm text-neutral-700">Something went wrong.</p>
  </div>
</div>
```

---

**Pro Tip:** Mix and match these examples to create unique, visually stunning interfaces that maintain consistency with the HMLogics brand identity!
