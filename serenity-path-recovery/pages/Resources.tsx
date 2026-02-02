
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const Resources: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAskQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an empathetic, clinical counselor for a rehabilitation center called Serenity Path Recovery. 
        A user is asking: "${question}". Provide a compassionate, evidence-based, and professional answer. 
        Focus on safety, clinical best practices, and the importance of professional help. Avoid making medical promises or guarantees.`,
      });
      setAnswer(response.text || "I'm sorry, I couldn't generate an answer at this time. Please call our hotline for immediate help.");
    } catch (error) {
      console.error("AI Error:", error);
      setAnswer("Our counselor is currently unavailable. Please call 1-800-555-0199 for professional guidance.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Educational Resources</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Knowledge is power in the journey toward recovery. Explore our addiction education guides and support resources.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="space-y-12">
            {[
              {
                title: "Understanding the Disease Model of Addiction",
                excerpt: "Learn how addiction affects brain chemistry and why willpower alone is often not enough to break the cycle.",
                date: "October 12, 2023",
                category: "Addiction Science"
              },
              {
                title: "Tips for Family Members of Those in Recovery",
                excerpt: "Supporting a loved one through treatment requires boundaries, patience, and self-care for the family unit.",
                date: "September 28, 2023",
                category: "Family Support"
              },
              {
                title: "What to Expect During Your First Week of Detox",
                excerpt: "A day-by-day breakdown of the physical and emotional changes during medical detoxification.",
                date: "September 15, 2023",
                category: "Patient Education"
              }
            ].map((blog, i) => (
              <div key={i} className="group border-b border-slate-200 pb-12 last:border-0">
                <div className="flex items-center space-x-4 mb-4">
                   <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{blog.category}</span>
                   <span className="text-xs text-slate-400">•</span>
                   <span className="text-xs text-slate-500">{blog.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors cursor-pointer">{blog.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{blog.excerpt}</p>
                <button className="text-blue-600 font-bold hover:underline">Read Full Article &rarr;</button>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 sticky top-24">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="mr-3">💬</span>
              Ask a Counselor (AI)
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Have a general question about addiction or recovery? Ask our virtual assistant for guidance.
            </p>
            <form onSubmit={handleAskQuestion}>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ex: How do I know if my son needs detox?"
                className="w-full h-32 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 text-sm"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all disabled:bg-slate-400"
              >
                {isLoading ? 'Thinking...' : 'Get Guidance'}
              </button>
            </form>

            {answer && (
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 italic">Response:</p>
                <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line italic">
                  {answer}
                </div>
                <div className="mt-6 p-4 bg-white/50 rounded-lg text-[10px] text-slate-500 border border-slate-200">
                  Disclaimer: This AI response is for educational purposes only and is not a substitute for professional medical advice or diagnosis.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
