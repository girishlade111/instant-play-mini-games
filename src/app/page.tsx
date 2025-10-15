"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Zap, Heart, Shield, Mail, Github, Instagram, Sparkles, Trophy, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const games = [
    {
      title: "Puzzle Master",
      description: "Challenge your brain with mind-bending puzzles",
      image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=500&h=300&fit=crop",
      category: "Puzzle"
    },
    {
      title: "Speed Racer",
      description: "Race against time in this thrilling racing game",
      image: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=500&h=300&fit=crop",
      category: "Racing"
    },
    {
      title: "Space Shooter",
      description: "Defend the galaxy from alien invaders",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=500&h=300&fit=crop",
      category: "Action"
    },
    {
      title: "Word Quest",
      description: "Expand your vocabulary with fun word games",
      image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=500&h=300&fit=crop",
      category: "Word"
    },
    {
      title: "Memory Match",
      description: "Test your memory skills with card matching",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop",
      category: "Memory"
    },
    {
      title: "Strategy King",
      description: "Build your empire and conquer the world",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop",
      category: "Strategy"
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "Instant Play",
      description: "No downloads, no installations. Just click and play instantly in your browser."
    },
    {
      icon: Heart,
      title: "100% Free Forever",
      description: "Lifetime access to all games. No hidden costs, no subscriptions, completely free."
    },
    {
      icon: Shield,
      title: "Ad-Free Experience",
      description: "Pure gaming enjoyment without annoying ads interrupting your gameplay."
    },
    {
      icon: Sparkles,
      title: "New Games Weekly",
      description: "Fresh content added regularly to keep your gaming experience exciting."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-white/30 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 animate-pulse-glow">
              <Gamepad2 className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Mini Game Play Station</span>
            </div>
            
            <h1 className="font-gaming text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Play Unlimited Games
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mt-2 glow-text">
                Anytime, Anywhere
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              No downloads. No apps. No ads. Just pure gaming fun in your browser.
              <span className="block mt-2 font-semibold">100% Free Forever!</span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 font-semibold text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300"
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Start Playing Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 hover:scale-105 font-semibold text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <Trophy className="mr-2 h-5 w-5" />
                Browse Games
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center items-center pt-8">
              <div className="flex items-center gap-2 text-white hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Users className="w-5 h-5" />
                <span className="font-semibold">10,000+ Players</span>
              </div>
              <div className="h-6 w-px bg-white/30"></div>
              <div className="flex items-center gap-2 text-white hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Gamepad2 className="w-5 h-5" />
                <span className="font-semibold">50+ Games</span>
              </div>
              <div className="h-6 w-px bg-white/30"></div>
              <div className="flex items-center gap-2 text-white hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">100% Ad-Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-gaming text-4xl sm:text-5xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The best platform for casual gaming with unmatched features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer group"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 transition-all duration-300 ${hoveredFeature === index ? 'scale-110 rotate-6' : ''}`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-gaming group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Games Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-gaming text-4xl sm:text-5xl font-bold mb-4">
              Featured Games
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of exciting mini games
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <Card 
                key={index} 
                className="overflow-hidden game-card-hover border-2 cursor-pointer group"
                onMouseEnter={() => setHoveredGame(index)}
                onMouseLeave={() => setHoveredGame(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${hoveredGame === index ? 'scale-125 rotate-2' : 'scale-100'}`}
                  />
                  <Badge className={`absolute top-4 right-4 bg-primary text-white transition-all duration-300 ${hoveredGame === index ? 'scale-110' : ''}`}>
                    {game.category}
                  </Badge>
                  {hoveredGame === index && (
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-6 animate-in fade-in duration-300">
                      <span className="text-white font-bold text-lg">Click to Play!</span>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-gaming text-xl group-hover:text-primary transition-colors duration-300">{game.title}</CardTitle>
                  <CardDescription className="text-base">{game.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full font-semibold hover:scale-105 transition-transform duration-300">
                    <Gamepad2 className="mr-2 h-4 w-4" />
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="font-semibold text-lg px-8 py-6 hover:scale-105 hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Games
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl">
            <CardHeader className="text-center pb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto mb-6 flex items-center justify-center animate-pulse-glow cursor-pointer hover:scale-110 transition-transform duration-300">
                <span className="text-4xl font-gaming text-white">GL</span>
              </div>
              <CardTitle className="text-3xl font-gaming mb-2">About Me</CardTitle>
              <CardDescription className="text-lg">
                Creator & Developer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <h3 className="text-2xl font-semibold">Girish Lade</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">UI/UX Designer</span> and <span className="text-primary font-semibold">Programmer</span> dedicated to creating engaging and accessible gaming experiences. 
                This platform is built with love to bring joy to gamers worldwide, completely free and ad-free.
              </p>
              <p className="text-muted-foreground">
                My mission is to make gaming accessible to everyone, anywhere, without barriers.
              </p>
              <div className="pt-4">
                <Link 
                  href="https://ladestack.in" 
                  target="_blank"
                  className="inline-flex items-center text-primary hover:underline font-semibold text-lg hover:scale-105 transition-transform duration-300"
                >
                  Visit My Main Portfolio →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-gaming text-4xl sm:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Have questions or suggestions? Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="mailto:girish@ladestack.in" target="_blank">
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer h-full group hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Email</CardTitle>
                  <CardDescription className="break-all">girish@ladestack.in</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="https://instagram.com/girish_lade_" target="_blank">
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer h-full group hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Instagram className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Instagram</CardTitle>
                  <CardDescription>@girish_lade_</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="https://github.com/girishlade111" target="_blank">
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer h-full group hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Github className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">GitHub</CardTitle>
                  <CardDescription>@girishlade111</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-gaming text-2xl font-bold mb-2">Mini Game Play Station</h3>
              <p className="text-muted-foreground">
                Free online gaming platform - No downloads, No ads
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-4">
                <Link href="mailto:girish@ladestack.in" target="_blank">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://instagram.com/girish_lade_" target="_blank">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://github.com/girishlade111" target="_blank">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} <Link href="https://ladestack.in" target="_blank" className="text-primary hover:underline font-semibold">Girish Lade</Link>. All rights reserved.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              Built with ❤️ by <Link href="https://ladestack.in" target="_blank" className="text-primary hover:underline font-semibold">ladestack.in</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}