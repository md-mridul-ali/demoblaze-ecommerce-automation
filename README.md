# Demoblaze Automation Testing Project

## 📌 Project Overview

This project is an End-to-End (E2E) automation testing framework built using Playwright with JavaScript for the Demoblaze e-commerce website.

The framework automates major user functionalities including:

* User Registration
* User Login
* User Logout
* Add Product to Cart
* Remove Product from Cart
* Checkout Process
* Contact Form Submission

---

## 🚀 Technologies Used

* Playwright
* JavaScript
* Node.js

---

## 📂 Project Structure

```bash
tests/
│
├── auth/
│   ├── registration.spec.js
│   ├── login.spec.js
│   └── logout.spec.js
│
├── cart/
│   ├── addToCart.spec.js
│   └── removeCart.spec.js
│
├── checkout/
│   └── checkout.spec.js
│
├── contact/
│   └── contact.spec.js
│
├── test-results/
│
└── playwright.config.js
```

---

## ✅ Automated Test Scenarios

### 🔐 Authentication

* User Registration
* User Login
* User Logout

### 🛒 Cart Functionality

* Add Product to Cart
* Remove Product from Cart

### 💳 Checkout Functionality

* Complete Purchase Flow

### 📩 Contact Feature

* Submit Contact Form Successfully

---
## 📸 Registration Screenshot

![Registration](tests/screenshots/registration.png)
![Login](tests/screenshots/login.png)
![Add to Cart](tests/screenshots/addToCart.png)
![Fill Checkout form](tests/screenshots/FillCheckout.png)
![Payment](tests/screenshots/paymentDone.png)
![Remove Add to Cart](tests/screenshots/BeforeDelete.png)
![Remove Add to Cart](tests/screenshots/AfterDoneDelete.png)
![Send Message](tests/screenshots/wrightMessage.png)
![Logout](tests/screenshots/logout.png)


## ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run specific test file:

```bash
npx playwright test tests/auth/registration.spec.js
```

Run tests in specific browser & headed mode:

```bash
npx playwright test tests/auth/registration.spec.js --project=chromium --headed
```

---

## 📊 Generate HTML Report

```bash
npx playwright show-report
```

The report includes:

* Passed Tests
* Failed Tests
* Screenshots
* Videos
* Error Logs

---

## 🔥 Features

* End-to-End Automation Testing
* Organized Folder Structure
* Reusable Test Cases
* beforeEach() and afterEach() Hooks
* Assertions with Playwright Expect
* Screenshot Capture on Failure
* Video Recording on Failure
* HTML Reporting

---

## 🚀 Future Improvements

* Page Object Model (POM)
* Faker.js Random Test Data
* Environment Variables (.env)
* GitHub Actions CI/CD
* Allure Reporting
* Cross-Browser Testing
* Parallel Execution
* Data-Driven Testing

---

## 🌐 Test Website

Demoblaze Website:

https://www.demoblaze.com/index.html

---

## 👨‍💻 Author

### Mridul Islam

* Computer Science & Engineering Student
* Interested in Software Testing and Automation
* Learning Playwright Automation Testing
* Focused on QA Automation and End-to-End Testing
