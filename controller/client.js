import Client from "../model/User.js";

export const clientregister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newClient = new Client({ name, email, password });
    await newClient.save();
    res.status(201).json({ message: 'Client registered successfully', client: newClient });
  } catch (error) {
    res.status(500).json({ message: 'Error registering client', error: error.message });
  }
};
export const clientlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const client = await Client.findOne({ email});
    if (!client) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (client.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Client logged in successfully', client });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in client', error: error.message });
  }
};