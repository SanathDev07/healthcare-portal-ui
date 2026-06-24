import React, { useState, useRef, useEffect } from 'react';
import { Card, Button, Badge } from '../components/ui';
import { Send, Bot, User, Sparkles, RefreshCw, ThumbsUp, ThumbsDown, Copy, AlertCircle } from 'lucide-react';

const SUGGESTED = [
  "What does my deductible cover?",
  "Is Dr. Sarah Chen in-network?",
  "How do I file a claim?",
  "What's my prescription copay?",
  "Am I covered for physical therapy?",
];

const AI_RESPONSES = {
  "What does my deductible cover?": "Your **$1,500 deductible** applies to most covered medical services before your plan starts sharing costs.\n\n**Already counts toward your deductible:**\n• Hospital stays and surgeries\n• Specialist visits\n• Lab work and imaging\n\n**Excluded from deductible:**\n• Preventive care (covered at 100%)\n• Primary care visits ($20 copay applies)\n• Generic prescriptions ($10 copay)\n\nYou've used **$847 of $1,500** this year. Once met, you pay only your 20% coinsurance until your $5,000 out-of-pocket max is reached.",
  "Is Dr. Sarah Chen in-network?": "✅ **Dr. Sarah Chen is in-network** with your PPO plan.\n\n**Provider Details:**\n• Specialty: Internal Medicine / Primary Care\n• Network: Cigna PPO — Tier 1\n• Location: 1234 Medical Center Dr, Dallas TX\n• Accepting new patients: Yes\n\n**Your cost estimate:**\n• Office visit: $20 copay\n• After deductible: $20 copay still applies\n\nWould you like me to help you schedule an appointment with Dr. Chen?",
  "How do I file a claim?": "Filing a claim is straightforward. Here's the fastest path:\n\n**Option 1 — Automatic (Recommended)**\nMost in-network providers file directly with Cigna. You only pay your copay at the visit.\n\n**Option 2 — Online**\n1. Go to **Claims** in the left menu\n2. Click 'Submit a Claim'\n3. Upload your Explanation of Benefits (EOB)\n4. Processing takes 5–7 business days\n\n**Option 3 — Mail**\nDownload and mail Form CG-1040 to the address on your ID card.\n\n💡 **Tip:** Always keep your itemized receipts. For urgent reimbursements, online submission is the fastest route.",
  "default": "I can help you with your benefits, coverage questions, claims, prescriptions, and finding in-network providers. Could you give me a bit more detail about what you're looking for?\n\nFor example:\n• 'Is [procedure] covered under my plan?'\n• 'What's my copay for specialist visits?'\n• 'Help me understand my Explanation of Benefits'"
};

function TypingIndicator() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '12px 16px', background: 'var(--color-gray-50)', borderRadius: 'var(--radius-xl) var(--radius-xl) var(--radius-xl) 4px', width: 'fit-content' }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--color-gray-400)',
          animation: `typing 1.2s ease ${i * 0.2}s infinite`
        }} />
      ))}
    </div>
  );
}

