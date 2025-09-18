'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
    id: string;
    text: string;
    isBot: boolean;
    timestamp: Date;
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm here to help you learn more about Admin & Co. Hub's services. How can I assist you today?",
            isBot: true,
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const predefinedResponses: { [key: string]: string } = {
        'hello': "Hello! Welcome to Admin & Co. Hub. I'm here to help you with any questions about our BPO services.",
        'services': "We offer Virtual Assistance, Back-Office Operations, Data Management, and Customer Support services. Would you like to know more about any specific service?",
        'pricing': "Our pricing is customized based on your specific needs and requirements. I'd recommend getting a free consultation to discuss your exact requirements. Would you like me to help you get started?",
        'contact': "You can reach us through our contact form, or I can help you schedule a free consultation right now. What works best for you?",
        'australia': "Yes! We're proudly Australian-based with local management and oversight, ensuring quality standards and timezone alignment for all our clients.",
        'security': "Security is our top priority. We're ISO 27001 certified and compliant with Australian Privacy Act requirements. Your data is completely secure with us.",
        'support': "We provide 24/7 support to all our clients. Our Australian-based team ensures you always have someone available when you need assistance.",
        'quote': "I'd be happy to help you get a quote! You can either fill out our quote form or I can connect you with one of our specialists. Which would you prefer?",
        'how it works': "Our process is simple: 1) Discovery - we analyze your needs, 2) Strategy - we design a custom solution, 3) Implementation - seamless transition, 4) Optimization - continuous improvement. Would you like details on any step?",
        'virtual assistant': "Our Virtual Assistance service provides dedicated admin support tailored to your business needs. This includes email management, scheduling, data entry, and much more. Interested in learning more?",
        'data management': "Our Data Management service includes secure data processing, database management, data entry, and analytics. We ensure all data handling meets Australian privacy standards.",
        'customer support': "We provide comprehensive 24/7 customer support services including phone support, email management, live chat, and help desk services. All managed by trained professionals.",
        'back office': "Our Back-Office Operations service focuses on process optimization, administrative tasks, document management, and workflow automation to streamline your business operations."
    };

    const getResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();

        // Check for exact matches first
        for (const [key, response] of Object.entries(predefinedResponses)) {
            if (lowerInput.includes(key)) {
                return response;
            }
        }

        // Default responses for common patterns
        if (lowerInput.includes('help') || lowerInput.includes('assist')) {
            return "I'm here to help! You can ask me about our services, pricing, security, or how to get started. What would you like to know?";
        }

        if (lowerInput.includes('thank')) {
            return "You're welcome! Is there anything else I can help you with today?";
        }

        if (lowerInput.includes('bye') || lowerInput.includes('goodbye')) {
            return "Thank you for your interest in Admin & Co. Hub! Feel free to reach out anytime. Have a great day!";
        }

        // Default response
        return "I'd be happy to help you with that! For specific questions, I recommend speaking with one of our specialists. Would you like me to connect you with someone or help you schedule a free consultation?";
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            isBot: false,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: getResponse(inputValue),
                isBot: true,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const quickActions = [
        { text: "Our Services", action: () => setInputValue("Tell me about your services") },
        { text: "Get Quote", action: () => setInputValue("I need a quote") },
        { text: "How it Works", action: () => setInputValue("How does it work?") },
        { text: "Contact Us", action: () => setInputValue("How can I contact you?") }
    ];

    return (
        <>
            {/* Chat Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-16 h-16 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
                >
                    {isOpen ? (
                        <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8 text-white mx-auto animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    )}
                </button>

                {!isOpen && (
                    <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-bounce">
                        Need help? Chat with us!
                    </div>
                )}
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-4 rounded-t-2xl">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-lg">🤖</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Admin & Co. Hub Assistant</h3>
                                    <p className="text-xs text-teal-100">Online • Ready to help</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl ${message.isBot
                                        ? 'bg-gray-100 text-gray-800'
                                        : 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white'
                                        }`}
                                >
                                    <p className="text-sm">{message.text}</p>
                                    <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-teal-100'}`}>
                                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 p-3 rounded-2xl">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Actions */}
                    {messages.length === 1 && (
                        <div className="px-4 pb-2">
                            <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
                            <div className="grid grid-cols-2 gap-2">
                                {quickActions.map((action, index) => (
                                    <button
                                        key={index}
                                        onClick={action.action}
                                        className="text-xs bg-teal-50 text-teal-600 px-3 py-2 rounded-lg hover:bg-teal-100 transition-colors"
                                    >
                                        {action.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input */}
                    <div className="p-4 border-t border-gray-200">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim()}
                                className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-2 rounded-lg hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5l7 7-7 7M5 12h14" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;