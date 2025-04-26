import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileCard from './ProfileCard'
import profileService from '../services/profileService'

const HomePage = () => {
  const navigate = useNavigate()
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    // Charger les profils au démarrage
    loadProfiles()
  }, [])

  const loadProfiles = () => {
    const savedProfiles = profileService.getProfiles()
    setProfiles(savedProfiles)
  }

  const handleSelectProfile = (profileId) => {
    // Pour l'instant, juste naviguer vers la page d'accueil
    // Dans une future implémentation, on pourrait utiliser ce profil pour générer une histoire
    console.log('Profil sélectionné:', profileId)
    // navigate('/story-generator', { state: { profileId } })
  }

  const handleDeleteProfile = (profileId) => {
    profileService.deleteProfile(profileId)
    loadProfiles() // Recharger la liste après suppression
  }

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

        {profiles.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Vos profils</h3>
            <div className="space-y-2">
              {profiles.map(profile => (
                <ProfileCard 
                  key={profile.id}
                  profile={profile}
                  onSelect={() => handleSelectProfile(profile.id)}
                  onDelete={() => handleDeleteProfile(profile.id)}
                />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          <button 
            onClick={() => navigate('/personal-info')}
            className="btn-primary w-full"
          >
            Création de votre profil
          </button>
          
          <button 
            onClick={() => navigate('/custom-story')}
            className="btn-primary w-full"
          >
            Histoire à mon goût
          </button>
          
          <button 
            onClick={() => navigate('/free-fantasy')}
            className="btn-primary w-full"
          >
            Fantasme Libre
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
            Choisissez vos fantasmes
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
