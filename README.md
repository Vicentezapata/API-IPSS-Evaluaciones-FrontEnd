# API IPSS Evaluaciones

API REST desarrollada con Express.js para despliegue en Netlify.

## Endpoints disponibles

- `GET /api/Evaluacion1/about` - Retorna información sobre la empresa
- `GET /api/Evaluacion1/services` - Retorna lista de servicios

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

## Despliegue en Netlify

1. Conecta tu repositorio con Netlify
2. Configura el comando de build: `npm run build`
3. Configura la carpeta de publish: `public`
4. El despliegue será automático

## Uso

Una vez desplegado, puedes acceder a los endpoints:
- `https://tu-app.netlify.app/api/Evaluacion1/about`
- `https://tu-app.netlify.app/api/Evaluacion1/services`
