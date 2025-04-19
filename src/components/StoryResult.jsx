import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import grokApi from '../services/grokApi'

const StoryResult = ({ userProfile }) => {
  const navigate = useNavigate()
  const [story, setStory] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [copySuccess, setCopySuccess] = useState(false)

  useEffect(() => {
    generateStory()
  }, [])

  const generateStory = async () => {
    try {
      setLoading(true)
      setError(null)
      setCopySuccess(false)
      const generatedStory = await grokApi.generateStory(userProfile)
      setStory(generatedStory)
    } catch (err) {
      setError('Une erreur est survenue lors de la génération de l\'histoire.')
      console.error('Erreur de génération:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(story)
      .then(() => {
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
      })
      .catch(err => {
        console.error('Erreur de copie:', err)
        alert('Impossible de copier l\'histoire. Veuillez réessayer.')
      })
  }

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="question-card text-center">
          <div className="animate-pulse space-y-4">
            <div className="w-24 h-24 mx-auto">
              <svg className="animate-spin text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Génération en cours...</h2>
            <p className="text-gray-600">
              Nous créons une histoire unique basée sur vos préférences.
              <br />Cela peut prendre quelques instants.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="question-card">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Une erreur est survenue</h2>
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <p className="text-red-700">
              Nous n'avons pas pu générer votre histoire pour le moment. 
              Cela peut être dû à :
            </p>
            <ul className="list-disc list-inside mt-2 text-red-600">
              <li>Une erreur de connexion avec notre service</li>
              <li>Un problème temporaire avec l'API</li>
              <li>Des données manquantes dans votre profil</li>
            </ul>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => navigate('/excitation-questionnaire')}
              className="btn-secondary"
            >
              Retour au questionnaire
            </button>
            <button
              onClick={generateStory}
              className="btn-primary"
            >
              Réessayer la génération
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="question-card">
        <h2 className="text-2xl font-bold mb-6">Votre histoire personnalisée</h2>
        
        <div className="prose prose-lg max-w-none mb-6">
          {story.split('\n').map((paragraph, index) => {
            // Mettre en évidence les balises et les pauses
            const formattedText = paragraph
              .replace(/\[([^\]]+)\]/g, '<span class="text-blue-600 opacity-50">[$1]</span>')
              .replace(/\[\/([^\]]+)\]/g, '<span class="text-blue-600 opacity-50">[/$1]</span>')
              .replace(/\(\.\.\.\)/g, '<span class="text-gray-400">(...)</span>')
              .replace(/\.\.\.\.\./g, '<span class="text-gray-400">.....</span>')
              .replace(/\.\.\./g, '<span class="text-gray-400">...</span>')
              .replace(/;/g, '<span class="text-gray-400">;</span>');

            return (
              <p 
                key={index} 
                className="mb-4 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formattedText }}
              />
            );
          })}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Guide des balises audio :</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div><span className="text-blue-600">[sensuel]</span> - ton sensuel et séduisant</div>
            <div><span className="text-blue-600">[excite]</span> - ton excité et passionné</div>
            <div><span className="text-blue-600">[jouissance]</span> - ton d'extase</div>
            <div><span className="text-blue-600">[murmure]</span> - ton doux et intime</div>
            <div><span className="text-blue-600">[intense]</span> - ton intense et profond</div>
            <div><span className="text-blue-600">[doux]</span> - ton tendre et délicat</div>
            <div className="col-span-2 space-y-1">
              <div><span className="text-gray-400">;</span> - micro-pause entre actions</div>
              <div><span className="text-gray-400">...</span> - pause naturelle</div>
              <div><span className="text-gray-400">.....</span> - pause intense/dramatique</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button
            onClick={() => navigate('/')}
            className="btn-secondary"
          >
            Nouvelle histoire
          </button>
          <div className="space-x-4">
            <button
              onClick={generateStory}
              className="btn-secondary"
            >
              Régénérer
            </button>
            <button
              onClick={handleCopy}
              className={`btn-primary relative ${copySuccess ? 'bg-green-600' : ''}`}
            >
              {copySuccess ? 'Copié !' : 'Copier l\'histoire'}
              {copySuccess && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryResult
