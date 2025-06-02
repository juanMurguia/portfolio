import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Globe,
  Palette,
  Search,
  Shield,
  ShoppingCart,
  Smartphone,
  Zap,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-gray-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30">
            Desarrollo Web Profesional
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Tipos de Página Web
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Productos que ofrezco para llevar tu negocio al siguiente nivel
            digital
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-500/25 border border-purple-500/50"
              asChild
            >
              <a href="#planes">Ver Servicios</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="planes" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Planes
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Soluciones web adaptadas a cada necesidad y presupuesto
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Landing Express */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    <Zap className="w-3 h-3 mr-1" />
                    Express
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">
                      ARS 150.000
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                  Landing Express
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Presencia inmediata para emprendimientos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-green-400">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">Entrega: 48h hábiles</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      1 página scrolleable con 4 secciones
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Hasta 6 fotos optimizadas
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Botones a redes sociales
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      WhatsApp flotante personalizado
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      SEO optimizado para Google
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">7 días de soporte</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <p className="text-purple-300 text-sm font-medium mb-2">
                    Ideal para:
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Emprendimientos que necesitan presencia inmediata</li>
                    <li>• Negocios con presupuesto ajustado</li>
                    <li>• Lanzamientos rápidos de productos o servicios</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Presencia Plus */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    <Globe className="w-3 h-3 mr-1" />
                    WordPress
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">
                      ARS 350.000
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                  Presencia Plus
                </CardTitle>
                <CardDescription className="text-gray-400">
                  WordPress editable para marcas que buscan confianza
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">
                    Entrega: 7-10 días hábiles
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Hasta 5 secciones editables
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Formulario de contacto con antispam
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Integración automática con Instagram
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">WhatsApp flotante</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Optimizado para Google
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Podés editar contenido sin código
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <p className="text-purple-300 text-sm font-medium mb-2">
                    Ideal para:
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Marcas que quieren generar confianza</li>
                    <li>• Negocios que publican contenido regularmente</li>
                    <li>• Empresas que necesitan formularios de contacto</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Experiencia Premium */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                    <Palette className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">
                      ARS 600.000
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                  Experiencia Premium
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Diseño personalizado con impacto visual fuerte
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-purple-400">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">
                    Entrega: 10-15 días hábiles
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Landing page hasta 4 secciones
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">100% personalizable</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Editable sin código</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Animaciones y microinteracciones
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Efectos al hacer scroll
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Optimizado para Google
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <p className="text-purple-300 text-sm font-medium mb-2">
                    Ideal para:
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Marcas que necesitan impacto visual</li>
                    <li>• Startups tecnológicas</li>
                    <li>• Agencias y estudios creativos</li>
                    <li>• Lanzamientos de productos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Tu Tienda Online */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    E-commerce
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">
                      ARS 500.000
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                  Tu Tienda Online
                </CardTitle>
                <CardDescription className="text-gray-400">
                  E-commerce completo listo para vender
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Hasta 10 productos incluidos
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Autogestión de productos
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Hasta 65 plantillas para personalizar
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Dominio propio compatible
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Todos los medios de pago (Mercado Pago)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Pagos personalizados activados
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Todos los métodos de envío
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Envíos personalizados</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <p className="text-purple-300 text-sm font-medium mb-2">
                    Ideal para:
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Negocios que venden productos físicos</li>
                    <li>• Emprendedores que quieren vender online</li>
                    <li>• Marcas que necesitan gestión de inventario</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clarifications Section */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Información Importante
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  Incluido en todos los planes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Smartphone className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Diseño responsive (celulares, tablets, computadoras)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Search className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    SEO optimizado para aparecer en Google
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Carga optimizada</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Certificado SSL</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400">
                  <Globe className="w-5 h-5 text-purple-400" />
                  Sobre dominio y hosting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-300 text-sm">
                <p>
                  • Si ya tenés dominio y hosting, trabajamos sobre eso sin
                  problema
                </p>
                <p>• Podemos asesorarte o gestionarlo por vos</p>
                <p>• Subdominio gratuito disponible (solo planes Express)</p>
                <p className="text-yellow-400">
                  🚫 Ningún plan incluye dominio ni hosting gratuito por defecto
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400">
                  <Clock className="w-5 h-5 text-purple-400" />
                  Términos de pago
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-sm">
                <p>• Se debe abonar el 50% de seña para comenzar el trabajo</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400">
                  <Shield className="w-5 h-5 text-purple-400" />
                  Sobre plugins y plantillas premium
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-sm">
                <p>
                  ⚠️ Algunos complementos o diseños avanzados (WordPress o
                  Framer) pueden tener un costo adicional. En ese caso, siempre
                  te lo informamos antes de usarlos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-gray-900 to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            ¿Listo para llevar tu negocio online?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Elegí el plan que mejor se adapte a tus necesidades y empezá a
            vender hoy mismo
          </p>

          <div className="flex justify-center">
            <Button
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-500/25 border border-purple-500/50"
              asChild
            >
              <a
                href="https://wa.me/541168334891?text=Hola%20Juan%2C%20me%20interesa%20el%20plan...."
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Desarrollo Web Profesional. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
