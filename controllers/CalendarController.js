const { createClient } = require("@supabase/supabase-js");

const supabaseAnonClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);


exports.getAllAsesorias = async (req, res) => {
  try {
    const { data, error } = await supabaseAnonClient.from('calendario').select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener asesorías', detalle: error.message });
  }
};

// Crear una nueva asesoría
exports.createAsesoria = async (req, res) => {
  try {
    const { name, date, time, topic } = req.body;
    const { data, error } = await supabaseAnonClient
      .from('calendario')
      .insert([{ name, date, time, topic }])
      .select();

    if (error) throw error;
    res.status(201).json({ message: 'Asesoría creada', data });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear asesoría', detalle: error.message });
  }
};

// Obtener una asesoría por ID
exports.getAsesoriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabaseAnonClient
      .from('calendario')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar asesoría', detalle: error.message });
  }
};

// Actualizar una asesoría
exports.updateAsesoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, time, topic } = req.body;
    const { data, error } = await supabaseAnonClient
      .from('calendario')
      .update({ name, date, time, topic })
      .eq('id', id)
      .select();

    if (error) throw error;
    res.status(200).json({ message: 'Asesoría actualizada', data });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar asesoría', detalle: error.message });
  }
};

// Eliminar una asesoría
exports.deleteAsesoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabaseAnonClient
      .from('calendario')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.status(200).json({ message: `Asesoría con ID ${id} eliminada` });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar asesoría', detalle: error.message });
  }
};
