export default function handler(req, res) {
  console.log('Function invoked!');
  try {
    // Your code here
    res.status(200).json({ message: 'Hello from the serverless function!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
