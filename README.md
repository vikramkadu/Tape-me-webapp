# TapMe Application

## Overview

TapMe is a web application where users can tap an image to earn coins. Users can connect their TON wallets to interact with the application and redeem their coins for Jettons on the TON blockchain. The application consists of a React frontend and a Node.js backend.

---

## React Frontend

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd tapme-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables:
    ```env
    REACT_APP_BASE_URL=<your-supabase-url>
    REACT_APP_MANIFEST_URL=<your-manifest-url>

4. Start the development server:
    ```bash
    npm start
    ```

### Build

To build the application for production, run:
```bash
npm run build
