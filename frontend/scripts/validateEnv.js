const dotenv = require('dotenv');
dotenv.config({ path: '.env' }); 

const validateEnvVariableDefinition = (envVariableKey, printValue) => {
  if (process.env[envVariableKey]) {
    if (printValue) {
      console.log(envVariableKey + " is initialized to: " + process.env[envVariableKey]);
    } else {
      console.log(envVariableKey + " is initialized.");
    }
  } else {
    throw new Error(envVariableKey + " is not defined. Please set it in your environment variables or .env file.");
  }
}

validateEnvVariableDefinition('NEXT_PUBLIC_API_BASE_URL', true);
validateEnvVariableDefinition('CLERK_SECRET_KEY', false);
validateEnvVariableDefinition('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY', false);
