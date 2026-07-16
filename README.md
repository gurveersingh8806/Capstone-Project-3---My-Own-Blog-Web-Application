# 📝 My Own Blog Web Application

A simple, elegant blogging platform built with Node.js and Express. Create, read, edit, and delete blog posts with an intuitive web interface. Perfect for personal blogging or as a learning project for full-stack web development.

## ✨ Features

- **Create Posts** – Write new blog posts with a title and content
- **Read Posts** – View all posts on the homepage or read individual posts
- **Edit Posts** – Update existing post titles and content
- **Delete Posts** – Remove posts you no longer want
- **Responsive Design** – Clean, modern UI that works on desktop and mobile
- **Persistent Session Data** – Posts remain in memory during the server session

## 🛠️ Tech Stack

- **Backend:** Node.js with Express.js (ES modules)
- **Frontend:** EJS templating engine
- **Styling:** Bootstrap 5.3.3 + custom CSS
- **Data:** In-memory storage (posts array)
- **Utilities:** body-parser for form handling, crypto for unique post IDs

## 📁 Project Structure

```
├── index.js                 # Main Express server and route handlers
├── package.json             # Project dependencies and metadata
├── public/
│   └── styles/
│       └── main.css         # Custom stylesheet
├── views/
│   ├── index.ejs           # Homepage with blog post list
│   ├── new.ejs             # Form to create a new post
│   ├── post.ejs            # Individual post view
│   ├── edit.ejs            # Form to edit a post
│   └── partials/
│       ├── header.ejs      # Navigation header (reusable)
│       └── footer.ejs      # Footer (reusable)
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gurveersingh8806/Capstone-Project-3---My-Own-Blog-Web-Application.git
   cd Capstone-Project-3---My-Own-Blog-Web-Application
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

Start the server:
```bash
npm start
```

Or with auto-reload during development:
```bash
npx nodemon index.js
```

The application will be available at:
```
http://localhost:3000
```

## 📖 Usage

### Create a Post
1. Click **"Start a new Blog"** button on the homepage
2. Enter a title and content
3. Click **"Create Post"** to save

### View a Post
- Click on any post title in the homepage to view the full post

### Edit a Post
1. Click the **"Edit"** button on any post
2. Modify the title and/or content
3. Click **"Save Changes"** to update

### Delete a Post
- Click the **"Delete"** button on any post (this cannot be undone in the current session)

## 🌐 Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Homepage – view all blog posts |
| GET | `/new` | Show form to create a new post |
| POST | `/new` | Create a new blog post |
| GET | `/posts/:id` | View a specific post |
| GET | `/posts/:id/edit` | Show form to edit a post |
| POST | `/posts/:id/edit` | Save changes to a post |
| POST | `/posts/:id/delete` | Delete a post |

## 📝 API Example

### Creating a Post (via form)
```
POST /new
Body: { title: "My First Post", content: "Hello, World!" }
```

### Response Redirect
```
→ GET /
```

## 🎨 Styling

The application uses:
- **Bootstrap 5.3.3** for responsive layout and components
- **Custom CSS** (`public/styles/main.css`) for blog-specific styling:
  - Blue primary buttons (#2563eb)
  - Gray secondary buttons (#6b7280)
  - Red danger buttons (#dc2626)
  - Clean white post cards with subtle shadows
  - Mobile-friendly responsive design

## 💾 Data Persistence

**Note:** Posts are stored in memory and will be lost when the server restarts. To persist data permanently, consider adding:
- A database (MongoDB, PostgreSQL, SQLite)
- File-based storage (JSON file)
- Cloud storage integration

## 🚧 Future Enhancements

- [ ] Add database integration for persistent storage
- [ ] Implement user authentication and authorization
- [ ] Add markdown support for richer content formatting
- [ ] Include search and filtering functionality
- [ ] Add categories/tags for organizing posts
- [ ] Implement pagination for large post lists
- [ ] Add comments feature
- [ ] Image upload support

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Gurveer Singh** – [GitHub Profile](https://github.com/gurveersingh8806)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## ❓ Support

For issues or questions, please open a GitHub issue in the repository.

---

Happy blogging! 📚✍️
