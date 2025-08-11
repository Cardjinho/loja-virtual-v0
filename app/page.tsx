"use client"

import { useState } from "react"
import { Check, Plane, Share, Gift, Zap, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function AviatorBot() {
  const [currentStep, setCurrentStep] = useState<"welcome" | "main" | "free-bot" | "premium">("welcome")
  const [hasJoinedGroup, setHasJoinedGroup] = useState(false)
  const [shareProgress, setShareProgress] = useState(0)
  const [isSharing, setIsSharing] = useState(false)

  const handleJoinGroup = () => {
    window.open("https://t.me/milionariomrx", "_blank")
    // Simular que entrou no grupo após 3 segundos
    setTimeout(() => {
      setHasJoinedGroup(true)
    }, 3000)
  }

  const handleEnterBot = () => {
    if (hasJoinedGroup) {
      setCurrentStep("main")
    }
  }

  const handleShare = () => {
    if (isSharing) return

    setIsSharing(true)
    const message =
      "Ganhe um bônus de 200% com a minha indicação, Aproveite hoje 🇲🇿🌟 clica aqui e se registra já: https://sshortly.net/be1d0df"
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")

    // Simular progresso após compartilhar
    setTimeout(() => {
      setShareProgress((prev) => Math.min(prev + 20, 100))
      setIsSharing(false)
    }, 5000)
  }

  const handleClaimReward = () => {
    const telegramMessage = "✅ Partilhei com sucesso para 10 amigos meus, Vim reinvindicar o meu robô gratuito 🚀🇲🇿"
    const telegramUrl = `https://t.me/Avpredictorla?text=${encodeURIComponent(telegramMessage)}`
    window.open(telegramUrl, "_blank")
  }

  if (currentStep === "welcome") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-8 text-center space-y-6">
            {/* Logo/Icon */}
            <div className="relative mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
              <Plane className="w-8 h-8 text-white" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur opacity-30 animate-pulse"></div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                <span className="text-red-500">🎯</span>
                Antes de avançar...
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                Entre no nosso grupo do Telegram para receber dicas exclusivas de como ganhar no Aviator!
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleJoinGroup}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
                disabled={hasJoinedGroup}
              >
                {hasJoinedGroup ? (
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    Grupo Confirmado
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Entrar no Grupo
                  </div>
                )}
              </Button>

              <Button
                onClick={handleEnterBot}
                disabled={!hasJoinedGroup}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Avançar para o Bot
                </div>
              </Button>
            </div>

            {/* Warning */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-yellow-800 text-xs flex items-center gap-2">
                <span className="text-yellow-500">⚠️</span>É obrigatório entrar no grupo primeiro para continuar
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === "main") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-red-500/20 rounded-full blur-xl animate-ping"></div>

        <Card className="w-full max-w-lg bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-8 text-center space-y-8">
            {/* Robot Image */}
            <div className="relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <Image
                  src="/aviator-robot.png"
                  alt="Aviator Robot"
                  width={80}
                  height={80}
                  className="rounded-full"
                  fallback={
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <Plane className="w-10 h-10 text-white" />
                    </div>
                  }
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full blur opacity-30 animate-pulse"></div>
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🚀 AVIATOR BOT
              </h1>
              <p className="text-gray-600 text-sm">
                O robô mais avançado para prever sinais do Aviator! Aumente suas chances de ganhar com nossa IA.
              </p>
              <div className="flex justify-center gap-2">
                <Badge className="bg-green-100 text-green-800 border-green-200">✅ 95% Precisão</Badge>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">🎯 Sinais em Tempo Real</Badge>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">2.5K+</div>
                <div className="text-xs text-gray-500">Usuários Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-xs text-gray-500">Taxa de Acerto</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-xs text-gray-500">Disponível</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <Button
                onClick={() => setCurrentStep("free-bot")}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5" />🎁 Bot Gratuito
                </div>
              </Button>

              <Button
                onClick={() => setCurrentStep("premium")}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />💎 Comprar Bot Premium
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === "free-bot") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>

        <Card className="w-full max-w-lg bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-8 text-center space-y-6">
            {/* Aviator Game Image */}
            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                <Image
                  src="/aviator-game.png"
                  alt="Aviator Game"
                  width={60}
                  height={60}
                  className="rounded-full"
                  fallback={
                    <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-400 rounded-full flex items-center justify-center">
                      <Plane className="w-8 h-8 text-white transform rotate-45" />
                    </div>
                  }
                />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-800">🎁 Bot Gratuito</h1>
              <p className="text-gray-600 text-sm">
                Partilhe o nosso link para 10 amigos e poderá utilizar o nosso robô gratuito!
              </p>
            </div>

            {/* Progress */}
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{shareProgress}%</div>
                <Progress value={shareProgress} className="h-3 bg-gray-200">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${shareProgress}%` }}
                  />
                </Progress>
                <p className="text-xs text-gray-500 mt-2">
                  {Math.floor(shareProgress / 20)}/5 compartilhamentos realizados
                </p>
              </div>

              {shareProgress < 100 ? (
                <Button
                  onClick={handleShare}
                  disabled={isSharing}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 disabled:opacity-50"
                >
                  <div className="flex items-center gap-2">
                    <Share className="w-5 h-5" />
                    {isSharing ? "Compartilhando..." : "📱 Compartilhar no WhatsApp"}
                  </div>
                </Button>
              ) : (
                <Button
                  onClick={handleClaimReward}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 animate-pulse"
                >
                  <div className="flex items-center gap-2">
                    <Gift className="w-5 h-5" />
                    Reivindicar Recompensa 🚀🌟
                  </div>
                </Button>
              )}
            </div>

            {/* Back Button */}
            <Button
              onClick={() => setCurrentStep("main")}
              variant="outline"
              className="w-full border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              ← Voltar
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === "premium") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>

        <Card className="w-full max-w-lg bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-8 text-center space-y-6">
            {/* Premium Icon */}
            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                <div className="text-4xl">💎</div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur opacity-30 animate-pulse"></div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                💎 Bot Premium
              </h1>
              <p className="text-gray-600 text-sm">Acesso completo ao robô com sinais premium e suporte VIP!</p>
            </div>

            {/* Features */}
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-green-800">Sinais Premium</div>
                  <div className="text-xs text-green-600">98% de precisão garantida</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-blue-800">Suporte VIP 24/7</div>
                  <div className="text-xs text-blue-600">Atendimento prioritário</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-purple-800">Estratégias Avançadas</div>
                  <div className="text-xs text-purple-600">Métodos exclusivos de ganho</div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-xl">
              <div className="text-sm opacity-90">Apenas por</div>
              <div className="text-3xl font-bold">R$ 97,00</div>
              <div className="text-sm opacity-90">Acesso vitalício</div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <Button
                onClick={() => window.open("https://t.me/Avpredictorla", "_blank")}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />💳 Comprar Agora
                </div>
              </Button>

              <Button
                onClick={() => setCurrentStep("main")}
                variant="outline"
                className="w-full border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                ← Voltar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return null
}
