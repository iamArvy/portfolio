---
  title: Leenkonnect - IT Solutions & E-commerce Platform
  description: A full-stack platform combining IT consulting, content, and e-commerce in one seamless experience
  rating: 4
  role: web
  live: https://leenkonnect.vercel.app
  repository: https://github.com/iamArvy/leenkonnect-frontend
  image: /images/projects/leenkonnect.png
  technologies: [
    { name: "NuxtJS", icon: "logos:nuxt-icon", slug: "nuxtjs"},
    { name: "Typescript", icon: "logos:typescript-icon", slug: "typescript"},
    { name: "TailwindCSS", icon: "logos:tailwindcss-icon", slug: "tailwindcss"},
    { name: "Shadcn", icon: "simple-icons:shadcnui", slug: "shadcn"},
    { name: "Laravel", icon: "logos:laravel", slug: "laravel" },
    { name: "PostgreSQL", icon: "logos:postgresql", slug: "postgresql" },
  ]
---

## Overview

Leenkonnect is a full-stack web platform that provides IT consultation services alongside an integrated e-commerce experience. The application enables users to explore IT services, book expert consultations, purchase products, and consume technical content through a unified interface. Built with Nuxt.js and Vue 3, it leverages server-side rendering for performance, SEO, and a smooth user experience.
* **Source Code:** [https://github.com/iamArvy/leenkonnect-frontend](https://github.com/iamArvy/leenkonnect-frontend)
* **Live Demo:** [https://leenkonnect.vercel.app](https://leenkonnect.vercel.app)
---

## Key Features

* Secure user authentication with email verification and two-factor authentication
* Full e-commerce workflow including product catalog, filtering, cart, and checkout
* IT consultation booking with intuitive scheduling flow
* Dynamic blog system with categories and detailed posts
* Service showcase highlighting IT offerings and capabilities
* Client testimonials and social proof
* Responsive, mobile-first UI
* Paystack integration for secure payments

---

## Tech Stack

* **Framework:** Nuxt.js 3, Vue 3, TypeScript
* **Styling & UI:** Tailwind CSS, Shadcn-Vue
* **Backend / API:** Nuxt Server Routes, Node.js
* **Authentication:** Nuxt Auth Utilities
* **Payments:** Paystack
* **Forms & Validation:** VeeValidate, Zod
* **UX Utilities:** Embla Carousel, Vue Sonner
* **Tooling:** pnpm, Faker.js

---

## Architecture & Design

Leenkonnect uses Nuxt's hybrid rendering model, combining server-side rendering and client-side interactivity. Backend logic is handled through Nuxt server routes, enabling tight integration between frontend and API layers. The architecture supports modular features such as authentication, e-commerce, content delivery, and consultations while maintaining a cohesive developer experience and consistent UI patterns.

---

## My Contributions

* Designed and implemented the full application architecture using Nuxt.js
* Built authentication flows including registration, login, password reset, and 2FA
* Implemented product catalog, cart persistence, and checkout flow
* Integrated Paystack for secure payment processing
* Developed server routes for products, blogs, services, and checkout
* Created responsive, reusable UI components with Tailwind CSS and Shadcn-Vue

---

## Results / Impact

* Delivered an all-in-one platform combining services, commerce, and content
* Improved user engagement through streamlined navigation and booking flows
* Enabled scalable feature expansion via modular server routes
* Established a strong SEO-friendly foundation using SSR

---

## Testing & Quality Assurance

* Schema-based validation with Zod and VeeValidate
* Consistent API response handling via server routes
* Component reuse to reduce UI bugs
* Development tooling for rapid feedback and iteration

---

## Security Considerations

* Secure authentication with session handling and 2FA support
* Input validation on both client and server
* Payment handling delegated securely to Paystack
* Protected API routes for authenticated actions

---

## What I Learned

* Building full-stack applications using Nuxt server routes
* Designing scalable e-commerce and booking workflows
* Balancing SSR performance with rich client-side UX
* Structuring large Nuxt applications for maintainability