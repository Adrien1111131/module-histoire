import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import grokApi from '../services/grokApi';

const FreeFantasyResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { fantasyText, existingProfile } = location.state || {};
  
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (!fantasyText) {
      setError('Aucun fantasme trouvé. Veuillez retourner à la saisie.');
      setLoading(false);
      return;
    }
    
    generateStory();
  }, []);

  const generateStory = async () => {
    try {
      setLoading(true);
      setError(null);
      setCopySuccess(false);
      
      // Récupérer le temps de lecture s'il existe dans l'état
      const readingTime = location.state?.readingTime || 10;
      
      const generatedStory = await grokApi.generateFreeFantasyStory(fantasyText, existingProfile, readingTime);
      setStory(generatedStory);
    } catch (err) {
      setError('Une erreur est survenue lors de la génération de l\'histoire.');
      console.error('Erreur de génération:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(story)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => {
        console.error('Erreur de copie:', err);
        alert('Impossible de copier l\'histoire. Veuillez réessayer.');
      });
  };

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
            <h2 className="text-2xl font-bold">Création de votre fantasme...</h2>
            <p className="text-gray-600">
              Notre IA analyse votre texte et crée une histoire personnalisée.
              <br />Cela peut prendre quelques instants.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="question-card">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Une erreur est survenue</h2>
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <p className="text-red-700">
              {error}
            </p>
            <ul className="list-disc list-inside mt-2 text-red-600">
              <li>Une erreur de connexion avec notre service</li>
              <li>Un problème temporaire avec l'API</li>
              <li>Des données manquantes dans votre description</li>
            </ul>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => navigate('/free-fantasy')}
              className="btn-secondary"
            >
              Retour à la saisie
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
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="question-card">
        <h2 className="text-2xl font-bold mb-6">Votre fantasme personnalisé</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
          <h3 className="text-sm font-medium text-blue-700 mb-2">Votre fantasme :</h3>
          <p className="text-blue-700 text-sm italic">
            "{fantasyText.length > 150 ? fantasyText.substring(0, 150) + '...' : fantasyText}"
          </p>
          {existingProfile && (
            <p className="text-blue-700 text-sm mt-2">
              Style narratif adapté : {existingProfile.dominantStyle}
            </p>
          )}
        </div>
        
        <div className="prose prose-lg max-w-none mb-6">
          {story.split('\n').map((paragraph, index) => {
            // Mettre en évidence les pauses
            const formattedText = paragraph
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

        <div className="flex justify-between pt-6">
          <button
            onClick={() => navigate('/free-fantasy')}
            className="btn-secondary"
          >
            Nouveau fantasme
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
  );
};

export default FreeFantasyResult;
