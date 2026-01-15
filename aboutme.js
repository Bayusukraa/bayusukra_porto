import React from "react";
import "./about.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h2>About Me</h2>

          <p>
            Hello, I'm <strong>Bayu Sukra</strong>, a Computer Systems student at
            ITB STIKOM Bali with a strong interest in front-end web development
            and user interface design.
          </p>

          <p>
            I focus on building responsive and interactive web applications
            using modern technologies such as React and JavaScript. My academic
            background in Computer Systems allows me to understand system logic,
            data flow, and problem-solving in software development.
          </p>

          <p>
            Throughout my studies, I have worked on various web-based projects
            and case studies that strengthened my skills in UI/UX design,
            component-based development, and clean coding practices. I am
            committed to continuously improving my technical and professional
            abilities in the field of web development.
          </p>
        </div>

        <div className="about-right">
          {/* Tombol Download CV */}
          <a
            href="https://drive.google.com/file/d/1q3_VU4uG0qVqtkwTnMNSiGzX9wsZVism/view?usp=drivesdk"
            className="about-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>

          {/* TOMBOL ALBUM → LANGSUNG BUKA hasil.html DI TAB BARU */}
          <a
            href="/album.html"
            className="about-btn"
          >
            Album
          </a>

          {/* Tombol Cek Inbox */}
          <a href="/hasil.html" className="about-btn">
            Cek Inbox
          </a>
        </div>
      </div>
    </section>
  );
}