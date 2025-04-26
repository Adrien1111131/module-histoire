import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profileService from '../services/profileService';

const FreeFantasyGenerator = () => {
  const navigate = useNavigate();
  const [fantasyText, setFantasyText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!fantasyText.trim()) {
      setError('Veuillez décrire votre fantasme avant de continuer.');
      return;
    }
    
    if (fantasyText.trim().length < 20) {
      setError('Veuillez fournir une description plus détaillée pour obtenir une meilleure histoire.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Récupérer le profil s'il existe
    const profiles = profileService.getProfiles();
    const existingProfile = profiles.length > 0 ? profiles[0] : null;
    
    // Naviguer vers la page de résultat avec le texte du fantasme
    navigate('/free-fantasy-result', { 
      state: { 
        fantasyText,
        existingProfile 
      } 
    });
  };

  const handleTextChange = (e) => {
    setFantasyText(e.target.value);
    if (error) setError('');
  };

  const placeholderSuggestions = [
    "Je fantasme sur une rencontre imprévue dans un ascenseur qui tombe en panne...",
    "J'aimerais être surprise par mon partenaire qui m'attend dans la chambre d'hôtel...",
    "Je rêve d'une aventure avec un inconnu lors d'un voyage...",
    "J'imagine une soirée où je suis le centre d'attention de plusieurs personnes...",
    "Je voudrais vivre une expérience de soumission consentie avec quelqu'un qui sait exactement quoi faire..."
  ];

  const randomPlaceholder = placeholderSuggestions[Math.floor(Math.random() * placeholderSuggestions.length)];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="question-card">
        <h2 className="text-2xl font-bold mb-6">Fantasme Libre</h2>
        <p className="text-gray-600 mb-6">
          Décrivez librement votre fantasme, vos envies ou une scène qui vous excite. 
          Notre IA analysera votre texte et créera une histoire sur mesure qui correspond 
          exactement à ce que vous recherchez.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fantasy-text" className="block text-sm font-medium text-gray-700 mb-2">
              Votre fantasme en détail
            </label>
            <textarea
              id="fantasy-text"
              rows={8}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error ? 'border-red-500' : 'border-gray-300'}`}
              placeholder={randomPlaceholder}
              value={fantasyText}
              onChange={handleTextChange}
            ></textarea>
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
            <h3 className="text-sm font-medium text-blue-700 mb-2">Suggestions pour vous aider :</h3>
            <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
              <li>Décrivez le lieu, l'ambiance et les personnes impliquées</li>
              <li>Précisez ce qui vous excite particulièrement dans cette situation</li>
              <li>Mentionnez le niveau d'intensité que vous recherchez</li>
              <li>Indiquez si vous préférez être dominante ou soumise</li>
              <li>N'hésitez pas à être spécifique sur vos désirs</li>
            </ul>
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
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Génération en cours...' : 'Générer mon histoire'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreeFantasyGenerator;
