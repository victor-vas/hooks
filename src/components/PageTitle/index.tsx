import React from 'react';
import './style.css';

interface PageTitleProps {
  title: string;
  subtitle: string;
  error?: boolean;
}

const PageTitle = ({ title, subtitle, error }: PageTitleProps) => (
  <div className={`PageTitle ${error ? 'error' : ''}`}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
);

export default PageTitle;