function MessageBubble({ msg }) {
  const isAI = msg.role === 'assistant';
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(msg.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple markdown-ish renderer
  const renderContent = (text) => {
    return text.split('\n').map((line, i) => {
      const bold = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      if (line.startsWith('• ')) return <div key={i} style={{ display: 'flex', gap: 8, marginTop: 4 }}><span>•</span><span dangerouslySetInnerHTML={{ __html: bold.slice(2) }} /></div>;
      if (line === '') return <div key={i} style={{ height: 8 }} />;
      return <div key={i} dangerouslySetInnerHTML={{ __html: bold }} />;
    });
  };

  return (
    <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start', flexDirection: isAI ? 'row' : 'row-reverse', animation: 'fadeIn 0.25s ease' }} className="animate-fade-in">
      {/* Avatar */}
      <div style={{
        width: 32, height: 32, borderRadius: 'var(--radius-full)', flexShrink: 0,
        background: isAI ? 'linear-gradient(135deg, var(--color-primary-600), var(--color-teal-500))' : 'var(--color-gray-200)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        {isAI ? <Bot size={16} color="white" /> : <User size={16} color="var(--color-gray-600)" />}
      </div>

      <div style={{ maxWidth: '75%' }}>
        {/* Bubble */}
        <div style={{
          padding: '12px 16px',
          borderRadius: isAI ? 'var(--radius-xl) var(--radius-xl) var(--radius-xl) 4px' : 'var(--radius-xl) var(--radius-xl) 4px var(--radius-xl)',
          background: isAI ? 'var(--color-gray-50)' : 'var(--color-primary-600)',
          color: isAI ? 'var(--color-gray-800)' : 'white',
          fontSize: 'var(--font-size-sm)',
          lineHeight: 1.7,
          border: isAI ? '1px solid var(--color-border)' : 'none',
        }}>
          {renderContent(msg.content)}
        </div>

        {/* AI Actions */}
        {isAI && (
          <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-2)', alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Was this helpful?</span>
            <button title="Helpful" style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--color-gray-400)', padding: 4 }}><ThumbsUp size={13} /></button>
            <button title="Not helpful" style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--color-gray-400)', padding: 4 }}><ThumbsDown size={13} /></button>
            <button title="Copy" onClick={handleCopy} style={{ border: 'none', background: 'none', cursor: 'pointer', color: copied ? 'var(--color-success-600)' : 'var(--color-gray-400)', padding: 4 }}>
              <Copy size={13} />
            </button>
            {msg.confidence && (
              <Badge variant="teal">{msg.confidence}% confident</Badge>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AICopilot() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi Sanath! I'm your CareOS AI Benefits Copilot 👋\n\nI can help you navigate your Cigna health plan — coverage questions, claims, prescriptions, finding providers, and more.\n\nWhat can I help you with today?",
      confidence: 99
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || loading) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    await new Promise(r => setTimeout(r, 1200 + Math.random() * 800));

    const response = AI_RESPONSES[userMsg] || AI_RESPONSES['default'];
    setLoading(false);
    setMessages(prev => [...prev, { role: 'assistant', content: response, confidence: Math.floor(88 + Math.random() * 11) }]);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

      {/* Chat area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 'var(--space-6)', gap: 'var(--space-4)' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-xl)', background: 'linear-gradient(135deg, var(--color-primary-600), var(--color-teal-500))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={20} color="white" />
              </div>
              <div>
                <h1 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-gray-900)' }}>AI Benefits Copilot</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-success-500)', display: 'inline-block' }} />
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>Online · Cigna PPO Plan · Member #CG-2847</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
            <Badge variant="primary" dot>Agentic AI</Badge>
            <Button variant="ghost" size="sm" icon={RefreshCw} onClick={() => setMessages([messages[0]])}>Clear</Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ display: 'flex', gap: 'var(--space-2)', padding: 'var(--space-3) var(--space-4)', background: 'var(--color-warning-50)', borderRadius: 'var(--radius-lg)', border: '1px solid #fde68a' }}>
          <AlertCircle size={15} color="var(--color-warning-600)" style={{ flexShrink: 0, marginTop: 2 }} />
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-warning-600)' }}>
            AI responses are for informational purposes only. For clinical decisions, please consult your provider or call Cigna Member Services at 1-800-244-6224.
          </span>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', paddingRight: 'var(--space-2)' }}>
          {messages.map((msg, i) => <MessageBubble key={i} msg={msg} />)}
          {loading && (
            <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 'var(--radius-full)', background: 'linear-gradient(135deg, var(--color-primary-600), var(--color-teal-500))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Bot size={16} color="white" />
              </div>
              <TypingIndicator />
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          {SUGGESTED.map(s => (
            <button key={s} onClick={() => sendMessage(s)} style={{
              padding: '6px 14px', fontSize: 'var(--font-size-xs)', fontWeight: 500,
              border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)',
              background: 'white', color: 'var(--color-gray-700)', cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary-50)'; e.currentTarget.style.borderColor = 'var(--color-primary-300)'; e.currentTarget.style.color = 'var(--color-primary-700)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-gray-700)'; }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div style={{ display: 'flex', gap: 'var(--space-3)', background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-2xl)', padding: 'var(--space-3) var(--space-4)', transition: 'border-color var(--transition-fast)' }}
          onFocusCapture={e => e.currentTarget.style.borderColor = 'var(--color-primary-400)'}
          onBlurCapture={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
        >
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
            placeholder="Ask anything about your benefits, coverage, or claims..."
            aria-label="Message AI copilot"
            style={{ flex: 1, border: 'none', outline: 'none', fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-800)', fontFamily: 'var(--font-sans)', background: 'transparent' }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            aria-label="Send message"
            style={{
              width: 36, height: 36, borderRadius: 'var(--radius-lg)', border: 'none',
              background: input.trim() && !loading ? 'var(--color-primary-600)' : 'var(--color-gray-200)',
              color: input.trim() && !loading ? 'white' : 'var(--color-gray-400)',
              cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all var(--transition-fast)', flexShrink: 0
            }}
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
