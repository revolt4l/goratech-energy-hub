import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/2348059712276"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[hsl(var(--whatsapp))] px-5 py-3 text-sm font-medium text-white shadow-lg hover:opacity-90 transition-opacity"
      aria-label="Chat with GORATECH on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with GORATECH</span>
    </a>
  );
};

export default FloatingWhatsApp;
