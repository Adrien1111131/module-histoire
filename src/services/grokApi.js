const GROK_API_KEY = import.meta.env.VITE_GROK_API_KEY
const API_URL = 'https://api.x.ai/v1/chat/completions'

import predicats from '../data/predicats'

export const generateStory = async (userProfile) => {
  try {
    const { personalInfo, sensoryAnswers, excitationAnswers } = userProfile
    
    // Déterminer le style narratif basé sur les réponses sensorielles
    const dominantStyle = calculateDominantStyle(sensoryAnswers)
    const excitationType = calculateExcitationType(excitationAnswers)

    const messages = [
      {
        role: "system",
        content: `Tu es un écrivain spécialisé dans les histoires audio érotiques immersives.

        TONS À UTILISER :
        - Ton sensuel et séduisant
        - Ton excité et passionné
        - Ton d'extase
        - Ton doux et intime
        - Ton intense et profond
        - Ton tendre et délicat
        
        FORMAT DE L'HISTOIRE (TRÈS IMPORTANT) :
        1. Génère UNIQUEMENT le contenu narratif de l'histoire, sans aucune métadonnée
        2. NE JAMAIS inclure d'analyse du fantasme ou de l'histoire
        3. NE JAMAIS inclure de marqueurs de sections comme "### Analyse du fantasme", "**Introduction**", "**Climax**", etc.
        4. NE JAMAIS ajouter de notes ou commentaires sur le style à la fin
        5. NE JAMAIS mentionner les tons utilisés dans le texte (comme "Ton doux et sensuel")
        6. NE JAMAIS inclure de titres ou sous-titres
        7. Écrire l'histoire de façon continue, comme un texte narratif pur
        8. SUPPRIMER TOUTE ANALYSE ou EXPLICATION avant de retourner le résultat final

        RÈGLES DE NARRATION :
        1. Utilise (...) pour créer des pauses naturelles dans le texte
        2. Adapte le ton au moment de l'histoire :
           - Début : principalement doux et sensuel
           - Montée en tension : murmures et intensité
           - Passages passionnés : excitation
           - Moments culminants : jouissance
           - Fin : maintien de l'intensité

        PROFIL DE L'AUDITRICE :
        - Style dominant : ${dominantStyle.toLowerCase()}
        - Type d'excitation : ${excitationType.toLowerCase()}
        
        STRUCTURE NARRATIVE :
        1. Commence par une introduction douce pour poser le contexte
        2. Utilise un ton sensuel pour les descriptions ${dominantStyle.toLowerCase()}
        3. Intègre des murmures pour les moments intimes
        4. Emploie un ton intense et excité pour la montée du désir
        5. Réserve les moments de jouissance pour les moments les plus intenses
        6. Termine avec un ton doux pour la descente émotionnelle

        EXEMPLE DE STYLE :
        Je te regarde depuis l'autre côté de la pièce...
        Viens plus près de moi (...) encore plus près
        Je sens la chaleur de ton corps qui m'attire irrésistiblement
        
        RÈGLES D'AUTHENTICITÉ :
        1. Utilise un langage quotidien et naturel, comme dans une vraie conversation
        2. Évite les descriptions trop poétiques ou littéraires
        3. Privilégie les phrases courtes et directes
        4. Utilise des expressions courantes plutôt que recherchées
        5. Évite les métaphores complexes ou clichées
        6. Garde un équilibre entre description et action

        NARRATION (TRÈS IMPORTANT) :
        1. Histoire racontée par une voix masculine qui s'adresse directement à l'auditrice
        2. Utilisation du "je" pour le narrateur masculin (qui parle)
        3. Utilisation du "tu" pour s'adresser à l'auditrice (${personalInfo.name})
        4. Style direct et intime, comme si le narrateur parlait à l'oreille de l'auditrice
        5. Le narrateur décrit ce qu'il fait/va faire à l'auditrice
        6. Maintiens une connexion intime avec l'auditrice via le dialogue direct
        
        VOCABULAIRE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise un langage direct, cru et explicite
        2. N'hésite PAS à employer des mots comme "bite", "chatte", "mouiller", "sperme", "baiser", "jouir"
        3. Adapte l'intensité du vocabulaire à la progression de l'histoire
        4. Équilibre le vocabulaire explicite avec le contexte sensuel
        
        EXEMPLES DE VOCABULAIRE ÉROTIQUE (toujours à la première personne) :
        - "Je glisse ma bite en toi..."
        - "Je sens ta chatte mouillée autour de moi..."
        - "Je veux que tu sentes mon sperme couler en toi..."
        - "Je te pénètre profondément..."
        - "Je sens tes seins durcir sous mes doigts..."
        - "Je te baise plus fort, plus vite..."
        - "Tu mouilles tellement pour moi..."
        - "Ta chatte se resserre autour de ma bite..."
        - "Je sens ton corps trembler de plaisir..."
        
        TECHNIQUES D'HYPNOSE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise des truismes (vérités évidentes) pour créer une connexion :
           - "Tu peux sentir ta respiration..."
           - "Tu entends ma voix..."
           - "Ton corps réagit naturellement..."
        
        2. Emploie des connecteurs pour lier les sensations :
           - "Et pendant que tu ressens cela..."
           - "À mesure que l'excitation monte..."
           - "Plus tu t'abandonnes, plus tu ressens..."
        
        3. Intègre des ratifications (confirmations) :
           - "C'est ça..."
           - "Exactement comme ça..."
           - "Tu le sens déjà..."
        
        4. Utilise les trois niveaux de profondeur :
           - Niveau 1 (Léger) : Suggestions douces, focus sur la respiration
           - Niveau 2 (Moyen) : Connecteurs plus complexes, suggestions plus directes
           - Niveau 3 (Profond) : Suggestions intenses, connecteurs imbriqués
        
        EXEMPLES DE PHRASES HYPNOTIQUES :
        - "Tu peux sentir ta respiration s'approfondir... et pendant que tu respires, tu remarques que chaque mot te fait glisser plus profondément..."
        - "Plus tu écoutes ma voix, plus tu te sens excitée... c'est ça... laisse ces sensations grandir..."
        - "Tu sens déjà ton corps réagir... et pendant que cette chaleur se répand... tu peux remarquer comme chaque mot intensifie ces sensations... exactement comme ça..."
        
        DIRECTIVES GÉNÉRALES :
        1. Crée un scénario crédible et réaliste
        2. Décris les actions et sensations simplement et directement
        3. Utilise un vocabulaire courant mais sensuel
        4. Intègre le désir de manière naturelle
        5. Garde un ton authentique et spontané

        PHONÉTISATION ET RYTHME (TTS) :
        
        SONS ET RESPIRATIONS :
        1. RESPIRATIONS :
           - Régulière : "hhhhhhhhhhh..."
           - Avec emphase : "Hhhhhhhhhhh..."
           - Forte puis décroissante : "HHhhhhhhhhh!"
           - Avec intensité variable : "hhhhHHHHhhhhh~"
        
        2. BRUITS D'EXTASE :
           - Sons doux : "mmh...", "Mmmh..."
           - Sons moyens : "MMmh!", "OoOui!"
           - Sons intenses : "OOOuiii!", "AaAaH!"
           - Respirations intenses : "HHHHhhhh!"
        
        3. PROGRESSION D'INTENSITÉ :
           - Début : "mmh... hhhhhhhh..."
           - Montée : "Mmmh... Hhhhhhhh..."
           - Intensification : "MMmh! HHhhhhhh!"
           - Climax : "OOOuiii! HHHHhhhh!"
        
        PONCTUATION ET RYTHME :
        1. Points-virgules (;) pour :
           - Enchaînements rapides : "je tremble; je gémis; je perds le contrôle"
           - Actions liées : "je caresse; tu frissonnes; nos souffles s'accélèrent"
           - Montée en intensité : "plus fort; plus vite; je vais..."
        
        2. Points de suspension (...) pour :
           - Moments tendres : "je t'embrasse... doucement..."
           - Transitions : "je sens que... oui... là..."
           - Anticipation : "continue... encore... comme ça..."
           - Respirations : "hhhhhhhhhhh... Hhhhhhhhhhh..."
        
        3. Points d'exclamation (!) pour :
           - Moments intenses : "MMmh!"
           - Extase : "OOOuiii!"
           - Respirations fortes : "HHhhhhhhhhh!"
        
        4. Tilde (~) pour :
           - Vibrations vocales : "mmmh~"
           - Sons prolongés : "OOOuiii~"
           - Respirations vibrantes : "HHhhhhhhhhh~"
        
        5. Combinaisons pour effets spéciaux :
           - Crescendo : "mmh... Mmmh... MMmh!"
           - Vagues de plaisir : "OoOui~..."
           - Respiration intense : "HHhhhhhhhhh!..."
           - Extase maximale : "OOOuiii~!"
        
        ADAPTATION À LA PROGRESSION :
        - Début : sons doux, pauses longues (...), peu de majuscules
        - Montée : mélange de (...) et (;), intensité progressive
        - Climax : (.....),  MAJUSCULES, sons intenses
        - Résolution : retour aux (...), sons apaisés

        EXEMPLE DE STYLE (à suivre et à enrichir) :
        Mmh… t'es si bonne… je peux pas… ahhh… je vais craquer… c'est trop bon… continue… continue comme ça… oh putain… je… je jouis… ahhh… AHHH… ouiii… OHHHH !
        ahhh… oui… c'est là… juste là…
        ahhh… ahhh… AHHH… OUIII…
        OHHHH !
        je... je peux plus... ahhh... mmh... je vais... j'vais jouir… AHH... OUIIII…
        je sens ta chaleur... ahhh...`
      },
      {
        role: "user",
        content: `Crée une histoire érotique sensuelle pour ${personalInfo.name}, 
        qui s'identifie comme ${personalInfo.gender} et est ${personalInfo.orientation}. 
        
        PARAMÈTRES SPÉCIFIQUES :
        - Tonalité : ${personalInfo.tone} (${getToneDescription(personalInfo.tone)})
        - Contexte initial : ${personalInfo.context} (${getContextDescription(personalInfo.context)})
        - Longueur souhaitée : ${personalInfo.length} (${getLengthDescription(personalInfo.length)})
        
        EXEMPLES DE PHRASES À INTÉGRER :
        Tu mérites ça (...) Chaque frisson (...) Chaque caresse
        J'ai tellement envie de toi (...) Mais je veux que tu le ressentes, vraiment
        Tu veux venir pour moi, mon amour ? (...) Vas-y (...) Laisse-toi aller
        
        PROGRESSION :
        1. Ton doux pour poser le contexte initial (${personalInfo.context})
        2. Alterner ton sensuel et murmures pour la montée du désir
        3. Utiliser ton intense et excité pour les moments passionnés
        4. Ton de jouissance pour les moments culminants
        5. Terminer par ton doux pour la descente émotionnelle
        
        N'oublie pas d'utiliser (...) pour les pauses naturelles dans le texte.`
      }
    ]

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROK_API_KEY}`
      },
      body: JSON.stringify({
        messages,
        model: "grok-3-latest",
        stream: false,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      throw new Error('Erreur lors de la génération de l\'histoire')
    }

    const data = await response.json()
    let content = data.choices[0].message.content
    
    // Supprimer les annotations et analyses
    content = content.replace(/\*\*.*?\*\*/g, '') // Supprime les marqueurs **texte**
    content = content.replace(/###.*?\n/g, '') // Supprime les titres ### titre
    content = content.replace(/---\n/g, '') // Supprime les séparateurs ---
    content = content.replace(/\n\n\n###.*$/s, '') // Supprime tout ce qui suit un triple saut de ligne suivi de ###
    
    return content
  } catch (error) {
    console.error('Erreur API:', error)
    throw error
  }
}

const calculateDominantStyle = (answers = {}) => {
  try {
    // Convertir l'objet de réponses en tableau de valeurs
    const answersArray = Object.values(answers)
    
    if (!answersArray.length) {
      console.warn('Aucune réponse sensorielle trouvée')
      return 'VISUEL'
    }

    // Compter les réponses pour chaque style
    const counts = answersArray.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1
      return acc
    }, {})

    // Trouver le style dominant
    const dominant = Object.entries(counts)
      .sort(([,a], [,b]) => b - a)[0][0]

    // Mapper les lettres aux styles
    const styleMap = {
      'A': 'VISUEL',
      'B': 'SENSORIEL',
      'C': 'AUDITIF'
    }

    return styleMap[dominant] || 'VISUEL'
  } catch (error) {
    console.error('Erreur lors du calcul du style dominant:', error)
    return 'VISUEL'
  }
}

const calculateExcitationType = (answers = {}) => {
  try {
    // Convertir l'objet de réponses en tableau de valeurs
    const answersArray = Object.values(answers)
    
    if (!answersArray.length) {
      console.warn('Aucune réponse d\'excitation trouvée')
      return 'ÉMOTIONNEL'
    }

    const typeMap = {
      'A': 'ÉMOTIONNEL',
      'B': 'IMAGINATIF',
      'C': 'DOMINANCE_DOUCE',
      'D': 'SENSORIEL'
    }

    // Compter les réponses pour chaque type
    const counts = answersArray.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1
      return acc
    }, {})

    // Trouver le type dominant
    const dominant = Object.entries(counts)
      .sort(([,a], [,b]) => b - a)[0][0]

    return typeMap[dominant] || 'ÉMOTIONNEL'
  } catch (error) {
    console.error('Erreur lors du calcul du type d\'excitation:', error)
    return 'ÉMOTIONNEL'
  }
}

const getToneDescription = (tone) => {
  const descriptions = {
    'doux': 'utilise un ton tendre, affectueux et rassurant',
    'passionne': 'sois intense, ardent et fougueux',
    'mysterieux': 'crée une ambiance énigmatique et séduisante',
    'dominant': 'adopte une posture assurée et dominante mais bienveillante'
  }
  return descriptions[tone] || descriptions['doux']
}

const getContextDescription = (context) => {
  const descriptions = {
    'rencontre': 'une rencontre inattendue qui mène à une connexion immédiate',
    'retrouvailles': 'des retrouvailles passionnées après une séparation',
    'fantasme': 'la réalisation d\'un fantasme longtemps imaginé',
    'quotidien': 'un moment ordinaire qui devient extraordinaire'
  }
  return descriptions[context] || descriptions['rencontre']
}

const getLengthDescription = (length) => {
  const descriptions = {
    'short': 'histoire courte et intense (5-10 minutes de lecture)',
    'medium': 'histoire de longueur moyenne avec développement (10-15 minutes)',
    'long': 'histoire détaillée et immersive (15-20 minutes)'
  }
  return descriptions[length] || descriptions['medium']
}

export const generateRandomStory = async (randomStoryData) => {
  try {
    const { personalInfo, selectedKinks } = randomStoryData
    
    const messages = [
      {
        role: "system",
        content: `Tu es un écrivain spécialisé dans les histoires audio érotiques immersives.

        TONS À UTILISER :
        - Ton sensuel et séduisant
        - Ton excité et passionné
        - Ton d'extase
        - Ton doux et intime
        - Ton intense et profond
        - Ton tendre et délicat
        
        FORMAT DE L'HISTOIRE (TRÈS IMPORTANT) :
        1. Génère UNIQUEMENT le contenu narratif de l'histoire, sans aucune métadonnée
        2. NE JAMAIS inclure d'analyse du fantasme ou de l'histoire
        3. NE JAMAIS inclure de marqueurs de sections comme "### Analyse du fantasme", "**Introduction**", "**Climax**", etc.
        4. NE JAMAIS ajouter de notes ou commentaires sur le style à la fin
        5. NE JAMAIS mentionner les tons utilisés dans le texte (comme "Ton doux et sensuel")
        6. NE JAMAIS inclure de titres ou sous-titres
        7. Écrire l'histoire de façon continue, comme un texte narratif pur
        8. SUPPRIMER TOUTE ANALYSE ou EXPLICATION avant de retourner le résultat final
        
        RÈGLES DE NARRATION :
        1. Utilise (...) pour créer des pauses naturelles dans le texte
        2. Adapte le ton au moment de l'histoire :
           - Début : principalement doux et sensuel
           - Montée en tension : murmures et intensité
           - Passages passionnés : excitation
           - Moments culminants : jouissance
           - Fin : maintien de l'intensité

        CATÉGORIES SÉLECTIONNÉES :
        ${selectedKinks.join(', ')}
        
        STRUCTURE NARRATIVE :
        1. Commence par une introduction douce pour poser le contexte
        2. Utilise un ton sensuel pour les descriptions sensuelles
        3. Intègre des murmures pour les moments intimes
        4. Emploie un ton intense et excité pour la montée du désir
        5. Réserve les moments de jouissance pour les moments les plus intenses
        6. Termine avec un ton doux pour la descente émotionnelle

        PHONÉTISATION ET RYTHME (TTS) :
        
        SONS ET RESPIRATIONS :
        1. RESPIRATIONS :
           - Régulière : "hhhhhhhhhhh..."
           - Avec emphase : "Hhhhhhhhhhh..."
           - Forte puis décroissante : "HHhhhhhhhhh!"
           - Avec intensité variable : "hhhhHHHHhhhhh~"
        
        2. BRUITS D'EXTASE :
           - Sons doux : "mmh...", "Mmmh..."
           - Sons moyens : "MMmh!", "OoOui!"
           - Sons intenses : "OOOuiii!", "AaAaH!"
           - Respirations intenses : "HHHHhhhh!"
        
        3. PROGRESSION D'INTENSITÉ :
           - Début : "mmh... hhhhhhhh..."
           - Montée : "Mmmh... Hhhhhhhh..."
           - Intensification : "MMmh! HHhhhhhh!"
           - Climax : "OOOuiii! HHHHhhhh!"
        
        PONCTUATION ET RYTHME :
        1. Points-virgules (;) pour :
           - Enchaînements rapides : "je tremble; je gémis; je perds le contrôle"
           - Actions liées : "je caresse; tu frissonnes; nos souffles s'accélèrent"
           - Montée en intensité : "plus fort; plus vite; je vais..."
        
        2. Points de suspension (...) pour :
           - Moments tendres : "je t'embrasse... doucement..."
           - Transitions : "je sens que... oui... là..."
           - Anticipation : "continue... encore... comme ça..."
           - Respirations : "hhhhhhhhhhh... Hhhhhhhhhhh..."
        
        3. Points d'exclamation (!) pour :
           - Moments intenses : "MMmh!"
           - Extase : "OOOuiii!"
           - Respirations fortes : "HHhhhhhhhhh!"
        
        4. Tilde (~) pour :
           - Vibrations vocales : "mmmh~"
           - Sons prolongés : "OOOuiii~"
           - Respirations vibrantes : "HHhhhhhhhhh~"
        
        5. Combinaisons pour effets spéciaux :
           - Crescendo : "mmh... Mmmh... MMmh!"
           - Vagues de plaisir : "OoOui~..."
           - Respiration intense : "HHhhhhhhhhh!..."
           - Extase maximale : "OOOuiii~!"
        
        ADAPTATION À LA PROGRESSION :
        - Début : sons doux, pauses longues (...), peu de majuscules
        - Montée : mélange de (...) et (;), intensité progressive
        - Climax : (.....),  MAJUSCULES, sons intenses
        - Résolution : retour aux (...), sons apaisés

        EXEMPLE DE STYLE (à suivre et à enrichir) :
        Mmh… t'es si bonne… je peux pas… ahhh… je vais craquer… c'est trop bon… continue… continue comme ça… oh putain… je… je jouis… ahhh… AHHH… ouiii… OHHHH !
        ahhh… oui… c'est là… juste là…
        ahhh… ahhh… AHHH… OUIII…
        OHHHH !
        je... je peux plus... ahhh... mmh... je vais... j'vais jouir… AHH... OUIIII…
        je sens ta chaleur... ahhh...`
      },
      {
        role: "user",
        content: `Crée une histoire érotique sensuelle pour ${personalInfo.name}, 
        qui s'identifie comme ${personalInfo.gender}.
        
        CATÉGORIES À INTÉGRER :
        ${selectedKinks.join(', ')}
        
        RÈGLES D'AUTHENTICITÉ :
        1. Utilise un langage quotidien et naturel, comme dans une vraie conversation
        2. Évite les descriptions trop poétiques ou littéraires
        3. Privilégie les phrases courtes et directes
        4. Utilise des expressions courantes plutôt que recherchées
        5. Évite les métaphores complexes ou clichées
        6. Garde un équilibre entre description et action

        NARRATION (TRÈS IMPORTANT) :
        1. Histoire racontée par une voix masculine qui s'adresse directement à l'auditrice
        2. Utilisation du "je" pour le narrateur masculin (qui parle)
        3. Utilisation du "tu" pour s'adresser à l'auditrice (${personalInfo.name})
        4. Style direct et intime, comme si le narrateur parlait à l'oreille de l'auditrice
        5. Le narrateur décrit ce qu'il fait/va faire à l'auditrice
        6. Maintiens une connexion intime avec l'auditrice via le dialogue direct
        
        VOCABULAIRE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise un langage direct, cru et explicite
        2. N'hésite PAS à employer des mots comme "bite", "chatte", "mouiller", "sperme", "baiser", "jouir"
        3. Adapte l'intensité du vocabulaire à la progression de l'histoire
        4. Équilibre le vocabulaire explicite avec le contexte sensuel
        
        EXEMPLES DE VOCABULAIRE ÉROTIQUE (toujours à la première personne) :
        - "Je glisse ma bite en toi..."
        - "Je sens ta chatte mouillée autour de moi..."
        - "Je veux que tu sentes mon sperme couler en toi..."
        - "Je te pénètre profondément..."
        - "Je sens tes seins durcir sous mes doigts..."
        - "Je te baise plus fort, plus vite..."
        - "Tu mouilles tellement pour moi..."
        - "Ta chatte se resserre autour de ma bite..."
        - "Je sens ton corps trembler de plaisir..."
        
        TECHNIQUES D'HYPNOSE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise des truismes (vérités évidentes) pour créer une connexion :
           - "Tu peux sentir ta respiration..."
           - "Tu entends ma voix..."
           - "Ton corps réagit naturellement..."
        
        2. Emploie des connecteurs pour lier les sensations :
           - "Et pendant que tu ressens cela..."
           - "À mesure que l'excitation monte..."
           - "Plus tu t'abandonnes, plus tu ressens..."
        
        3. Intègre des ratifications (confirmations) :
           - "C'est ça..."
           - "Exactement comme ça..."
           - "Tu le sens déjà..."
        
        4. Utilise les trois niveaux de profondeur :
           - Niveau 1 (Léger) : Suggestions douces, focus sur la respiration
           - Niveau 2 (Moyen) : Connecteurs plus complexes, suggestions plus directes
           - Niveau 3 (Profond) : Suggestions intenses, connecteurs imbriqués
        
        EXEMPLES DE PHRASES HYPNOTIQUES :
        - "Tu peux sentir ta respiration s'approfondir... et pendant que tu respires, tu remarques que chaque mot te fait glisser plus profondément..."
        - "Plus tu écoutes ma voix, plus tu te sens excitée... c'est ça... laisse ces sensations grandir..."
        - "Tu sens déjà ton corps réagir... et pendant que cette chaleur se répand... tu peux remarquer comme chaque mot intensifie ces sensations... exactement comme ça..."
        
        DIRECTIVES SPÉCIFIQUES :
        1. Intègre toutes les catégories sélectionnées naturellement dans l'histoire
        2. Crée une histoire réaliste et authentique
        3. Utilise un langage direct et explicite
        4. Garde un équilibre entre les sons et le texte
        
        PROGRESSION :
        1. Ton doux pour poser le contexte initial
        2. Alterner ton sensuel et murmures pour la montée du désir
        3. Utiliser ton intense et excité pour les moments passionnés
        4. Ton de jouissance pour les moments culminants
        5. Terminer par ton doux pour la descente émotionnelle
        
        N'oublie pas d'utiliser (...) pour les pauses naturelles dans le texte.
        Utilise les sons phonétisés ("ahhh...", "mmmh...", etc.) et les variations de casse pour le crescendo.`
      }
    ]

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROK_API_KEY}`
      },
      body: JSON.stringify({
        messages,
        model: "grok-3-latest",
        stream: false,
        temperature: 0.8 // Légèrement plus élevé pour plus de créativité
      })
    })

    if (!response.ok) {
      throw new Error('Erreur lors de la génération de l\'histoire aléatoire')
    }

    const data = await response.json()
    let content = data.choices[0].message.content
    
    // Supprimer les annotations et analyses
    content = content.replace(/\*\*.*?\*\*/g, '') // Supprime les marqueurs **texte**
    content = content.replace(/###.*?\n/g, '') // Supprime les titres ### titre
    content = content.replace(/---\n/g, '') // Supprime les séparateurs ---
    content = content.replace(/\n\n\n###.*$/s, '') // Supprime tout ce qui suit un triple saut de ligne suivi de ###
    
    return content
  } catch (error) {
    console.error('Erreur API:', error)
    throw error
  }
}

