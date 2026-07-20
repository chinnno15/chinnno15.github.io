---
backgroundColor: '#0d2233'
cover: cover.png
description: Real-time crypto order-book data platform and distributional-RL trading research system.
endDate: Present
startDate: 03/26/2017
tags: Rust, Python, PyTorch, QuestDB, Docker Swarm
index: 5
title: Order-Book RL Trading System
---

# Crypto Order-Book Reinforcement-Learning Trading System

A long-running personal research platform for real-time cryptocurrency market-data collection and reinforcement-learning trading. I built the full stack end to end — from a low-latency Rust market-data ingest path, through a time-series data platform, an RL training and backtesting pipeline, a live execution service, and a Next.js dashboard — to study whether deep-RL agents can learn tradable signals from order-book microstructure.

## Real-Time Data Collection

**Market-Data Ingest (Rust)**: Production WebSocket emitters subscribe to the full Binance USDⓈ-M perpetual-futures universe, reconstruct a per-symbol limit order book, and snapshot it as a compact numeric "order-book image." Rewriting this hot path from Python to Rust cut CPU roughly 8×, letting the production host shrink by two instance sizes.
**Write-Path Engineering**: Collapsing aggregate-trade ingestion to a single ordered writer eliminated an out-of-order write storm in the time-series database, dropping its CPU from several hundred percent to the low tens.
**Time-Series Platform**: Order-book snapshots and aggregate trades stream over InfluxDB Line Protocol into QuestDB; metadata and trading config live in PostgreSQL (via Prisma), training frames and model checkpoints in an S3-compatible object store (MinIO), with Redis for queues and caching.
**Scale & Retention**: The pipeline ingests tens of gigabytes of order-book and trade data per day under a documented retention budget, with resilient WebSocket reconnection treated as a first-class data-integrity concern.

#[Real-time market-data collection pipeline](arch-data.png)

## Reinforcement Learning

**Distributional RL**: Trains Implicit Quantile Network (IQN) agents over an axial-attention encoder that treats each order-book frame as an image, with CVaR risk shaping, prioritized experience replay, and an imitation-warmup phase. A DQN variant and supervised ViT / ConvNeXt image-classification baselines round out the experiments.
**Custom Gym Environment**: A Gymnasium trading environment models position state, fees, slippage, and maker fills, exposing a compact engineered state vector (position, PnL, spread, trend, and optional microstructure features).
**Hyperparameter Search**: Optuna (TPE, multivariate) drives large-scale walk-forward studies across GPU workers, with reproducibility guardrails such as deterministic action selection shared across training, backtest, and live code paths.

#[RL training, backtesting, and live-execution flow](arch-rl.png)

## Backtesting & Live Execution

**Walk-Forward Backtesting**: A backtest engine validates candidate models strictly out-of-sample behind a deploy-gate before any model is promoted.
**Live / Paper Executor**: A coordinator service reads database-driven trading config and runs one process per enabled symbol, sourcing live frames from QuestDB and executing against a real futures account with client-side catastrophic stops.
**Web Dashboard**: A Next.js / React / TypeScript app for trading configuration, order-book heatmaps, backtest charts, and model-deployment views, secured with NextAuth and reading the time-series store directly.
**Infrastructure & Observability**: Everything ships as Docker Swarm stacks across multiple cloud contexts — one host for data services, GPU boxes for training and backtesting — with a StatsD → Telegraf → QuestDB → Grafana metrics pipeline and 80%+ test coverage enforced in CI.

## Results

The platform reliably collects the full perpetual-futures order-book universe in real time and supports rapid RL experimentation — training, walk-forward backtesting, and live paper trading from a single codebase. The research itself stayed honest about its own conclusions: across pure-RL and imitation approaches, order-book microstructure did not yield a robust out-of-sample edge, and disciplined walk-forward validation is what surfaced that verdict. The durable outcome is the engineering — a low-latency Rust ingest path, a resilient time-series pipeline, and reproducible RL infrastructure.

## Tech Stack:

- Rust (Tokio)
- Python
- PyTorch
- Optuna
- Gymnasium
- QuestDB
- PostgreSQL / Prisma
- MinIO (S3)
- Redis
- Celery
- Next.js / React / TypeScript
- Docker Swarm
- AWS / GCP
- Grafana / Telegraf / StatsD
- Parquet / PyArrow
