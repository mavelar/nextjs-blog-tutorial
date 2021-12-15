export default function handler(req, res) {
    const email = req.body.email || 'no email';
    res.status(200).json({ text: 'Hello', email: email });
}