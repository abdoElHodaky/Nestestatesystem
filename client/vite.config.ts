import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '/',
    plugins: [
        react({
        babel:{
          configFile: true
        }
    }),
    VitePWA({
           registerType:"auto",
            workbox: {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{css,png,jpg,ico,js,txt}'
	],
	//navigateFallback:"/offline",
	runtimeCaching: [{
    urlPattern: ({request, url}) =>url.includes("cdn")==true,
    handler: 'NetworkFirst',
    options: {
      cacheName: 'cdns',
      expiration: {
        maxEntries: 20,
	maxAgeSeconds: 2 * 24 * 60 * 60,
      },
      cacheableResponse:{
	statuses: [0, 200]
      }
    },
  },{
    urlPattern: ({request, url}) => request.method=="POST",
    handler:"NetworkOnly",
    method:"POST",
    options:{
      cacheName:"apCachePost",
      cacheableResponse:{
	statuses: [0, 200]
      },
      backgroundSync:{
       name:"Apisync",
       options:{
    	maxRetentionTime:24*60*2
       }
      }
    }
  },{
    urlPattern: ({request, url}) =>url.includes("fonts")==true,
    handler: 'NetworkFirst',
    options: {
      cacheName: 'cdns',
      expiration: {
        maxEntries: 20,
	maxAgeSeconds: 2 * 24 * 60 * 60,
      },
      cacheableResponse:{
	statuses: [0, 200]
      }
    }
  }],
   swDest: 'public/sw.js'
     }})
    ],
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
        if (id.includes("node_modules")) 
        {
          return id.toString().split("node_modules/")[1].split("/")[0].toString();
        }
        else if (id.includes("src"))
        {
          return "src";
        }
        else
        { 
          return "index";
        }
      /*  if (id.includes('antd')) {
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
        if(id.includes("@azure")){
             return "azure";
         }
         if(id.includes("google")){
             return "google";
         }
         if(id.includes("hookform")){
             return "hookform";
         }*/
        },
      },
    },
  },
    
})
