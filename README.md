# 🌱 Greenify

A modern Next.js application dedicated to environmental sustainability, focusing on digital waste management, eco-friendly campaigns, and sustainable living solutions.

## 📋 Overview

Greenify is a comprehensive platform that combines technology with environmental consciousness to address the growing challenges of digital waste and promote sustainable practices. Founded in 2024, we believe technology should work in harmony with nature, not against it.

## ✨ Features

- **Digital Waste Management**: Optimize server usage and efficient data management to reduce carbon footprint
- **Eco Campaigns**: Collaborative movements to raise environmental awareness in the digital age
- **Eco Products**: Curated selection of environmentally friendly products supporting zero-waste lifestyles
- **Impact Tracking**: Real-time monitoring of environmental impact metrics
- **Community Engagement**: Connect with 3,000+ verified volunteers and global partners
- **Responsive Design**: Modern, mobile-first interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.4
- **Frontend**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Build Tool**: Next.js (with PostCSS)
- **Linting**: ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jodijonatan/greenify
cd greenify
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📁 Project Structure

```
greenify/
├── public/                 # Static assets
│   ├── images/            # Image files
│   └── *.svg              # Icon files
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── about/         # About page
│   │   ├── campaigns/     # Campaigns page
│   │   ├── gallery/       # Gallery page
│   │   ├── impact/        # Impact page
│   │   ├── partners/      # Partners page
│   │   ├── services/      # Services page
│   │   ├── globals.css    # Global styles
│   │   ├── layout.jsx     # Root layout
│   │   └── page.jsx       # Home page
│   └── components/        # Reusable components
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── Navbar.jsx
│       ├── SectionTitle.jsx
│       └── StatCard.jsx
├── package.json
├── next.config.mjs
├── tailwind.config.mjs
├── postcss.config.mjs
├── jsconfig.json
└── eslint.config.mjs
```

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🌍 Pages

- **Home** (`/`): Landing page with services overview and statistics
- **About** (`/about`): Company story, mission, vision, and values
- **Campaigns** (`/campaigns`): Active environmental campaigns
- **Gallery** (`/gallery`): Visual showcase of projects and impact
- **Impact** (`/impact`): Detailed impact metrics and reports
- **Partners** (`/partners`): Our global partners and collaborators
- **Services** (`/services`): Detailed service offerings

## 🤝 Contributing

We welcome contributions to Greenify! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
