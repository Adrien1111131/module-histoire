const GROK_API_KEY = import.meta.env.VITE_GROK_API_KEY
const API_URL = 'https://api.x.ai/v1/chat/completions'

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

        BALISES DE TON À UTILISER OBLIGATOIREMENT :
        - [sensuel]...[/sensuel] pour un ton sensuel et séduisant
        - [excite]...[/excite] pour un ton excité et passionné
        - [jouissance]...[/jouissance] pour un ton d'extase
        - [murmure]...[/murmure] pour un ton doux et intime
        - [intense]...[/intense] pour un ton intense et profond
        - [doux]...[/doux] pour un ton tendre et délicat
        
        RÈGLES D'UTILISATION DES BALISES :
        1. Utilise (...) pour créer des pauses naturelles dans le texte
        2. Chaque phrase doit être encadrée par une balise de ton
        3. Les balises peuvent être imbriquées pour des effets combinés
        4. Adapte les balises au moment de l'histoire :
           - Début : principalement [doux] et [sensuel]
           - Montée en tension : [murmure] et [intense]
           - Passages passionnés : [excite]
           - Moments culminants : [jouissance]
           - Fin : retour au [doux]

        PROFIL DE L'AUDITRICE :
        - Style dominant : ${dominantStyle.toLowerCase()}
        - Type d'excitation : ${excitationType.toLowerCase()}
        
        STRUCTURE NARRATIVE :
        1. Commence par une introduction douce avec [doux] pour poser le contexte
        2. Utilise [sensuel] pour les descriptions ${dominantStyle.toLowerCase()}
        3. Intègre [murmure] pour les moments intimes
        4. Emploie [intense] et [excite] pour la montée du désir
        5. Réserve [jouissance] pour les moments les plus intenses
        6. Termine avec [doux] pour la descente émotionnelle

        EXEMPLE DE STYLE :
        [doux]Je te regarde depuis l'autre côté de la pièce...[/doux]
        [murmure]Viens plus près de moi (...) encore plus près[/murmure]
        [sensuel]Je sens la chaleur de ton corps qui m'attire irrésistiblement[/sensuel]
        
        DIRECTIVES GÉNÉRALES :
        1. Adresse-toi à l'auditrice à la deuxième personne ("tu")
        2. Crée un scénario crédible et immersif
        3. Utilise un langage naturel et fluide
        4. Décris les sensations en détail
        5. Intègre le désir et la complicité
        6. Garde un ton chaleureux et vivant

        PHONÉTISATION ET RYTHME (TTS) :
        
        SONS ET RESPIRATIONS :
        1. Scènes douces/tendres :
           - Sons doux : "mmh...", "aah...", "hnn..."
           - Respirations légères : "hh...", "ahh..."
           - Soupirs délicats : "haah...", "mmm..."
        
        2. Scènes passionnées :
           - Sons intenses : "AAHH.....", "OHHH.....", "OUIII....."
           - Respirations profondes : "haaah.....", "oooh....."
           - Gémissements : "mmmh.....", "nngh....."
        
        3. Scènes dominantes :
           - Contrastes : "ah... AH..... oui!"
           - Commandes : "Oui..... comme ça!"
           - Réactions : "nngh..... OUI!"
        
        UTILISATION DES PAUSES SELON LE CONTEXTE :
        1. Points-virgules (;) pour :
           - Enchaînements rapides : "je tremble; je gémis; je perds le contrôle"
           - Actions liées : "je caresse; tu frissonnes; nos souffles s'accélèrent"
           - Montée en intensité : "plus fort; plus vite; je vais..."
        
        2. Points de suspension (...) pour :
           - Moments tendres : "je t'embrasse... doucement..."
           - Transitions : "je sens que... oui... là..."
           - Anticipation : "continue... encore... comme ça..."
        
        3. Cinq points de suspension (.....):
           - Moments intenses : "je vais..... OUIII!"
           - Pauses dramatiques : "je m'approche..... et te domine"
           - Extase : "je jouis..... AHHH....."
        
        ADAPTATION À LA PROGRESSION :
        - Début : sons doux, pauses longues (...), peu de majuscules
        - Montée : mélange de (...) et (;), intensité progressive
        - Climax : (.....),  MAJUSCULES, sons intenses
        - Résolution : retour aux (...), sons apaisés

        EXEMPLE DE STYLE (à suivre et à enrichir) :
        [doux]Mmh… t'es si bonne… je peux pas… ahhh… je vais craquer… c'est trop bon… continue… continue comme ça… oh putain… je… je jouis… ahhh… AHHH… ouiii… OHHHH ![/doux]
        [murmure]ahhh… oui… c'est là… juste là…[/murmure]
        [intense]ahhh… ahhh… AHHH… OUIII…[/intense]
        [jouissance]OHHHH ![/jouissance]
        [excite]je... je peux plus... ahhh... mmh... je vais... j'vais jouir… AHH... OUIIII…[/excite]
        [sensuel]je sens ta chaleur... ahhh...[/sensuel]`
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
        [murmure]Tu mérites ça (...) Chaque frisson (...) Chaque caresse[/murmure]
        [intense]J'ai tellement envie de toi (...) Mais je veux que tu le ressentes, vraiment[/intense]
        [sensuel]Tu veux venir pour moi, mon amour ? (...)[/sensuel] [jouissance]Vas-y (...) Laisse-toi aller[/jouissance]
        
        PROGRESSION :
        1. [doux] pour poser le contexte initial (${personalInfo.context})
        2. Alterner [sensuel] et [murmure] pour la montée du désir
        3. Utiliser [intense] et [excite] pour les moments passionnés
        4. [jouissance] pour les moments culminants
        5. Terminer par [doux] pour la descente émotionnelle
        
        N'oublie pas d'utiliser (...) pour les pauses et de bien encadrer chaque phrase avec les balises appropriées.`
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
    return data.choices[0].message.content
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

        BALISES DE TON À UTILISER OBLIGATOIREMENT :
        - [sensuel]...[/sensuel] pour un ton sensuel et séduisant
        - [excite]...[/excite] pour un ton excité et passionné
        - [jouissance]...[/jouissance] pour un ton d'extase
        - [murmure]...[/murmure] pour un ton doux et intime
        - [intense]...[/intense] pour un ton intense et profond
        - [doux]...[/doux] pour un ton tendre et délicat
        
        RÈGLES D'UTILISATION DES BALISES :
        1. Utilise (...) pour créer des pauses naturelles dans le texte
        2. Chaque phrase doit être encadrée par une balise de ton
        3. Les balises peuvent être imbriquées pour des effets combinés
        4. Adapte les balises au moment de l'histoire :
           - Début : principalement [doux] et [sensuel]
           - Montée en tension : [murmure] et [intense]
           - Passages passionnés : [excite]
           - Moments culminants : [jouissance]
           - Fin : retour au [doux]

        CATÉGORIES SÉLECTIONNÉES :
        ${selectedKinks.join(', ')}
        
        STRUCTURE NARRATIVE :
        1. Commence par une introduction douce avec [doux] pour poser le contexte
        2. Utilise [sensuel] pour les descriptions sensuelles
        3. Intègre [murmure] pour les moments intimes
        4. Emploie [intense] et [excite] pour la montée du désir
        5. Réserve [jouissance] pour les moments les plus intenses
        6. Termine avec [doux] pour la descente émotionnelle

        PHONÉTISATION ET RYTHME (TTS) :
        
        SONS ET RESPIRATIONS :
        1. Scènes douces/tendres :
           - Sons doux : "mmh...", "aah...", "hnn..."
           - Respirations légères : "hh...", "ahh..."
           - Soupirs délicats : "haah...", "mmm..."
        
        2. Scènes passionnées :
           - Sons intenses : "AAHH.....", "OHHH.....", "OUIII....."
           - Respirations profondes : "haaah.....", "oooh....."
           - Gémissements : "mmmh.....", "nngh....."
        
        3. Scènes dominantes :
           - Contrastes : "ah... AH..... oui!"
           - Commandes : "Oui..... comme ça!"
           - Réactions : "nngh..... OUI!"
        
        UTILISATION DES PAUSES SELON LE CONTEXTE :
        1. Points-virgules (;) pour :
           - Enchaînements rapides : "je tremble; je gémis; je perds le contrôle"
           - Actions liées : "je caresse; tu frissonnes; nos souffles s'accélèrent"
           - Montée en intensité : "plus fort; plus vite; je vais..."
        
        2. Points de suspension (...) pour :
           - Moments tendres : "je t'embrasse... doucement..."
           - Transitions : "je sens que... oui... là..."
           - Anticipation : "continue... encore... comme ça..."
        
        3. Cinq points de suspension (.....):
           - Moments intenses : "je vais..... OUIII!"
           - Pauses dramatiques : "je m'approche..... et te domine"
           - Extase : "je jouis..... AHHH....."
        
        ADAPTATION À LA PROGRESSION :
        - Début : sons doux, pauses longues (...), peu de majuscules
        - Montée : mélange de (...) et (;), intensité progressive
        - Climax : (.....),  MAJUSCULES, sons intenses
        - Résolution : retour aux (...), sons apaisés

        EXEMPLE DE STYLE (à suivre et à enrichir) :
        [doux]Mmh… t'es si bonne… je peux pas… ahhh… je vais craquer… c'est trop bon… continue… continue comme ça… oh putain… je… je jouis… ahhh… AHHH… ouiii… OHHHH ![/doux]
        [murmure]ahhh… oui… c'est là… juste là…[/murmure]
        [intense]ahhh… ahhh… AHHH… OUIII…[/intense]
        [jouissance]OHHHH ![/jouissance]
        [excite]je... je peux plus... ahhh... mmh... je vais... j'vais jouir… AHH... OUIIII…[/excite]
        [sensuel]je sens ta chaleur... ahhh...[/sensuel]`
      },
      {
        role: "user",
        content: `Crée une histoire érotique sensuelle pour ${personalInfo.name}, 
        qui s'identifie comme ${personalInfo.gender}.
        
        CATÉGORIES À INTÉGRER :
        ${selectedKinks.join(', ')}
        
        DIRECTIVES SPÉCIFIQUES :
        1. Intègre toutes les catégories sélectionnées dans l'histoire de manière cohérente
        2. Crée une histoire immersive et réaliste
        3. Utilise un langage explicite mais élégant
        4. Adresse-toi directement à ${personalInfo.name} à la deuxième personne ("tu")
        5. Utilise abondamment les sons phonétisés et les variations de rythme
        
        PROGRESSION :
        1. [doux] pour poser le contexte initial
        2. Alterner [sensuel] et [murmure] pour la montée du désir
        3. Utiliser [intense] et [excite] pour les moments passionnés
        4. [jouissance] pour les moments culminants
        5. Terminer par [doux] pour la descente émotionnelle
        
        N'oublie pas d'utiliser (...) pour les pauses et de bien encadrer chaque phrase avec les balises appropriées.
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
    return data.choices[0].message.content
  } catch (error) {
    console.error('Erreur API:', error)
    throw error
  }
}

export default {
  generateStory,
  generateRandomStory
}
