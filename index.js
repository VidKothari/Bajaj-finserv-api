const express = require('express');
const app = express();

app.use(express.json());

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: 'Invalid input data',
        });
    }

    const numbers = [];
    const alphabets = [];
    let highestLowerCase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string' && item.length === 1) {
            alphabets.push(item);
            if (item >= 'a' && item <= 'z') {
                if (item > highestLowerCase) {
                    highestLowerCase = item;
                }
            }
        }
    });

    res.json({
        is_success: true,
        user_id: 'Vidit_Kothari_2002',
        email: 'vidit.kothari.vk@gmail.com',
        roll_number: '21BCE3610',
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowerCase ? [highestLowerCase] : [],
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;