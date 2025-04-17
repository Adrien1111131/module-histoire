import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const questions = [
  {
    id: 1,
    text: "Quand tu penses à un moment intime, ce qui te revient en premier c'est :",
    options: [
      { value: 'A', label: 'Une image précise' },
      { value: 'B', label: 'Une sensation dans ton corps' },
      { value: 'C', label: 'Un son, une voix, un mot' }
    ]
  },
  {
    id: 2,
    text: "Dans un fantasme, ce qui t'excite le plus c'est :",
    options: [
      { value: 'A', label: 'Voir la scène dans ta tête' },
      { value: 'B', label: 'Sentir chaque détail dans ton corps' },
      { value: 'C', label: 'Entendre les mots ou les souffles' }
    ]
  },
  {
    id: 3,
    text: "Quand tu écoutes une histoire sensuelle, ce que tu préfères c'est :",
    options: [
      { value: 'A', label: 'Les descriptions visuelles (lieux, corps, gestes)' },
      { value: 'B', label: 'Les ressentis (chaleur, frissons, rythme)' },
      { value: 'C', label: 'Les mots prononcés, le ton de la voix' }
    ]
  },
  {
    id: 4,
    text: "Pendant un moment de plaisir, ce qui te fait fondre c'est :",
    options: [
      { value: 'A', label: 'Le regard et les gestes de l\'autre' },
      { value: 'B', label: 'Le contact, la texture, la température' },
      { value: 'C', label: 'Ce qu\'il ou elle te murmure' }
    ]
  },
  {
    id: 5,
    text: "Pour te mettre dans l'ambiance, tu préfères :",
    options: [
      { value: 'A', label: 'Un décor, une ambiance visuelle' },
      { value: 'B', label: 'Une caresse ou une sensation' },
      { value: 'C', label: 'Une phrase érotique ou une voix' }
    ]
  }
]

const SensoryQuestionnaire = ({ initialData = {}, onSubmit }) => {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState(initialData)

  const handleAnswerSelect = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Vérifier que toutes les questions ont une réponse
    if (Object.keys(answers).length === questions.length) {
      // Envoyer les réponses au composant parent
      onSubmit(answers)
      // Naviguer vers la prochaine étape
      navigate('/excitation-questionnaire')
    } else {
      alert('Veuillez répondre à toutes les questions avant de continuer.')
    }
  }

  const isComplete = Object.keys(answers).length === questions.length

  return (
    <div className="max-w-2xl mx-auto">
      <div className="question-card">
        <h2 className="text-2xl font-bold mb-6">Votre profil sensoriel</h2>
        <p className="text-gray-600 mb-6">
          Cette partie nous aide à comprendre comment vous percevez et ressentez le plaisir.
          Choisissez la réponse qui vous correspond le mieux pour chaque question.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {questions.map((question) => (
            <div key={question.id} className="space-y-4">
              <p className="font-medium text-gray-900">{question.text}</p>
              <div className="space-y-2">
                {question.options.map((option) => (
                  <label key={option.value} className="radio-option">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option.value}
                      checked={answers[question.id] === option.value}
                      onChange={() => handleAnswerSelect(question.id, option.value)}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={() => navigate('/personal-info')}
              className="btn-secondary"
            >
              Retour
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={!isComplete}
            >
              Continuer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SensoryQuestionnaire
