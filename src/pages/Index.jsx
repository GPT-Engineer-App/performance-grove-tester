import { useState } from "react";
import { Cat, Heart, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const catBreeds = [
  { name: "Siamese", origin: "Thailand", temperament: "Vocal, Affectionate, Intelligent" },
  { name: "Persian", origin: "Iran", temperament: "Gentle, Quiet, Docile" },
  { name: "Maine Coon", origin: "United States", temperament: "Gentle, Intelligent, Independent" },
  { name: "Bengal", origin: "United States", temperament: "Energetic, Playful, Curious" },
  { name: "Scottish Fold", origin: "Scotland", temperament: "Sweet-tempered, Intelligent, Soft-voiced" },
];

const CatCard = ({ breed, origin, temperament }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{breed}</CardTitle>
      <CardDescription>Origin: {origin}</CardDescription>
    </CardHeader>
    <CardContent>
      <p><strong>Temperament:</strong> {temperament}</p>
    </CardContent>
  </Card>
);

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6 flex items-center justify-center text-purple-800">
          <Cat className="mr-2 text-pink-600" /> All About Cats
        </h1>
        
        <motion.img
          whileHover={{ scale: 1.05 }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-6"
        />

        <Tabs defaultValue="about" className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="about">About Cats</TabsTrigger>
            <TabsTrigger value="breeds">Cat Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>Fascinating Felines</CardTitle>
                <CardDescription>Discover the world of cats</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-gray-700 mb-4">
                  Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their independence, agility, and affectionate nature.
                </p>
                <h2 className="text-2xl font-semibold mb-3">Characteristics of Cats</h2>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Excellent hunters with sharp claws and teeth</li>
                  <li>Flexible bodies and quick reflexes</li>
                  <li>Keen senses, especially their night vision</li>
                  <li>Soft fur and a variety of coat patterns</li>
                  <li>Communicate through meowing, purring, and body language</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {catBreeds.map((breed, index) => (
                <CatCard key={index} {...breed} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center items-center space-x-4 mb-6">
          <Button 
            variant="outline" 
            onClick={() => setLikes(likes + 1)}
            className="flex items-center"
          >
            <Heart className="mr-2 h-4 w-4" /> Like
          </Button>
          <Badge variant="secondary" className="text-lg">
            {likes} {likes === 1 ? 'Like' : 'Likes'}
          </Badge>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="text-xl text-gray-700 text-center cursor-help">
                Whether you're a cat owner or just an admirer, these furry friends continue to captivate us with their charm and personality!
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Cats make great companions!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="mt-8 text-center">
          <Badge variant="outline" className="text-sm">
            <Info className="mr-1 h-3 w-3" /> Fun Fact: Cats sleep for 70% of their lives!
          </Badge>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
