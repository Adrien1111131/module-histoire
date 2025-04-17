import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const questions = [
  {
    id: 1,
    text: "Ce qui te fait vraiment monter en tension, c'est :",
    options: [
      { value: 'A', label: 'Le lien affectif, sentir qu\'il/elle te désire profondément' },
      { value: 'B', label: 'L\'histoire, le scénario, le contexte interdit ou spécial' },
      { value: 'C', label: 'Le fait de lâcher prise, qu\'on prenne le contrôle avec douceur ou assurance' },
      { value: 'D', label: 'Les odeurs, les goûts, l\'ambiance charnelle qui flotte' }
    ]
  },
  {
    id: 2,
    text: "Quand tu fantasmes, tu te projettes surtout :",
    options: [
      { value: 'A', label: 'Dans une histoire romantique ou passionnée' },
      { value: 'B', label: 'Dans un jeu de rôle ou une situation intrigante' },
      { value: 'C', label: 'Dans une expérience où tu te laisses guider' },
      { value: 'D', label: 'Dans un monde très sensoriel où les odeurs et les goûts comptent' }
    ]
  },
  {
    id: 3,
    text: "Tu es touchée par :",
    options: [
      { value: 'A', label: 'Les déclarations, la tendresse ou la connexion' },
      { value: 'B', label: 'L\'originalité, la surprise, la créativité' },
      { value: 'C', label: 'Les ordres doux, les gestes assurés' },
      { value: 'D', label: 'Les parfums, la salive, la peau' }
    ]
  }
]

const ExcitationQuestionnaire = ({ initialData = {}, onSubmit }) => {
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
      // Naviguer vers la page de résultat
      navigate('/story-result')
    } else {
      alert('Veuillez répondre à toutes les questions avant de continuer.')
    }
  }

  const isComplete = Object.keys(answers).length === questions.length

  return (
    <div className="max-w-2xl mx-auto">
      <div className="question-card">
        <h2 className="text-2xl font-bold mb-6">Vos préférences d'excitation</h2>
        <p className="text-gray-600 mb-6">
          Cette dernière partie nous aide à comprendre ce qui vous excite le plus.
          Choisissez la réponse qui correspond le mieux à vos préférences.
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
              onClick={() => navigate('/sensory-questionnaire')}
              className="btn-secondary"
            >
              Retour
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={!isComplete}
            >
              Générer mon histoire
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ExcitationQuestionnaire
