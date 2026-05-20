(function () {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.seven5.kelasi';

  window.KELASI_SITE_CONFIG = {
    apiBaseUrl: 'https://ma-kelasi.onrender.com',
    contactUrl: 'contact.html#demo',
    whatsappUrl: 'https://wa.me/243810239619',
    playStoreUrl,

    download: {
      androidUrl: playStoreUrl,
      desktopUrl: '',
      playStoreUrl,
      contactUrl: 'contact.html#demo',
    },

    tutorials: {
      endpoint: '/tutorials',
      language: 'fr',
    },

    pricing: {
      endpoint: '',
      plans: [
        {
          id: 'basique',
          name: 'Basique',
          label: 'Démarrage',
          prices: {
            monthly: { price: '0 $', period: 'pendant 2 mois' },
            yearly: { price: '0 $', period: 'pendant 2 mois' },
          },
          description: 'Pour découvrir KELASI avec un accompagnement complet à la mise en place.',
          features: [
            'Gestion complète des élèves et perceptions',
            'Accès même sans connexion internet',
            'Formation initiale et bien-être utilisateur',
            'Configuration personnalisée de votre établissement',
          ],
          actionLabel: "Commencer l'essai gratuit",
          actionUrl: 'contact.html#demo',
          highlighted: false,
        },
        {
          id: 'standard',
          name: 'Standard',
          label: 'Populaire',
          prices: {
            monthly: { price: '15 $', period: '/mois' },
            yearly: { price: '150 $', period: '/an' },
          },
          description: 'La solution complète pour la gestion quotidienne de votre établissement.',
          features: [
            'Gestion des élèves et professeurs',
            'Perception en temps réel',
            'Impression de reçus',
            'Rapports personnalisés',
          ],
          actionLabel: "Démarrer maintenant",
          actionUrl: 'contact.html#demo',
          highlighted: true,
        },
        {
          id: 'avancee',
          name: 'Avancée',
          label: 'Complet',
          prices: {
            monthly: { price: '22 $', period: '/mois' },
            yearly: { price: '200 $', period: '/an' },
          },
          description: 'Pour les écoles qui veulent maîtriser l\'ensemble de leur gestion académique et administrative.',
          features: [
            'Tout ce qui est inclus dans Standard',
            'Alertes par SMS pour les parents (paiements, absences)',
            'Répartition détaillée et transparente des frais par catégorie',
            'Cotatation, moyennes, délibérations et bulletins scolaires automatisés',
            'Support prioritaire et accompagnement continu',
          ],
          actionLabel: 'Contacter Seven 5',
          actionUrl: 'contact.html#demo',
          highlighted: false,
        },
      ],
    },
  };
})();
