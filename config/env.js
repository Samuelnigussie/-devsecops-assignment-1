
const config = {
  appName:      process.env.APP_NAME      || '',
  port:         process.env.PORT          || 3000,
  databaseUrl:  process.env.DATABASE_URL  || '',
  smsApiKey:    process.env.SMS_API_KEY   || '',
};

module.exports = config;