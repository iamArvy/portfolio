---
  title: Lodgr
  description: A website for a House Rentals Company with a Catalogue for browsing, booking features, and payment integration.
  rating: 5
  type: Website
  cover: /images/projects/lodgr.png
  stack: [
    "Typescript",
    "NuxtJS",
    "Nest.js",
    "Paystack",
    "TailwindCSS",
    "PostgreSQL",
    "TypeORM",
    "Vue"
  ]
  links: {
    live: "https://lodgr-pi.vercel.app"
  }
  slug: lodgr
  gallery: [
    /images/projects/lodgr.png,
    /images/projects/lodgr.png,
    /images/projects/lodgr.png,
  ]
---
## Overview

Lodgr is a full-stack property leasing platform designed to simplify how users discover, evaluate, and manage rental properties. The platform combines a modern, responsive frontend with structured backend APIs to deliver a smooth experience for browsing properties, managing wishlists, and tracking lease agreements. It is built to demonstrate real-world product flows common to prop-tech platforms, with a strong focus on UX, scalability, and clarity.

---

## Key Features

* Secure user authentication and session management
* Advanced property browsing with search and multi-criteria filtering
* Detailed property pages with galleries, amenities, and agent details
* Wishlist functionality for saving preferred properties
* Lease management dashboard for active, expired, and past leases
* Simulated Paystack payment flow for realistic booking experience
* Responsive, mobile-first UI built with modern component patterns

---

## Architecture & Design

Lodgr is built using Nuxt's full-stack capabilities, combining server routes for API logic with a component-driven Vue 3 frontend. The API layer exposes structured endpoints for properties, leases, wishlists, and metadata such as locations and amenities. Mock data is used to simulate real database interactions, allowing the focus to remain on system design, data contracts, and frontend-backend integration.

The UI follows a clean, card-based layout system powered by Tailwind CSS and Shadcn-Vue components, ensuring accessibility, responsiveness, and consistent visual hierarchy across the application.

---

## My Contributions

* Designed and implemented the full-stack architecture using Nuxt 4
* Built reusable property listing and filtering components
* Implemented authenticated user flows including wishlist and leases
* Designed REST-style API endpoints with typed request/response contracts
* Integrated a simulated Paystack payment flow for booking scenarios
* Delivered a responsive, production-style UI with Tailwind CSS

---

## Results / Impact

* Demonstrated a realistic prop-tech product workflow end-to-end
* Enabled complex filtering and browsing without sacrificing UX
* Showcased full-stack Nuxt capabilities (API + frontend)
* Created a strong portfolio example of scalable frontend-backend integration

---

## Testing & Quality Assurance

* Schema-based form validation with Zod and VeeValidate
* Typed API contracts to reduce integration errors
* Component reuse to maintain UI consistency
* ESLint for enforcing code quality and standards

---

## Security Considerations

* Session-based authentication using Nuxt Auth Utils
* Input validation on both client and server routes
* Prepared structure for secure server-side payment handling
* Controlled access to user-specific resources (wishlists, leases)

---

## What I Learned

* Designing full-stack applications with Nuxt server routes
* Structuring scalable filtering and search experiences
* Building clean API contracts for frontend consumption
* Modeling real-world leasing and payment flows