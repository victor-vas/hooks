import React from 'react';
import './style.css';

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => (
  <div className="SectionTitle">
    <h3>{title}</h3>
  </div>
);

export default SectionTitle;
