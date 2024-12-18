import { FC } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const caseStudies = [
  {
    title: "AI-Powered Customer Service",
    description: "Implemented an AI chatbot that reduced customer service response times by 80% for a leading e-commerce company.",
    before: "/placeholder.svg?height=200&width=300",
    after: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Predictive Maintenance System",
    description: "Developed a machine learning model that predicts equipment failures, reducing downtime by 50% for a manufacturing client.",
    before: "/placeholder.svg?height=200&width=300",
    after: "/placeholder.svg?height=200&width=300"
  },
  // Add more case studies as needed
]

const CaseStudyCarousel: FC = () => {
  return (
    <div className="flex overflow-x-auto space-x-6 py-4">
      {caseStudies.map((study, index) => (
        <motion.div
          key={index}
          className="flex-none w-80"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{study.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">{study.description}</p>
              <div className="flex space-x-2">
                <img src={study.before} alt="Before" className="w-1/2 h-auto rounded" />
                <img src={study.after} alt="After" className="w-1/2 h-auto rounded" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default CaseStudyCarousel

