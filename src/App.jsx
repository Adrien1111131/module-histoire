import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useCallback } from 'react';

import WelcomePage from './components/WelcomePage';
import ExplanationPage from './components/ExplanationPage';
import SmoothScrollPage from './components/SmoothScrollPage';
import HomePage from './components/HomePage';
import PersonalInfoForm from './components/PersonalInfoForm';
import SensoryQuestionnaire from './components/SensoryQuestionnaire';
import ExcitationQuestionnaire from './components/ExcitationQuestionnaire';
import StoryResult from './components/StoryResult';
import ProgressBar from './components/ProgressBar';
import RandomStoryGenerator from './components/RandomStoryGenerator';
import RandomStoryResult from './components/RandomStoryResult';
import CustomStoryGenerator from './components/CustomStoryGenerator';
import CustomStoryResult from './components/CustomStoryResult';
import FreeFantasyGenerator from './components/FreeFantasyGenerator';
import FreeFantasyResult from './components/FreeFantasyResult';

function App() {
  const location = useLocation();
  const [userProfile, setUserProfile] = useState({
    personalInfo: {},
    sensoryAnswers: {},
    excitationAnswers: {},
  });
  
  const [randomStoryData, setRandomStoryData] = useState(null);

  const updatePersonalInfo = useCallback((info) => {
    setUserProfile(prev => ({
      ...prev,
      personalInfo: info
    }));
  }, []);

  const updateSensoryAnswers = useCallback((answers) => {
    setUserProfile(prev => ({
      ...prev,
      sensoryAnswers: answers
    }));
  }, []);

  const updateExcitationAnswers = useCallback((answers) => {
    setUserProfile(prev => ({
      ...prev,
      excitationAnswers: answers
    }));
  }, []);

  // Déterminer si nous sommes sur la page d'accueil ou la page principale
  const isWelcomePage = location.pathname === '/';
  
  // Déterminer si la page actuelle doit être fixe ou défilable
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const pageClassName = isHomePage ? "" : "scrollable-page";

  return (
    <div className={`min-h-screen w-full ${pageClassName}`}>
      <main className={`w-full relative z-10 min-h-screen ${isHomePage ? "" : "scrollable-content"}`}>
        <Routes>
          <Route path="/" element={<SmoothScrollPage />} />
          <Route path="/explanation" element={<ExplanationPage />} />
          <Route path="/home" element={<HomePage />} />
          
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
          
          {/* Routes pour le générateur personnalisé */}
          <Route 
            path="/custom-story" 
            element={<CustomStoryGenerator />} 
          />
          <Route 
            path="/custom-story-result" 
            element={<CustomStoryResult />} 
          />
          
          {/* Routes pour le générateur de fantasme libre */}
          <Route 
            path="/free-fantasy" 
            element={<FreeFantasyGenerator />} 
          />
          <Route 
            path="/free-fantasy-result" 
            element={<FreeFantasyResult />} 
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
