import React, { useState, useEffect } from 'react';
import kinkCategories, { getAllSubcategories } from '../data/kinkCategories';

const KinkSelector = ({ selectedKinks, setSelectedKinks }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(kinkCategories);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const maxSelections = 5;

  // Filtrer les catégories en fonction du terme de recherche
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCategories(kinkCategories);
    } else {
      const filtered = kinkCategories.filter(category => 
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.subcategories.some(subcat => 
          subcat.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredCategories(filtered);
      
      // Ouvrir automatiquement les catégories qui contiennent des résultats de recherche
      const categoriesToExpand = filtered.map(cat => cat.id);
      setExpandedCategories(categoriesToExpand);
    }
  }, [searchTerm]);

  // Gérer la sélection/désélection d'une sous-catégorie
  const handleKinkToggle = (kink) => {
    if (selectedKinks.includes(kink)) {
      setSelectedKinks(selectedKinks.filter(k => k !== kink));
    } else {
      if (selectedKinks.length < maxSelections) {
        setSelectedKinks([...selectedKinks, kink]);
      }
    }
  };

  // Gérer l'expansion/réduction d'une catégorie
  const toggleCategory = (categoryId) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter(id => id !== categoryId));
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  // Gérer la modification du terme de recherche
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="kink-selector">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <input
            type="text"
            placeholder="Rechercher une catégorie..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 bg-amber-200/30 border border-amber-300/50 rounded-md text-white placeholder-amber-200/70 focus:outline-none focus:ring-2 focus:ring-amber-300"
          />
        </div>
        
        <div className="text-sm text-amber-100 mb-4">
          Sélectionnez jusqu'à {maxSelections} catégories ({selectedKinks.length}/{maxSelections} sélectionnées)
        </div>
      </div>
      
      {/* Affichage des catégories sélectionnées */}
      {selectedKinks.length > 0 && (
        <div className="mb-6">
          <h4 className="text-md font-medium text-amber-200 mb-2">Catégories sélectionnées:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedKinks.map(kink => (
              <span 
                key={kink} 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-500/30 text-amber-100"
              >
                {kink}
                <button 
                  type="button"
                  onClick={() => handleKinkToggle(kink)}
                  className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-amber-300 hover:bg-amber-600/50 hover:text-amber-100 focus:outline-none"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Liste des catégories avec menus déroulants */}
      <div className="max-h-64 overflow-y-auto p-2 border border-amber-300/30 rounded-md bg-amber-900/20">
        {filteredCategories.length > 0 ? (
          filteredCategories.map(category => (
            <div key={category.id} className="mb-2 border border-amber-500/30 rounded-md overflow-hidden">
              {/* En-tête de la catégorie (cliquable pour développer/réduire) */}
              <div 
                className="flex items-center justify-between p-3 bg-amber-800/50 cursor-pointer hover:bg-amber-700/50 transition-colors"
                onClick={() => toggleCategory(category.id)}
              >
                <h3 className="text-amber-100 font-medium">{category.name}</h3>
                <span className="text-amber-300 text-lg">
                  {expandedCategories.includes(category.id) ? '▼' : '►'}
                </span>
              </div>
              
              {/* Sous-catégories (visibles uniquement si la catégorie est développée) */}
              {expandedCategories.includes(category.id) && (
                <div className="p-2 bg-amber-950/30">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.subcategories.map(subcat => (
                      <div 
                        key={subcat}
                        className={`flex items-center p-2 rounded cursor-pointer transition-colors ${
                          selectedKinks.includes(subcat) 
                            ? 'bg-amber-600/30 border border-amber-500/50' 
                            : 'hover:bg-amber-800/30 border border-transparent'
                        }`}
                        onClick={() => handleKinkToggle(subcat)}
                      >
                        <input
                          type="checkbox"
                          checked={selectedKinks.includes(subcat)}
                          onChange={() => {}}
                          className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-amber-300/50 rounded"
                        />
                        <label className="ml-2 block text-sm text-amber-100 cursor-pointer">
                          {subcat}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="py-4 text-center text-amber-300">
            Aucune catégorie trouvée pour "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default KinkSelector;
