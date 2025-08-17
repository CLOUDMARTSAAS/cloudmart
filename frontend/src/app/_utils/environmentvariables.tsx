const validateEnvVariableDefinition = (envVariableKey: string, envVariableValue: string | null | undefined, printValue: boolean) => {
  if (envVariableValue) {
    if (printValue) {
      console.log(envVariableKey + " is initialized to: " + apiUrl);
    } else {
      console.log(envVariableKey + " is initialized.");
    }
  } else {
    throw new Error(envVariableKey + " is not defined. Please set it in your environment variables or .env file.");
  }
}

validateEnvVariableDefinition('NEXT_PUBLIC_API_BASE_URL', process.env.NEXT_PUBLIC_API_BASE_URL, true);
validateEnvVariableDefinition('CLERK_SECRET_KEY', process.env.CLERK_SECRET_KEY, true);
validateEnvVariableDefinition('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY', process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, true);

export const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
