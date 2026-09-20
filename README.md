# EPHTEE Store

**Quality You Can Taste. Value You Can Trust.**

EPHTEE is a cloud-ready e-commerce platform designed for ordering cakes, snacks, small chops, meals, drinks, fruit packs, foodstuff, and provisions across Lagos and Ogun.

The project is being developed as both a real-world business platform and a portfolio project demonstrating **AWS Cloud, Data Engineering, backend integration, and scalable solution design**.

---

## 🚀 Project Overview

EPHTEE is designed to address common challenges customers and food vendors face when ordering food products and custom orders online.

The platform aims to provide:

- Easy product discovery and navigation
- Simple cart and checkout experience
- Custom order requests
- Clear product pricing
- Convenient ordering and delivery
- Quality-focused order fulfillment
- Data-driven business insights

The long-term goal is to build EPHTEE into a scalable, cloud-backed e-commerce solution.

---

## ✨ Current Features

The current frontend includes:

- Responsive homepage
- Product shop page
- Product category filtering
- Shopping cart
- Quantity controls
- Persistent cart using browser local storage
- Checkout page
- Custom order request form
- Responsive mobile layout
- Navigation between major pages

### Product Categories

- Cakes & Desserts
- Snacks & Pastries
- Small Chops
- Meals & Food Trays
- Drinks
- Fruit Packs
- Foodstuff
- Provisions

---

## 🛠️ Technology Stack

### Current

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

### Planned Cloud Infrastructure

- Amazon S3
- Amazon CloudFront
- Amazon API Gateway
- AWS Lambda
- Amazon DynamoDB
- Amazon SNS
- AWS Glue
- Amazon Athena

---

## ☁️ Planned AWS Architecture

The planned cloud architecture follows a serverless approach.

**Customer**

↓  

**Amazon CloudFront**

↓

**Amazon S3 — Frontend Hosting**

↓

**Amazon API Gateway**

↓

**AWS Lambda**

↓

**Amazon DynamoDB — Orders**

↓

**Amazon SNS — Notifications**

↓

**Amazon S3 — Order Data**

↓

**AWS Glue — Data Transformation**

↓

**Amazon Athena — Data Analysis**

↓

**Business Intelligence / KPI Dashboard**

The architecture is designed to separate the customer-facing application from backend processing and analytics.

---

## 📊 Data Engineering Plan

EPHTEE is also being developed with data engineering in mind.

Order data can eventually be collected and transformed into structured datasets for:

- Sales analysis
- Product performance
- Customer ordering patterns
- Revenue tracking
- Order volume analysis
- Delivery analysis
- Business performance monitoring

The planned analytics layer will use AWS services such as **S3, Glue, and Athena**.

---

## 🧩 Project Roadmap

### Phase 1 — Frontend Foundation

- [x] Homepage
- [x] Shop page
- [x] Product categories
- [x] Shopping cart
- [x] Checkout page
- [x] Custom order page
- [x] Responsive styling
- [x] GitHub repository

### Phase 2 — Cloud Integration

- [ ] Host frontend on Amazon S3
- [ ] Configure CloudFront
- [ ] Build API Gateway endpoints
- [ ] Create Lambda backend functions
- [ ] Connect DynamoDB
- [ ] Configure order notifications

### Phase 3 — Data Engineering

- [ ] Store order data in S3
- [ ] Build data transformation workflow
- [ ] Configure AWS Glue
- [ ] Query data with Athena
- [ ] Build sales and business KPI dashboard

### Phase 4 — Business Features

- [ ] Real product catalogue
- [ ] Product images
- [ ] Customer order tracking
- [ ] Delivery workflow
- [ ] Payment integration
- [ ] Admin/order management
- [ ] Customer notifications

---

## 🎯 Business Vision

EPHTEE aims to combine the convenience of an online marketplace with the warmth and quality associated with homemade food businesses.

The platform is designed around a simple promise:

> **Quality You Can Taste. Value You Can Trust.**

---

## 👩🏽‍💻 Project Author

**Faith Ogundusi**

Cloud & Data Engineering Portfolio Project

GitHub: `faith-ogundusi`

---

## 📌 Project Status

**Status:** Active Development

The current version represents the frontend foundation of the EPHTEE platform.

Cloud infrastructure, backend services, data pipelines, and analytics capabilities will be implemented progressively.
