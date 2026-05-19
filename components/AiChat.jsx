import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './AiChat.css';

// ── System Prompt ──
const LYCHY_CONTEXT = `
You are Lychy AI — a friendly and professional assistant for Lychy,
a software development agency. Your job is to help website visitors
and potential clients understand Lychy's services, process, and how
to get started. Always be helpful, concise, and professional.
Never make up information. If you don't know something specific,
say you'll connect them with the team.

Here is everything you need to know about Lychy:

ABOUT LYCHY:
- Lychy is a software development agency based in Islamabad, Pakistan
- They build high-performance digital products for startups and businesses
- They have 2+ years of experience, 25+ projects completed, 15+ happy clients
- They work with clients globally
- Contact email: hello@lychy.dev

SERVICES LYCHY OFFERS:
1. App Development — Native and cross-platform mobile apps for iOS and Android
   using React Native and Flutter
2. Web Development — High-performance websites and web apps using React, 
   Next.js, and Node.js
3. UI/UX Design — User-centric interfaces using Figma, clean and modern designs
4. Graphic Design — Branding, logos, and visual assets
5. Maintenance — 24/7 support and updates to keep systems running
6. SEO Strategy — Data-driven optimization to improve visibility and traffic

HOW LYCHY WORKS (Our Process):
1. Discovery — They learn your goals, users, and technical requirements
2. Design — Wireframes and UI prototypes for your approval
3. Development — Agile sprints with weekly demos
4. Launch & Support — Deploy, QA, and ongoing post-launch maintenance

FEATURED PROJECTS:
- AI Mehdi Online School — A complete digital learning platform with live 
  classes, recorded sessions, and attendance tracking (Mobile App)
- Nova Prep — An intelligent interview prep app for technical and behavioral 
  questions (Mobile App)
- FreightPower — An AI-based logistics SaaS platform connecting drivers, 
  carriers, and shippers with live tracking (SaaS Platform)

PRICING:
- Lychy does not have fixed public pricing as every project is custom
- Pricing depends on project scope, complexity, and timeline
- Clients can book a free consultation call to get a custom quote
- Basic websites typically start from a few hundred dollars
- Full mobile apps and SaaS platforms vary based on features

HOW TO GET STARTED:
- Click "Start Project" button on the website
- Or email hello@lychy.dev
- Or book a free 30-minute consultation call (no commitment required)
- Response time is within 24 hours

THINGS LYCHY VALUES:
- Precision Engineering — strict coding standards
- Rapid Delivery — agile workflow, on-time delivery
- Client-Centric — transparent communication, you're involved at every stage
- Security First — security built in from day one
- Passionate Team — they love what they build
- Global Standards — solutions built to scale for any market

WHEN ASKED ABOUT PRICING: Be honest that pricing is custom and encourage 
them to book a free call or email the team.

WHEN ASKED SOMETHING YOU DON'T KNOW: Say "That's a great question — 
I'd recommend reaching out to the Lychy team directly at hello@lychy.dev 
or clicking Start Project for a personalized answer."

TONE: Friendly, confident, professional. Short answers unless more detail 
is asked. Use bullet points for lists. Never be robotic.
`;

// ── SVG Icons ──
const ChatIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Antenna */}
    <line x1="12" y1="2" x2="12" y2="5" />
    <circle cx="12" cy="2" r="1" fill="white" stroke="none" />
    {/* Head */}
    <rect x="4" y="5" width="16" height="12" rx="3" ry="3" />
    {/* Eyes */}
    <circle cx="9" cy="11" r="1.5" fill="white" stroke="none" />
    <circle cx="15" cy="11" r="1.5" fill="white" stroke="none" />
    {/* Mouth */}
    <line x1="9.5" y1="14.5" x2="14.5" y2="14.5" />
    {/* Ears */}
    <rect x="1" y="9" width="2" height="4" rx="1" fill="white" stroke="none" />
    <rect x="21" y="9" width="2" height="4" rx="1" fill="white" stroke="none" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="none">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

// ── Quick-reply suggestions ──
const SUGGESTIONS = [
  'What services do you offer?',
  'How much does a project cost?',
  'How do I get started?',
];

const AiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! 👋 I'm Lychy AI. Ask me anything about our services, projects, pricing, or how to get started!",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDot, setShowDot] = useState(true);
  const [hasUserSent, setHasUserSent] = useState(false);

  const chatSessionRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Initialize Gemini chat session on mount
  useEffect(() => {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      console.log('Gemini API Key loaded:', apiKey ? 'Yes (' + apiKey.substring(0, 8) + '...)' : 'No');
      if (!apiKey) {
        console.warn('VITE_GEMINI_API_KEY is not set. Please add it to .env and restart the dev server.');
        return;
      }
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });
      const chat = model.startChat({
        history: [
          {
            role: 'user',
            parts: [{ text: LYCHY_CONTEXT }],
          },
          {
            role: 'model',
            parts: [
              {
                text: "Understood! I'm ready to help visitors learn about Lychy and answer their questions.",
              },
            ],
          },
        ],
      });
      chatSessionRef.current = chat;
      console.log('Gemini chat session initialized successfully.');
    } catch (err) {
      console.error('Failed to initialize Gemini chat:', err);
    }
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Toggle chat open/close
  const toggleChat = () => {
    setIsOpen((prev) => {
      if (!prev) setShowDot(false); // hide notification dot on first open
      return !prev;
    });
  };

  // Send a message
  const sendMessage = async (text) => {
    const trimmed = (text || inputValue).trim();
    if (!trimmed || isLoading) return;

    setHasUserSent(true);
    setInputValue('');
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
        throw new Error('Chat session not initialized');
      }
      const result = await chatSessionRef.current.sendMessage(trimmed);
      const responseText = result.response.text();
      setMessages((prev) => [...prev, { role: 'assistant', text: responseText }]);
    } catch (err) {
      console.error('Gemini API error:', err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: "Sorry, I'm having trouble connecting right now. Please email us at hello@lychy.dev",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Chat Window ── */}
      <div
        className={`ai-chat-window ${isOpen ? 'ai-chat-window--open' : 'ai-chat-window--closed'}`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="ai-chat-header">
          <div className="ai-chat-header__avatar">L</div>
          <div className="ai-chat-header__info">
            <span className="ai-chat-header__title">Lychy AI</span>
            <span className="ai-chat-header__subtitle">
              <span className="ai-chat-header__online-dot">●</span> Online · Always here to help
            </span>
          </div>
          <button className="ai-chat-header__close" onClick={toggleChat} aria-label="Close chat">
            <CloseIcon />
          </button>
        </div>

        {/* Messages */}
        <div className="ai-chat-messages">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`ai-chat-bubble ${
                msg.role === 'user' ? 'ai-chat-bubble--user' : 'ai-chat-bubble--assistant'
              }`}
            >
              {msg.text}
            </div>
          ))}

          {isLoading && (
            <div className="ai-chat-typing">
              <span className="ai-chat-typing__dot" />
              <span className="ai-chat-typing__dot" />
              <span className="ai-chat-typing__dot" />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions */}
        {!hasUserSent && (
          <div className="ai-chat-suggestions">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                className="ai-chat-suggestions__pill"
                onClick={() => sendMessage(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="ai-chat-input-area">
          <input
            className="ai-chat-input-area__field"
            type="text"
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="ai-chat-input-area__send"
            onClick={() => sendMessage()}
            disabled={!inputValue.trim() || isLoading}
            aria-label="Send message"
          >
            <SendIcon />
          </button>
        </div>
      </div>

      {/* ── Floating Action Button ── */}
      <button
        className={`ai-chat-fab ${isOpen ? 'ai-chat-fab--open' : ''}`}
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
        {showDot && !isOpen && <span className="ai-chat-fab__dot" />}
      </button>
    </>
  );
};

export default AiChat;
