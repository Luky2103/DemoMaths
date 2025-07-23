# Math Demonstration Website

This project is a personal website designed to store and review math demonstrations. It provides a user-friendly interface for creating, viewing, and managing mathematical content using LaTeX.

## Features

- **Storage Page**: A main interface to view, sort, and access all stored math demonstrations.
- **Creation Page**: A dedicated page for creating new demonstrations with LaTeX support and a live preview feature.
- **Individual Demonstration Pages**: Each demonstration has its own page for viewing and editing content.
- **Mobile Compatibility**: The website is optimized for mobile devices, ensuring a seamless experience on smaller screens.
- **LaTeX Support**: Users can input LaTeX code to create mathematical expressions, which are rendered in real-time.

## Project Structure

```
math-demo-website
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── DemoList.tsx
│   │   ├── DemoCreate.tsx
│   │   ├── DemoView.tsx
│   │   ├── LatexPreview.tsx
│   │   └── MobileNav.tsx
│   ├── pages
│   │   ├── StoragePage.tsx
│   │   ├── CreatePage.tsx
│   │   └── DemoPage.tsx
│   ├── styles
│   │   ├── main.css
│   │   └── mobile.css
│   ├── utils
│   │   └── latex.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd math-demo-website
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Run the Application**:
   ```
   npm start
   ```
   This will start the development server and open the application in your default web browser.

## Deployment Guidelines

To deploy the application, you can use services like Vercel, Netlify, or GitHub Pages. Follow the respective service's documentation for deployment instructions.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.