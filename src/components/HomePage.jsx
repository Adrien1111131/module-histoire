import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-2xl mx-auto">
      <div className="question-card">
        <h2 className="text-2xl font-bold mb-4">Bienvenue dans votre générateur d'histoires sensuelles</h2>
        
        <p className="mb-4 text-gray-600">
          Notre générateur crée des histoires érotiques personnalisées en fonction de vos préférences 
          sensorielles et de vos centres d'intérêt. Le processus se déroule en plusieurs étapes :
        </p>

        <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-600">
          <li>Vos informations personnelles (genre, orientation)</li>
          <li>Votre profil sensoriel (visuel, auditif, kinesthésique)</li>
          <li>Vos préférences en matière d'excitation</li>
          <li>Génération de votre histoire personnalisée</li>
        </ol>

        <p className="mb-6 text-gray-600">
          Chaque histoire est unique et adaptée à vos réponses. Plus vous êtes précis dans 
          vos réponses, plus l'histoire correspondra à vos attentes.
        </p>

        <div className="space-y-4">
          <button 
            onClick={() => navigate('/personal-info')}
            className="btn-primary w-full"
          >
            Commencer l'expérience
          </button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">ou</span>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/random-story-generator')}
            className="btn-secondary w-full"
          >
            Générateur Aléatoire d'Histoire
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
