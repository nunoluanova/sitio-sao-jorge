import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

interface RecipeCardProps {
  title: string
  category: string
  yield: string
  coefficient: number
  imageUrl?: string
}

export function RecipeCard({ 
  title, 
  category, 
  yield: recipeYield, 
  coefficient, 
  imageUrl 
}: RecipeCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700">
      {imageUrl && (
        <div className="w-full h-48">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <p className="text-gray-400">{category}</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-gray-300">
          <span>Rendimento: {recipeYield}</span>
          <span>Coeficiente: {coefficient}</span>
        </div>
      </CardContent>
    </Card>
  )
}