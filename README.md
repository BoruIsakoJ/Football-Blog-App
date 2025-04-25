# ⚽ Football Blog React App

A responsive and dynamic single-page React application where users can read, create, update, and delete blog posts about football teams, players, and events. Built for fans to express their passion for the beautiful game.

## 🚀 Live Demo

Frontend (Vercel):  
🔗 [https://football-blog-app.vercel.app/](https://football-blog-app.vercel.app/)

Backend API (Render):  
🔗 [https://football-blogs-json-server.onrender.com/api/posts](https://football-blogs-json-server.onrender.com/api/posts)

---

## 🛠 Tech Stack

- **Frontend**: React, React Router, Bootstrap, JSX
- **Backend**: `json-server` hosted on Render
- **Deployment**: Vercel (Frontend), Render (API)

---

## ✨ Features

- View football blog posts on the homepage
- Read full articles on a separate page
- Add a new blog post via a form
- Delete posts
- Responsive and mobile-friendly design
- Clean UI with Bootstrap styling

---

## 🧠 How It Works

### Backend (Mock API)

The app uses `json-server` to serve mock REST API data.

Sample data structure in `db.json`:

```json
{
  "posts": [
    {
      "id": 1,
      "title": "Top 10 Football Players in 2024",
      "author": "John Doe",
      "authorImage": "https://example.com/john.jpg",
      "date": "2024-04-21",
      "image": "https://example.com/messi.jpg",
      "content": "Here's our list of top players..."
    }
  ]
}
```

API is accessible at:
```
https://football-blogs-json-server.onrender.com/api/posts
```

### Frontend

React handles routing, fetching data from the Render API, and all CRUD operations.

Make sure all fetch calls use the Render API base URL:

```js
fetch("https://football-blogs-json-server.onrender.com/api/posts")
```

---

## 📂 Folder Structure

```
├── public/
│   └── index.html
│   ├── images
├── src/
│   ├── components/
│   │   ├── Card.js
│   │   ├── Hero.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── PostDetails.js
│   │   ├── NewPost.js
│   │   
│   ├── App.js
│   ├── index.js
├── db.json (for local testing)
└── README.md
```

---

## 🧪 Running Locally

1. **Clone the repository**

```bash
git clone https://github.com/BoruIsakoJ/Football-Blog-App.git
cd Football-Blog-App
```

2. **Install dependencies**

```bash
npm install
```

3. **Run local development server**

```bash
npm run dev
```

---

## 👥 Authors

- **Boru Isako**  
- **David Marvin**  
- **Emmanuel Ndenga**  
- **Margaret Wanjiku**  
- **Moriaso Salaon**
