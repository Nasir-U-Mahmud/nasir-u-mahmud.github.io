---
name: frontend-design-engineering-portfolio
description: Create distinctive, production-grade frontend interfaces with high design quality specifically for engineering and technical portfolios. Use this skill when building portfolio websites for civil engineers, project coordinators, or technical professionals. Generates creative, industry-contextual code and UI design that avoids generic AI aesthetics while communicating technical expertise and professional credibility.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces for engineering portfolios that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details, industry-appropriate visual language, and creative choices that reflect technical precision.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking for Engineering Portfolios

Before coding, understand the professional context and commit to a BOLD aesthetic direction that communicates technical expertise:

- **Professional Context**: What type of engineer? What projects define their expertise? What's their career stage?
- **Industry Standards**: Civil engineering requires trust, precision, and credibility. Design must balance creativity with professionalism.
- **Target Audience**: Hiring managers, clients, engineering firms - they value competence, clarity, and proven results.
- **Differentiation Strategy**: What makes THIS engineer unforgettable? The unique project? The scale of work? The precision of execution?

### Aesthetic Direction for Technical Portfolios

Choose ONE bold direction and execute with precision:

1. **Blueprint Modernism**: Technical drawings meet contemporary web design
   - Clean architectural layouts with engineering grid systems
   - Blueprint-style line work as decorative elements
   - Monochromatic with strategic accent colors (construction orange, safety yellow, structural blue)
   - Animated technical diagrams
   - Measurement annotations as design elements

2. **Industrial Minimalism**: Raw materials aesthetic
   - Concrete, steel, glass texture references
   - Brutalist typography with precision spacing
   - Exposed grid systems
   - Metallic accents and gradients
   - Heavy geometric shapes

3. **Data-Driven Futurism**: Metrics and visualizations as hero elements
   - Animated statistics and counters
   - Infographic-style layouts
   - Technical data visualizations
   - Neon accents on dark backgrounds
   - Graph and chart integration

4. **Architectural Elegance**: Refined, sophisticated, premium
   - Generous white space
   - Sophisticated serif/sans pairings
   - Subtle gold or bronze accents
   - Photography-forward with project imagery
   - Diagonal layouts referencing structural angles

**CRITICAL FOR PORTFOLIOS**: The aesthetic must communicate both creativity AND competence. Wild experimentation works for creative portfolios; engineering portfolios need controlled boldness that says "I can innovate within constraints."

## Engineering Portfolio-Specific Guidelines

### Typography for Technical Authority
- **Display Fonts**: Choose fonts that communicate strength and precision
  - Strong options: Syne (geometric strength), Archivo Black (industrial), Space Grotesk (technical), Raleway Black (modern authority)
  - Avoid: Overly decorative, script fonts, anything that undermines credibility
- **Body Fonts**: Readable, professional, slightly technical
  - Strong options: IBM Plex Sans, DM Sans, Inter (only if paired with distinctive display), Source Sans 3, Manrope
- **Accent/Technical**: Monospace for numbers, codes, technical details
  - Use: JetBrains Mono, Roboto Mono, Space Mono for project codes, measurements, dates
- **Weight Contrast**: 900 for headers, 400-500 for body, 700 for emphasis

### Color Systems for Engineering
Develop industry-contextual palettes:

**Blueprint Palette**:
- Base: Deep navy (#0A1628), slate grays (#334155)
- Grid lines: Electric blue (#3B82F6), cyan (#06B6D4)
- Accents: Construction orange (#F97316), safety yellow (#FBBF24)
- Background: Off-white blueprint (#F8FAFC)

**Industrial Palette**:
- Base: Charcoal (#18181B), concrete gray (#52525B)
- Metals: Steel blue (#64748B), bronze (#92400E)
- Accents: Rust orange (#EA580C), copper (#C2410C)
- Background: Raw white (#FAFAFA) or dark mode (#09090B)

**Corporate Professional**:
- Base: Deep slate (#1E293B), professional navy (#1E40AF)
- Trust colors: Corporate blue (#2563EB), emerald (#059669)
- Accents: Minimal - gold (#D97706) or silver (#94A3B8)
- Background: Clean white (#FFFFFF) with subtle grays

### Layout Patterns for Project Showcase

**Project Hierarchy**: Not all projects are equal
- **Flagship Project**: Full-width hero treatment with multiple images, detailed metrics, timeline
- **Major Projects**: 60% width cards with imagery and key stats
- **Supporting Projects**: 40% width cards or list format

**Visual Hierarchy Techniques**:
- Dramatic scale differences (H1 at 4rem+, body at 1rem)
- Strategic use of weight (900 vs 400)
- Color contrast for emphasis (accent color only on critical elements)
- Spatial separation (generous margins around important content)
- Depth through shadows and layering

### Motion Design for Engineering Portfolios

**High-Impact Moments** (prioritize these):
1. **Hero entrance**: Staggered reveal of name, title, and key metric
2. **Stat counters**: Numbers animate up to final values (e.g., $163M, 95%)
3. **Project cards**: Lift and glow on hover with smooth transitions
4. **Timeline**: Progressive reveal as user scrolls
5. **Section transitions**: Fade-in from below on scroll trigger

**Technical Animation Patterns**:
```css
/* Counter animation for metrics */
@keyframes countUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Blueprint grid animation */
@keyframes gridPulse {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}

/* Card hover depth */
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}
```

### Background & Atmosphere for Technical Context

**Blueprint Grid System**:
```css
background-image: 
  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
background-size: 50px 50px;
```

**Industrial Texture**:
```css
background-image: 
  url('data:image/svg+xml,...'), /* Noise texture */
  linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
```

**Subtle Depth Elements**:
- Radial gradients from corners
- Diagonal section dividers (representing structural beams)
- Floating geometric shapes (circles, rectangles) as decoration
- Subtle shadow layers creating depth

### Content-Specific Design Patterns

**Statistics Display**:
- Large numbers (3rem+) with descriptive labels
- Animated count-up on scroll into view
- Icon or visual indicator
- Comparison context when relevant (e.g., "vs industry avg: 85%")

**Experience Timeline**:
- Vertical line with nodes for each position
- Expandable cards for project details
- Company logos at each node
- Duration indicators
- Color-coding by project type

**Skills Visualization**:
- NOT simple lists - use visual representations
- Categorized by type (Management/Technical/Compliance)
- Proficiency indicators (bars, circles, or custom shapes)
- Hover reveals real project applications
- Certificate badges that are clickable/expandable

**Project Cards**:
```html
<div class="project-card featured">
  <div class="project-image-container">
    <img src="project.jpg" alt="Project name">
    <div class="project-overlay">
      <div class="project-metrics">
        <span class="metric">$163M</span>
        <span class="metric">95% On-Time</span>
      </div>
    </div>
  </div>
  <div class="project-content">
    <span class="project-category">Infrastructure</span>
    <h3>Project Name</h3>
    <p>Brief description highlighting key achievement</p>
    <div class="project-tags">
      <span>MS Project</span>
      <span>Budget Monitoring</span>
    </div>
  </div>
</div>
```

## Implementation Standards for Portfolios

### Must-Haves:
1. **Responsive Design**: Mobile-first with breakpoints at 640px, 768px, 1024px, 1280px
2. **Performance**: Optimize images, lazy load below fold, <3s load time
3. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, color contrast ratios
4. **Cross-browser**: Test in Chrome, Firefox, Safari, Edge
5. **SEO**: Proper meta tags, structured data, meaningful headings

### Technical Excellence:
- CSS Variables for theming consistency
- BEM or similar naming convention
- Modular, reusable components
- Clean, commented code
- Mobile touch targets minimum 44px
- Form validation and user feedback
- Loading states for async operations

### Portfolio-Specific Features:
- **Downloadable Resume**: Prominent, styled button
- **Contact Form**: Premium styling with validation
- **Social Proof**: Certifications, testimonials, project outcomes
- **Call-to-Action**: Multiple paths to contact/hire
- **Project Filtering**: If 5+ projects, add category filtering
- **Print-Friendly**: Resume section should print well

## Anti-Patterns to Avoid

**Visual**:
- Generic purple gradients on white
- Overused fonts (Inter alone, Roboto, Arial, system fonts)
- Stock photography that's obviously generic
- Uniform card grids with no hierarchy
- Excessive animations that distract

**Content**:
- Burying key achievements in paragraph text
- Equal weight to all projects
- Missing metrics and quantifiable results
- Generic skill lists without context
- Unclear calls-to-action

**Technical**:
- Poor mobile experience
- Slow loading times
- Broken responsive layouts
- Inaccessible forms or navigation
- Missing hover states and interactions

## Execution Philosophy

**Match Complexity to Vision**:
- Maximalist designs need elaborate code with extensive animations
- Minimalist designs need precision, restraint, careful spacing
- Blueprint aesthetic needs technical grid systems and line work
- Industrial aesthetic needs texture, depth, material references

**Every Detail Matters**:
- Button border radius consistency
- Icon and text alignment perfection
- Consistent spacing scale (8px, 16px, 24px, 32px, 48px, 64px)
- Smooth transitions (0.2s-0.3s for most interactions)
- Hover state feedback on every interactive element

**Industry Context Always**:
- Design choices should feel appropriate for a civil engineer
- Creativity within professional boundaries
- Trust and credibility through design precision
- Technical expertise communicated visually

## Final Checklist Before Delivery

- [ ] Distinctive typography that elevates the design
- [ ] Cohesive color system with industry context
- [ ] Clear visual hierarchy emphasizing key achievements
- [ ] Strategic animations at high-impact moments
- [ ] Atmospheric backgrounds adding depth
- [ ] Project showcase with proper hierarchy
- [ ] Statistics visualized prominently
- [ ] Responsive design tested on multiple devices
- [ ] Accessibility standards met (WCAG 2.1 AA minimum)
- [ ] Performance optimized (Lighthouse score 90+)
- [ ] Call-to-action prominent and unmissable
- [ ] Professional credibility communicated through design
- [ ] Unique and memorable - not generic AI aesthetic
- [ ] Production-ready code with no placeholders

Remember: This is a technical professional's portfolio. Balance creativity with credibility. The design should make someone think "This person can solve complex problems with precision and innovation."