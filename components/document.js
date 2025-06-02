'use client';
import { useState, useEffect } from 'react';
import gsap from 'gsap';

const allDocuments = {
  'Project Registration Documents': [
    { name: 'RP 24-25J-120 TAF', file: '/doc/prf/RP_24_25J_120_TAF.docx' },
  ],
  'Project Proposal': [
    { name: 'Proposal IT20601638', file: '/doc/proposal/Proposal Report_IT20601638_Parthika.K.pdf' },
    { name: 'Proposal IT21282072', file: '/doc/proposal/Proposal Report_IT21282072_Satkurulingam.S.pdf' },
    { name: 'Proposal IT21261978', file: '/doc/proposal/Project Proposal_IT21261978_Sriskandarajah J.P.pdf' },
    { name: 'Proposal IT21192982', file: '/doc/proposal/Project Proposal_IT21192982_Dassanayake.E.D..pdf' },
  ],
  'Proposal Presentation': [
    { name: 'RP 24-25J-120 Propsal Presentation', file: '/doc/proposalPresentation/24-25J-120_Proposal_Presentation.pptx' },
  ],
  
  'Progress Presentation 01': [
    { name: 'RP 24-25J-120 Progress Presentation 1', file: '/doc/pp1/RP-24-25J-120_PP1.pptx' },
  ],
  'Research Paper': [
    { name: 'RP 24-25J-120', file: '/doc/researchpaper/RP_24-25J_120_Research_Paper.pdf' },
  ],
  'Progress Presentation 02': [
    { name: 'RP 24-25J-120 Progress Presentation 2', file: '/doc/pp2/RP-24-25J-120_PP2.pptx' },
  ],
  
  'Final Reports': [
    { name: 'FinalReport RP 24-25J-120', file: '/doc/finalreport/RP_24-25J_120 _Final report.pdf' },
    { name: 'FinalReport IT20601638', file: '/doc/finalreport/IT20601638_Parthika.K_FinalReport.pdf' },
    { name: 'FinalReport IT21282072', file: '/doc/finalreport/IT21282072_Satkurulingam.S_FinalReport.pdf' },
    { name: 'FinalReport IT21261978', file: '/doc/finalreport/IT21261978_Sriskandarajah J.P_FinalReport.pdf' },
    { name: 'FinalReport IT21192982', file: '/doc/finalreport/IT21192982_Dassanayake E.D_Final Report.pdf' },
  ],
  'Final Presentation': [
    { name: '24-25J-120 Final Presentation', file: '/doc/final-presentation/RP-24-25J-120_Final_Presentation.pptx' },
  ],
  'Logbook': [
    { name: 'Logbook IT20601638', file: '/doc/logbook/IT20601638_Logbook.pdf' },
    { name: 'Logbook IT21282072', file: '/doc/logbook/IT21282072_Logbook.pdf' },
    { name: 'Logbook IT21261978', file: '/doc/logbook/IT21261978_Logbook.pdf' },
    { name: 'Logbook IT21192982', file: '/doc/logbook/IT21192982_Logbook.pdf' },
  ],
};

export default function Documents() {
  const [activeTab, setActiveTab] = useState('Project Proposal');
  const [filesLoaded, setFilesLoaded] = useState(false);

  // Animate file cards when tab changes
  useEffect(() => {
    gsap.fromTo(
      '.file-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
    );
    setFilesLoaded(true);
  }, [activeTab]);

  // Animate tab buttons when clicked
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    gsap.to('.tab-btn', {
      scale: 1.2,
      duration: 0.3,
      ease: 'ease-out',
      onComplete: () => {
        gsap.to('.tab-btn', { scale: 1, duration: 0.3 });
      },
    });
  };

  return (
    <section id="documents" className="w-full py-20 px-6 bg-gradient-to-br from-white to-blue-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-10">📁 Project Documents</h2>

        {/* 🟦 Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(allDocuments).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`tab-btn px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
                tab === activeTab
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 🧾 File Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {allDocuments[activeTab]?.map((file, index) => (
            <div
              key={index}
              className="file-card bg-white shadow-md rounded-lg p-5 w-full max-w-xs flex flex-col items-center hover:shadow-xl transition"
            >
              {/* Icon */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF Icon"
                className="w-14 h-14 mb-4"
              />
              <p className="text-md font-semibold mb-2 text-gray-800">{file.name}</p>
              <a
                href={file.file}
                download
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}