"use client"

import { useState } from "react"
import { ShoppingCart, Search, User, Star, Zap, Shield, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const categories = [
  { id: 1, name: "Streaming", icon: "🎬" },
  { id: 2, name: "Música", icon: "🎵" },
  { id: 3, name: "Jogos", icon: "🎮" },
  { id: 4, name: "Recargas", icon: "📱" },
  { id: 5, name: "Software", icon: "💻" },
]

const products = [
  {
    id: 1,
    name: "Netflix Premium",
    description: "Conta Netflix Premium - 1 Mês",
    price: 29.9,
    originalPrice: 45.9,
    image: "/netflix-inspired-logo.png",
    category: "Streaming",
    rating: 4.9,
    sales: 1250,
    badge: "Mais Vendido",
  },
  {
    id: 2,
    name: "Spotify Premium",
    description: "Spotify Premium Individual - 1 Mês",
    price: 19.9,
    originalPrice: 21.9,
    image: "/spotify-logo.png",
    category: "Música",
    rating: 4.8,
    sales: 980,
    badge: "Oferta",
  },
  {
    id: 3,
    name: "Recarga TIM",
    description: "Recarga TIM R$ 20,00",
    price: 20.0,
    originalPrice: null,
    image: "/generic-telecom-logo.png",
    category: "Recargas",
    rating: 4.7,
    sales: 750,
    badge: null,
  },
  {
    id: 4,
    name: "Xbox Game Pass",
    description: "Xbox Game Pass Ultimate - 1 Mês",
    price: 39.9,
    originalPrice: 44.9,
    image: "/xbox-game-pass-logo.png",
    category: "Jogos",
    rating: 4.9,
    sales: 650,
    badge: "Novo",
  },
  {
    id: 5,
    name: "Amazon Prime",
    description: "Amazon Prime Video - 1 Mês",
    price: 14.9,
    originalPrice: 19.9,
    image: "/placeholder-78s4c.png",
    category: "Streaming",
    rating: 4.6,
    sales: 890,
    badge: "Promoção",
  },
  {
    id: 6,
    name: "Recarga Vivo",
    description: "Recarga Vivo R$ 15,00",
    price: 15.0,
    originalPrice: null,
    image: "/vivo-logo.png",
    category: "Recargas",
    rating: 4.5,
    sales: 420,
    badge: null,
  },
]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [cartItems, setCartItems] = useState(0)

  const filteredProducts =
    selectedCategory === "Todos" ? products : products.filter((product) => product.category === selectedCategory)

  const addToCart = () => {
    setCartItems((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  DigitalStore
                </span>
              </Link>
            </div>

            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input type="search" placeholder="Buscar produtos..." className="pl-10 pr-4 w-full" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/cart" className="relative">
                <Button variant="outline" size="icon">
                  <ShoppingCart className="w-4 h-4" />
                </Button>
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <User className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/login">Entrar</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/register">Cadastrar</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/profile">Minha Conta</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Serviços Digitais</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Netflix, Spotify, Recargas e muito mais com os melhores preços!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Entrega Instantânea</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedCategory === "Todos" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Todos")}
              className="rounded-full"
            >
              Todos
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className="rounded-full"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {product.badge && <Badge className="absolute top-2 left-2">{product.badge}</Badge>}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="mb-3">{product.description}</CardDescription>

                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating} ({product.sales} vendas)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">R$ {product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">R$ {product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full" onClick={addToCart}>
                    Adicionar ao Carrinho
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher a DigitalStore?</h2>
            <p className="text-lg text-gray-600">Oferecemos a melhor experiência em compras digitais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Seguro</h3>
              <p className="text-gray-600">Todas as transações são protegidas com criptografia SSL</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Instantânea</h3>
              <p className="text-gray-600">Receba seus produtos digitais imediatamente após a compra</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte 24/7</h3>
              <p className="text-gray-600">Nossa equipe está sempre disponível para ajudar você</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">DigitalStore</span>
              </div>
              <p className="text-gray-400">A melhor loja de serviços digitais do Brasil</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Produtos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Streaming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Música
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Jogos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Recargas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Conta</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/login" className="hover:text-white">
                    Entrar
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white">
                    Cadastrar
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="hover:text-white">
                    Minha Conta
                  </Link>
                </li>
                <li>
                  <Link href="/orders" className="hover:text-white">
                    Meus Pedidos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DigitalStore. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
