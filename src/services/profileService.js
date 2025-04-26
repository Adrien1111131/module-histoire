// Service pour gérer les profils utilisateurs dans le localStorage

// Clé utilisée pour stocker les profils dans le localStorage
const PROFILES_STORAGE_KEY = 'user_profiles';

/**
 * Récupère tous les profils stockés
 * @returns {Array} Liste des profils
 */
export const getProfiles = () => {
  try {
    const profilesJson = localStorage.getItem(PROFILES_STORAGE_KEY);
    return profilesJson ? JSON.parse(profilesJson) : [];
  } catch (error) {
    console.error('Erreur lors de la récupération des profils:', error);
    return [];
  }
};

/**
 * Sauvegarde un nouveau profil
 * @param {Object} profile - Le profil à sauvegarder
 * @returns {Object} Le profil sauvegardé avec son ID
 */
export const saveProfile = (profile) => {
  try {
    const profiles = getProfiles();
    
    // Générer un ID unique pour le profil
    const newProfile = {
      ...profile,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    // Ajouter le nouveau profil à la liste
    const updatedProfiles = [...profiles, newProfile];
    
    // Sauvegarder la liste mise à jour
    localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(updatedProfiles));
    
    return newProfile;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du profil:', error);
    throw error;
  }
};

/**
 * Supprime un profil par son ID
 * @param {string} profileId - L'ID du profil à supprimer
 * @returns {boolean} Succès de l'opération
 */
export const deleteProfile = (profileId) => {
  try {
    const profiles = getProfiles();
    const updatedProfiles = profiles.filter(profile => profile.id !== profileId);
    
    localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(updatedProfiles));
    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression du profil:', error);
    return false;
  }
};

/**
 * Récupère un profil par son ID
 * @param {string} profileId - L'ID du profil à récupérer
 * @returns {Object|null} Le profil trouvé ou null
 */
export const getProfileById = (profileId) => {
  try {
    const profiles = getProfiles();
    return profiles.find(profile => profile.id === profileId) || null;
  } catch (error) {
    console.error('Erreur lors de la récupération du profil:', error);
    return null;
  }
};

export default {
  getProfiles,
  saveProfile,
  deleteProfile,
  getProfileById
};
