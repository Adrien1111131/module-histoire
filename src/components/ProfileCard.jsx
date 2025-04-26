import React from 'react'

const ProfileCard = ({ profile, onSelect, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 border border-gray-200">
      <div 
        className="flex-1 cursor-pointer" 
        onClick={onSelect}
      >
        <p className="font-medium">{profile.name}</p>
        <div className="text-sm text-gray-600 mt-1">
          <p>Style: {profile.dominantStyle}</p>
          <p>Type: {profile.excitationType}</p>
        </div>
      </div>
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
  )
}

export default ProfileCard
