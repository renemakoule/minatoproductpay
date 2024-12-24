'use client'
import React, { useState } from 'react';
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import countries from 'world-countries'; // Install "world-countries" library
import { Button } from "@/components/ui/button";
import {
  ThemeProvider,
  useTheme,
} from "@/components/ThemeColor/theme-provider";

// Helper function to get continent for a country
const getContinent = (region: string) => {
  const europe = ["Europe"];
  const asia = ["Asia"];
  const americas = ["Americas"];
  const africa = ["Africa"];

  if (europe.includes(region)) return 'Europe';
  if (asia.includes(region)) return 'Asia';
  if (americas.includes(region)) return 'Americas';
  if (africa.includes(region)) return 'Africa';
  return 'Other';
};

function PaymentCard () {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [continent, setContinent] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { theme, setTheme } = useTheme();

  const handleSelect = (countryCode: string) => {
    setSelectedCountry(countryCode);
    const countryData = countries.find((c) => c.cca2 === countryCode);
    if (countryData) {
      const continent = getContinent(countryData.region);
      setContinent(continent);
    }
  };

  // Filtrer les pays en fonction de la recherche, recherche insensible à la casse
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().startsWith(searchQuery.toLowerCase()) // Filtrer par lettres initiales
  );

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
      className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)]"
    >
      <div className="bg-white shadow-red-400 p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-[var(--text)]">Select Your Payment Country</h1>
        <Select onValueChange={handleSelect}>
          <SelectTrigger className="w-full border border-gray-300 rounded-md px-4 py-2 text-[var(--primary)] focus:outline-none">
            {/* Afficher le nom du pays sélectionné */}
            {selectedCountry
              ? countries.find((c) => c.cca2 === selectedCountry)?.name.common
              : "Select a country"}
          </SelectTrigger>
          <SelectContent>
            {/* Afficher l'input de recherche */}
            <div className="px-4 py-2">
              <input
                type="text"
                placeholder="Search country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none"
              />
            </div>
            {/* Afficher les pays filtrés */}
            <div className="max-h-60 overflow-auto">
              {filteredCountries.length === 0 && (
                <div className="px-4 py-2 text-gray-500">No countries found</div>
              )}
              {filteredCountries.map((country) => (
                <SelectItem key={country.cca2} value={country.cca2}>
                  {country.name.common}
                </SelectItem>
              ))}
            </div>
          </SelectContent>
        </Select>

        {continent && (
          <div className="mt-4">
            {["Europe", "Asia", "Americas"].includes(continent) && (
              <Button style={{ backgroundColor: "var(--primary)" }} className="w-full hover:bg-[var(--secondary)] transition-colors py-2 rounded-md">Pay Card</Button>
            )}
            {continent === "Africa" && (
              <div className="flex gap-4">
                <Button className="flex-1 bg-blue-500 text-white py-2 rounded-md">Pay Card</Button>
                <Button className="flex-1 bg-green-500 text-white py-2 rounded-md">Mobile Pay</Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default function  PayCard () {
  return (
    <ThemeProvider>
      <PaymentCard />
    </ThemeProvider>
  );
}