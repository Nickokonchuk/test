
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../constants';

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
        contents: `Clinical FAQ: "${question}". Professional response for Serenity Path Recovery.`,
      });
      setAnswer(response.text || "Contact our clinical team for detailed answers.");
    } catch (error) {
      setAnswer("Our counselor is currently offline. Call 1-800-555-0199 for help.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO {...SEO_CONFIG.resources} />
      <header className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Educational Resources</h1>
        <p className="text-xl text-slate-600 leading-relaxed">Evidence-based information to help you understand addiction and mental health.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <section className="lg:col-span-2 space-y-12">
          <h2 className="sr-only">Recovery Articles</h2>
          {[
            { title: "The Science of Addiction", category: "Education" },
            { title: "Supporting a Loved One", category: "Family Support" },
            { title: "Life After Rehab", category: "Success Stories" }
          ].map((blog, i) => (
            <article key={i} className="border-b border-slate-200 pb-12 last:border-0">
              <span className="text-xs font-bold text-blue-600 uppercase mb-4 block">{blog.category}</span>
              <h3 className="text-2xl font-bold mb-4 hover:text-blue-600 transition-colors cursor-pointer">{blog.title}</h3>
              <p className="text-slate-600 mb-6">Deep dive into clinical insights regarding {blog.title.toLowerCase()}.</p>
              <button className="text-blue-600 font-bold">Read More &rarr;</button>
            </article>
          ))}
        </section>

        <aside className="lg:col-span-1">
          <section className="bg-slate-100 p-8 rounded-2xl sticky top-24">
            <h3 className="text-xl font-bold mb-4">Virtual Clinical FAQ</h3>
            <p className="text-sm text-slate-600 mb-6">Ask a general question about addiction treatment.</p>
            <form onSubmit={handleAskQuestion}>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full h-32 px-4 py-3 rounded-xl border border-slate-300 mb-4"
                placeholder="Ex: What is dual diagnosis?"
              />
              <button disabled={isLoading} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold">
                {isLoading ? 'Consulting...' : 'Get Answer'}
              </button>
            </form>
            {answer && <div className="mt-6 p-4 bg-white rounded-lg text-sm text-slate-700 italic border border-slate-200">{answer}</div>}
          </section>
        </aside>
      </div>
    </article>
  );
};

export default Resources;
