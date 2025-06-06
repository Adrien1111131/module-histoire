import React from 'react';

const ProfileCard = ({ profile, onSelect, onEdit, onDelete, isActive }) => {
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg border ${isActive ? 'bg-amber-100 border-amber-400' : 'bg-gray-50 hover:bg-gray-100 border-gray-200'}`}>
      <div 
        className="flex-1 cursor-pointer" 
        onClick={onSelect}
      >
        <div className="flex items-center">
          <p className="font-medium">{profile.name}</p>
          {isActive && (
            <span className="ml-2 px-2 py-0.5 text-xs bg-amber-500 text-white rounded-full">Actif</span>
          )}
        </div>
        <div className="text-sm text-gray-600 mt-1">
          {profile.gender && <p>Genre: {profile.gender}</p>}
          {profile.orientation && <p>Orientation: {profile.orientation}</p>}
          {profile.ageRange && <p>Âge: {profile.ageRange}</p>}
        </div>
      </div>
      <div className="flex space-x-1">
        <button 
          onClick={onEdit} 
          className="text-blue-500 hover:text-blue-700 p-1"
          aria-label="Modifier le profil"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        <button 
          onClick={onDelete} 
          className="text-red-500 hover:text-red-700 p-1"
          aria-label="Supprimer le profil"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
