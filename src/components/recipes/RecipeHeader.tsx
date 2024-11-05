import { Search, Plus } from 'lucide-react'
import { useState } from 'react'
import { RecipeForm } from './RecipeForm'
import { Recipe } from '../../types/recipe'

interface RecipeHeaderProps {
  onSearch: (term: string) => void
  onCategoryChange: (category: string) => void
  onAddRecipe: (recipe: Recipe) => void
}

const images = import.meta.glob('../../assets/images/*.{png,jpg,jpeg,gif}')

export function RecipeHeader(props: RecipeHeaderProps) {
  const [showModal, setShowModal] = useState(false)
  const logo = images['../../assets/images/logo.png'].default

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onSearch(event.target.value)
  }

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onCategoryChange(event.target.value)
  }

  const handleAddRecipe = () => {
    setShowModal(true)
  }

  return (
    <>
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Grupo São Jorge" 
                className="h-8 w-auto object-contain"
              />
              <h1 className="text-2xl font-bold text-white">
                Sistema de Gestão
              </h1>

              {/* Container de ações */}
              <div className="flex items-center gap-4">
                {/* Barra de pesquisa */}
                <div className="relative flex-1 md:min-w-[300px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Buscar receitas..."
                    className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    onChange={handleSearch}
                  />
                </div>

                {/* Filtro de categorias */}
                <select
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  onChange={handleCategoryChange}
                >
                  <option value="">Todas Categorias</option>
                  <option value="finger-foods">Finger Foods</option>
                  <option value="molhos">Molhos</option>
                  <option value="entradas">Entradas</option>
                  <option value="principais">Pratos Principais</option>
                </select>

                {/* Botão Nova Receita */}
                <button 
                  onClick={handleAddRecipe}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  <Plus size={20} />
                  Nova Receita
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modal de Nova Receita */}
      {showModal && <RecipeForm onClose={() => setShowModal(false)} onAddRecipe={props.onAddRecipe} />}
    </>
  )
}