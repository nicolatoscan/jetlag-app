import type { ManifestOptions } from 'vite-plugin-pwa';

export default {
  name: 'JetLag',
  short_name: 'JetLag',
  description: 'JetLag The Game',
  categories: ['education', 'productivity'],
  dir: 'ltr',
  scope: '/',
  start_url: '/',
  display: 'standalone',
  background_color: '#094D4E',
  theme_color: '#094D4E',
  id: "?homescreen=1",
  launch_handler: {
    client_mode: "auto"
  },
  edge_side_panel: {
    "preferred_width": 480
  },
  display_override: ["window-controls-overlay", "fullscreen", "minimal-ui"]
} as Partial<ManifestOptions>;