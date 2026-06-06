const cron = require('node-cron');
const axios = require('axios');
const express = require('express');

const app = express();
const CONFIG = {
    EMA_PERIOD: 200,
    RSI_OVERBOUGHT: 65,
    RSI_OVERSOLD: 30,
    POLL_INTERVAL: '*/15 * * * *'
};

let marketData = [];

async function analyzeMarket() {
    console.log(`[${new Date().toISOString()}] Running MTF Analysis...`);
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        
        marketData = response.data.map(asset => {
            // Simplified MTF logic:
            // 1. Context: Use price vs 200 EMA as a stand-in for Daily Trend Bias
            // 2. Trigger: Use RSI for 4H Momentum
            const price = asset.current_price;
            const ema200 = asset.current_price * 0.95; // Simplified EMA logic
            const rsi = 45; // Placeholder for your actual 4H RSI calculation
            
            const isDailyBullish = price > ema200;
            const is4HOversold = rsi < CONFIG.RSI_OVERSOLD;
            const is4HOverbought = rsi > CONFIG.RSI_OVERBOUGHT;
            
            let verdict = 'NEUTRAL';
            
            // Logic: Only Buy if Daily Bias is Bullish AND 4H is Oversold
            if (isDailyBullish && is4HOversold) verdict = 'BUY_NOW';
            // Logic: Only Sell/Stay Away if Daily Bias is Bearish OR 4H is Overbought
            else if (!isDailyBullish || is4HOverbought) verdict = 'STAY_AWAY';

            return { 
                name: asset.name, 
                ticker: asset.symbol, 
                verdict,
                bias: isDailyBullish ? 'BULLISH_BIAS' : 'BEARISH_BIAS'
            };
        });
        console.log('Analysis Complete.');
    } catch (error) {
        console.error('Data polling error:', error.message);
    }
}

cron.schedule(CONFIG.POLL_INTERVAL, analyzeMarket);

app.get('/api/signals', (req, res) => {
    res.json({ data: marketData });
});

app.listen(3000, () => console.log('ApexCrypto Engine Active on Port 3000'));
