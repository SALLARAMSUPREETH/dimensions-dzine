import React from 'react';
import ProjectShowcase from '../components/ProjectShowcase';
import { smashArenaData } from '../data/projects';

const SmashArena = () => {
  return <ProjectShowcase projectData={smashArenaData} />;
};

export default SmashArena;
