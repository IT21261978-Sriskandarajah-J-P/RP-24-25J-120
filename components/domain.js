'use client';
import { useState, useEffect } from 'react';
import { Globe, BarChart3, HelpCircle, Send } from 'lucide-react';
import gsap from 'gsap';

const tabs = [
  { name: 'Background', icon: <Globe className="inline w-5 h-5 mr-2" /> },
  { name: 'Research Gap', icon: <BarChart3 className="inline w-5 h-5 mr-2" /> },
  { name: 'Research Problems', icon: <HelpCircle className="inline w-5 h-5 mr-2" /> },
  { name: 'Research Objectives', icon: <Send className="inline w-5 h-5 mr-2" /> },
];

const tabContent = {
  'Background': (
    <>
      <p className="mb-4 tab-paragraph">
        Our research presents an SDN-based Intelligent Intrusion Detection System (IIDS) utilizing machine learning for realtime attack detection and mitigation in SDN environments. 
      </p>
      <p className="tab-paragraph">
        It uses machine learning to identify and mitigate attacks in real time. The system efficiently detects and stops a variety of cyberthreats, such as Denial of Service (DoS), Flow Table Overflow, SQLite, and Topology Poisoning attacks, by Integrating Machine Learning Model with the OpenDaylight SDN controller
      </p>
    </>
  ),
  'Research Gap': (
    <>
      <p className="tab-paragraph">
        Current research on SDN-based Intelligent Intrusion Detection Systems (IIDS) primarily focuses on limited attack types, often neglecting complex threats such as SQL injection, table overflow, and topology poisoning. Many existing systems also struggle with real-time detection due to high model latency and poor integration with SDN controllers, while the datasets used are often outdated or synthetic, failing to represent real-world SDN traffic patterns.
      </p>
      <p className="tab-paragraph">
        Furthermore, models typically overfit to specific attack scenarios, limiting their generalization to evolving threats. There&apos;s also a lack of comprehensive evaluation metrics, with most studies focusing solely on accuracy, ignoring critical aspects like false positive rates, resource usage, and network impact. Finally, scalability and deployment challenges remain underexplored, with few systems tested in large-scale, real-world environments. Our research aims to address these gaps by developing a robust, real-time IIDS that can detect a wide range of SDN-specific attacks while ensuring scalability and efficient integration.
      </p>
    </>
  ),
  'Research Problems': (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
      <div className="card bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-center">Flow Table Overflow </h3>
        <p className="tab-paragraph">
          Table overflow attacks in SDN target the limited flow table capacity of switches, overwhelming them with excessive flow entries. Existing detection methods either rely on static thresholds or reactive strategies that are ineffective under adaptive attack patterns. There is a critical need for proactive, intelligent detection models that can recognize subtle anomalies in flow dynamics and prevent table saturation without impacting legitimate traffic.
        </p>
      </div>
      <div className="card bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-center">Topology Poisoning </h3>
        <p className="tab-paragraph">
          Topology poisoning attacks exploit the dynamic nature of SDN by injecting false topology information, leading to incorrect routing decisions and network disruption. Existing detection approaches often rely on static rules or topology snapshots, which fail to adapt to rapidly changing network states. There is a pressing need for ML-based systems that can learn normal topology patterns, detect deviations in real time, and safeguard the network from such attacks.
        </p>
      </div>
      <div className="card bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-center">Denial of Service</h3>
        <p className="tab-paragraph">
          Current SDN-based IDS systems often focus on detecting common DoS attacks like UDP floods but fail to effectively identify protocol-specific threats such as SNMP and DNS amplification attacks in real time. The lack of protocol-aware models and comprehensive datasets limits the system&apos;s ability to distinguish between normal traffic and sophisticated DoS patterns, leading to high false positives and delayed mitigation in dynamic SDN environments.
        </p>
      </div>
      <div className="card bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-center">SQL injection</h3>
        <p className="tab-paragraph">
          SQL injection attacks in SDN environments are under-researched, as most studies focus on web applications. In SDN, malicious SQL queries can target northbound APIs or management systems, causing misconfigurations or unauthorized data access. The lack of tailored ML models for SQLi in SDN and the absence of real-time detection frameworks create a significant vulnerability, necessitating research into robust SQLi detection mechanisms for SDN control layers.
        </p>
      </div>
    </div>
  ),
  'Research Objectives': (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-sm">
      <div className="card bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-center">Main Objective</h3>
        <p className="tab-paragraph text-sm">
          Our main objective is to develop SDN-based Intelligent Intrusion Detection System (IIDS) utilizing machine learning for real-time attack detection and mitigation in SDN environments

        </p>
      </div>
      <div className="card bg-white text-black p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-center">Specific Objectives</h3>
        <ul className="space-y-4">
          <li className="text-sm tab-list-item">
            <strong>1.</strong> Develop machine learning based intrusion detection engine to find Flow Table Overflow attacks
          </li>
          <li className="text-sm tab-list-item">
            <strong>2.</strong> Develop machine learning based intrusion detection engine to find Topology Poisoning attacks
          </li>
          <li className="text-sm tab-list-item">
            <strong>3.</strong> Develop machine learning based intrusion detection engine to find Denial of Service attacks
          </li>
          <li className="text-sm tab-list-item">
            <strong>4.</strong> Develop machine learning based intrusion detection engine to find SQLite attacks
          </li>
        </ul>
      </div>
    </div>
  ),
};

export default function Domain() {
  const [activeTab, setActiveTab] = useState('Background');

  useEffect(() => {
    // Create a GSAP timeline for tab content animations
    const tl = gsap.timeline();

    // Animate the tab content container
    tl.fromTo(
      '.tab-content-container',
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    // Animate individual cards with stagger and slight rotation
    tl.fromTo(
      '.card',
      { opacity: 0, y: 50, rotateY: 10 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      },
      '-=0.5' // Overlap with container animation
    );

    // Animate text and list items with word-level stagger
    tl.fromTo(
      '.tab-paragraph, .tab-list-item',
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      },
      '-=0.3' // Overlap with card animation
    );

    // Animate tab buttons on load
    gsap.from('.tab-button', {
      opacity: 0,
      x: (index) => (index % 2 === 0 ? -20 : 20),
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });

    // Cleanup to prevent animation overlap
    return () => {
      tl.kill();
    };
  }, [activeTab]);

  return (
    <section id="domain" className="w-full px-4 py-20 bg-gray-900 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">Our Domain</h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-8 border-b border-gray-600 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`tab-button px-6 py-3 rounded-md text-lg font-medium flex items-center transition-transform duration-300 ${
                activeTab === tab.name
                  ? 'text-blue-400 border-b-2 border-blue-400 scale-105'
                  : 'text-gray-500 hover:text-blue-400 hover:scale-105'
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div key={activeTab} className="bg-cyan-400 p-6 rounded-xl shadow-lg mb-10 tab-content-container">
          <h3 className="text-2xl font-bold mb-6">{activeTab}</h3>
          <div className="bg-white text-black p-6 rounded-lg space-y-4 text-justify">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </section>
  );
}