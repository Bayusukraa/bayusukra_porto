// src/ProjectPage.jsx
import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./project.css";

const projectList = [
  {
    title: "System Prediksi Harga Gold Machine Learning (PBL)",
    desc: "Advanced machine learning system designed to predict gold prices using historical market data, technical indicators, and economic factors. The model employs regression algorithms and time-series analysis to forecast price trends with high accuracy, helping investors make informed decisions.",
    tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    img: "gold.png",
    demo: "#",
    category: "ml",
  },
  {
    title: "System Prediksi Volume Sampah TPA (PBL)",
    desc: "Smart waste management system utilizing machine learning to predict landfill volume and optimize waste collection schedules. The system analyzes historical waste data, population trends, and seasonal patterns to forecast future waste volumes, enabling better resource allocation and environmental planning.",
    tech: ["Python", "Machine Learning", "Data Analysis", "TensorFlow"],
    img: "ML2.png",
    demo: "https://huggingface.co/spaces/bayuskraa1/volumesampah",
    category: "ml",
  },
  {
    title: "Portfolio Website (PBL)",
    desc: "Modern, responsive personal portfolio website featuring a sleek dark theme with smooth animations and interactive elements. Built with React for optimal performance, showcasing projects, skills, and professional experience with an intuitive user interface and seamless navigation across all devices.",
    tech: ["React", "CSS3", "JavaScript", "Framer Motion"],
    img: "por.png",
    demo: "#",
    category: "web",
  },
  {
    title: "AI Chat Bot (PBL)",
    desc: "Intelligent conversational chatbot powered by natural language processing (NLP) that provides automated customer support and interactive responses. Features context-aware conversations, intent recognition, and multi-turn dialogue capabilities to deliver human-like interactions and enhance user engagement.",
    tech: ["React", "NLP", "JavaScript", "API Integration"],
    img: "chatbot.png",
    demo: "https://chatbot-coba.vercel.app/",
    category: "other",
  },
  {
    title: "Smart Trash IoT (PBL)",
    desc: "Internet of Things (IoT) based smart waste management system that monitors bin fill levels in real-time using ultrasonic sensors. The system sends automatic notifications when bins are full, optimizes collection routes, and provides data analytics dashboard for efficient waste management operations.",
    tech: ["Arduino", "IoT", "Sensors", "Cloud Integration"],
    img: "smarttrash.png",
    demo: "https://dashboard-monitoringsampah-362p.vercel.app/",
    category: "other",
  },
  {
    title: "Perancangan Sistem Akademik (CBL)",
    desc: "Comprehensive academic information system design project covering complete system analysis and design documentation. Includes detailed requirements specification, Data Flow Diagrams (DFD), Unified Modeling Language (UML) diagrams, Entity-Relationship Diagrams (ERD), and normalized database schema ready for implementation.",
    tech: ["System Design", "UML", "DFD", "Database Design"],
    img: "aps.jpg",
    demo: "https://drive.google.com/file/d/1PNSDTRWgG6MbwdsDsWrpKmmgG6i2_agS/view?usp=drivesdk",
    category: "other",
  },
];

const categories = [
  {
    key: "web",
    title: "Web Projects",
    desc: "Collection of website-based projects such as company profile, and portfolio.",
  },
  {
    key: "ml",
    title: "Machine Learning",
    desc: "Projects related to prediction, data analysis, and machine learning models.",
  },
  {
    key: "other",
    title: "Another Projects",
    desc: "Other projects such as system design, documentation, and experiments.",
  },
];

export default function ProjectPage() {
  const [activeCategory, setActiveCategory] = useState(null);

  // 🔒 Kunci scroll body ketika modal aktif
  useEffect(() => {
    if (activeCategory) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = original || "";
      };
    }
  }, [activeCategory]);

  const projectsByCategory = (cat) =>
    projectList.filter((p) => p.category === cat);

  return (
    <>
      <div className="project-page">
        <h1 className="proj-title">My Projects</h1>
        <p className="proj-subtitle">Collection of featured works and concepts</p>

        {/* 3 Kotak Kategori */}
        <div className="project-grid">
          {categories.map((c) => (
            <div className="project-card" key={c.key}>
              <div className="project-body">
                <h2>{c.title}</h2>
                <p>{c.desc}</p>
                <br />
                <div className="project-actions">
                  <button
                    className="project-btn"
                    onClick={() => setActiveCategory(c.key)}
                  >
                    View Project <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: tampilkan project berdasarkan kategori */}
      {activeCategory && (
        <div
          className="modal-overlay"
          onClick={() => setActiveCategory(null)}
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>
                {categories.find((c) => c.key === activeCategory)?.title}
              </h2>
              <button
                className="close-btn"
                onClick={() => setActiveCategory(null)}
              >
                Close
              </button>
            </div>

            <div className="modal-project-list">
              {projectsByCategory(activeCategory).length === 0 && (
                <p className="empty-text">Belum ada project di kategori ini.</p>
              )}

              {projectsByCategory(activeCategory).map((p, i) => (
                <div className="modal-project-item" key={i}>
                  <img src={p.img} alt={p.title} />
                  <div className="modal-project-content">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>

                    <div className="project-tech modal-tech">
                      {p.tech.map((t, idx) => (
                        <span key={idx}>{t}</span>
                      ))}
                    </div>

                    {/* Tombol View Project di dalam modal */}
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-view-btn"
                    >
                      View Project <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}