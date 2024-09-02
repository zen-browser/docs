---
title: Choosing between the generic and optimized build
aliases:
  - Choosing between the generic and optimized build
---

This [[guides/index|guide]] provides an overview of the differences between the generic and optimized builds of Zen, so you can make an informed decision on which version to use.

> [!info]
> This guide only applies to the Linux and Windows versions of Zen.

## Supported CPUs for optimized builds

> [!warning]
> If your computer's processor doesn't belong to any of the following processor families, the optimized version won't work on your device. Please install the generic version instead.

### AMD

* AMD Family 15h (Excavator)
* AMD Family 17h (Zen, Zen+, Zen 2)
* AMD Family 19h (Zen 3)
* AMD Family 19h (Zen 4 / Zen 4c)
* AMD Family 1Ah (Zen 5 / Zen 5c)

### Intel

* Intel 4th Gen Core (Haswell)
* Intel 5th Gen Core (Broadwell)
* Intel 6th Gen Core (Skylake)
* Intel 7th Gen Core (Kaby Lake)
* Intel 8/9th Gen Core (Coffee Lake)
* Intel 10th Gen Core (Comet Lake)
* Intel 12th Gen (Alder Lake)
* Intel 13th Gen (Raptor Lake)
* Intel 14th Gen (Raptor Lake Refresh)
* Intel 15th Gen (Lunar / Arrow Lake)
* Intel 6th Gen Core (Skylake X)
* Intel 8th Gen Core i3 (Cannon Lake)
* Intel Xeon / 10th Gen Core (Ice Lake)
* Intel Xeon (Cascade Lake)
* Intel Xeon (Cooper Lake)
* Intel 3rd Gen 10nm++ (Tiger Lake)
* Intel 4th Gen 10nm++ (Sapphire Rapids)
* Intel 5th Gen 10nm++ (Emerald Rapids)
* Intel 11th Gen (Rocket Lake)

> [!hint] Which family does my CPU belong to?
> A useful website to learn more about your computer's processor is [WikiChip](https://en.wikichip.org/wiki/WikiChip)

## Differences between the optimized and generic builds

The optimized version of Zen leverages [Advanced Vector Extensions 2](https://wikipedia.org/wiki/Advanced_Vector_Extensions#Advanced_Vector_Extensions_2) (AVX2), a CPU instruction set that enhances performance for certain computational tasks. This instruction set is only available on modern processors.