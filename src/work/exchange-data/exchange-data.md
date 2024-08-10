---
backgroundColor: 'white'
cover: cover.png
coverHeight: 2rem
description: Binance Order Book Data Aggregator
endDate: Present
startDate: 03/26/2017
tags: Python, Pandas, Numpy, InfluxDB, Redis
index: 2
title: Binance Order Book Data Aggregator
---

Binance provides a simple Websockets API which I made use of to create an [Orderbook Data Aggregator](https://github.com/chinnno15/exchange-data).

## Key features
- Provide the `OrderBookFrame` class which has several parameters for customizing the output which is a Pandas Dataframe.
  ```python
  from exchange_data.data.orderbook_frame import OrderBookFrame

  df = OrderBookFrame().frame

  print(df)
  ```
  Output
  ```shell

  best_ask  best_bid                                      orderbook_img                    dtype  macd_diff
  time
  2023-04-20 18:53:30+00:00  5.003906  5.003906  [[[0.0], [0.0], [0.0], [0.0], [0.0], [0.5], [0...  <class 'numpy.float16'>        NaN
  2023-04-20 18:54:00+00:00  5.015625  5.011719  [[[0.0], [0.0], [0.0], [0.0], [0.0], [0.0], [0...  <class 'numpy.float16'>        NaN
  2023-04-20 18:54:30+00:00  5.011719  5.011719  [[[0.0], [0.0], [0.0], [0.0], [0.0], [0.0], [0...  <class 'numpy.float16'>        NaN
  2023-04-20 18:55:00+00:00  5.007812  5.003906  [[[0.0], [0.5], [0.5], [0.5], [0.5], [0.5], [0...  <class 'numpy.float16'>        NaN
  2023-04-20 18:55:30+00:00  5.003906  5.003906  [[[0.5], [0.5], [0.5], [0.5], [0.5], [0.5], [0...  <class 'numpy.float16'>        NaN
  ...                             ...       ...                                                ...                      ...        ...
  2023-04-20 20:51:30+00:00  5.039062  5.035156  [[[0.5], [0.5], [0.5], [0.5], [0.5], [0.5], [0...  <class 'numpy.float16'>        NaN
  2023-04-20 20:52:00+00:00  5.031250  5.031250  [[[0.5], [0.5], [0.0], [0.0], [0.0], [0.5], [0...  <class 'numpy.float16'>  -0.001544
  2023-04-20 20:52:30+00:00  5.031250  5.027344  [[[0.5], [0.5], [0.5], [0.5], [0.5], [0.5], [0...  <class 'numpy.float16'>        NaN
  2023-04-20 20:53:00+00:00  5.027344  5.027344  [[[0.5], [0.0], [0.0], [0.5], [0.5], [0.5], [0...  <class 'numpy.float16'>  -0.002028
  2023-04-20 20:53:30+00:00  5.027344  5.023438  [[[0.5], [0.0], [0.5], [0.5], [0.5], [0.5], [0...  <class 'numpy.float16'>        NaN

  [241 rows x 5 columns]
  ```
- High Performance In-Memory Binary Tree Order Book implementation `OrderBook` class.
- Select any aggregation time interval necessary. From milliseconds to several seconds or minutes by selecting the available intervals in `TimeEmitter` class.
- High Resolution. Can store thousands of Order Book levels compared to pay-to-use SaaS platforms which only allow 1 minute resolution and limited number of Order Book levels which can be set by using the `group_by` parameter in `OrderBookFrame` class.
- Observability and alerts built with Grafana and Telegraf.
- Extensibility - Currently the aggregator can capture and store orderbook levels from binance.com. However, by copying and modifying `SymbolEmitter` anyone can easily add other exchanges.

## Tech Stack:

- Python
- Pandas
- Numpy
- InfluxDB (Time Series Database)
- Websockets
- Redis
- Docker
- Grafana
- Telegraf

