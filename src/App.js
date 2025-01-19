import React, { useState, useEffect } from "react";
import {
  Mic,
  MapPin,
  Volume2,
  Moon,
  Sun,
  CreditCard,
  ChevronLeft,
  User,
  Lock,
  Mail,
  Calendar,
  Check,
  Settings,
  Car,
  Accessibility,
  Search,
  Star,
  Users,
} from "lucide-react";
import './index.css';
const App = () => {
  const [currentScreen, setCurrentScreen] = useState("splash");
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (currentScreen === "splash") {
      const timer = setTimeout(() => {
        setCurrentScreen("onboarding");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case "splash":
        return (
          <div className="flex flex-col items-center justify-center h-screen bg-blue-700">
            <img
              src="/logo_w.svg"
              alt="Handimove Logo"
              className="w-60 h-60 mb-8"
            />
            <div className="text-white text-4xl font-bold mb-4">Handimove</div>
            <div className="text-white text-xl">
              Transport accessible pour tous
            </div>
          </div>
        );

      case "onboarding":
        return (
          <div className="flex flex-col items-center justify-center h-screen p-6">
            <img
              src="/logo.svg"
              alt="Handimove Logo"
              className="w-60 h-60 mb-6"
            />
            <div className="text-3xl font-bold mb-8">
              Bienvenue sur Handimove
            </div>
            <div className="space-y-4 mb-8 text-center">
              <p>Réservez votre transport adapté facilement</p>
              <p>Navigation vocale disponible</p>
              <p>Assistance 24/7</p>
            </div>
            <div className="space-y-4 w-full max-w-sm">
              <button
                className="w-full h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setCurrentScreen("login")}
              >
                Se connecter
              </button>
              <button
                className="w-full h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setCurrentScreen("register")}
              >
                Créer un compte
              </button>
            </div>
          </div>
        );

      case "login":
        return (
          <div
            className={`p-6 ${
              darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
            }`}
          >
            <button
              className={`flex items-center ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } mb-6`}
              onClick={() => setCurrentScreen("onboarding")}
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Retour
            </button>

            <div className="text-2xl font-bold mb-6">Connexion</div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="login-email"
                  className="block text-sm font-medium"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    id="login-email"
                    type="email"
                    className={`w-full h-12 pl-10 pr-4 rounded-lg border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "border-gray-300"
                    }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Mail className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium"
                >
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    id="login-password"
                    type="password"
                    className={`w-full h-12 pl-10 pr-4 rounded-lg border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "border-gray-300"
                    }`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Lock className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>

              <button
                className="w-full h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setCurrentScreen("home")}
              >
                Se connecter
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span
                    className={`px-2 ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    }`}
                  >
                    Ou
                  </span>
                </div>
              </div>

              <button
                className="w-full h-12 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                onClick={() => setCurrentScreen("home")}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continuer avec Google
              </button>
            </div>
          </div>
        );

      case "home":
        return (
          <div className={`p-6 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
            <div
              className={`flex justify-between items-center mb-6 ${
                darkMode ? "text-white" : ""
              }`}
            >
              <div className="text-2xl font-bold">Handimove</div>
              <button
                className="p-2 rounded-full hover:bg-gray-200"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )}
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="text-xl font-bold mb-4">Nouvelle réservation</div>

              <div className="space-y-4">
                <div className="flex gap-2">
                  <input
                    placeholder="Point de départ"
                    className="flex-grow h-12 px-4 rounded-lg border border-gray-300"
                  />
                  <button className="p-3 bg-gray-100 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </button>
                  <button className="p-3 bg-gray-100 rounded-lg">
                    <Mic className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex gap-2">
                  <input
                    placeholder="Destination"
                    className="flex-grow h-12 px-4 rounded-lg border border-gray-300"
                  />
                  <button className="p-3 bg-gray-100 rounded-lg">
                    <Volume2 className="w-6 h-6" />
                  </button>
                </div>

                <button
                  className="w-full h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setCurrentScreen("available-buses")}
                >
                  Rechercher un bus
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-xl font-bold mb-4">Mes réservations</div>
              <div className={darkMode ? "text-gray-300" : "text-gray-500"}>
                Aucune réservation en cours
              </div>
            </div>
          </div>
        );

      case "available-buses":
        return (
          <div
            className={`p-6 ${
              darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <button
                className="flex items-center text-gray-600 hover:text-gray-900"
                onClick={() => setCurrentScreen("home")}
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Retour
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                {darkMode ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Filtres */}
            <div
              className={`p-4 rounded-lg shadow-md mb-4 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-bold">Filtres</div>
                <button className="flex items-center text-blue-600 hover:text-blue-700">
                  <Settings className="w-4 h-4 mr-2" />
                  Filtrer
                </button>
              </div>
              <div className="flex gap-2 overflow-x-auto py-2">
                <button className="px-3 py-1 border rounded-full whitespace-nowrap">
                  Rampe d'accès
                </button>
                <button className="px-3 py-1 border rounded-full whitespace-nowrap">
                  Assistance
                </button>
                <button className="px-3 py-1 border rounded-full whitespace-nowrap">
                  Places PMR
                </button>
                <button className="px-3 py-1 border rounded-full whitespace-nowrap">
                  Guide audio
                </button>
              </div>
            </div>

            {/* Liste des bus */}
            <div className="space-y-4">
              {[1, 2, 3].map((bus) => (
                <div
                  key={bus}
                  className={`p-4 rounded-lg shadow-md cursor-pointer ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                  onClick={() => setCurrentScreen("bus-details")}
                  role="button"
                  tabIndex={0}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="text-lg font-bold mb-1">Bus {bus}</div>
                      <div
                        className={`text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        Disponible dans 15 min
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>4.8</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      2 places PMR
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Assistant
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Accessibility className="w-4 h-4" />
                      <span>Équipé PMR</span>
                    </div>
                    <div className="text-lg font-bold">25TND</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "bus-details":
        return (
          <div
            className={`p-6 ${
              darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
            }`}
          >
            <button
              className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
              onClick={() => setCurrentScreen("available-buses")}
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Retour
            </button>

            <div className="space-y-6">
              {/* En-tête */}
              <div>
                <h2 className="text-2xl font-bold mb-2">Bus Standard PMR</h2>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>4.8 (120 avis)</span>
                </div>
              </div>

              {/* Caractéristiques */}
              <div
                className={`p-4 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="text-lg font-bold mb-4">Équipements</div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Accessibility className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Places PMR</div>
                      <div className="text-sm text-gray-500">
                        2 emplacements
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-medium">Assistant</div>
                      <div className="text-sm text-gray-500">Disponible</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-purple-500" />
                    <div>
                      <div className="font-medium">Guide Audio</div>
                      <div className="text-sm text-gray-500">Intégré</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-orange-500" />
                    <div>
                      <div className="font-medium">Rampe d'accès</div>
                      <div className="text-sm text-gray-500">Automatique</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Options supplémentaires */}
              <div
                className={`p-4 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="text-lg font-bold mb-4">
                  Options supplémentaires
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="assistant"
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <label htmlFor="assistant">Assistant dédié</label>
                    </div>
                    <span>+10TND</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="guide"
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <label htmlFor="guide">Guide audio personnalisé</label>
                    </div>
                    <span>+5TND</span>
                  </div>
                </div>
              </div>

              {/* Détails du trajet */}
              <div
                className={`p-4 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="text-lg font-bold mb-4">Détails du trajet</div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Prix de base</span>
                    <span>25TND</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Options</span>
                    <span>+15TND</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold mt-4">
                    <span>Total</span>
                    <span>40TND</span>
                  </div>
                </div>
              </div>

              {/* Bouton de réservation */}
              <button
                className="w-full h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setCurrentScreen("payment")}
              >
                Réserver maintenant
              </button>
            </div>
          </div>
        );

      case "payment":
        return (
          <div
            className={`p-6 ${
              darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
            }`}
          >
            <button
              className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
              onClick={() => setCurrentScreen("bus-details")}
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Retour
            </button>

            <div className="space-y-6">
              <div className="text-2xl font-bold">Paiement</div>

              {/* Récapitulatif */}
              <div
                className={`p-4 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div>Trajet</div>
                    <div>25,00 TND</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Options</div>
                    <div>15,00 TND</div>
                  </div>
                  <hr
                    className={darkMode ? "border-gray-700" : "border-gray-200"}
                  />
                  <div className="flex justify-between font-bold">
                    <div>Total</div>
                    <div>40,00 TND</div>
                  </div>
                </div>
              </div>

              {/* Formulaire de paiement */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="card" className="block text-sm font-medium">
                    Numéro de carte
                  </label>
                  <div className="relative">
                    <input
                      id="card"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className={`w-full h-12 pl-10 pr-4 rounded-lg border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700"
                          : "border-gray-300"
                      }`}
                    />
                    <CreditCard className="absolute left-3 top-3 text-gray-400" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 space-y-2">
                    <label
                      htmlFor="expiry"
                      className="block text-sm font-medium"
                    >
                      Date d'expiration
                    </label>
                    <input
                      id="expiry"
                      placeholder="MM/AA"
                      className={`w-full h-12 px-4 rounded-lg border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700"
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label htmlFor="cvv" className="block text-sm font-medium">
                      CVV
                    </label>
                    <input
                      id="cvv"
                      type="password"
                      maxLength={3}
                      className={`w-full h-12 px-4 rounded-lg border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700"
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                </div>

                <button
                  className="w-full h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setCurrentScreen("confirmation")}
                >
                  Payer 40,00 TND
                </button>
              </div>
            </div>
          </div>
        );

      case "confirmation":
        return (
          <div
            className={`flex flex-col items-center justify-center min-h-screen p-6 ${
              darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Check className="text-green-600 w-8 h-8" />
            </div>
            <div className="text-2xl font-bold mb-2">
              Réservation confirmée !
            </div>
            <div className="text-gray-500 mb-8 text-center">
              Votre chauffeur arrivera à l'heure prévue
            </div>
            <button
              className="w-full max-w-sm h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setCurrentScreen("home")}
            >
              Retour à l'accueil
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      {renderScreen()}
    </div>
  );
};

export default App;
