"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const VerticalSlider = ({ videos }) => {



  const duplicatedVideos = [...videos, ...videos, ...videos];

  return (
    <div style={containerStyle}>
      <motion.div
        className="slider-track"
        style={trackStyle}
        animate={{
          y: [0, -1410],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedVideos.map((item, index) => (
          <div key={index} style={cardStyle}>
            <img
              src={item.src}
              alt={item.name}
              style={{objectFit: "cover", width: "100%", height: "450px"}}
            />

            <p style={textStyle}>{item.name}. Founders of Project.</p>
          </div>
        ))}

      </motion.div>
    </div>
  );
};

// --- Styles ---

const containerStyle = {
  height: '110dvh',
  overflow: 'hidden',
  position: 'relative',
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  zIndex: '1',
};

const trackStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const cardStyle = {
  width: '650px',
  height: '450px',
  flexShrink: 0,
  background: '#fff',
  borderRadius: '30px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  textAlign: 'center',
  paddingBottom: '20px'
};


const imgStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
};

const textStyle = {
  fontFamily: 'monospace',
  marginTop: '15px',
  fontSize: '14px'
};

export default VerticalSlider;