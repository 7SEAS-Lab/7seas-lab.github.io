---
title: "Taking scientific Python beyond a single device"
description: "How distributed tensors connect familiar data analysis workflows with high-performance computing."
date: 2026-10-14T10:00:00Z
category: Open source
---

Scientific datasets can grow beyond the memory of a single machine. Even when they fit, an analysis may require more computational capacity than one device can provide.

## A familiar interface to distributed computation

[HeAT](/research/heat/) provides distributed tensors and data analytics tools in Python, with GPU and MPI acceleration. It offers a NumPy-like interface for working with data across multiple processes.

Distributed arrays bring additional design decisions: how data is partitioned, which operations require communication, and how memory and work are shared. A useful abstraction makes those decisions accessible while allowing scientific workflows to scale.

## From methods to reusable tools

Reusable research software helps connect a computational method to a wider community. Documentation, examples, and open development give other researchers a starting point for testing whether a tool meets their needs.

See the [HeAT repository](https://github.com/helmholtz-analytics/heat) for installation instructions, examples, and current features. The [original framework paper](https://doi.org/10.1109/BigData50022.2020.9378050) describes its distributed data analytics approach.
