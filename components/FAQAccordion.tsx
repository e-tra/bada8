
'use client';

import { useState } from 'react';

interface Pregunta {
  pregunta: string;
  respuesta: string;
}

interface FAQAccordionProps {
  preguntas: Pregunta[];
}

export default function FAQAccordion({ preguntas }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {preguntas.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <h3 className="text-xl font-bold text-blue-900 pr-4">{item.pregunta}</h3>
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <i className={`ri-arrow-down-s-line text-2xl text-blue-600 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}></i>
            </div>
          </button>
          
          <div className={`transition-all duration-300 ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-8 pb-6">
              <p className="text-gray-700 leading-relaxed">{item.respuesta}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
