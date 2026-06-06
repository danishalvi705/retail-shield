from flask import Flask, jsonify
from apscheduler.schedulers.background import BackgroundScheduler
import requests
import pandas as pd
import time

app = Flask(__name__)

# Configuration
CONFIG = {
    'EMA_PERIOD': 200,
    'RSI_OVERBOUGHT': 65,
    'RSI_OVERSOLD': 30
}

market_data = []

def calculate_indicators(data):
    # Using Pandas to calculate RSI (Simplified)
    # In a real environment, you'd use a rolling window
    df = pd.DataFrame(data)
    df['ema_200'] = df['current_price'].rolling(window=200).mean() # Simplified EMA
    df['rsi'] = 50 # Placeholder for actual RSI calculation
    return df

def analyze_market():
    global market_data
    print(f"[{time.ctime()}] Running MTF Analysis...")
    try:
        response = requests.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
        assets = response.json()
        
        df = calculate_indicators(assets)
        
        results = []
        for index, row in df.iterrows():
            price = row['current_price']
            ema = row['ema_200'] if pd.notnull(row['ema_200']) else price
            rsi = row['rsi']
            
            is_bullish = price > ema
            verdict = 'NEUTRAL'
            
            if is_bullish and rsi < CONFIG['RSI_OVERSOLD']:
                verdict = 'BUY_NOW'
            elif not is_bullish or rsi > CONFIG['RSI_OVERBOUGHT']:
                verdict = 'STAY_AWAY'
                
            results.append({
                'name': row['name'],
                'verdict': verdict,
                'bias': 'BULLISH' if is_bullish else 'BEARISH'
            })
        
        market_data = results
        print("Analysis Complete.")
    except Exception as e:
        print(f"Error: {e}")

# Schedule the task every 15 minutes
scheduler = BackgroundScheduler()
scheduler.add_job(analyze_market, 'interval', minutes=15)
scheduler.start()

@app.route('/api/signals')
def get_signals():
    return jsonify({"data": market_data})

if __name__ == '__main__':
    # Initial run
    analyze_market()
    app.run(port=3000)
