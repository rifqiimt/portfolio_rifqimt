import React from 'react';
import { 
  Code, Palette, Box, Smartphone, Layers, Figma, 
  Cpu, Database, TrendingUp, Briefcase, Users, Globe, Terminal 
} from 'lucide-react';

/* --- HELPER IKON LOGO UNTUK TECH STACK DI DALAM MODAL --- */
export const getTechIconBadge = (techName) => {
  const name = techName.toLowerCase();
  
  if (name.includes("react")) {
    return <Code size={14} className="text-blue-500" />;
  }
  if (name.includes("tailwind")) {
    return <Palette size={14} className="text-cyan-500" />;
  }
  if (name.includes("unity")) {
    return <Box size={14} className="text-gray-900" />;
  }
  if (name.includes("vuforia") || name.includes("webar") || name.includes("zapworks")) {
    return <Smartphone size={14} className="text-orange-500" />;
  }
  if (name.includes("blender") || name.includes("3d") || name.includes("meshroom")) {
    return <Layers size={14} className="text-amber-600" />;
  }
  if (name.includes("figma") || name.includes("ui/ux") || name.includes("maze")) {
    return <Figma size={14} className="text-pink-500" />;
  }
  if (name.includes("arduino") || name.includes("esp32") || name.includes("iot") || name.includes("sensor")) {
    return <Cpu size={14} className="text-emerald-600" />;
  }
  if (name.includes("firebase") || name.includes("cloud") || name.includes("database")) {
    return <Database size={14} className="text-amber-500" />;
  }
  if (name.includes("budget") || name.includes("revenue") || name.includes("financial") || name.includes("merchandising")) {
    return <TrendingUp size={14} className="text-emerald-600" />;
  }
  if (name.includes("leadership") || name.includes("management") || name.includes("operations") || name.includes("coordination") || name.includes("moderation")) {
    return <Briefcase size={14} className="text-purple-600" />;
  }
  if (name.includes("community") || name.includes("relations") || name.includes("user")) {
    return <Users size={14} className="text-blue-600" />;
  }
  if (name.includes("water") || name.includes("agriculture") || name.includes("rural") || name.includes("sustainable")) {
    return <Globe size={14} className="text-teal-600" />;
  }
  return <Terminal size={14} className="text-gray-700" />;
};