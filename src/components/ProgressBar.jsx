import React from 'react'
import { useLocation } from 'react-router-dom'

const ProgressBar = () => {
  const location = useLocation()
  
  const steps = [
    { path: '/personal-info', label: 'Informations' },
    { path: '/sensory-questionnaire', label: 'Profil sensoriel' },
    { path: '/excitation-questionnaire', label: 'Préférences' },
    { path: '/story-result', label: 'Histoire' }
  ]

  const getCurrentStep = () => {
    const currentIndex = steps.findIndex(step => step.path === location.pathname)
    return currentIndex === -1 ? 0 : currentIndex
  }

  const currentStep = getCurrentStep()

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div
            key={step.path}
            className={`flex-1 text-center text-sm ${
              index <= currentStep ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            {step.label}
          </div>
        ))}
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-300"
          style={{
            width: `${((currentStep + 1) / steps.length) * 100}%`
          }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
