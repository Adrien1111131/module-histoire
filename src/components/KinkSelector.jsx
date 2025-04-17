import React, { useState, useEffect } from 'react'

// Liste des catégories de kinks
const kinkCategories = [
  "Domination douce (Soft Dom)",
  "Facesitting (Assis sur le visage)",
  "Pegging (Pénétration avec gode-ceinture)",
  "Nature (Jeu en extérieur)",
  "Bureau (Jeu au bureau)",
  "Domination",
  "Anulingus",
  "Jeu de souffle (Breathplay)",
  "Bondage (Attaches)",
  "Edging (Contrôle de l'orgasme)",
  "Jeu de rôle (Roleplay)",
  "Fessée (Spanking)",
  "Bandeau sur les yeux (Blindfold)",
  "Taquinerie (Teasing)",
  "Jeu avec de la cire (Waxplay)",
  "Jeu d'animal de compagnie (Petplay)",
  "Domination dure (Hard Dom)",
  "Subspace (État de soumission profonde)",
  "Soins après séance (Aftercare)",
  "Shibari (Art du bondage japonais)",
  "Chasteté (Chastity)",
  "Déni d'orgasme (Orgasm Denial)",
  "Privation sensorielle (Sensory Deprivation)",
  "Jeu d'impact (Impact Play)",
  "Collier (Collar)",
  "Laisse (Leash)",
  "Candaulisme (Cuckolding)",
  "Adoration des pieds (Foot Worship)",
  "Humiliation",
  "Fétichisme des compliments (Praise Kink)",
  "Jeu de température (Temperature Play)",
  "Jeu avec couteau (Knife Play)",
  "Bâillon (Gagging)",
  "Flagellation (Flogging)",
  "Échange de pouvoir (Power Exchange)",
  "Voyeurisme",
  "Exhibitionnisme",
  "Entraves (Restraints)",
  "Surcharge sensorielle (Overstimulation)",
  "Adoration du corps (Body Worship)",
  "Chatouilles (Tickling)",
  "Jeu médical (Medical Play)",
  "Jeu de chiot (Puppy Play)",
  "Jeu de chaton (Kitty Play)",
  "Jeu d'âge (Age Play)",
  "CNC (Non-consentement consenti)",
  "Alternance des rôles (Switching)",
  "Sadisme",
  "Masochisme",
  "Dacryphilie (Plaisir des larmes)",
  "Somnophilie (Jeu avec le sommeil)",
  "Tirage de cheveux (Hair Pulling)",
  "Morsure (Biting)",
  "Griffure (Scratching)",
  "Sexe habillé (Clothed Sex)",
  "Jeu en public (Public Play)",
  "Chevauchement de cuisse (Thigh Riding)",
  "Étranglement (Choking)",
  "Jeu avec glace (Ice Play)",
  "Jeu avec feu (Fire Play)",
  "Électrojeu (Electroplay)",
  "Figging (Jeu avec gingembre)",
  "Latex",
  "Cuir (Leather)",
  "Corsetterie (Corsetry)",
  "Bas (Stockings)",
  "Talons hauts (High Heels)",
  "Jeu d'uniforme (Uniform Play)",
  "Professeur/Élève (Teacher/Student)",
  "Maître/Esclave (Master/Slave)",
  "Dynamique Papa/Maman (Daddy/Mommy Dynamics)",
  "Dressage de rebelle (Brat Taming)",
  "Soumission de service (Service Submission)",
  "Domination financière (Financial Domination)",
  "Hypnose",
  "Jeu mental (Mind Play)",
  "Objectification (Transformation en objet)",
  "Entraînement (Training)",
  "Contrats",
  "Rituels",
  "Marquage (Marking)",
  "Jeu avec piercing (Piercing Play)",
  "Jeu avec sang (Blood Play)",
  "Jeu de sensations (Sensation Play)",
  "Double pénétration (Fantaisie ou jouets)",
  "Jeu en groupe (Group Play)",
  "Échangisme (Swinging)",
  "Dynamiques polyamoureuses (Poly Dynamics)",
  "Taquinerie et déni (Tease and Denial)",
  "Orgasme ruiné (Ruined Orgasm)",
  "Orgasme forcé (Forced Orgasm)",
  "Traite (Milking)",
  "Jeu de prostate (Prostate Play)",
  "Jeu avec gode-ceinture (Strap-on Play)",
  "Travestissement (Crossdressing)",
  "Jeu de genre (Gender Play)",
  "Dollification (Transformation en poupée)",
  "Mobilier humain (Human Furniture)"
]

const KinkSelector = ({ selectedKinks, setSelectedKinks }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredKinks, setFilteredKinks] = useState(kinkCategories)
  const maxSelections = 5

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredKinks(kinkCategories)
    } else {
      const filtered = kinkCategories.filter(kink => 
        kink.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredKinks(filtered)
    }
  }, [searchTerm])

  const handleKinkToggle = (kink) => {
    if (selectedKinks.includes(kink)) {
      setSelectedKinks(selectedKinks.filter(k => k !== kink))
    } else {
      if (selectedKinks.length < maxSelections) {
        setSelectedKinks([...selectedKinks, kink])
      }
    }
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="kink-selector">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <input
            type="text"
            placeholder="Rechercher une catégorie..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="text-sm text-gray-600 mb-4">
          Sélectionnez jusqu'à {maxSelections} catégories ({selectedKinks.length}/{maxSelections} sélectionnées)
        </div>
      </div>
      
      {selectedKinks.length > 0 && (
        <div className="mb-6">
          <h4 className="text-md font-medium mb-2">Catégories sélectionnées:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedKinks.map(kink => (
              <span 
                key={kink} 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                {kink}
                <button 
                  type="button"
                  onClick={() => handleKinkToggle(kink)}
                  className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-600 focus:outline-none"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-96 overflow-y-auto p-2 border border-gray-200 rounded-md">
        {filteredKinks.length > 0 ? (
          filteredKinks.map(kink => (
            <div 
              key={kink}
              className={`flex items-center p-2 rounded cursor-pointer transition-colors ${
                selectedKinks.includes(kink) 
                  ? 'bg-blue-100 border border-blue-300' 
                  : 'hover:bg-gray-100 border border-transparent'
              }`}
              onClick={() => handleKinkToggle(kink)}
            >
              <input
                type="checkbox"
                checked={selectedKinks.includes(kink)}
                onChange={() => {}}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900 cursor-pointer">
                {kink}
              </label>
            </div>
          ))
        ) : (
          <div className="col-span-3 py-4 text-center text-gray-500">
            Aucune catégorie trouvée pour "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  )
}

export default KinkSelector
