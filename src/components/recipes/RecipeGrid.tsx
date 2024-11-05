import { Recipe } from '../../types/recipe'
import { RecipeCard } from './RecipeCard'

interface RecipeGridProps {
  recipes: Recipe[]
}

export function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          category={recipe.category}
          yield={recipe.yield}
          coefficient={recipe.coefficient}
          imageUrl={recipe.imageUrl}
        />
      ))}
    </div>
  )
}