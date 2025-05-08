import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import KinkSelector from './KinkSelector'
import ReadingTimeSlider from './ReadingTimeSlider'

const RandomStoryGenerator = ({ onSubmit }) => {
  const navigate = useNavigate()
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    gender: ''
  })
  const [selectedKinks, setSelectedKinks] = useState([])
  const [readingTime, setReadingTime] = useState(10)
  const [error, setError] = useState('')

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    if (!personalInfo.name.trim()) {
      setError('Veuillez entrer votre nom')
      return
    }
    
    if (!personalInfo.gender) {
      setError('Veuillez sélectionner votre genre')
      return
    }
    
    if (selectedKinks.length === 0) {
      setError('Veuillez sélectionner au moins une catégorie')
      return
    }
    
    // Soumettre les données
    const randomStoryData = {
      personalInfo,
      selectedKinks,
      readingTime
    }
    
    onSubmit(randomStoryData)
    navigate('/random-story-result')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="question-card">
        <h2 className="text-2xl font-bold mb-6">Générateur d'Histoire Aléatoire</h2>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Informations Personnelles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={personalInfo.name}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Entrez votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Genre
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={personalInfo.gender}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Sélectionnez votre genre</option>
                  <option value="femme">Femme</option>
                  <option value="homme">Homme</option>
                  <option value="non-binaire">Non-binaire</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Sélection des Catégories</h3>
            <p className="text-gray-600 mb-4">
              Sélectionnez les catégories qui vous intéressent pour votre histoire.
            </p>
            
            <KinkSelector 
              selectedKinks={selectedKinks} 
              setSelectedKinks={setSelectedKinks} 
            />
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Temps de Lecture</h3>
            <p className="text-gray-600 mb-4">
              Choisissez la durée de lecture souhaitée pour votre histoire.
            </p>
            
            <ReadingTimeSlider 
              value={readingTime}
              onChange={setReadingTime}
            />
          </div>
          
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn-secondary"
            >
              Retour
            </button>
            
            <button
              type="submit"
              className="btn-primary"
            >
              Générer mon histoire
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RandomStoryGenerator
