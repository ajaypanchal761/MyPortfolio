# 🌐 Ajay Panchal - Portfolio Website

A modern, responsive, and animated portfolio website showcasing Ajay Panchal's skills, experience, and projects. Built with **React.js**, **Tailwind CSS**, and **Vite** for optimal performance and developer experience.

## 🚀 Live Demo

🔗 [View Portfolio Live](https://ajay-portfolio-vercel.vercel.app/)

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React.js** - UI library for building interactive components
- 🎨 **Tailwind CSS** - Utility-first CSS framework for styling
- 🚀 **Vite** - Fast build tool and development server
- 📱 **React Icons** - Icon library for React applications
- 🎯 **React Parallax Tilt** - 3D tilt effects for interactive elements
- ⌨️ **React Typing Effect** - Animated typing effects
- 🔔 **React Toastify** - Toast notifications

### Backend & Services
- 📧 **EmailJS** - Email service integration for contact form
- 🌐 **Vercel** - Deployment and hosting platform

### Development Tools
- 🔍 **ESLint** - Code linting and quality assurance
- 🎨 **PostCSS** - CSS processing
- 🔧 **Autoprefixer** - CSS vendor prefixing

## 📁 Project Features

### 🎨 Design & UX
- **Dark Theme** - Modern dark color scheme with gradient backgrounds
- **Responsive Design** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations** - GSAP-powered animations and transitions
- **Interactive Elements** - Hover effects, parallax tilts, and micro-interactions
- **Grid Background** - Subtle grid pattern with radial gradient mask

### 📋 Content Sections
- **About** - Personal introduction and background
- **Skills** - Technical skills organized by category (Frontend, Backend, Languages, Tools)
- **Experience** - Professional work experience with company details
- **Projects** - Portfolio of completed projects with descriptions
- **Education** - Academic background and achievements
- **Certifications** - Professional certifications and achievements
- **Contact** - Contact form with EmailJS integration
- **Footer** - Social links and additional information

### 🔧 Technical Features
- **Modular Components** - Clean, reusable React components
- **Performance Optimized** - Fast loading with Vite build tool
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Accessibility** - ARIA labels and keyboard navigation
- **Cross-browser Compatible** - Works across all modern browsers

## 🧑‍💻 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Ajay_Portfolio.git
cd Ajay_Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. EmailJS Setup (Required for Contact Form)

To enable the contact form functionality:

1. **Create EmailJS Account**: Sign up at [EmailJS](https://www.emailjs.com/)
2. **Create Email Service**: Add your email service (Gmail, Outlook, etc.)
3. **Create Email Template**: Create a template with these variables:
   - `{{to_email}}` - Recipient email (your email)
   - `{{user_email}}` - Sender's email
   - `{{user_name}}` - Sender's name
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
4. **Set Environment Variables**: Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

### 6. Preview Production Build

```bash
npm run preview
```

## �� Project Structure

```
Ajay_Portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, logos, and media files
│   │   ├── certification/ # Certification images
│   │   ├── company_logo/  # Company logos
│   │   ├── education_logo/# Education institution logos
│   │   ├── tech_logo/     # Technology logos
│   │   └── work_logo/     # Project logos
│   ├── components/        # React components
│   │   ├── About.jsx
│   │   ├── BlurBlob.jsx
│   │   ├── CertificateModal.jsx
│   │   ├── Certification.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Skills.jsx
│   │   └── Work.jsx
│   ├── constants.js       # Data and configuration
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md            # Project documentation
```

## 🎯 Key Features

### Skills Showcase
- **Frontend**: HTML, CSS, JavaScript, React.js, Tailwind CSS, Material UI, WordPress
- **Backend**: Spring Boot, REST API, MySQL
- **Languages**: Java, Python, JavaScript
- **Tools**: Git, GitHub, VS Code, Postman, Vercel

### Featured Projects
1. **Chalo Sawari** - Full-stack travel booking platform
2. **QR Code Attendance System** - Web-based attendance management
3. **Online Banking System** - Secure banking application
4. **Portfolio Website** - This current project

### Professional Experience
- **Frontend Developer** at Appzeto (July 2025 - Present)
- **Java Developer** at Coding Raja Technologies (June 2024 - July 2024)

## 🚀 Deployment

This project is deployed on **Vercel** for optimal performance and global CDN distribution.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically on every push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Ajay Panchal** is a passionate Full Stack Developer with expertise in:
- Frontend Development (React.js, JavaScript, HTML/CSS)
- Backend Development (Java, Spring Boot)
- Database Management (MySQL)
- Modern Web Technologies

## 📞 Contact

- **Email**: panchalajay717@gmail.com
- **Portfolio**: [https://ajay-portfolio-vercel.vercel.app/](https://ajay-portfolio-vercel.vercel.app/)
- **GitHub**: [Your GitHub Profile]

---

⭐ **If you find this portfolio helpful, please give it a star!**
