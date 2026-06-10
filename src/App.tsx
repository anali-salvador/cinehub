import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs } from "@/components/ui/tabs";
import { Accordion } from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Zap,
  ChevronRight,
  Sparkles,
  Flame,
  Sword,
  Heart,
  Users,
  BookOpen,
  Trophy,
  Radio,
  AlertCircle,
  Star,
  X,
  Check,
  Menu,
  Search,
  Filter,
  TrendingUp,
  Shield,
  Zap as ZapIcon,
} from "lucide-react";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [watchList, setWatchList] = useState<string[]>([]);
  const [powerFilter, setPowerFilter] = useState(70);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSaga, setSelectedSaga] = useState("all");
  
  const charactersRef = useRef<HTMLDivElement>(null);
  const sagasRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCharacterSelect = (character: any) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  const handleAddToWatchList = (name: string) => {
    if (!watchList.includes(name)) {
      setWatchList([...watchList, name]);
    }
  };

  const handleRemoveFromWatchList = (name: string) => {
    setWatchList(watchList.filter((item) => item !== name));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleExploreNow = () => {
    scrollToSection(charactersRef);
  };

  const handleViewTrailer = () => {
    alert("🎬 Abriendo trailer de Dragon Ball Super...");
  };
  const dragonBallCharacters = [
    {
      id: 1,
      name: "Goku",
      power: 98,
      role: "Protagonista",
      saga: "goku-black",
      image:
        "linear-gradient(135deg, #0066FF 0%, #FFD600 100%)",
      description:
        "El Saiyajin más poderoso jamás visto",
      forms: "SSJ, SSJ2, SSJ3, Ultra Instinto",
      fullBio:
        "Kakaroto, conocido como Goku, es el protagonista principal de Dragon Ball. Nacido en el planeta Vegeta, fue enviado a la Tierra de bebé. Es un luchador incansable que siempre busca desafiarse a sí mismo.",
      abilities:
        "Kamehameha, Ultra Instinto, Spirit Bomb",
    },
    {
      id: 2,
      name: "Vegeta",
      power: 95,
      role: "Rival/Aliado",
      saga: "saiyajin",
      image:
        "linear-gradient(135deg, #6B0DFF 0%, #FF6B00 100%)",
      description:
        "El Príncipe de los Saiyajines",
      forms: "SSJ, SSJ2, Blue, Ultra Ego",
      fullBio:
        "Vegeta es el Príncipe de todos los Saiyajines. Inicialmente un villano, se convierte en uno de los aliados más importantes de Goku. Aunque competitivo, finalmente valora la amistad y la familia.",
      abilities:
        "Final Flash, Galick Gun, Pride Trooper",
    },
    {
      id: 3,
      name: "Jiren",
      power: 97,
      role: "Antagonista",
      saga: "namek",
      image:
        "linear-gradient(135deg, #1a1a2e 0%, #FF4500 100%)",
      description:
        "Guerrero Gris más poderoso del Multiverso",
      forms: "Forma Verdadera",
      fullBio:
        "Jiren es el luchador más fuerte del Universo 11 y uno de los oponentes más formidables que enfrenta Goku en el Torneo del Poder. Su determinación es inquebrantable.",
      abilities:
        "Power Impact, Meditation, Destruct Disc",
    },
    {
      id: 4,
      name: "Gogeta",
      power: 99,
      role: "Fusión",
      saga: "goku-black",
      image:
        "linear-gradient(135deg, #FFD600 0%, #0066FF 100%)",
      description:
        "La fusión Potara de Goku y Vegeta",
      forms: "Super Gogeta",
      fullBio:
        "Gogeta es la fusión de Goku y Vegeta usando el Potara. Combina la velocidad y técnica de Goku con la potencia bruta de Vegeta, creando un guerrero casi invencible.",
      abilities:
        "Big Bang Kamehameha, Burning Kamehameha",
    },
    {
      id: 5,
      name: "Frieza",
      power: 92,
      role: "Antagonista Clásico",
      saga: "namek",
      image:
        "linear-gradient(135deg, #FF6B00 0%, #6B0DFF 100%)",
      description:
        "El Emperador del Universo",
      forms: "Forma Final, Poder Dorado",
      fullBio:
        "Frieza es uno de los villanos más icónicos de Dragon Ball. Aunque derrotado, continúa apareciendo en nuevas sagas con mayor poder.",
      abilities:
        "Death Beam, Supernova, Destructo Disc",
    },
  ];

  const saga = [
    {
      value: "saga-saiyajin",
      label: "Saga Saiyajin",
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            El primer arco importante donde Goku y sus amigos se enfrentan a los
            invasores Saiyajines del espacio exterior. Aquí se revelan secretos
            sobre el pasado de Goku y la verdadera naturaleza de su poder.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-blue-500/30 bg-blue-500/5">
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                  Enemigos principales
                </p>
                <p className="text-lg font-bold text-orange-500">
                  Nappa y Vegeta
                </p>
              </CardContent>
            </Card>
            <Card className="border-yellow-500/30 bg-yellow-500/5">
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                  Pérdidas importantes
                </p>
                <p className="text-lg font-bold text-yellow-600">
                  Goku, Yamcha, Tenshinhan
                </p>
              </CardContent>
            </Card>
          </div>
          <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600" onClick={() => alert("🎬 Reproduciendo Saga Saiyajin...")}>
            <Flame className="w-4 h-4 mr-2" />
            Ver Saga Completa
          </Button>
        </div>
      ),
    },
    {
      value: "saga-namek",
      label: "Saga Namek",
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            Los guerreros viajan a Namek para buscar deseos en las esferas del
            dragón. Aquí conocen a Freezer, uno de los villanos más icónicos del
            anime.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-purple-500/30 bg-purple-500/5">
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                  Enemigos principales
                </p>
                <p className="text-lg font-bold text-purple-600">Freezer</p>
              </CardContent>
            </Card>
            <Card className="border-red-500/30 bg-red-500/5">
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                  Transformación clave
                </p>
                <p className="text-lg font-bold text-red-600">SSJ Goku</p>
              </CardContent>
            </Card>
          </div>
          <Button className="w-full bg-gradient-to-r from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600" onClick={() => alert("🎬 Reproduciendo Saga Namek...")}>
            <Flame className="w-4 h-4 mr-2" />
            Ver Saga Completa
          </Button>
        </div>
      ),
    },
    {
      value: "saga-goku-black",
      label: "Saga Goku Black",
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            En Dragon Ball Super, aparece Goku Black, una versión malvada de Goku
            del futuro alternativo que amenaza la existencia del multiverso.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-indigo-500/30 bg-indigo-500/5">
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                  Enemigos principales
                </p>
                <p className="text-lg font-bold text-indigo-600">
                  Goku Black, Zamasu
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-500/30 bg-blue-500/5">
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                  Aliados nuevos
                </p>
                <p className="text-lg font-bold text-blue-600">
                  Vegeta, Trunks
                </p>
              </CardContent>
            </Card>
          </div>
          <Button className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600" onClick={() => alert("🎬 Reproduciendo Saga Goku Black...")}>
            <Flame className="w-4 h-4 mr-2" />
            Ver Saga Completa
          </Button>
        </div>
      ),
    },
  ];

  const faqItems = [
    {
      value: "q1",
      title: "¿Cuál es el orden correcto para ver Dragon Ball?",
      content:
        "Se recomienda ver: Dragon Ball Original → Dragon Ball Z → Dragon Ball GT (opcional) → Dragon Ball Super (canon). Esto te dará una experiencia completa de la saga.",
    },
    {
      value: "q2",
      title: "¿Cuántos episodios tiene Dragon Ball?",
      content:
        "Dragon Ball tiene 153 episodios, Dragon Ball Z tiene 291, Dragon Ball GT tiene 64 y Dragon Ball Super tiene 131 episodios (incompleto). Total aproximado: 639 episodios.",
    },
    {
      value: "q3",
      title: "¿Quién es el personaje más fuerte?",
      content:
        "Actualmente, Goku con Ultra Instinto Completo y Vegeta con Ultra Ego son los más poderosos. Sin embargo, en el multiverso hay otros guerreros como Jiren que están al mismo nivel o superior.",
    },
    {
      value: "q4",
      title: "¿Hay una diferencia entre el manga y el anime?",
      content:
        "Sí, el manga es el material original creado por Akira Toriyama. El anime a veces tiene filler (relleno) pero mantiene la esencia de la historia original. El manga es más conciso y directo.",
    },
  ];

  const stats = [
    {
      label: "Años de Existencia",
      value: "40+",
      icon: "📅",
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Episodios Totales",
      value: "600+",
      icon: "🎬",
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Películas",
      value: "20+",
      icon: "🎞️",
      color: "from-orange-500 to-red-500",
    },
    {
      label: "Fans Globales",
      value: "100M+",
      icon: "👥",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const transformations = [
    { name: "Super Saiyajin", power: 50, color: "from-yellow-400 to-yellow-600" },
    { name: "Super Saiyajin 2", power: 75, color: "from-yellow-300 to-orange-500" },
    { name: "Super Saiyajin 3", power: 85, color: "from-yellow-200 to-red-500" },
    {
      name: "Super Saiyajin Blue",
      power: 92,
      color: "from-blue-400 to-cyan-500",
    },
    { name: "Ultra Instinto", power: 100, color: "from-white to-silver-500" },
  ];

  const filteredCharacters = dragonBallCharacters.filter((char) => {
    const matchesPower = char.power >= powerFilter;
    const matchesSearch =
      char.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      char.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSaga = selectedSaga === "all" || char.saga === selectedSaga;
    return matchesPower && matchesSearch && matchesSaga;
  });

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white">
        {/* Modal Dialog */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="max-w-2xl bg-gradient-to-br from-slate-900 to-slate-800 border-blue-500/30">
            {selectedCharacter && (
              <>
                <DialogHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <DialogTitle className="text-3xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        {selectedCharacter.name}
                      </DialogTitle>
                      <DialogDescription className="text-blue-300 mt-2">
                        {selectedCharacter.role}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                <ScrollArea className="h-96 rounded-md border border-blue-500/20 p-4">
                  <div className="space-y-6 pr-4">
                    <p className="text-sm leading-relaxed text-gray-300">
                      {selectedCharacter.fullBio}
                    </p>
                    <div className="space-y-3 bg-blue-500/5 p-4 rounded-lg border border-blue-500/20">
                      <p className="text-sm font-semibold text-yellow-400">
                        Transformaciones
                      </p>
                      <p className="text-sm text-gray-300">
                        {selectedCharacter.forms}
                      </p>
                    </div>
                    <div className="space-y-3 bg-purple-500/5 p-4 rounded-lg border border-purple-500/20">
                      <p className="text-sm font-semibold text-purple-400">
                        Habilidades Especiales
                      </p>
                      <p className="text-sm text-gray-300">
                        {selectedCharacter.abilities}
                      </p>
                    </div>
                    <div className="space-y-3 bg-orange-500/5 p-4 rounded-lg border border-orange-500/20">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-semibold text-orange-400">
                          Nivel de Poder
                        </p>
                        <span className="text-lg font-bold text-orange-500">
                          {selectedCharacter.power}%
                        </span>
                      </div>
                      <Progress
                        value={selectedCharacter.power}
                        className="h-2"
                      />
                    </div>
                  </div>
                </ScrollArea>
                <div className="flex gap-2 mt-6">
                  <Button
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                    onClick={() => {
                      handleAddToWatchList(selectedCharacter.name);
                      setShowModal(false);
                    }}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Agregar a Favoritos
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowModal(false)}
                    className="border-blue-500/30 hover:bg-blue-500/10"
                  >
                    Cerrar
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Navigation */}
        <nav className="border-b border-blue-500/20 sticky top-0 z-40 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="flex items-center gap-2 text-2xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
                  DragonBall Universe
                </div>
              </TooltipTrigger>
              <TooltipContent>Volver al inicio</TooltipContent>
            </Tooltip>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-2 items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(charactersRef)}
                    className="hover:bg-blue-500/20"
                  >
                    Personajes
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Ver guerreros</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(sagasRef)}
                    className="hover:bg-blue-500/20"
                  >
                    Sagas
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Ver arcos principales</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(communityRef)}
                    className="hover:bg-blue-500/20"
                  >
                    Comunidad
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Únete a la comunidad</TooltipContent>
              </Tooltip>

              <Separator orientation="vertical" className="h-6 bg-blue-500/20 mx-2" />

              <Button
                size="sm"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                onClick={handleExploreNow}
              >
                Explorar
                <Zap className="w-4 h-4 ml-2" />
              </Button>

              {watchList.length > 0 && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Badge className="cursor-pointer bg-red-500 hover:bg-red-600 text-white">
                      ❤️ {watchList.length}
                    </Badge>
                  </PopoverTrigger>
                  <PopoverContent className="bg-slate-800 border-blue-500/30">
                    <div className="space-y-2">
                      <p className="font-semibold text-yellow-400">
                        Mis Favoritos
                      </p>
                      <Separator className="bg-blue-500/20" />
                      <ScrollArea className="h-40">
                        <div className="space-y-2">
                          {watchList.map((item) => (
                            <div
                              key={item}
                              className="flex items-center justify-between p-2 bg-blue-500/10 rounded border border-blue-500/20"
                            >
                              <span className="text-sm">{item}</span>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() =>
                                  handleRemoveFromWatchList(item)
                                }
                                className="h-auto p-1 text-red-400 hover:text-red-300"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-blue-500/20"
                  >
                    <Menu className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-slate-800 border-blue-500/30">
                  <DropdownMenuItem onClick={() => scrollToSection(charactersRef)}>
                    Personajes
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection(sagasRef)}>
                    Sagas
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => scrollToSection(communityRef)}
                  >
                    Comunidad
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-blue-500/20" />
                  <DropdownMenuItem onClick={handleExploreNow}>
                    Explorar Ahora
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="w-fit bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400/50">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Bienvenido al Multiverso
                  </Badge>
                  <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-tight">
                    Desata tu{" "}
                    <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                      Poder Infinito
                    </span>
                  </h1>
                  <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                    Explora el mundo más épico del anime. Desde los primeros
                    encuentros hasta batallas cósmicas, vive la saga completa de
                    Dragon Ball como nunca antes.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="lg"
                        className="px-8 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 font-semibold"
                        onClick={handleExploreNow}
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Comenzar Viaje
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      Descubre los guerreros más poderosos
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="lg"
                        variant="outline"
                        className="px-8 border-blue-500/50 hover:bg-blue-500/10"
                        onClick={handleViewTrailer}
                      >
                        Ver Trailer
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      Mira el trailer oficial
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* Hero Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #0066FF 0%, #FFD600 50%, #FF4500 100%)",
                  }}
                  className="relative h-96 rounded-2xl overflow-hidden border-2 border-yellow-500/50 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-2xl"
                  onClick={handleExploreNow}
                >
                  <div className="text-center">
                    <Flame className="w-32 h-32 mx-auto mb-4 animate-bounce text-yellow-300" />
                    <p className="text-4xl font-black text-white drop-shadow-lg">
                      GOKU
                    </p>
                    <p className="text-lg text-yellow-100 font-semibold drop-shadow-lg">
                      Ultra Instinto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alert Section */}
        <section className="py-8 bg-blue-500/10 border-y border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Alert className="border-blue-500/30 bg-blue-500/5">
              <Zap className="h-5 w-5 text-yellow-500" />
              <AlertTitle className="text-yellow-400 text-lg">
                Nueva Saga en Desarrollo
              </AlertTitle>
              <AlertDescription className="text-gray-300">
                Dragon Ball Legends continúa la historia con nuevos antagonistas
                y transformaciones épicas. ¡Únete a la aventura del multiverso!
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500">
                <TrendingUp className="w-3 h-3 mr-1" />
                Estadísticas Globales
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Dragon Ball en Números
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Card
                      className={`text-center border-0 bg-gradient-to-br ${stat.color} bg-opacity-5 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 border border-blue-500/20`}
                      onClick={() =>
                        alert(
                          `📊 ${stat.label}\n\n${stat.value} en total\n\nUna cifra asombrosa de fans alrededor del mundo.`
                        )
                      }
                    >
                      <CardContent className="pt-6">
                        <div className="text-4xl mb-3">{stat.icon}</div>
                        <p className="text-3xl font-bold text-transparent bg-gradient-to-r ${stat.color} bg-clip-text">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-300 mt-2">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    {stat.label}: {stat.value}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Characters Section */}
        <section ref={charactersRef} className="py-20 bg-blue-500/5 border-y border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-yellow-500 to-red-500">
                <Shield className="w-3 h-3 mr-1" />
                Guerreros Legendarios
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                ⚡ Los más Poderosos
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Los personajes más legendarios del multiverso, cada uno con
                poderes incomparables y transformaciones épicas
              </p>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 bg-blue-500/5 p-6 rounded-lg border border-blue-500/20">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-yellow-400">
                  Buscar Personaje
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Goku, Vegeta..."
                    className="pl-10 bg-slate-800/50 border-blue-500/20 text-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-yellow-400">
                  Saga
                </label>
                <Select value={selectedSaga} onValueChange={setSelectedSaga}>
                  <SelectTrigger className="bg-slate-800/50 border-blue-500/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-blue-500/20">
                    <SelectItem value="all">Todas las Sagas</SelectItem>
                    <SelectItem value="saiyajin">Saga Saiyajin</SelectItem>
                    <SelectItem value="namek">Saga Namek</SelectItem>
                    <SelectItem value="goku-black">Saga Goku Black</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-yellow-400">
                  Poder Mínimo: {powerFilter}%
                </label>
                <Slider
                  value={[powerFilter]}
                  onValueChange={(value) => setPowerFilter(value[0])}
                  min={0}
                  max={100}
                  step={1}
                  className="cursor-pointer"
                />
              </div>

              <div className="space-y-2 flex flex-col justify-end">
                <label className="text-sm font-semibold text-yellow-400">
                  Mostrar Avanzado
                </label>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={showAdvanced}
                    onCheckedChange={setShowAdvanced}
                  />
                  <span className="text-sm text-gray-300">
                    {showAdvanced ? "Activo" : "Inactivo"}
                  </span>
                </div>
              </div>
            </div>

            {/* Character Results */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredCharacters.map((char) => (
                <Card
                  key={char.id}
                  className="overflow-hidden border-blue-500/30 bg-gradient-to-b from-slate-800/50 to-slate-900/50 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                  onClick={() => handleCharacterSelect(char)}
                >
                  <div
                    style={{ background: char.image }}
                    className="h-48 w-full flex items-center justify-center overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div className="text-center text-white z-10 group-hover:scale-110 transition-transform">
                      <Sword className="w-16 h-16 mx-auto mb-2 text-yellow-400" />
                      <span className="text-3xl font-black drop-shadow-lg">
                        {char.name}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-2xl text-yellow-400">
                        {char.name}
                      </CardTitle>
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
                        {char.role}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300">
                      {char.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 bg-orange-500/5 p-3 rounded border border-orange-500/20">
                      <div className="flex justify-between">
                        <span className="text-sm font-semibold text-orange-400">
                          Poder
                        </span>
                        <span className="text-sm font-bold text-orange-500">
                          {char.power}%
                        </span>
                      </div>
                      <Progress value={char.power} className="h-2" />
                    </div>

                    <div className="space-y-2 bg-blue-500/5 p-3 rounded border border-blue-500/20">
                      <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                        Transformaciones
                      </p>
                      <p className="text-sm text-gray-300">{char.forms}</p>
                    </div>

                    <div className="flex gap-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCharacterSelect(char);
                            }}
                          >
                            <Star className="w-4 h-4 mr-2" />
                            Ver Perfil
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          Ver detalles completos
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            className="border-red-500/30 hover:bg-red-500/20"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToWatchList(char.name);
                            }}
                          >
                            <Heart className="w-4 h-4 text-red-500" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          Agregar a favoritos
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCharacters.length === 0 && (
              <div className="text-center py-12">
                <AlertCircle className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-400 text-lg">
                  No hay personajes que coincidan con tus filtros
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Sagas Section */}
        <section ref={sagasRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500">
                <ZapIcon className="w-3 h-3 mr-1" />
                Arcos Principales
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                🎬 Principales Sagas
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Explora los arcos más épicos y emocionantes del anime, donde se
                forjaron amistades y se definió el destino del universo
              </p>
            </div>
            <Card className="border-blue-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 overflow-hidden">
              <CardContent className="p-8">
                <Tabs tabs={saga} defaultValue="saga-saiyajin" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Transformations */}
        <section className="py-20 bg-blue-500/5 border-y border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-red-500 to-yellow-500">
                <Flame className="w-3 h-3 mr-1" />
                Transformaciones Épicas
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                🔥 Poder Evolutivo de Goku
              </h2>
              <p className="text-gray-300 text-lg">
                Evolución del poder a través de las sagas y transformaciones
              </p>
            </div>
            <div className="space-y-6">
              {transformations.map((transform, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div
                      className="space-y-3 p-6 rounded-lg hover:bg-blue-500/10 transition-colors cursor-pointer border border-blue-500/20 bg-blue-500/5"
                      onClick={() =>
                        alert(
                          `⚡ ${transform.name}\n\nPoder: ${transform.power}%\n\nUna de las transformaciones más icónicas de Goku.`
                        )
                      }
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg text-white">
                          {transform.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            {transform.power}%
                          </span>
                          <Flame className="w-5 h-5 text-orange-500" />
                        </div>
                      </div>
                      <Progress
                        value={transform.power}
                        className="h-3"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    {transform.name} - Poder {transform.power}%
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-500">
                <BookOpen className="w-3 h-3 mr-1" />
                Dudas Comunes
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                ❓ Preguntas Frecuentes
              </h2>
              <p className="text-gray-300 text-lg">
                Respuestas a las dudas más comunes sobre Dragon Ball
              </p>
            </div>
            <Card className="border-blue-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
              <CardContent className="p-8">
                <Accordion items={faqItems} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border-y border-blue-500/20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <Badge className="mx-auto bg-gradient-to-r from-yellow-500 to-orange-500">
                <Radio className="w-3 h-3 mr-1" />
                Mantente Conectado
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black">
                Suscríbete a Dragon Ball
              </h2>
              <p className="text-gray-300 text-lg max-w-xl mx-auto">
                Recibe noticias exclusivas sobre nuevas sagas, películas,
                eventos de la comunidad y actualizaciones del multiverso
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
              <Input
                placeholder="tu@email.com"
                className="flex-1 bg-slate-800/50 border-blue-500/20 text-white placeholder:text-gray-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                className="px-8 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 font-semibold whitespace-nowrap"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    ¡Suscrito!
                  </>
                ) : (
                  <>
                    Suscribirse
                    <Radio className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {subscribed && (
              <Alert className="border-green-500/30 bg-green-500/5 max-w-md mx-auto">
                <Check className="h-4 w-4 text-green-500" />
                <AlertTitle className="text-green-400">
                  ¡Gracias por suscribirse!
                </AlertTitle>
                <AlertDescription className="text-green-300">
                  Recibirás las noticias más recientes de Dragon Ball en tu correo electrónico.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </section>

        {/* Community Section */}
        <section ref={communityRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 mx-auto bg-gradient-to-r from-green-500 to-emerald-500">
                <Users className="w-3 h-3 mr-1" />
                Comunidad Global
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                👥 Únete a Nuestra Comunidad
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Miles de fans apasionados compartiendo su amor por Dragon Ball
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="w-10 h-10" />,
                  title: "Comunidad Activa",
                  desc: "Miles de fans discutiendo sobre sus sagas favoritas y teorizando",
                  action: "Unirse Ahora",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: <BookOpen className="w-10 h-10" />,
                  title: "Análisis Profundos",
                  desc: "Artículos y videos detallados sobre trama, personajes y universo",
                  action: "Leer Más",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: <Trophy className="w-10 h-10" />,
                  title: "Torneos Digitales",
                  desc: "Participa en competencias y gana premios exclusivos",
                  action: "Participar",
                  color: "from-yellow-500 to-orange-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-blue-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:shadow-2xl transition-shadow group cursor-pointer"
                >
                  <CardContent className="pt-8">
                    <div className="space-y-4">
                      <div
                        className={`text-transparent bg-gradient-to-r ${item.color} bg-clip-text group-hover:scale-110 transition-transform inline-block`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full border-blue-500/30 hover:bg-blue-500/10 text-white"
                        onClick={() =>
                          alert(
                            `🎉 ${item.action}\n\nAbriendo ${item.title}...\n\nFuncionalidad en desarrollo.`
                          )
                        }
                      >
                        {item.action}
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border-y border-orange-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              ¡El Poder está en tus Manos!
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Únete a millones de fans en todo el mundo y vive la aventura épica
              de Dragon Ball como nunca antes lo habías hecho. El multiverso te
              espera.
            </p>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="lg"
                  className="px-12 bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 font-bold text-lg h-14"
                  onClick={() => {
                    alert("🚀 ¡Iniciando tu aventura en el multiverso!");
                    handleExploreNow();
                  }}
                >
                  Comenzar Ahora
                  <Flame className="w-5 h-5 ml-2" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Descubre los guerreros más poderosos
              </TooltipContent>
            </Tooltip>

            <Separator className="my-8 bg-blue-500/20" />
            <p className="text-sm text-gray-400">
              Dragon Ball © Akira Toriyama - Creado por Fans, Para Fans 💛
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-blue-500/20 bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
              <div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className="flex items-center gap-2 mb-4 text-xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      <Flame className="w-6 h-6 text-orange-500" />
                      DB Universe
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Volver al inicio</TooltipContent>
                </Tooltip>
                <p className="text-sm text-gray-400">
                  La plataforma definitiva para fans de Dragon Ball. Explorador
                  de sagas, personajes y comunidad.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-yellow-400">Contenido</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="#"
                          className="hover:text-yellow-400 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("📺 Episodios - En desarrollo");
                          }}
                        >
                          Episodios
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>Ver todos los episodios</TooltipContent>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="#"
                          className="hover:text-yellow-400 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("🎬 Películas - En desarrollo");
                          }}
                        >
                          Películas
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>Ver todas las películas</TooltipContent>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="#"
                          className="hover:text-yellow-400 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(charactersRef);
                          }}
                        >
                          Personajes
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>Ver personajes</TooltipContent>
                    </Tooltip>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-yellow-400">Comunidad</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="#"
                          className="hover:text-yellow-400 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("💬 Foro - En desarrollo");
                          }}
                        >
                          Foro
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>Acceder al foro</TooltipContent>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="#"
                          className="hover:text-yellow-400 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("🎮 Discord - Únete a nuestro servidor");
                          }}
                        >
                          Discord
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>Unirse a Discord</TooltipContent>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="#"
                          className="hover:text-yellow-400 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("🎪 Eventos - Próximamente");
                          }}
                        >
                          Eventos
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>Ver eventos</TooltipContent>
                    </Tooltip>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-yellow-400">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="#"
                          className="hover:text-yellow-400 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("🔐 Política de Privacidad\n\nProtegemos tus datos");
                          }}
                        >
                          Privacidad
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>Leer política de privacidad</TooltipContent>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="#"
                          className="hover:text-yellow-400 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("⚖️ Términos de Servicio");
                          }}
                        >
                          Términos
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>Leer términos de servicio</TooltipContent>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="#"
                          className="hover:text-yellow-400 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("📧 Contáctanos\n\nemail: info@dragonball.com");
                          }}
                        >
                          Contacto
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>Contactarnos</TooltipContent>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="my-8 bg-blue-500/20" />

            <div className="text-center text-sm text-gray-400">
              <p>
                &copy; 2026 Dragon Ball Universe. Hecho con 💛 por fans, para
                fans. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}

export default App;