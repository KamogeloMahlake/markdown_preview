# Markdown Preview

## Description
A web application for previewing Markdown files in real-time. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features
- Live Markdown preview using `marked` library.
- Editable textarea for entering Markdown content.
- Real-time rendering of Markdown content.

## Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/KamogeloMahlake/markdown_preview.git
cd markdown_preview
npm install


## Usage
Run the application:
```bash
npm start
```
Open your browser and navigate to `http://localhost:3000` to preview Markdown files.

### App.js Details
The main functionality is implemented in `App.js`. Here are some details:
- The application uses the `marked` library to parse Markdown.
- The default input contains various Markdown elements for demonstration.
- The `App` component manages the state and handles changes in the input.
- The preview is rendered using `dangerouslySetInnerHTML` to display the parsed Markdown.

## Contributing
Feel free to submit issues or pull requests for bug fixes and feature enhancements.