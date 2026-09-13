import Ban from "./components/Ban"
import Nav from "./components/Nav"
import { useEffect, useState } from "react";
import type { Technology } from "./types/Technology";
import TechnologyList from "./components/TechnologyList";
import Toast from "./components/Toast";
import { toast } from "react-toastify";
import Footer from "./components/Footer";









function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

  const handleAddTechnology = (technology: Technology) => {
    const alreadySelected = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadySelected) {
      toast.warning(
        `${technology.name} is already in your stack`
      ); return;
    }

    const replacedTechnology = selectedTechnologies.find(
      (item) => item.category === technology.category
    );

    if (replacedTechnology) {
      toast.info(
        `${replacedTechnology.name} replaced by ${technology.name}`
      );
    } else {
      toast.success(
        `${technology.name} added to your stack`
      );
    }

    setSelectedTechnologies((current) => {
      const filtered = current.filter(
        (item) => item.category !== technology.category
      );

      return [...filtered, technology];
    });
  };


  const handleRemoveTechnology = (technologyId: string) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === technologyId
    );

    if (technology) {
      toast.error(`${technology.name} removed from your stack`);
    }

    setSelectedTechnologies((current) =>
      current.filter((item) => item.id !== technologyId)
    );
  };


  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.success("All technologies removed from your stack");
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
      <Toast />
      
      <Footer/>


    </>
  )
}

export default App
