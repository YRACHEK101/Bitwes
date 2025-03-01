"use client";

import NewsletterTicker from "./NewsletterTicker";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import FooterSocialLinks from "./FooterSocialsLinks";
import NewsletterSignUp from "./NewsletterSignUp";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <NewsletterTicker />
      
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-20 border-b border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Rejoignez notre newsletter
              </h2>
              <p className="text-gray-400 max-w-md">
                Recevez nos dernières actualités et analyses directement dans votre boîte mail
              </p>
            </div>
            <div className="w-full lg:flex lg:justify-end">
              <NewsletterSignUp
                formClassName="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl bg-gray-800/50 p-2 rounded-lg backdrop-blur-sm"
                formFieldsClassName="flex-1 relative group"
                inputClassName="w-full bg-transparent border border-gray-700 text-white placeholder:text-gray-400 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                buttonClassName="px-6 py-2.5 bg-white text-black font-medium rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 hover:shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          <div className="space-y-5">
            q
            <p className="text-gray-400 text-sm">
              Votre partenaire digital pour des solutions innovantes et performantes
            </p>
          </div>
          
          <nav aria-label="Services et Expertise">
            <h3 className="text-white font-medium mb-4">Nos Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/expertise" className="hover:text-white transition-colors">Expertise</Link></li>
              <li><Link href="/secteurs" className="hover:text-white transition-colors">Secteurs d'Activité</Link></li>
            </ul>
          </nav>

          <nav aria-label="Ressources">
            <h3 className="text-white font-medium mb-4">Ressources</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/actualites" className="hover:text-white transition-colors">Actualités</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/a-propos" className="hover:text-white transition-colors">À Propos</Link></li>
            </ul>
          </nav>

          <nav aria-label="Légal">
            <h3 className="text-white font-medium mb-4">Informations Légales</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link></li>
              <li><Link href="/confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Bitwas.Tous droits réservés. Créé par Liadtech.
          </p>
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
}