import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '/',
    plugins: [react({
        babel:{
          configFile: true
        }
    })],
    server: {    
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000  
        port: 3000, 
    },
    build: {
    rollupOptions: {
      output: {
        /**
         * 2. Use in function form
         * Package all third-party packages into one chunk, named vendor
         */
        manualChunks(id, { getModuleInfo, getModuleIds }) {
          if (id.includes('antd')) {
            return 'antd';
          }
          if(id.includes("tailwind")){
              return "tailwind";
          }
         if(id.includes('react')){
             return "react";
         }
         if(id.includes("workbox")){
             return "workbox";
         }
        if(id.includes("azure")){
             return "azure";
         }
         if(id.includes("google")){
             return "google";
         }
         if(id.includes("testing")){
             return "testing";
         }
         else return "vendor";
        },
      },
    },
  },
    
})
