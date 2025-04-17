import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useCallback } from 'react'

import HomePage from './components/HomePage'
import PersonalInfoForm from './components/PersonalInfoForm'
import SensoryQuestionnaire from './components/SensoryQuestionnaire'
import ExcitationQuestionnaire from './components/ExcitationQuestionnaire'
import StoryResult from './components/StoryResult'
import ProgressBar from './components/ProgressBar'
import RandomStoryGenerator from './components/RandomStoryGenerator'
import RandomStoryResult from './components/RandomStoryResult'

function App() {
  const location = useLocation()
  const [userProfile, setUserProfile] = useState({
    personalInfo: {},
    sensoryAnswers: {},
    excitationAnswers: {},
  })
  
  const [randomStoryData, setRandomStoryData] = useState(null)

  const updatePersonalInfo = useCallback((info) => {
    setUserProfile(prev => ({
      ...prev,
      personalInfo: info
    }))
  }, [])

  const updateSensoryAnswers = useCallback((answers) => {
    setUserProfile(prev => ({
      ...prev,
      sensoryAnswers: answers
    }))
  }, [])

  const updateExcitationAnswers = useCallback((answers) => {
    setUserProfile(prev => ({
      ...prev,
      excitationAnswers: answers
    }))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Générateur d'Histoires Sensuelles</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {location.pathname !== '/' && <ProgressBar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Routes pour le générateur standard */}
          <Route 
            path="/personal-info" 
            element={
              <PersonalInfoForm 
                initialData={userProfile.personalInfo}
                onSubmit={updatePersonalInfo}
              />
            } 
          />
          <Route 
            path="/sensory-questionnaire" 
            element={
              <SensoryQuestionnaire 
                initialData={userProfile.sensoryAnswers}
                onSubmit={updateSensoryAnswers}
              />
            } 
          />
          <Route 
            path="/excitation-questionnaire" 
            element={
              <ExcitationQuestionnaire 
                initialData={userProfile.excitationAnswers}
                onSubmit={updateExcitationAnswers}
              />
            } 
          />
          <Route 
            path="/story-result" 
            element={<StoryResult userProfile={userProfile} />} 
          />
          
          {/* Routes pour le générateur aléatoire */}
          <Route 
            path="/random-story-generator" 
            element={
              <RandomStoryGenerator 
                onSubmit={setRandomStoryData}
              />
            } 
          />
          <Route 
            path="/random-story-result" 
            element={<RandomStoryResult randomStoryData={randomStoryData} />} 
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
