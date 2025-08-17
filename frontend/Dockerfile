# Build stage
FROM node:23-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the code and build
COPY . .
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ARG CLERK_SECRET_KEY
ARG NEXT_PUBLIC_API_BASE_URL
RUN echo NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY > .env.local 
RUN echo CLERK_SECRET_KEY=$CLERK_SECRET_KEY >> .env.local
RUN echo NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL >> .env.local
RUN npm run build

# Production stage
FROM node:23-alpine AS runner
LABEL name="cloudmartfe"
LABEL version="0.0.6-SNAPSHOT"
WORKDIR /app

# Install only runtime dependencies
COPY package.json package-lock.json ./
RUN npm install --omit=dev

# Copy built assets from builder stage
COPY --from=builder /app/.next/ ./.next/
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./

EXPOSE 3000
CMD ["npm", "run", "start"]
