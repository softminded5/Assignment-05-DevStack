import Ban from "./components/Ban"
import Nav from "./components/Nav"
import { useEffect, useState } from "react";
import type { Technology } from "./types/Technology";
import TechnologyList from "./components/TechnologyList";









function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

  const handleAddTechnology = (technology: Technology) => {
    setSelectedTechnologies((current) => {
      if (current.some((item) => item.id === technology.id)) {
        return current;
      }

      return [...current, technology];
    });
  }

  const handleRemoveTechnology = (technologyId: string) => {
    setSelectedTechnologies((current) =>
      current.filter((technology) => technology.id !== technologyId)
    );
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };



  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to fetch technologies");
        }

        const data = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      }
    };

    fetchTechnologies();
  }, []);


  return (
    <>
      <Nav />
      <Ban />
      <TechnologyList technologies={technologies}
        selectedTechnologies={selectedTechnologies}
        onAdd={handleAddTechnology}
        onRemove={handleRemoveTechnology}
        onRemoveAll={handleRemoveAll}
      />

    </>
  )
}

export default App
