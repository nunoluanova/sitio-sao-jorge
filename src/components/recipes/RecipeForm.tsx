import { X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Recipe } from '../../types/recipe'

interface RecipeFormProps {
  onClose: () => void
  onAddRecipe: (recipe: Recipe) => void
}

export function RecipeForm({ onClose, onAddRecipe }: RecipeFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Obter os valores dos campos do formulário
    const form = event.currentTarget
    const title = form.elements.namedItem('title') as HTMLInputElement
    const category = form.elements.namedItem('category') as HTMLSelectElement
    const yield_ = form.elements.namedItem('yield') as HTMLInputElement
    const coefficient = form.elements.namedItem('coefficient') as HTMLInputElement
    const image = form.elements.namedItem('image') as HTMLInputElement
    const ingredients = form.elements.namedItem('ingredients') as HTMLTextAreaElement
    const instructions = form.elements.namedItem('instructions') as HTMLTextAreaElement

    // Criar um objeto de receita com os valores do formulário
    const newRecipe: Recipe = {
      id: crypto.randomUUID(),
      title: title.value,
      category: category.value,
      yield: yield_.value,
      coefficient: Number(coefficient.value),
      imageUrl: image.files?.[0]?.name || '',
      ingredients: ingredients.value,
      instructions: instructions.value
    }

    // Chamar a função onAddRecipe passando a nova receita
    onAddRecipe(newRecipe)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl bg-gray-800 border-gray-700">
        <CardHeader className="border-b border-gray-700 relative">
          <CardTitle className="text-white">Nova Receita</CardTitle>
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Informações básicas */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-200 mb-1">
                  Nome da Receita
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: Mini Cuscuz"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-200 mb-1">
                  Categoria
                </label>
                <select 
                  id="category"
                  name="category"
                  className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="finger-foods">Finger Foods</option>
                  <option value="molhos">Molhos</option>
                  <option value="entradas">Entradas</option>
                  <option value="principais">Pratos Principais</option>
                </select>
              </div>
            </div>

            {/* Upload de imagem */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-200 mb-1">
                Foto do Prato
              </label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                <input
                  type="file"
                  className="hidden"
                  id="image"
                  name="image"
                  accept="image/*"
                />
                <label 
                  htmlFor="image"
                  className="text-gray-400 cursor-pointer hover:text-gray-300"
                >
                  <div>Arraste uma imagem ou clique para selecionar</div>
                  <div className="text-sm mt-1">PNG, JPG até 5MB</div>
                </label>
              </div>
            </div>

            {/* Rendimento e Coeficiente */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="yield" className="block text-sm font-medium text-gray-200 mb-1">
                  Rendimento
                </label>
                <input
                  type="text"
                  id="yield"
                  name="yield"
                  className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: 353 unidades"
                />
              </div>
              <div>
                <label htmlFor="coefficient" className="block text-sm font-medium text-gray-200 mb-1">
                  Coeficiente
                </label>
                <input
                  type="number"
                  step="0.01"
                  id="coefficient"
                  name="coefficient"
                  className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: 1.0"
                />
              </div>
            </div>

            {/* Ingredientes */}
            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-200 mb-1">
                Ingredientes
              </label>
              <textarea
                rows={4}
                id="ingredients"
                name="ingredients"
                className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite os ingredientes e quantidades..."
              />
            </div>

            {/* Modo de Preparo */}
            <div>
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-200 mb-1">
                Modo de Preparo
              </label>
              <textarea
                rows={4}
                id="instructions"
                name="instructions"
                className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite o modo de preparo..."
              />
            </div>

            {/* Botões de ação */}
            <div className="flex justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Salvar Receita
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}