---
backgroundColor: 'white'
cover: tgym-plot.gif
coverHeight: 2rem
description: Order Book Trading Gym
endDate: Present
startDate: 03/26/2017
tags: Python, Pandas, Numpy
index: 2
title: Order Book Trading Gym
---

In order to make use of the Order Book Data Aggregator in Reinforcement Learning an gym environment is necessary. Inspired by other environments I created [_Order Book Trading Gym_](https://github.com/joliveros/exchange-data/tree/master/tgym/envs/orderbook).

The trading environment includes parameters for tuning which enable the user to train Deep Neural networks to optimize a policy for maximum profit.

## Key features
- Load data from time series database.
- Several configurable parameters such as _tick interval_, _depth_ (Number of orderbook levels) and many more.
- Cache

## Tech Stack:

- Python
- Pandas
- Numpy
- Order Book Data Aggregator

