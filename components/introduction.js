'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Introduction() {
  const sectionRef = useRef(null);

  // GSAP live animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.floating-heading', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.waving-subtext', {
        rotation: 1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="introduction"
      ref={sectionRef}
      className="w-full px-6 py-20 bg-[#1F456E] text-white scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="floating-heading text-5xl sm:text-6xl font-[var(--font-poppins)] mb-6"
        >
          What is SDN IIDS ML?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="waving-subtext sm:text-3xl font-semibold text-gray-100 mb-8"
        >
          <span className="text-black font-[var(--font-poppins)]">
            &quot;Software Defined Networking based Intelligence Intrusion Detection System using Machine Learning&quot;
          </span>
          <br />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-base sm:text-xl leading-relaxed tracking-wide"
        >
         SDN IIDS ML (Software-Defined Networking Intelligent Intrusion Detection System using Machine Learning) is an advanced security framework that integrates Machine Learning (ML) algorithms into an SDN (Software-Defined Networking) environment to intelligently detect and respond to cyber threats in real-time. SDN IIDS ML uses the programmability of SDN to monitor and analyze dynamic network traffic patterns, while ML models learn to identify anomalies and attack signatures such as DoS, SQL Injection, Table Overflow, and Topology Poisoning. This combination allows for adaptive, automated, and scalable defense mechanisms, improving the security posture of modern networks.
          <br /><br />
          
        </motion.p>
      </div>
    </section>
  );
}