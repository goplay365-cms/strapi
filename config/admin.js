module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e79ec79cbdc29a4027e8b454a97c8ad5'),
  },
});
