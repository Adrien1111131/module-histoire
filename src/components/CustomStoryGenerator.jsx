import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storyOptions } from '../data/storyOptions';
import profileService from '../services/profileService';

const CustomStoryGenerator = () => {
  const navigate = useNavigate();
  const [selectedSituation, setSelectedSituation] = useState('');
  const [selectedPersonnage, setSelectedPersonnage] = useState('');
  const [selectedLieu, setSelectedLieu] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isComplete) {
      const customChoices = {
        situation: storyOptions.situations.find(s => s.id === selectedSituation),
        personnage: storyOptions.personnages.find(p => p.id === selectedPersonnage),
        lieu: storyOptions.lieux.find(l => l.id === selectedLieu)
      };
      
      // Récupérer le profil s'il existe
      const profiles = profileService.getProfiles();
      const existingProfile = profiles.length > 0 ? profiles[0] : null;
      
      navigate('/custom-story-result', { 
        state: { 
          customChoices,
          existingProfile 
        } 
      });
    }
  };

  const isComplete = selectedSituation && selectedPersonnage && selectedLieu;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="question-card">
        <h2 className="text-2xl font-bold mb-6">Histoire à mon goût</h2>
        <p className="text-gray-600 mb-6">
          Sélectionnez vos préférences pour créer une histoire personnalisée qui correspond exactement à vos envies.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Question 1 - Situation */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              1. Quelle situation t'excite le plus ?
            </h3>
            <div className="space-y-3">
              {storyOptions.situations.map(option => (
                <label 
                  key={option.id} 
                  className={`flex items-start p-3 border rounded-lg hover:bg-gray-50 cursor-pointer ${
                    selectedSituation === option.id ? 'bg-blue-50 border-blue-300' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="situation"
                    value={option.id}
                    checked={selectedSituation === option.id}
                    onChange={() => setSelectedSituation(option.id)}
                    className="mt-1"
                  />
                  <span className="ml-3">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 2 - Personnage */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              2. Qui te fait perdre le contrôle ?
            </h3>
            <div className="space-y-3">
              {storyOptions.personnages.map(option => (
                <label 
                  key={option.id} 
                  className={`flex items-start p-3 border rounded-lg hover:bg-gray-50 cursor-pointer ${
                    selectedPersonnage === option.id ? 'bg-blue-50 border-blue-300' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="personnage"
                    value={option.id}
                    checked={selectedPersonnage === option.id}
                    onChange={() => setSelectedPersonnage(option.id)}
                    className="mt-1"
                  />
                  <span className="ml-3">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 3 - Lieu */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              3. Où aimerais-tu succomber ?
            </h3>
            <div className="space-y-3">
              {storyOptions.lieux.map(option => (
                <label 
                  key={option.id} 
                  className={`flex items-start p-3 border rounded-lg hover:bg-gray-50 cursor-pointer ${
                    selectedLieu === option.id ? 'bg-blue-50 border-blue-300' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="lieu"
                    value={option.id}
                    checked={selectedLieu === option.id}
                    onChange={() => setSelectedLieu(option.id)}
                    className="mt-1"
                  />
                  <span className="ml-3">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-6">
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
              disabled={!isComplete}
            >
              Générer mon histoire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomStoryGenerator;
