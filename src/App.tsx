import { useState } from 'react'
import { Recipe } from './types/recipe'
import { RecipeHeader } from './components/recipes/RecipeHeader'
import { RecipeForm } from './components/recipes/RecipeForm'
import { ThemeToggle } from './components/ui/theme-toggle'
import { RecipeGrid } from './components/recipes/RecipeGrid'

// Dados mockados iniciais
const initialRecipes: Recipe[] = [
  {
    id: '1',
    title: "Mini Cuscuz",
    category: "Finger Foods",
    yield: "353 unidades",
    coefficient: 1,
    imageUrl: 'https://example.com/mini-cuscuz.jpg',
    ingredients: '500g de cuscuz, 200g de queijo coalho, 100g de manteiga, sal a gosto',
    instructions: '1. Misture o cuscuz com água quente e deixe descansar por 10 minutos. 2. Adicione o queijo, a manteiga e o sal. 3. Misture bem e sirva.'
  },
  {
    id: '2',
    title: "Fonduta",
    category: "Molhos",
    yield: "1kg",
    coefficient: 0.25,
    imageUrl: 'https://example.com/fonduta.jpg',
    ingredients: '500g de queijo gruyère, 500g de queijo emmental, 2 dentes de alho, 1 copo de vinho branco, 1 colher de sopa de amido de milho',
    instructions: '1. Derreta os queijos em fogo baixo. 2. Adicione o alho picado e o vinho branco. 3. Misture o amido de milho com um pouco de água e adicione à mistura. 4. Mexa até engrossar e sirva.'
  }
]

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Função para adicionar nova receita
  const handleAddRecipe = (newRecipe: Recipe) => {
    setRecipes(prev => [...prev, newRecipe])
    setIsModalOpen(false)
  }

  // Função para filtrar receitas
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || recipe.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-900">
      <RecipeHeader 
        onSearch={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        onAddRecipe={() => setIsModalOpen(true)}
      />
      
      <main className="p-8">
        <RecipeGrid recipes={filteredRecipes} />
      </main>
      <ThemeToggle />

      {isModalOpen && (
        <RecipeForm 
          onClose={() => setIsModalOpen(false)} 
          onAddRecipe={handleAddRecipe}
        />
      )}
    </div>
  )
}

export default App