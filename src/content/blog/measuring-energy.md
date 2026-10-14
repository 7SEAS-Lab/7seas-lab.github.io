---
title: "Making the energy cost of computation visible"
description: "A research perspective on why measurement belongs alongside accuracy and performance when evaluating scientific AI."
date: 2026-10-14T11:00:00Z
category: Research perspective
---

An AI method can be evaluated in many ways: prediction quality, training time, memory requirements, or the resources required to run it. Energy consumption adds another useful dimension to that picture.

## Start with measurement

To investigate efficiency, researchers need a way to observe the resource cost of their applications. [Perun](/research/perun/) is an open-source Python package for measuring application energy consumption.

Measurements can support comparisons between computational choices. They also make assumptions and experimental conditions easier to discuss. Any interpretation needs to account for the hardware, workload, and measurement setup.

## Efficiency as a scientific question

For scientific AI, useful performance involves the relationship between computational effort and scientific value. Measurement provides evidence for investigating that relationship and identifying where improvements may be possible.

Explore the [Perun repository](https://github.com/Helmholtz-AI-Energy/perun) for the software, supported measurement approaches, and current documentation. This perspective is based on the project's public documentation.
