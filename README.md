# Aashirvaad Palace - Wedding & Banquet Hall Website

A fully responsive, multi-page website built with React, Vite, and Tailwind CSS for Aashirvaad Palace - a premium wedding and banquet venue.

## Features

- **6 Pages**: Home, About, Services, Pricing, Gallery, Contact
- **Fully Responsive**: Mobile-first design that works on all devices
- **EmailJS Integration**: Contact form sends emails directly to the client
- **WhatsApp Button**: Floating chat button for instant communication
- **Smooth Animations**: Fade-in page transitions and hover effects
- **Gallery with Filters**: Filter by Weddings, Receptions, Decor, Corporate
- **SEO Optimized**: Unique page titles and meta descriptions
- **Back to Top Button**: Easy navigation for long pages

## Tech Stack

- React 18 with Vite
- Tailwind CSS (v4)
- React Router DOM
- EmailJS (@emailjs/browser)
- React Helmet Async

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Clone or download this repository

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

4. Fill in your EmailJS credentials in `.env` (see setup below)

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## EmailJS Setup Guide

### Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add an Email Service

1. In your EmailJS dashboard, click **Email Services** in the left sidebar
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and authorize EmailJS
5. Note the **Service ID** (e.g., `service_abc123`)

### Step 3: Create an Email Template

1. Click **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Set up your template with the following variables:

   **Subject:** `New Inquiry from {{from_name}} - Aashirvaad Palace`

   **Content:**
   ```
   New Event Inquiry

   Name: {{from_name}}
   Phone: {{from_phone}}
   Email: {{from_email}}
   Event Type: {{event_type}}
   Event Date: {{event_date}}
   Number of Guests: {{number_of_guests}}

   Message:
   {{message}}

   ---
   Sent from Aashirvaad Palace Website
   ```

4. In **To Email**, set it to: `kinjal.sois07@gmail.com`
5. Save the template
6. Note the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key

1. Click **Account** in the left sidebar (or your profile icon)
2. Find your **Public Key** under the API Keys section
3. Note the **Public Key** (e.g., `user_abc123def456`)

### Step 5: Update .env File

Open `.env` and replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=user_your_actual_public_key
```

### Step 6: Test

1. Restart your dev server (`npm run dev`)
2. Go to the Contact page
3. Fill out the form and submit
4. Check the recipient email for the inquiry

## WhatsApp Setup

The WhatsApp floating button is configured to link to: `+971 52 310 0473`

To change the number, update the `WHATSAPP_NUMBER` constant in:
`src/components/WhatsAppButton.jsx`

## Color Theme

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary (Deep Red) | `#8B0000` | Headings, buttons, accents |
| Primary Light | `#B22222` | Hover states, gradients |
| Accent (Gold) | `#D4AF37` | Highlights, badges, icons |
| Background (Cream) | `#FFF8F0` | Page background |
| Text (Charcoal) | `#1a1a1a` | Body text |

## Project Structure

```
aashirwaad-palace/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── BackToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── .env.example
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Updating Content

- **Text content**: Edit the respective page files in `src/pages/`
- **Images**: Replace Unsplash URLs with your own images
- **Team members**: Update the `team` array in `About.jsx`
- **Pricing**: Modify the `plans` array in `Pricing.jsx`
- **Gallery**: Update the `galleryItems` array in `Gallery.jsx`

### Adding Real Images

Replace the Unsplash URLs with paths to your actual images:

1. Place images in `src/assets/` or `public/`
2. Update image `src` attributes:
   ```jsx
   import heroImage from './assets/hero.jpg';
   // or
   <img src="/images/hero.jpg" alt="..." />
   ```

## License

This project is proprietary and confidential.

---

Built with ❤️ for Aashirvaad Palace
