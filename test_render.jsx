import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ResearchPublications from './src/ResearchPublications.jsx';

try {
  const html = renderToStaticMarkup(<ResearchPublications />);
  console.log("Render successful");
} catch (error) {
  console.error("Render failed:", error);
}
