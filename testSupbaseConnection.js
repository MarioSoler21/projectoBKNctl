const supabase = require('./supabaseClient');
require('dotenv').config();


const testConnection = async () => {
  const { data, error } = await supabase.auth.admin.listUsers();

  if (error) {
    console.log("ERROR JAJAJAJ");
  } else {
    console.log("To bien");
  }
};

testConnection(); 