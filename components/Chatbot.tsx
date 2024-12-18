import { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Chatbot: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          className="w-12 h-12 rounded-full bg-cta text-white shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <MessageCircle />}
        </Button>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl z-50"
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">AI Assistant</h3>
              <p className="text-gray-600 mb-4">How can I help you today?</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-grow border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="rounded-l-none bg-primary text-white">Send</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot

