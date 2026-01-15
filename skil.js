import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import "./skil.css";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedType, setSelectedType] = useState("");

  const softSkills = [
    {
      skill: "Communication",
      level: 96,
      desc: "Ability to convey ideas clearly, politely, and effectively both verbally and in writing."
    },
    {
      skill: "Teamwork",
      level: 94,
      desc: "Capable of working harmoniously with teams to achieve common goals."
    },
    {
      skill: "Problem Solving",
      level: 93,
      desc: "Tackling challenges with logical analysis and creative solutions."
    },
    {
      skill: "Creativity",
      level: 90,
      desc: "Creating innovative new ideas in project development."
    },
    {
      skill: "Leadership",
      level: 93,
      desc: "Directing and motivating teams to be productive and cohesive."
    },
    {
      skill: "Adaptability",
      level: 90,
      desc: "Able to quickly adapt to changing situations and new technologies."
    },
    {
      skill: "Time Management",
      level: 94,
      desc: "Efficiently managing time and work priorities to achieve targets."
    }
  ];

  const hardSkills = [
    {
      skill: "React.js",
      level: 98,
      desc: "Building dynamic user interfaces with modern components using React."
    },
    {
      skill: "Figma",
      level: 92,
      desc: "Designing intuitive and professional UI/UX interfaces."
    },
    {
      skill: "Bootstrap",
      level: 96,
      desc: "Creating fast responsive websites with modern CSS framework."
    },
    {
      skill: "HTML/CSS",
      level: 98,
      desc: "Solid foundation for building clean, consistent, and well-structured web layouts."
    },
    {
      skill: "Python",
      level: 94,
      desc: "Writing programs and automation with simple and efficient language."
    },
    {
      skill: "JavaScript",
      level: 98,
      desc: "Primary language for building interactive logic on modern websites and web applications."
    },
    {
      skill: "Git & GitHub",
      level: 95,
      desc: "Managing code versions effectively using efficient version control systems."
    }
  ];

  const handleClick = (e, type) => {
    const targetSkill = (type === "soft" ? softSkills : hardSkills).find(
      (d) => d.skill === e.activeLabel
    );
    if (targetSkill) {
      setSelectedSkill(targetSkill);
      setSelectedType(type);
    }
  };

  const handleClose = () => {
    setSelectedSkill(null);
    setSelectedType("");
  };

  return (
    <section id="skills" className="pf-section pf-skill-chart">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="chart-title"
      >
        My Skills Overview
      </motion.h2>

      <p className="pf-section-lead">
        Click on any area on the chart to view skill details.
      </p>
      <br />

      <div className="chart-wrapper">
        {/* SOFT SKILLS */}
        <div className="chart-box">
          <h3>Soft Skills</h3>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart
              data={softSkills}
              onClick={(e) => handleClick(e, "soft")}
              outerRadius="80%"
            >
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="skill" tick={{ fill: "#aaa", fontSize: 12 }} />
              <Radar
                name="Soft Skills"
                dataKey="level"
                stroke="#00baff"
                fill="#00baff"
                fillOpacity={0.5}
              />
              <Tooltip
                contentStyle={{
                  background: "#1a1c24",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* HARD SKILLS */}
        <div className="chart-box">
          <h3>Hard Skills</h3>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart
              data={hardSkills}
              onClick={(e) => handleClick(e, "hard")}
              outerRadius="80%"
            >
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="skill" tick={{ fill: "#aaa", fontSize: 12 }} />
              <Radar
                name="Hard Skills"
                dataKey="level"
                stroke="#ff6f00"
                fill="#ff6f00"
                fillOpacity={0.5}
              />
              <Tooltip
                contentStyle={{
                  background: "#1a1c24",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* DETAIL CARD */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            key={selectedSkill.skill}
            className={`chart-desc ${selectedType}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close button in top right corner */}
            <button className="close-icon" onClick={() => setSelectedSkill(null)}>
              ✕
            </button>

            <h3>{selectedSkill.skill}</h3>
            <p>{selectedSkill.desc}</p>

            <div className="progress-wrapper">
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedSkill.level}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <span>{selectedSkill.level}%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}