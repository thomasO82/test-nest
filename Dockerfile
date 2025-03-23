FROM node:23

WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./
COPY prisma ./prisma/

# Installer les dépendances
RUN npm install

# Générer le client Prisma
RUN npx prisma generate

# Copier le reste du code
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "run", "start:dev"]