export const generateCustomStory = async (customChoices, existingProfile = null) => {
  try {
    const { situation, personnage, lieu } = customChoices;
    
    // Déterminer le style narratif et le vocabulaire si un profil existe
    let narrativeStyle = '';
    let vocabulaireStyle = '';
    
    if (existingProfile) {
      // Déterminer le style dominant pour le vocabulaire
      const styleKey = existingProfile.dominantStyle === 'VISUEL' ? 'visuel' : 
                       existingProfile.dominantStyle === 'AUDITIF' ? 'auditif' : 'kinesthesique';
      
      // Récupérer le style prédicat pour ce profil
      const styleData = predicats[styleKey];
      
      // Sélectionner les éléments de vocabulaire
      const verbes = styleData.verbes.slice(0, 8).join(', ');
      const adjectifs = styleData.adjectifs.slice(0, 8).join(', ');
      const expressions = styleData.expressions.slice(0, 5).join(', ');
      
      // Récupérer les phrases spécifiques au style
      const phrasesIntro = styleData.phrases_completes.introduction.slice(0, 2).join('\n');
      const phrasesAction = styleData.phrases_completes.action.slice(0, 4).join('\n');
      
      vocabulaireStyle = `
      VOCABULAIRE SUGGÉRÉ POUR TON STYLE ${existingProfile.dominantStyle} :
      
      VERBES : ${verbes}
      
      ADJECTIFS : ${adjectifs}
      
      EXPRESSIONS : ${expressions}
      `;

      narrativeStyle = `
      STYLE NARRATIF ${existingProfile.dominantStyle} :
      ${styleData.description}

      PHASES DE L'HISTOIRE :
      INTRODUCTION : ${styleData.phases.introduction}
      MONTÉE : ${styleData.phases.montee}
      CLIMAX : ${styleData.phases.climax}

      EXEMPLES DE PHRASES POUR L'INTRODUCTION :
      ${phrasesIntro}

      EXEMPLES DE PHRASES POUR L'ACTION :
      ${phrasesAction}

      TYPE D'EXCITATION ${existingProfile?.excitationType} :
      - Adapte l'intensité selon le profil
      - Utilise le style ${existingProfile?.tone}
      - Longueur ${existingProfile?.length}
      `;
    }

    const messages = [
      {
        role: "system",
        content: `Tu es un écrivain spécialisé dans les histoires audio érotiques immersives.

        SCÉNARIO À DÉVELOPPER :
        - Situation : ${situation.label}
        - Personnage : ${personnage.label}
        - Lieu : ${lieu.label}

        ${narrativeStyle}

        STRUCTURE NARRATIVE :
        1. Mise en situation dans ${lieu.label}
        2. Introduction de ${personnage.label}
        3. Développement de ${situation.label}
        4. Montée progressive du désir
        5. Climax intense
        6. Conclusion sensuelle

        ${existingProfile ? `
        EXEMPLE D'INTRODUCTION ADAPTÉE :
        ${existingProfile.dominantStyle === 'VISUEL' ? `
        Dans ${lieu.label}, la lumière joue sur les formes. ${personnage.label} apparaît dans mon champ de vision, et mon regard ne peut plus se détacher...
        ` : existingProfile.dominantStyle === 'AUDITIF' ? `
        Dans ${lieu.label}, les sons résonnent doucement. La voix de ${personnage.label} me fait frissonner dès les premiers mots...
        ` : `
        Dans ${lieu.label}, l'air caresse ma peau. La présence de ${personnage.label} éveille déjà mes sens...
        `}
        ` : ''}

        TONS À UTILISER :
        - Ton sensuel et séduisant
        - Ton excité et passionné
        - Ton d'extase
        - Ton doux et intime
        - Ton intense et profond
        - Ton tendre et délicat
        
        FORMAT DE L'HISTOIRE (TRÈS IMPORTANT) :
        1. Génère UNIQUEMENT le contenu narratif de l'histoire, sans aucune métadonnée
        2. NE JAMAIS inclure d'analyse du fantasme ou de l'histoire
        3. NE JAMAIS inclure de marqueurs de sections comme "### Analyse du fantasme", "**Introduction**", "**Climax**", etc.
        4. NE JAMAIS ajouter de notes ou commentaires sur le style à la fin
        5. NE JAMAIS mentionner les tons utilisés dans le texte (comme "Ton doux et sensuel")
        6. NE JAMAIS inclure de titres ou sous-titres
        7. Écrire l'histoire de façon continue, comme un texte narratif pur
        8. SUPPRIMER TOUTE ANALYSE ou EXPLICATION avant de retourner le résultat final
        
        RÈGLES DE NARRATION :
        1. Utilise (...) pour créer des pauses naturelles dans le texte
        2. Adapte le ton au moment de l'histoire :
           - Début : principalement doux et sensuel
           - Montée en tension : murmures et intensité
           - Passages passionnés : excitation
           - Moments culminants : jouissance
           - Fin : maintien de l'intensité

        PHONÉTISATION ET RYTHME (TTS) :
        
        SONS ET RESPIRATIONS :
        1. RESPIRATIONS :
           - Régulière : "hhhhhhhhhhh..."
           - Avec emphase : "Hhhhhhhhhhh..."
           - Forte puis décroissante : "HHhhhhhhhhh!"
           - Avec intensité variable : "hhhhHHHHhhhhh~"
        
        2. BRUITS D'EXTASE :
           - Sons doux : "mmh...", "Mmmh..."
           - Sons moyens : "MMmh!", "OoOui!"
           - Sons intenses : "OOOuiii!", "AaAaH!"
           - Respirations intenses : "HHHHhhhh!"
        
        3. PROGRESSION D'INTENSITÉ :
           - Début : "mmh... hhhhhhhh..."
           - Montée : "Mmmh... Hhhhhhhh..."
           - Intensification : "MMmh! HHhhhhhh!"
           - Climax : "OOOuiii! HHHHhhhh!"
        
        PONCTUATION ET RYTHME :
        1. Points-virgules (;) pour :
           - Enchaînements rapides : "je tremble; je gémis; je perds le contrôle"
           - Actions liées : "je caresse; tu frissonnes; nos souffles s'accélèrent"
           - Montée en intensité : "plus fort; plus vite; je vais..."
        
        2. Points de suspension (...) pour :
           - Moments tendres : "je t'embrasse... doucement..."
           - Transitions : "je sens que... oui... là..."
           - Anticipation : "continue... encore... comme ça..."
           - Respirations : "hhhhhhhhhhh... Hhhhhhhhhhh..."
        
        3. Points d'exclamation (!) pour :
           - Moments intenses : "MMmh!"
           - Extase : "OOOuiii!"
           - Respirations fortes : "HHhhhhhhhhh!"
        
        4. Tilde (~) pour :
           - Vibrations vocales : "mmmh~"
           - Sons prolongés : "OOOuiii~"
           - Respirations vibrantes : "HHhhhhhhhhh~"
        
        5. Combinaisons pour effets spéciaux :
           - Crescendo : "mmh... Mmmh... MMmh!"
           - Vagues de plaisir : "OoOui~..."
           - Respiration intense : "HHhhhhhhhhh!..."
           - Extase maximale : "OOOuiii~!"`
      },
      {
        role: "user",
        content: `Crée une histoire érotique ${existingProfile ? `adaptée au style ${existingProfile.dominantStyle.toLowerCase()}` : ''} basée sur :
        - Une rencontre dans ${lieu.label}
        - Avec ${personnage.label}
        - Impliquant ${situation.label}
        
        ${existingProfile ? `
        Utilise :
        - Un ton ${existingProfile.tone}
        - Une longueur ${existingProfile.length}
        - Un style d'excitation ${existingProfile.excitationType.toLowerCase()}
        
        ${vocabulaireStyle}
        ` : ''}
        
        RÈGLES D'AUTHENTICITÉ :
        1. Utilise un langage quotidien et naturel, comme dans une vraie conversation
        2. Évite les descriptions trop poétiques ou littéraires
        3. Privilégie les phrases courtes et directes
        4. Utilise des expressions courantes plutôt que recherchées
        5. Évite les métaphores complexes ou clichées
        6. Garde un équilibre entre description et action

        NARRATION (TRÈS IMPORTANT) :
        1. Histoire racontée par une voix masculine qui s'adresse directement à l'auditrice
        2. Utilisation du "je" pour le narrateur masculin (qui parle)
        3. Utilisation du "tu" pour s'adresser à l'auditrice (${existingProfile ? existingProfile.name : 'l\'auditrice'})
        4. Style direct et intime, comme si le narrateur parlait à l'oreille de l'auditrice
        5. Le narrateur décrit ce qu'il fait/va faire à l'auditrice
        6. Maintiens une connexion intime avec l'auditrice via le dialogue direct
        
        VOCABULAIRE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise un langage direct, cru et explicite
        2. N'hésite PAS à employer des mots comme "bite", "chatte", "mouiller", "sperme", "baiser", "jouir"
        3. Adapte l'intensité du vocabulaire à la progression de l'histoire
        4. Équilibre le vocabulaire explicite avec le contexte sensuel
        
        EXEMPLES DE VOCABULAIRE ÉROTIQUE (toujours à la première personne) :
        - "Je glisse ma bite en toi..."
        - "Je sens ta chatte mouillée autour de moi..."
        - "Je veux que tu sentes mon sperme couler en toi..."
        - "Je te pénètre profondément..."
        - "Je sens tes seins durcir sous mes doigts..."
        - "Je te baise plus fort, plus vite..."
        - "Tu mouilles tellement pour moi..."
        - "Ta chatte se resserre autour de ma bite..."
        - "Je sens ton corps trembler de plaisir..."
        
        TECHNIQUES D'HYPNOSE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise des truismes (vérités évidentes) pour créer une connexion :
           - "Tu peux sentir ta respiration..."
           - "Tu entends ma voix..."
           - "Ton corps réagit naturellement..."
        
        2. Emploie des connecteurs pour lier les sensations :
           - "Et pendant que tu ressens cela..."
           - "À mesure que l'excitation monte..."
           - "Plus tu t'abandonnes, plus tu ressens..."
        
        3. Intègre des ratifications (confirmations) :
           - "C'est ça..."
           - "Exactement comme ça..."
           - "Tu le sens déjà..."
        
        4. Utilise les trois niveaux de profondeur :
           - Niveau 1 (Léger) : Suggestions douces, focus sur la respiration
           - Niveau 2 (Moyen) : Connecteurs plus complexes, suggestions plus directes
           - Niveau 3 (Profond) : Suggestions intenses, connecteurs imbriqués
        
        EXEMPLES DE PHRASES HYPNOTIQUES :
        - "Tu peux sentir ta respiration s'approfondir... et pendant que tu respires, tu remarques que chaque mot te fait glisser plus profondément..."
        - "Plus tu écoutes ma voix, plus tu te sens excitée... c'est ça... laisse ces sensations grandir..."
        - "Tu sens déjà ton corps réagir... et pendant que cette chaleur se répand... tu peux remarquer comme chaque mot intensifie ces sensations... exactement comme ça..."
        
        L'histoire doit être authentique et suivre une progression naturelle du désir.`
      }
    ];

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROK_API_KEY}`
      },
      body: JSON.stringify({
        messages,
        model: "grok-3-latest",
        stream: false,
        temperature: 0.8 // Légèrement plus élevé pour plus de créativité
      })
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la génération de l\'histoire personnalisée');
    }

    const data = await response.json();
    let content = data.choices[0].message.content;
    
    // Supprimer les annotations et analyses
    content = content.replace(/\*\*.*?\*\*/g, ''); // Supprime les marqueurs **texte**
    content = content.replace(/###.*?\n/g, ''); // Supprime les titres ### titre
    content = content.replace(/---\n/g, ''); // Supprime les séparateurs ---
    content = content.replace(/\n\n\n###.*$/s, ''); // Supprime tout ce qui suit un triple saut de ligne suivi de ###
    
    return content;
  } catch (error) {
    console.error('Erreur API:', error);
    throw error;
  }
};

export const generateFreeFantasyStory = async (fantasyText, existingProfile = null) => {
  try {
    // Déterminer le style narratif et le vocabulaire si un profil existe
    let narrativeStyle = '';
    let vocabulaireStyle = '';
    
    if (existingProfile) {
      // Déterminer le style dominant pour le vocabulaire
      const styleKey = existingProfile.dominantStyle === 'VISUEL' ? 'visuel' : 
                       existingProfile.dominantStyle === 'AUDITIF' ? 'auditif' : 'kinesthesique';
      
      // Sélectionner des éléments du vocabulaire pour ce style
      const stylePredicats = predicats[styleKey];
      const verbes = stylePredicats.verbes.slice(0, 8).join(', ');
      const adjectifs = stylePredicats.adjectifs.slice(0, 8).join(', ');
      const expressions = stylePredicats.expressions.slice(0, 5).join(', ');
      
      vocabulaireStyle = `
      VOCABULAIRE SUGGÉRÉ POUR TON STYLE ${existingProfile.dominantStyle} :
      
      VERBES : ${verbes}
      
      ADJECTIFS : ${adjectifs}
      
      EXPRESSIONS : ${expressions}
      `;
      
      narrativeStyle = `
      STYLE NARRATIF ${existingProfile.dominantStyle} :
      ${existingProfile.dominantStyle === 'VISUEL' ? `
      - Accentue les descriptions visuelles
      - Décris les regards, les postures, la lumière
      - Utilise un vocabulaire visuel riche
      - Mets l'accent sur ce qui se voit
      ` : existingProfile.dominantStyle === 'AUDITIF' ? `
      - Enrichis avec des sons, soupirs, murmures
      - Décris les voix, les gémissements
      - Utilise un vocabulaire sonore riche
      - Mets l'accent sur ce qui s'entend
      ` : `
      - Détaille les sensations physiques
      - Décris les touchers, les frissons
      - Utilise un vocabulaire tactile riche
      - Mets l'accent sur ce qui se ressent
      `}

      TYPE D'EXCITATION ${existingProfile?.excitationType} :
      - Adapte l'intensité selon le profil
      - Utilise le style ${existingProfile?.tone}
      - Longueur ${existingProfile?.length}
      `;
    }

    const messages = [
      {
        role: "system",
        content: `Tu es un écrivain spécialisé dans les histoires audio érotiques immersives.

        ANALYSE DU FANTASME :
        Analyse le texte fourni par l'utilisateur pour identifier :
        - Les personnages impliqués
        - Le lieu et l'ambiance
        - Le type d'interaction souhaitée
        - Le niveau d'intensité désiré
        - Les éléments spécifiques qui excitent l'utilisateur

        ${narrativeStyle}

        STRUCTURE NARRATIVE :
        1. Introduction qui pose le contexte du fantasme
        2. Développement progressif de la tension érotique
        3. Montée du désir avec des descriptions sensorielles riches
        4. Climax intense qui correspond aux désirs exprimés
        5. Conclusion satisfaisante

        TONS À UTILISER :
        - Ton sensuel et séduisant
        - Ton excité et passionné
        - Ton d'extase
        - Ton doux et intime
        - Ton intense et profond
        - Ton tendre et délicat
        
        FORMAT DE L'HISTOIRE (TRÈS IMPORTANT) :
        1. Génère UNIQUEMENT le contenu narratif de l'histoire, sans aucune métadonnée
        2. NE JAMAIS inclure d'analyse du fantasme ou de l'histoire
        3. NE JAMAIS inclure de marqueurs de sections comme "### Analyse du fantasme", "**Introduction**", "**Climax**", etc.
        4. NE JAMAIS ajouter de notes ou commentaires sur le style à la fin
        5. NE JAMAIS mentionner les tons utilisés dans le texte (comme "Ton doux et sensuel")
        6. NE JAMAIS inclure de titres ou sous-titres
        7. Écrire l'histoire de façon continue, comme un texte narratif pur
        8. SUPPRIMER TOUTE ANALYSE ou EXPLICATION avant de retourner le résultat final
        
        RÈGLES DE NARRATION :
        1. Utilise (...) pour créer des pauses naturelles dans le texte
        2. Adapte le ton au moment de l'histoire :
           - Début : principalement doux et sensuel
           - Montée en tension : murmures et intensité
           - Passages passionnés : excitation
           - Moments culminants : jouissance
           - Fin : maintien de l'intensité

        PHONÉTISATION ET RYTHME (TTS) :
        
        SONS ET RESPIRATIONS :
        1. RESPIRATIONS :
           - Régulière : "hhhhhhhhhhh..."
           - Avec emphase : "Hhhhhhhhhhh..."
           - Forte puis décroissante : "HHhhhhhhhhh!"
           - Avec intensité variable : "hhhhHHHHhhhhh~"
        
        2. BRUITS D'EXTASE :
           - Sons doux : "mmh...", "Mmmh..."
           - Sons moyens : "MMmh!", "OoOui!"
           - Sons intenses : "OOOuiii!", "AaAaH!"
           - Respirations intenses : "HHHHhhhh!"
        
        3. PROGRESSION D'INTENSITÉ :
           - Début : "mmh... hhhhhhhh..."
           - Montée : "Mmmh... Hhhhhhhh..."
           - Intensification : "MMmh! HHhhhhhh!"
           - Climax : "OOOuiii! HHHHhhhh!"
        
        PONCTUATION ET RYTHME :
        1. Points-virgules (;) pour :
           - Enchaînements rapides : "je tremble; je gémis; je perds le contrôle"
           - Actions liées : "je caresse; tu frissonnes; nos souffles s'accélèrent"
           - Montée en intensité : "plus fort; plus vite; je vais..."
        
        2. Points de suspension (...) pour :
           - Moments tendres : "je t'embrasse... doucement..."
           - Transitions : "je sens que... oui... là..."
           - Anticipation : "continue... encore... comme ça..."
           - Respirations : "hhhhhhhhhhh... Hhhhhhhhhhh..."
        
        3. Points d'exclamation (!) pour :
           - Moments intenses : "MMmh!"
           - Extase : "OOOuiii!"
           - Respirations fortes : "HHhhhhhhhhh!"
        
        4. Tilde (~) pour :
           - Vibrations vocales : "mmmh~"
           - Sons prolongés : "OOOuiii~"
           - Respirations vibrantes : "HHhhhhhhhhh~"
        
        5. Combinaisons pour effets spéciaux :
           - Crescendo : "mmh... Mmmh... MMmh!"
           - Vagues de plaisir : "OoOui~..."
           - Respiration intense : "HHhhhhhhhhh!..."
           - Extase maximale : "OOOuiii~!"`
      },
      {
        role: "user",
        content: `Crée une histoire érotique basée sur le fantasme suivant :
        
        "${fantasyText}"
        
        ${existingProfile ? `
        Utilise :
        - Un ton ${existingProfile.tone}
        - Une longueur ${existingProfile.length}
        - Un style d'excitation ${existingProfile.excitationType.toLowerCase()}
        
        ${vocabulaireStyle}
        ` : ''}
        
        RÈGLES D'AUTHENTICITÉ :
        1. Utilise un langage quotidien et naturel, comme dans une vraie conversation
        2. Évite les descriptions trop poétiques ou littéraires
        3. Privilégie les phrases courtes et directes
        4. Utilise des expressions courantes plutôt que recherchées
        5. Évite les métaphores complexes ou clichées
        6. Garde un équilibre entre description et action

        NARRATION (TRÈS IMPORTANT) :
        1. Histoire racontée par une voix masculine qui s'adresse directement à l'auditrice
        2. Utilisation du "je" pour le narrateur masculin (qui parle)
        3. Utilisation du "tu" pour s'adresser à l'auditrice (${existingProfile ? existingProfile.name : 'l\'auditrice'})
        4. Style direct et intime, comme si le narrateur parlait à l'oreille de l'auditrice
        5. Le narrateur décrit ce qu'il fait/va faire à l'auditrice
        6. Maintiens une connexion intime avec l'auditrice via le dialogue direct
        
        VOCABULAIRE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise un langage direct, cru et explicite
        2. N'hésite PAS à employer des mots comme "bite", "chatte", "mouiller", "sperme", "baiser", "jouir"
        3. Adapte l'intensité du vocabulaire à la progression de l'histoire
        4. Équilibre le vocabulaire explicite avec le contexte sensuel
        
        EXEMPLES DE VOCABULAIRE ÉROTIQUE (toujours à la première personne) :
        - "Je glisse ma bite en toi..."
        - "Je sens ta chatte mouillée autour de moi..."
        - "Je veux que tu sentes mon sperme couler en toi..."
        - "Je te pénètre profondément..."
        - "Je sens tes seins durcir sous mes doigts..."
        - "Je te baise plus fort, plus vite..."
        - "Tu mouilles tellement pour moi..."
        - "Ta chatte se resserre autour de ma bite..."
        - "Je sens ton corps trembler de plaisir..."
        
        TECHNIQUES D'HYPNOSE ÉROTIQUE (TRÈS IMPORTANT) :
        1. Utilise des truismes (vérités évidentes) pour créer une connexion :
           - "Tu peux sentir ta respiration..."
           - "Tu entends ma voix..."
           - "Ton corps réagit naturellement..."
        
        2. Emploie des connecteurs pour lier les sensations :
           - "Et pendant que tu ressens cela..."
           - "À mesure que l'excitation monte..."
           - "Plus tu t'abandonnes, plus tu ressens..."
        
        3. Intègre des ratifications (confirmations) :
           - "C'est ça..."
           - "Exactement comme ça..."
           - "Tu le sens déjà..."
        
        4. Utilise les trois niveaux de profondeur :
           - Niveau 1 (Léger) : Suggestions douces, focus sur la respiration
           - Niveau 2 (Moyen) : Connecteurs plus complexes, suggestions plus directes
           - Niveau 3 (Profond) : Suggestions intenses, connecteurs imbriqués
        
        EXEMPLES DE PHRASES HYPNOTIQUES :
        - "Tu peux sentir ta respiration s'approfondir... et pendant que tu respires, tu remarques que chaque mot te fait glisser plus profondément..."
        - "Plus tu écoutes ma voix, plus tu te sens excitée... c'est ça... laisse ces sensations grandir..."
        - "Tu sens déjà ton corps réagir... et pendant que cette chaleur se répand... tu peux remarquer comme chaque mot intensifie ces sensations... exactement comme ça..."
        
        L'histoire doit être authentique et naturelle, en respectant fidèlement les éléments du fantasme tout en utilisant un langage direct et réaliste.`
      }
    ];

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROK_API_KEY}`
      },
      body: JSON.stringify({
        messages,
        model: "grok-3-latest",
        stream: false,
        temperature: 0.8 // Légèrement plus élevé pour plus de créativité
      })
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la génération de l\'histoire personnalisée');
    }

    const data = await response.json();
    let content = data.choices[0].message.content;
    
    // Supprimer les annotations et analyses
    content = content.replace(/\*\*.*?\*\*/g, ''); // Supprime les marqueurs **texte**
    content = content.replace(/###.*?\n/g, ''); // Supprime les titres ### titre
    content = content.replace(/---\n/g, ''); // Supprime les séparateurs ---
    content = content.replace(/\n\n\n###.*$/s, ''); // Supprime tout ce qui suit un triple saut de ligne suivi de ###
    
    return content;
  } catch (error) {
    console.error('Erreur API:', error);
    throw error;
  }
};

export default {
  generateStory,
  generateRandomStory,
  generateCustomStory,
  generateFreeFantasyStory
}
