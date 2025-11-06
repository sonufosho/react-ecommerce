# React E‑commerce

A small example e-commerce frontend built with React and Vite. This project pairs with the included `ecommerce-backend` (an Express + Sequelize demo server) and implements product listing, cart, checkout, orders, and basic order tracking UI.

## 🌐 Live Demo

👉 Live demo will be available soon.

## Features

- Product listing and details
- Shopping cart with add/remove/update
- Checkout and payment summary (mock)
- Orders listing and tracking UI
- Webpack-free development with Vite and fast HMR

## Repository layout

- `ecommerce-project/` — React frontend (this README)
	- `src/` — React source
	- `index.html`, `vite.config.js` — Vite config and entry
	- `package.json` — frontend scripts and deps
- `ecommerce-backend/` — demo backend (Express + Sequelize + sqlite-like sql.js)
	- `server.js` — API server and default data seeding
	- `routes/`, `models/`, `images/` — API and static assets

## Prerequisites

- Node.js 18+ and npm (Windows: PowerShell shown below)
- Git (optional)

## Quickstart (development)

1. Open two terminals (one for backend, one for frontend).

2. Start the backend API (default port 3000):

```powershell
cd D:\Code\react-ecommerce\ecommerce-backend
npm install
npm run start    # or `npm run dev` to use nodemon
```

3. Start the frontend (Vite dev server on 5173):

```powershell
cd D:\Code\react-ecommerce\ecommerce-project
npm install
npm run dev
```

4. Open your browser to http://localhost:5173

## Notes

- The frontend is configured to proxy `/api` and `/images` to the backend (see `vite.config.js`). Keep the backend running on port `3000` or update the proxy target.
- The backend seeds default data into the in-memory/sql.js database on first run. Images are served from the backend at `/images`.

## Routes (developer-facing)

- Frontend routes (check `src/App.jsx`):
	- `/` — Home / product listing
	- `/checkout` — Checkout flow
	- `/orders` — Orders list
	- `/tracking/:orderId/:productId` — Tracking page for an order product

- Backend API endpoints (see `ecommerce-backend/server.js` and `routes/`):
	- `GET /api/products`
	- `GET /api/orders` and `GET /api/orders/:id` (support `?expand=products`)
	- `POST /api/cart-items`, `GET /api/cart-items`, etc.

## Common issues & troubleshooting

- Page not loading / runtime errors:
	- Ensure `react-router-dom` is installed and imports use `react-router-dom` (not `react-router`). Some components expect `useParams()` to return an object — wrong import or destructuring can cause runtime crashes.
		```powershell
		cd D:\Code\react-ecommerce\ecommerce-project
		npm i react-router-dom
		```

- API 404s / images not loading:
	- Confirm the backend is running on port `3000` and that the frontend dev server proxy in `vite.config.js` points to `http://localhost:3000`.

- Rebuild frontend for production and serve from backend:
	- Build the frontend and copy the `dist` into the backend (server serves `dist`):
		```powershell
		cd D:\Code\react-ecommerce\ecommerce-project
		npm run build
		# copy dist/* to ecommerce-backend/dist or configure your deploy pipeline
		```

## Contributing

Feel free to contribute to this project! Just:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/sonufosho/react-ecommerce/issues).

## 📝 License

This project is licensed under the [MIT](LICENSE) License. 

## 👏 Acknowledgments

- Thanks to all contributors who have helped make this E-commerce better
- Special thanks to the open-source community for inspiration

---

Made with ❤️ by [sonufosho](https://github.com/sonufosho)