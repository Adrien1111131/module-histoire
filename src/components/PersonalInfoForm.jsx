import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PersonalInfoForm = ({ initialData = {}, onSubmit }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    gender: initialData.gender || '',
    genderCustom: initialData.genderCustom || '',
    orientation: initialData.orientation || '',
    tone: initialData.tone || '',
    context: initialData.context || '',
    length: initialData.length || 'medium'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    navigate('/sensory-questionnaire')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="question-card">
        <h2 className="text-2xl font-bold mb-6">Vos informations personnelles</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Votre prénom ou pseudonyme
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Votre genre
            </label>
            <div className="space-y-2">
              {['Homme', 'Femme', 'Non-binaire', 'Autre'].map((option) => (
                <label key={option} className="radio-option">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={formData.gender === option}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
            {formData.gender === 'Autre' && (
              <input
                type="text"
                name="genderCustom"
                value={formData.genderCustom}
                onChange={handleInputChange}
                placeholder="Précisez votre genre"
                className="input-field mt-2"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Votre orientation sexuelle
            </label>
            <div className="space-y-2">
              {['Hétérosexuel(le)', 'Homosexuel(le)', 'Bisexuel(le)', 'Pansexuel(le)', 'Autre'].map((option) => (
                <label key={option} className="radio-option">
                  <input
                    type="radio"
                    name="orientation"
                    value={option}
                    checked={formData.orientation === option}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tonalité souhaitée
            </label>
            <div className="space-y-2">
              {[
                { value: 'doux', label: 'Doux et tendre' },
                { value: 'passionne', label: 'Passionné et intense' },
                { value: 'mysterieux', label: 'Mystérieux et séducteur' },
                { value: 'dominant', label: 'Dominant et assuré' }
              ].map((option) => (
                <label key={option.value} className="radio-option">
                  <input
                    type="radio"
                    name="tone"
                    value={option.value}
                    checked={formData.tone === option.value}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contexte de l'histoire
            </label>
            <div className="space-y-2">
              {[
                { value: 'rencontre', label: 'Rencontre fortuite et inattendue' },
                { value: 'retrouvailles', label: 'Retrouvailles passionnées' },
                { value: 'fantasme', label: 'Fantasme récurrent qui se réalise' },
                { value: 'quotidien', label: 'Moment du quotidien qui dérape' }
              ].map((option) => (
                <label key={option.value} className="radio-option">
                  <input
                    type="radio"
                    name="context"
                    value={option.value}
                    checked={formData.context === option.value}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Longueur de l'histoire
            </label>
            <div className="space-y-2">
              {[
                { value: 'short', label: 'Courte (5-10 minutes)' },
                { value: 'medium', label: 'Moyenne (10-15 minutes)' },
                { value: 'long', label: 'Longue (15-20 minutes)' }
              ].map((option) => (
                <label key={option.value} className="radio-option">
                  <input
                    type="radio"
                    name="length"
                    value={option.value}
                    checked={formData.length === option.value}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-4">
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
              disabled={!formData.name || !formData.gender || !formData.orientation || !formData.tone || !formData.context || !formData.length}
            >
              Continuer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalInfoForm
