# CineSphere

CineSphere is a movie-tracking web application that allows users to explore, track, and manage their favorite movies. The app provides features such as movie discovery, reviews, and watchlist management.

## Features

- 🎬 Browse and search for movies
- 📌 Add movies to a watchlist
- ⭐ Rate and review movies
- 🛠️ Manage your movie library
- 🔍 Fetch real-time movie data via API

## Tech Stack

- **Frontend:** React, Redux Toolkit, Bootstrap
- **Backend:** Node.js, Express, MongoDB (Deployed on Vercel)
- **State Management:** Redux Toolkit

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/cinesphere.git
   cd cinesphere
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your API keys:
   ```env
   REACT_APP_MOVIE_API_KEY=your_tmdb_api_key
   BACKEND_URL=https://your-backend.vercel.app
   ```

4. Start the development server:
   ```sh
   npm start
   ```

## Usage

- Visit `http://localhost:3000` to use CineSphere.
- Search for movies using the search bar.
- Add movies to your watchlist.
- View details, ratings, and reviews of each movie.
- Remove movies from your list as needed.

## Deployment

### Frontend Deployment (Vercel)
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy the frontend:
   ```sh
   vercel
   ```

### Backend Deployment (Vercel)
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Deploy the backend:
   ```sh
   vercel
   ```

## Contributing

Contributions are welcome! To contribute:
- Fork the repository.
- Create a feature branch (`git checkout -b feature-name`).
- Commit changes (`git commit -m 'Add new feature'`).
- Push to the branch (`git push origin feature-name`).
- Open a pull request.

