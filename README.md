# Angular 18 Assignment – Hardik Shah (N01634409)

This project is a fully responsive **client-side web application** developed using **Angular 18** (with **standalone components**) as part of a college assignment. It demonstrates routing, real-time data fetching from a public API, and form handling using Angular's reactive forms.

---

## 🌐 Live Application

🔗 [Click here to view the deployed app on Vercel](https://angular-assignment-amber.vercel.app/)

---

## 🧠 Project Summary

The app consists of three major pages:

1. **Home** – A welcome landing page introducing the app.
2. **API Data** – A dynamic page that fetches and displays JSON data from a public API using Angular's HttpClient.
3. **Feedback Form** – A reactive form with input validation to collect user feedback.

---

## 🚀 Features

- ✅ Built using Angular 18 with standalone components
- ✅ Client-side routing with Angular Router
- ✅ Real-time API data integration (JSONPlaceholder)
- ✅ Fully reactive form with validation and form state management
- ✅ Clean UI and responsive layout
- ✅ Hosted and deployed publicly using Vercel

---

## 🛠️ Technologies Used

| Technology     | Description                            |
|----------------|----------------------------------------|
| Angular 18     | Frontend framework                     |
| TypeScript     | Language used for writing Angular code |
| JSONPlaceholder| Free public API for testing            |
| RxJS           | Reactive programming                   |
| Vercel         | Deployment platform                    |
| HTML/CSS       | Template and styling                   |

---

## 📁 Pages & Components

### 🏠 Home Page

- Route: `/`
- Simple page with app introduction text

### 🌐 API Data Page

- Route: `/api-data`
- Uses `HttpClient` and a custom service to fetch and render API data

### 📝 Feedback Form Page

- Route: `/form`
- Uses `FormBuilder` and Angular Reactive Forms
- Validates `name`, `email`, and `message` fields
- Displays error messages and feedback

---

## ⚙️ Project Setup Instructions

### 🛠 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- [Angular CLI](https://angular.io/cli) (v18 or above)

---


Clone the repository and install dependencies:

```bash
git clone https://github.com/hardikshah18/Angular_Assignment
cd assignment
npm install

▶️ Run the Project Locally
    ng serve

Open your browser and visit:
    http://localhost:4200/
    