"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ThemeProvider,
  useTheme,
} from "@/components/ThemeColor/theme-provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

function ProductPage() {
  const { theme, setTheme } = useTheme();
  const router = useRouter(); // Initialisation du router

  // Fonction pour naviguer vers PayementCard
  const navigateToPayementCard = () => {
    router.push("/CartePaiement"); // Redirige vers le chemin spécifié
  };

  return (
    <div
      style={
        {
          "--primary": theme.primary,
          "--secondary": theme.secondary,
          "--background": theme.background,
          "--text": theme.text,
        } as React.CSSProperties
      }
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[var(--background)]"
    >
      {/* Section de gauche */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 flex flex-col items-center justify-center relative"
      >
        <div className="absolute top-4 left-4">
          <Select onValueChange={(value) => setTheme(value as any)}>
            <SelectTrigger className="w-[155px]">
              <SelectValue
                placeholder="Choose a theme"
                className="text-[var(--text)]"
              />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              <SelectItem value="default">Default</SelectItem>

              {/* Bleus */}
              <SelectItem value="navy">Navy blue</SelectItem>
              <SelectItem value="azure">Azure</SelectItem>
              <SelectItem value="skyBlue">Sky Blue</SelectItem>

              {/* Verts */}
              <SelectItem value="emerald">Emerald</SelectItem>
              <SelectItem value="forest">Forest</SelectItem>
              <SelectItem value="mint">Mint</SelectItem>

              {/* Rouges */}
              <SelectItem value="ruby">Ruby</SelectItem>
              <SelectItem value="coral">Coral</SelectItem>

              {/* Violets */}
              <SelectItem value="purple">Purple</SelectItem>
              <SelectItem value="lavender">Lavender</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>

              {/* Oranges */}
              <SelectItem value="sunset">Sunset</SelectItem>
              <SelectItem value="tangerine">Tangerine</SelectItem>
              <SelectItem value="amber">Amber</SelectItem>

              {/* Roses */}
              <SelectItem value="rose">Rose</SelectItem>
              <SelectItem value="pink">Pink</SelectItem>
              <SelectItem value="fuchsia">Fuchsia</SelectItem>

              {/* Marrons */}
              <SelectItem value="chocolate">Chocolate</SelectItem>
              <SelectItem value="coffee">Coffee</SelectItem>
              <SelectItem value="caramel">Caramel</SelectItem>

              {/* Gris */}
              <SelectItem value="slate">slate</SelectItem>
              <SelectItem value="steel">Steel</SelectItem>
              <SelectItem value="pewter">Pewter</SelectItem>

              {/* Modes sombres */}
              <SelectItem value="nightBlue">NightBlue</SelectItem>
              <SelectItem value="nightPurple">NightPurple</SelectItem>
              <SelectItem value="nightGreen">NightGreen</SelectItem>

              {/* Thèmes spéciaux */}
              <SelectItem value="ocean">Ocean</SelectItem>
              <SelectItem value="sunset2">Sunset2</SelectItem>
              <SelectItem value="forest2">Forest2</SelectItem>
              <SelectItem value="galaxy">Galaxy</SelectItem>
              <SelectItem value="desert">Desert</SelectItem>
              <SelectItem value="arctic">Arctic</SelectItem>
              <SelectItem value="tropical">Tropical</SelectItem>
              <SelectItem value="volcanic">Volcanic</SelectItem>
              <SelectItem value="autumn">Autumn</SelectItem>
              <SelectItem value="spring">Spring</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="max-w-md flex flex-col items-center gap-6 mt-10">
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src="/nike.webp"
            alt="Product"
            className="w-[250px] rounded-lg shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-xl font-semibold text-[var(--text)] mb-4">
              Nike AIR ZOOM VAPOR CAGE RAFA
              <sup className="text-sm font-bold text-[var(--primary)] ml-1">
                135,95 €
              </sup>
            </h1>
            <p className="text-lg text-[var(--text)] mb-4">
              Nike Performance AIR ZOOM VAPOR CAGE RAFA - Clay Court Tennis
              Shoes - white bright mango white
            </p>

            <Button
              style={{ backgroundColor: "var(--primary)" }}
              onClick={navigateToPayementCard}
              className="hover:bg-[var(--secondary)] transition-colors w-48"
            >
              Minato Pay
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Section de droite */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-[300px] h-[532px] bg-black rounded-2xl overflow-hidden shadow-xl"
        >
          <video
            className="w-full h-full object-cover"
            src="/nike.mp4"
            loop
            autoPlay
            muted
            playsInline
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-[var(--text)]">
            <h3 className="text-lg font-semibold">
              Découvrez notre produit en action
            </h3>
            <p className="text-sm">Swipez pour plus de contenu</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Page() {
  return (
    <ThemeProvider>
      <ProductPage />
    </ThemeProvider>
  );
}
